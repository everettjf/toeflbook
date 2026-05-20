/* word-runner — vocab. Endless-runner: steer the orb into the door whose
   meaning matches the word. 2D canvas reference engine.
   data: { items:[{word, correct, options:[...]}] } */
TDG.engine("word-runner", {
  uses: "vocab", label: "Word Runner",
  play(ctx) {
    const { stage, data, hud, shuffle, clamp, rand } = ctx;
    const items = data.items; const s = ctx.session || {};
    let idx = s.i || 0, correct = s.correct || 0, combo = 0;

    const C = ctx.canvas(440); const g = C.ctx;
    stage.insertAdjacentHTML("beforeend", '<p class="hint" style="margin-top:10px">⬅️ ➡️ Arrow keys / A·D / drag — steer into the correct meaning. Each door rushes at you.</p>');

    let px = 0;                 // player x (set on first frame)
    let wallY = -160;           // top of the door wall
    let speed = 150;            // px/sec, ramps up
    let doors = [], word = "", locked = false, flash = 0, flashOk = false, parts = [];
    const DOOR_H = 120;

    function spawn() {
      const it = items[idx];
      word = it.word;
      const opts = shuffle(it.options.slice(0, 4));
      const n = opts.length, w = C.w / n;
      doors = opts.map((o, k) => ({ text: o, x: k * w, w, correct: o === it.correct }));
      wallY = -DOOR_H - 20; locked = false;
    }
    function burst(x, y, ok) { for (let k = 0; k < 18; k++) parts.push({ x, y, vx: rand(-120, 120), vy: rand(-180, -20), life: 1, ok }); }

    spawn();
    px = C.w / 2;

    // input
    const keys = {};
    const kd = e => { keys[e.key] = true; }, ku = e => { keys[e.key] = false; };
    window.addEventListener("keydown", kd); window.addEventListener("keyup", ku);
    let dragging = false;
    const xfromEvent = e => { const r = C.cv.getBoundingClientRect(); const cx = (e.touches ? e.touches[0].clientX : e.clientX) - r.left; return clamp(cx, 12, C.w - 12); };
    C.cv.addEventListener("pointerdown", e => { dragging = true; px = xfromEvent(e); });
    C.cv.addEventListener("pointermove", e => { if (dragging) px = xfromEvent(e); });
    window.addEventListener("pointerup", () => { dragging = false; });

    const stop = ctx.raf((dt) => {
      // move
      if (keys["ArrowLeft"] || keys["a"] || keys["A"]) px -= 300 * dt;
      if (keys["ArrowRight"] || keys["d"] || keys["D"]) px += 300 * dt;
      px = clamp(px, 12, C.w - 12);
      if (!locked) wallY += speed * dt;
      const playerY = C.h - 46;

      // collision when wall front reaches the player line
      if (!locked && wallY + DOOR_H >= playerY) {
        locked = true;
        const door = doors.find(d => px >= d.x && px < d.x + d.w) || doors[0];
        const ok = !!door.correct;
        flash = 0.5; flashOk = ok; burst(px, playerY, ok);
        if (ok) { correct++; combo++; ctx.sound("good"); hud.setCombo(combo); hud.pop("+" + (1 + Math.floor(combo / 2)), ""); }
        else { combo = 0; ctx.sound("bad"); hud.setCombo(0); hud.pop("✗", "bad"); }
        hud.setScore(correct + "/" + items.length);
        setTimeout(() => {
          idx++; ctx.save({ i: idx, correct });
          if (idx >= items.length) { stop(); cleanup(); ctx.done((correct / items.length) * 100, correct + " / " + items.length + " doors aced."); return; }
          speed = Math.min(260, speed + 12); spawn();
        }, 620);
      }

      // ---- draw ----
      g.clearRect(0, 0, C.w, C.h);
      // moving track lines
      g.strokeStyle = "rgba(124,140,255,.12)"; g.lineWidth = 2;
      const off = (performance.now() / 6) % 40;
      for (let y = -40 + off; y < C.h; y += 40) { g.beginPath(); g.moveTo(0, y); g.lineTo(C.w, y); g.stroke(); }

      // word banner
      g.fillStyle = "#22d3ee"; g.font = "900 30px -apple-system, sans-serif"; g.textAlign = "center";
      g.shadowColor = "rgba(34,211,238,.6)"; g.shadowBlur = 18;
      g.fillText(word, C.w / 2, 40); g.shadowBlur = 0;
      g.fillStyle = "#9aa0c8"; g.font = "600 12px sans-serif"; g.fillText("which meaning?", C.w / 2, 60);

      // doors
      doors.forEach(d => {
        const gx = d.x + 4, gw = d.w - 8;
        g.fillStyle = locked && d.correct ? "rgba(52,211,153,.25)" : "rgba(34,40,72,.92)";
        g.strokeStyle = locked && d.correct ? "#34d399" : "#2c3163";
        g.lineWidth = 2; roundRect(g, gx, wallY, gw, DOOR_H, 12); g.fill(); g.stroke();
        g.fillStyle = "#f2f4ff"; g.font = "600 13px sans-serif"; g.textAlign = "center";
        wrapText(g, d.text, d.x + d.w / 2, wallY + 26, d.w - 16, 17);
      });

      // player orb
      const pulse = 1 + Math.sin(performance.now() / 200) * 0.08;
      g.beginPath(); g.arc(px, playerY, 16 * pulse, 0, Math.PI * 2);
      const grd = g.createRadialGradient(px, playerY, 2, px, playerY, 20);
      grd.addColorStop(0, "#ffffff"); grd.addColorStop(1, "#6c8cff");
      g.fillStyle = grd; g.shadowColor = "#6c8cff"; g.shadowBlur = 22; g.fill(); g.shadowBlur = 0;

      // particles
      parts.forEach(p => { p.x += p.vx * dt; p.y += p.vy * dt; p.vy += 380 * dt; p.life -= dt * 1.4; });
      parts = parts.filter(p => p.life > 0);
      parts.forEach(p => { g.globalAlpha = Math.max(0, p.life); g.fillStyle = p.ok ? "#34d399" : "#fb7185"; g.fillRect(p.x, p.y, 4, 4); });
      g.globalAlpha = 1;

      // flash
      if (flash > 0) { flash -= dt; g.fillStyle = (flashOk ? "rgba(52,211,153," : "rgba(251,113,133,") + (flash * 0.5) + ")"; g.fillRect(0, 0, C.w, C.h); }
    });

    function cleanup() { C.dispose(); window.removeEventListener("keydown", kd); window.removeEventListener("keyup", ku); }
    function roundRect(c, x, y, w, h, r) { c.beginPath(); c.moveTo(x + r, y); c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r); c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r); c.closePath(); }
    function wrapText(c, text, x, y, maxW, lh) {
      const words = text.split(" "); let line = "", yy = y;
      for (const w of words) { const t = line + w + " "; if (c.measureText(t).width > maxW && line) { c.fillText(line.trim(), x, yy); line = w + " "; yy += lh; } else line = t; }
      c.fillText(line.trim(), x, yy);
    }
  },
});
