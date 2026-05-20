/* word-cascade — vocab. Falling-objects arcade: meaning cards rain from the
   top; click/tap the card whose text matches the word before the correct one
   slips past the bottom. 2D canvas engine.
   data: { items:[{word, correct, options:[...]}] } */
TDG.engine("word-cascade", {
  uses: "vocab", label: "Word Cascade",
  play(ctx) {
    const { stage, data, hud, shuffle, clamp, rand } = ctx;
    const items = data.items; const s = ctx.session || {};
    let idx = s.i || 0, correct = s.correct || 0, combo = 0;

    const C = ctx.canvas(440); const g = C.ctx;
    stage.insertAdjacentHTML("beforeend", '<p class="hint" style="margin-top:10px">👆 Tap / click the falling card with the correct meaning before it drops off the bottom.</p>');

    const COLORS = ["#6c8cff", "#22d3ee", "#f0a23c", "#a78bfa", "#34d399", "#fb7185"];
    const CARD_W = 150, CARD_H = 64, TOP = 78;
    let word = "", cards = [], locked = false, flash = 0, flashOk = false, parts = [];
    let baseSpeed = 60;

    function spawn() {
      const it = items[idx];
      word = it.word;
      const opts = shuffle(it.options.slice(0, 4));
      const cols = shuffle(COLORS).slice(0, opts.length);
      const lane = Math.max(20, (C.w - CARD_W) / Math.max(1, opts.length - 1));
      cards = opts.map((o, k) => ({
        text: o,
        correct: o === it.correct,
        x: clamp(k * lane, 8, Math.max(8, C.w - CARD_W - 8)),
        y: TOP - rand(CARD_H + 30, (k + 1) * 90 + CARD_H),
        vy: baseSpeed + rand(-12, 18) + k * 6,
        color: cols[k],
        dead: false, shake: 0,
      }));
      locked = false;
    }
    function burst(x, y, ok) { for (let k = 0; k < 18; k++) parts.push({ x, y, vx: rand(-120, 120), vy: rand(-180, -20), life: 1, ok }); }

    function advance(ok) {
      locked = true;
      flash = 0.5; flashOk = ok;
      hud.setScore(correct + "/" + items.length);
      setTimeout(() => {
        idx++; ctx.save({ i: idx, correct });
        if (idx >= items.length) { stop(); cleanup(); ctx.done((correct / items.length) * 100, correct + " / " + items.length + " caught."); return; }
        baseSpeed = Math.min(150, baseSpeed + 8); spawn();
      }, 560);
    }

    spawn();

    // ---- input ----
    const ptFromEvent = e => {
      const r = C.cv.getBoundingClientRect();
      const t = e.touches ? e.touches[0] : e;
      return { x: t.clientX - r.left, y: t.clientY - r.top };
    };
    const onDown = e => {
      if (locked) return;
      const p = ptFromEvent(e);
      for (const c of cards) {
        if (c.dead) continue;
        if (p.x >= c.x && p.x <= c.x + CARD_W && p.y >= c.y && p.y <= c.y + CARD_H) {
          if (c.correct) {
            correct++; combo++; ctx.sound("good"); hud.setCombo(combo);
            hud.pop("+" + (1 + Math.floor(combo / 2)), "");
            burst(c.x + CARD_W / 2, c.y + CARD_H / 2, true);
            advance(true);
          } else {
            combo = 0; ctx.sound("bad"); hud.setCombo(0); hud.pop("✗", "bad");
            c.dead = true; c.shake = 0.4; flash = 0.35; flashOk = false;
          }
          break;
        }
      }
    };
    C.cv.addEventListener("pointerdown", onDown);

    const stop = ctx.raf((dt) => {
      // move + miss detection
      if (!locked) {
        for (const c of cards) {
          if (c.dead) continue;
          c.y += c.vy * dt;
          if (c.shake > 0) c.shake -= dt;
          if (c.y > C.h && c.correct) {
            combo = 0; ctx.sound("bad"); hud.setCombo(0); hud.pop("missed", "bad");
            advance(false); break;
          }
        }
      }

      // ---- draw ----
      g.clearRect(0, 0, C.w, C.h);
      // subtle falling streaks
      g.strokeStyle = "rgba(124,140,255,.10)"; g.lineWidth = 2;
      const off = (performance.now() / 5) % 44;
      for (let y = -44 + off; y < C.h; y += 44) { g.beginPath(); g.moveTo(0, y); g.lineTo(C.w, y); g.stroke(); }

      // word banner
      g.textAlign = "center";
      g.fillStyle = "#22d3ee"; g.font = "900 30px -apple-system, sans-serif";
      g.shadowColor = "rgba(34,211,238,.6)"; g.shadowBlur = 18;
      g.fillText(word, C.w / 2, 40); g.shadowBlur = 0;
      g.fillStyle = "#9aa0c8"; g.font = "600 12px sans-serif";
      g.fillText("catch the matching meaning", C.w / 2, 60);
      // item counter
      g.fillStyle = "#7c84b0"; g.font = "700 12px sans-serif"; g.textAlign = "right";
      g.fillText("Item " + Math.min(idx + 1, items.length) + "/" + items.length, C.w - 10, 20);

      // cards
      g.textAlign = "center";
      cards.forEach(c => {
        if (c.dead) return;
        const sx = c.x + (c.shake > 0 ? Math.sin(performance.now() / 22) * 5 : 0);
        g.fillStyle = c.color + "33";
        g.strokeStyle = c.color; g.lineWidth = 2;
        roundRect(g, sx, c.y, CARD_W, CARD_H, 14); g.fill(); g.stroke();
        g.fillStyle = "#f2f4ff"; g.font = "600 13px sans-serif";
        wrapText(g, c.text, sx + CARD_W / 2, c.y + 24, CARD_W - 18, 16);
      });

      // particles
      parts.forEach(p => { p.x += p.vx * dt; p.y += p.vy * dt; p.vy += 380 * dt; p.life -= dt * 1.4; });
      parts = parts.filter(p => p.life > 0);
      parts.forEach(p => { g.globalAlpha = Math.max(0, p.life); g.fillStyle = p.ok ? "#34d399" : "#fb7185"; g.fillRect(p.x, p.y, 4, 4); });
      g.globalAlpha = 1;

      // flash
      if (flash > 0) { flash -= dt; g.fillStyle = (flashOk ? "rgba(52,211,153," : "rgba(251,113,133,") + (flash * 0.5) + ")"; g.fillRect(0, 0, C.w, C.h); }
    });

    function cleanup() { C.dispose(); C.cv.removeEventListener("pointerdown", onDown); }
    function roundRect(c, x, y, w, h, r) { c.beginPath(); c.moveTo(x + r, y); c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r); c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r); c.closePath(); }
    function wrapText(c, text, x, y, maxW, lh) {
      const words = text.split(" "); let line = "", yy = y;
      for (const w of words) { const t = line + w + " "; if (c.measureText(t).width > maxW && line) { c.fillText(line.trim(), x, yy); line = w + " "; yy += lh; } else line = t; }
      c.fillText(line.trim(), x, yy);
    }
  },
});
