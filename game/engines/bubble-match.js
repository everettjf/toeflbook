/* bubble-match — vocab. Arcade bubble-popper: pop the floating bubble whose
   meaning matches the target word. 2D canvas engine.
   data: { items:[{word, correct, options:[...]}] } */
TDG.engine("bubble-match", {
  uses: "vocab", label: "Bubble Match",
  play(ctx) {
    const { stage, data, hud, shuffle, clamp, rand } = ctx;
    const items = data.items; const s = ctx.session || {};
    let idx = s.i || 0, correct = s.correct || 0, combo = 0;

    const C = ctx.canvas(440); const g = C.ctx;
    stage.insertAdjacentHTML("beforeend", '<p class="hint" style="margin-top:10px">🫧 Tap the bubble whose meaning matches the word up top. Pick the right one before they drift away.</p>');

    const COLORS = ["#6c8cff", "#22d3ee", "#fbbf24", "#fb7185", "#34d399", "#c084fc"];
    let word = "", bubbles = [], parts = [], locked = false, flash = 0, flashOk = false;
    let speed = 26;            // upward drift px/sec, ramps up slightly each item

    function spawn() {
      const it = items[idx];
      word = it.word;
      const opts = shuffle(it.options.slice(0, 4));
      const cols = shuffle(COLORS).slice(0, opts.length);
      bubbles = opts.map((o, k) => {
        const r = 56;
        return {
          text: o, correct: o === it.correct, color: cols[k], r,
          x: rand(r + 8, C.w - r - 8),
          y: C.h + r + k * 70,                 // start below, drift up
          vx: rand(-22, 22),
          phase: rand(0, Math.PI * 2),         // bob phase
          popped: false,
        };
      });
      locked = false;
    }
    function burst(x, y, col, ok) { for (let k = 0; k < 22; k++) parts.push({ x, y, vx: rand(-160, 160), vy: rand(-200, -30), life: 1, col, ok }); }

    spawn();

    // input — map pointer to canvas coords, hit-test bubbles
    const pickAt = (e) => {
      const r = C.cv.getBoundingClientRect();
      const cx = (e.touches ? e.touches[0].clientX : e.clientX) - r.left;
      const cy = (e.touches ? e.touches[0].clientY : e.clientY) - r.top;
      // scale in case CSS size differs from logical size
      const sx = C.w / r.width, sy = C.h / r.height;
      const mx = cx * sx, my = cy * sy;
      let hit = null;
      for (const b of bubbles) { if (b.popped) continue; const dx = mx - b.x, dy = my - b.y; if (dx * dx + dy * dy <= b.r * b.r) hit = b; }
      return hit;
    };
    const onDown = (e) => {
      if (locked) return;
      const b = pickAt(e);
      if (!b) return;
      e.preventDefault();
      locked = true;
      const ok = !!b.correct;
      flash = 0.5; flashOk = ok;
      if (ok) {
        b.popped = true; burst(b.x, b.y, b.color, true);
        correct++; combo++; ctx.sound("good"); hud.setCombo(combo);
        hud.setScore(correct + "/" + items.length); hud.pop("+" + (1 + Math.floor(combo / 2)), "");
      } else {
        combo = 0; ctx.sound("bad"); hud.setCombo(0); hud.pop("✗", "bad");
        hud.setScore(correct + "/" + items.length);
      }
      setTimeout(() => {
        idx++; ctx.save({ i: idx, correct });
        if (idx >= items.length) { stop(); cleanup(); ctx.done((correct / items.length) * 100, correct + " / " + items.length + " bubbles popped."); return; }
        speed = Math.min(70, speed + 4); spawn();
      }, 640);
    };
    C.cv.addEventListener("pointerdown", onDown);

    const stop = ctx.raf((dt, now) => {
      // ---- update ----
      if (!locked) {
        bubbles.forEach(b => {
          if (b.popped) return;
          b.y -= speed * dt;
          b.x += b.vx * dt;
          // bounce off side walls
          if (b.x < b.r + 4) { b.x = b.r + 4; b.vx = Math.abs(b.vx); }
          if (b.x > C.w - b.r - 4) { b.x = C.w - b.r - 4; b.vx = -Math.abs(b.vx); }
          // wrap when fully above the top, keeping it in play
          if (b.y < -b.r) b.y = C.h + b.r;
        });
      }

      // ---- draw ----
      g.clearRect(0, 0, C.w, C.h);
      // subtle drifting bg lines
      g.strokeStyle = "rgba(124,140,255,.10)"; g.lineWidth = 2;
      const off = (now / 18) % 44;
      for (let y = C.h - off; y > -44; y -= 44) { g.beginPath(); g.moveTo(0, y); g.lineTo(C.w, y); g.stroke(); }

      // bubbles
      bubbles.forEach(b => {
        if (b.popped) return;
        const bob = Math.sin(now / 380 + b.phase) * 6;
        const cy = b.y + bob;
        const reveal = locked && b.correct;
        const grd = g.createRadialGradient(b.x - b.r * 0.3, cy - b.r * 0.3, 4, b.x, cy, b.r);
        grd.addColorStop(0, "rgba(255,255,255,.85)");
        grd.addColorStop(0.25, b.color);
        grd.addColorStop(1, "rgba(10,14,40,.55)");
        g.beginPath(); g.arc(b.x, cy, b.r, 0, Math.PI * 2);
        g.fillStyle = grd;
        g.shadowColor = reveal ? "#34d399" : b.color; g.shadowBlur = reveal ? 28 : 14;
        g.fill(); g.shadowBlur = 0;
        g.lineWidth = reveal ? 4 : 2; g.strokeStyle = reveal ? "#34d399" : "rgba(255,255,255,.5)"; g.stroke();
        // label
        g.fillStyle = "#0c1030"; g.font = "700 13px -apple-system, sans-serif"; g.textAlign = "center"; g.textBaseline = "middle";
        wrapText(g, b.text, b.x, cy, b.r * 1.7, 16);
        g.textBaseline = "alphabetic";
      });

      // particles
      parts.forEach(p => { p.x += p.vx * dt; p.y += p.vy * dt; p.vy += 360 * dt; p.life -= dt * 1.5; });
      parts = parts.filter(p => p.life > 0);
      parts.forEach(p => { g.globalAlpha = Math.max(0, p.life); g.fillStyle = p.ok ? p.col : "#fb7185"; g.beginPath(); g.arc(p.x, p.y, 4, 0, Math.PI * 2); g.fill(); });
      g.globalAlpha = 1;

      // word banner (drawn on canvas, cyan glow)
      g.fillStyle = "rgba(8,11,30,.78)"; g.fillRect(0, 0, C.w, 70);
      g.fillStyle = "#22d3ee"; g.font = "900 30px -apple-system, sans-serif"; g.textAlign = "center"; g.textBaseline = "alphabetic";
      g.shadowColor = "rgba(34,211,238,.6)"; g.shadowBlur = 18;
      g.fillText(word, C.w / 2, 38); g.shadowBlur = 0;
      g.fillStyle = "#9aa0c8"; g.font = "600 12px sans-serif";
      g.fillText("pop the matching meaning", C.w / 2, 58);
      // progress text (top-left)
      g.fillStyle = "#cdd3ff"; g.font = "700 12px sans-serif"; g.textAlign = "left";
      g.fillText("Item " + Math.min(idx + 1, items.length) + " / " + items.length, 12, 20);

      // flash
      if (flash > 0) { flash -= dt; g.fillStyle = (flashOk ? "rgba(52,211,153," : "rgba(251,113,133,") + (flash * 0.45) + ")"; g.fillRect(0, 0, C.w, C.h); }
    });

    function cleanup() { C.dispose(); C.cv.removeEventListener("pointerdown", onDown); }
    function wrapText(c, text, x, y, maxW, lh) {
      const words = text.split(" "); const lines = []; let line = "";
      for (const w of words) { const t = line + w + " "; if (c.measureText(t).width > maxW && line) { lines.push(line.trim()); line = w + " "; } else line = t; }
      lines.push(line.trim());
      const startY = y - ((lines.length - 1) * lh) / 2;
      lines.forEach((ln, k) => c.fillText(ln, x, startY + k * lh));
    }
  },
});
