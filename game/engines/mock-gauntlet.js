/* mock-gauntlet — passage. Boss-battle exam gauntlet for mock-test days.
   Answer exam questions to drain the Exam Boss's HP; wrong answers let it hit
   back. Player HP clamps at 1 so the day always completes — score = correct/total.
   Canvas boss + animated HP bars, DOM question card below.
   data: { items:[{passage, question, options, correct, why}] } */
TDG.engine("mock-gauntlet", {
  uses: "passage", label: "Mock Gauntlet",
  play(ctx) {
    const { stage, data, hud, esc, shuffle, clamp, rand, sound } = ctx;
    const items = data.items; const s = ctx.session || {};
    let i = s.i || 0, correct = s.correct || 0, combo = 0;
    const total = items.length;
    const PLAYER_MAX = 5;
    const dmgPer = 100 / total;        // boss HP drained per correct hit

    // animated state: displayed vs target HP (0..100 boss, 0..PLAYER_MAX player)
    let bossHP = clamp(100 - correct * dmgPer, 0, 100), bossHPShown = bossHP;
    let playerHP = PLAYER_MAX, playerHPShown = PLAYER_MAX;
    let bob = 0, shake = 0, flash = 0, flashOk = false, parts = [], bossHurt = 0;

    // ---- canvas boss ----
    const C = ctx.canvas(220); const g = C.ctx;
    stage.insertAdjacentHTML("beforeend", '<div id="qcard"></div>');
    const qcard = document.getElementById("qcard");

    function burst(x, y, ok) {
      for (let k = 0; k < 22; k++)
        parts.push({ x, y, vx: rand(-160, 160), vy: rand(-220, -20), life: 1, ok });
    }
    function roundRect(c, x, y, w, h, r) {
      r = Math.min(r, h / 2, w / 2);
      c.beginPath(); c.moveTo(x + r, y);
      c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r);
      c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r); c.closePath();
    }

    const stop = ctx.raf((dt, now) => {
      bob += dt;
      bossHPShown += (bossHP - bossHPShown) * Math.min(1, dt * 6);
      playerHPShown += (playerHP - playerHPShown) * Math.min(1, dt * 8);
      if (shake > 0) shake -= dt;
      if (flash > 0) flash -= dt;
      if (bossHurt > 0) bossHurt -= dt;

      g.clearRect(0, 0, C.w, C.h);
      const sx = shake > 0 ? rand(-shake * 22, shake * 22) : 0;
      const sy = shake > 0 ? rand(-shake * 22, shake * 22) : 0;
      g.save(); g.translate(sx, sy);

      // ---- boss creature (menacing orb) ----
      const cx = C.w / 2, cy = 96 + Math.sin(bob * 2) * 6;
      const r = 46 + Math.sin(bob * 3) * 3;
      const hurt = bossHurt > 0;
      const grd = g.createRadialGradient(cx, cy - 10, 6, cx, cy, r + 18);
      grd.addColorStop(0, hurt ? "#fff" : "#ff9ec4");
      grd.addColorStop(0.5, hurt ? "#fca5a5" : "#e11d8f");
      grd.addColorStop(1, "#6d0a4e");
      g.beginPath(); g.arc(cx, cy, r, 0, Math.PI * 2);
      g.fillStyle = grd; g.shadowColor = hurt ? "#fff" : "#ff3d9a";
      g.shadowBlur = 30 + Math.sin(bob * 4) * 8; g.fill(); g.shadowBlur = 0;
      // spikes
      g.strokeStyle = "#6d0a4e"; g.lineWidth = 5;
      for (let a = 0; a < 8; a++) {
        const ang = a / 8 * Math.PI * 2 + bob * 0.4;
        g.beginPath();
        g.moveTo(cx + Math.cos(ang) * (r - 4), cy + Math.sin(ang) * (r - 4));
        g.lineTo(cx + Math.cos(ang) * (r + 12), cy + Math.sin(ang) * (r + 12));
        g.stroke();
      }
      // eyes
      g.fillStyle = "#1a0212";
      g.beginPath(); g.arc(cx - 15, cy - 6, 8, 0, Math.PI * 2); g.fill();
      g.beginPath(); g.arc(cx + 15, cy - 6, 8, 0, Math.PI * 2); g.fill();
      g.fillStyle = hurt ? "#fff" : "#ffd166";
      g.beginPath(); g.arc(cx - 13, cy - 8, 3, 0, Math.PI * 2); g.fill();
      g.beginPath(); g.arc(cx + 17, cy - 8, 3, 0, Math.PI * 2); g.fill();
      // mouth
      g.strokeStyle = "#1a0212"; g.lineWidth = 4; g.beginPath();
      g.arc(cx, cy + 18, 14, 0, Math.PI, false); g.stroke();
      // label
      g.fillStyle = "#9aa0c8"; g.font = "700 11px -apple-system, sans-serif";
      g.textAlign = "center"; g.fillText("EXAM BOSS", cx, cy - r - 16);

      // ---- boss HP bar ----
      const bw = Math.min(C.w - 40, 420), bx = (C.w - bw) / 2, by = 14;
      g.fillStyle = "rgba(20,24,48,.9)"; roundRect(g, bx, by, bw, 16, 8); g.fill();
      const hpw = Math.max(0, bw * bossHPShown / 100);
      const bg = g.createLinearGradient(bx, 0, bx + bw, 0);
      bg.addColorStop(0, "#ff3d9a"); bg.addColorStop(1, "#ff9ec4");
      g.fillStyle = bg; if (hpw > 1) { roundRect(g, bx, by, hpw, 16, 8); g.fill(); }
      g.fillStyle = "#f2f4ff"; g.font = "700 11px sans-serif"; g.textAlign = "center";
      g.fillText("Boss HP " + Math.max(0, Math.round(bossHPShown)) + "%", C.w / 2, by + 12);

      // ---- player HP hearts ----
      g.font = "16px sans-serif"; g.textAlign = "left";
      const hearts = Math.round(playerHPShown);
      let hs = "";
      for (let k = 0; k < PLAYER_MAX; k++) hs += k < hearts ? "❤️" : "🖤";
      g.fillText("You " + hs, bx, C.h - 12);
      g.textAlign = "right";
      g.fillStyle = "#9aa0c8"; g.font = "700 11px sans-serif";
      g.fillText("Hit " + Math.min(i + 1, total) + " / " + total, bx + bw, C.h - 14);

      // ---- particles ----
      parts.forEach(p => { p.x += p.vx * dt; p.y += p.vy * dt; p.vy += 420 * dt; p.life -= dt * 1.5; });
      parts = parts.filter(p => p.life > 0);
      parts.forEach(p => {
        g.globalAlpha = Math.max(0, p.life);
        g.fillStyle = p.ok ? "#ffd166" : "#fb7185";
        g.fillRect(p.x, p.y, 4, 4);
      });
      g.globalAlpha = 1;
      g.restore();

      // ---- flash overlay ----
      if (flash > 0) {
        g.fillStyle = (flashOk ? "rgba(255,209,102," : "rgba(251,113,133,") + (flash * 0.5) + ")";
        g.fillRect(0, 0, C.w, C.h);
      }
    });

    function render() {
      if (i >= total) return; // finish handled in next()
      const it = items[i];
      const order = shuffle(it.options.map((o, idx) => ({ o, idx })));
      qcard.innerHTML =
        '<div class="card"><div class="hint">⚔️ Land a hit — answer correctly to damage the boss. Miss and it strikes back.</div>' +
          (it.passage ? '<p style="font-size:16px;line-height:1.6;margin:12px 0;padding:12px;border-radius:10px;background:rgba(124,140,255,.07)">' + esc(it.passage) + "</p>" : "") +
          '<div class="prompt-big" style="font-size:19px">' + esc(it.question) + "</div>" +
          order.map(x => '<button class="choice" data-i="' + x.idx + '">' + esc(x.o) + "</button>").join("") +
          '<div id="fb"></div></div>';
      const btns = qcard.querySelectorAll(".choice");
      btns.forEach(b => b.onclick = () => {
        btns.forEach(x => x.disabled = true);
        const chosen = +b.dataset.i, ok = chosen === it.correct;
        if (ok) {
          correct++; combo++;
          bossHP = clamp(bossHP - dmgPer, 0, 100);
          bossHurt = 0.5; flash = 0.5; flashOk = true;
          burst(C.w / 2, 96, true);
          sound("good"); hud.setCombo(combo); hud.pop("-" + Math.round(dmgPer) + " HP", "");
          b.classList.add("correct");
        } else {
          combo = 0;
          playerHP = clamp(playerHP - 1, 1, PLAYER_MAX); // clamp at 1: never ends run
          shake = 0.5; flash = 0.5; flashOk = false;
          burst(C.w / 2, C.h - 20, false);
          sound("bad"); hud.setCombo(0); hud.pop("✗ -1 ❤️", "bad");
          b.classList.add("wrong");
          btns.forEach(x => { if (+x.dataset.i === it.correct) x.classList.add("correct"); });
        }
        hud.setScore(correct + "/" + total);
        const beaten = bossHP <= 0.01;
        document.getElementById("fb").innerHTML =
          '<div class="fb ' + (ok ? "good" : "bad") + '">' +
            (ok ? (beaten ? "Boss defeated! " : "Hit landed! ") : "Blocked — boss strikes! ") +
            esc(it.why) + "</div>" +
          '<div class="btnrow" style="margin-top:12px"><button class="btn" id="next">' +
            (i + 1 >= total ? "Finish ⚔️" : "Next →") + "</button></div>";
        document.getElementById("next").onclick = next;
      });
    }

    function next() {
      i++; ctx.save({ i, correct });
      if (i >= total) {
        stop(); C.dispose(); qcard.innerHTML = "";
        return ctx.done((correct / total) * 100,
          (correct === total ? "Flawless victory! " : "") + correct + " / " + total + " hits landed.");
      }
      render();
    }

    hud.setScore(correct + "/" + total);
    render();
  },
});
