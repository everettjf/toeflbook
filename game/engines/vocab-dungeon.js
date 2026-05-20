/* vocab-dungeon — passage. Roguelike / NES dungeon crawler: each item is a
   ROOM. Walk the blocky hero to the doorway whose answer is correct to slay
   the monster guarding the exit and descend. Forgiving — wrong answers cost a
   heart but never end the run.
   data: { items:[{passage, question, options:[...], correct, why}] } */
TDG.engine("vocab-dungeon", {
  uses: "passage", label: "Vocab Dungeon",
  play(ctx) {
    const { stage, data, hud, esc, shuffle, clamp, rand, sound } = ctx;
    const items = data.items; const s = ctx.session || {};
    let idx = s.i || 0, correct = s.correct || 0, combo = 0, hp = 3;

    const C = ctx.canvas(480); const g = C.ctx;
    stage.insertAdjacentHTML("beforeend",
      '<p class="hint" style="margin-top:10px">⬅️ ➡️ / A·D move the hero · Enter to enter the lit door · or just click a door. Pick the right answer to slay the monster.</p>');

    // palette (NES-ish)
    const COL = { wall: "#2a2540", floor: "#15122a", floor2: "#1c1838", hero: "#7cf0c8",
      heroDk: "#34c79a", mon: "#fb5d6a", monDk: "#a02a3a", door: "#3a3360", doorLit: "#22d3ee",
      ok: "#34d399", bad: "#fb5d6a", txt: "#f2f4ff", dim: "#9aa0c8", gold: "#ffd166" };
    const PAD = 14;

    let doors = [], it = null, sel = 0, locked = false, monAlive = true;
    let flash = 0, flashOk = false, parts = [], whyText = "", shake = 0;
    let heroX = 0; const heroY = () => C.h - 70;

    function buildRoom() {
      it = items[idx];
      const order = shuffle(it.options.map((o, k) => ({ text: o, correct: k === it.correct })));
      const n = order.length, gap = 10, total = C.w - PAD * 2;
      const dw = (total - gap * (n - 1)) / n;
      doors = order.map((o, k) => ({ text: o.text, correct: o.correct,
        x: PAD + k * (dw + gap), w: dw }));
      sel = 0; locked = false; monAlive = true; whyText = "";
      heroX = C.w / 2; parts = [];
    }
    buildRoom();

    function burst(x, y, ok) {
      const c = ok ? COL.ok : COL.bad;
      for (let k = 0; k < 22; k++) parts.push({ x, y, vx: rand(-150, 150), vy: rand(-200, -30), life: 1, c });
    }

    function choose(k) {
      if (locked) return;
      locked = true; sel = k;
      const ok = !!doors[k].correct;
      flash = 0.55; flashOk = ok; whyText = (ok ? "Slain! " : "Missed. ") + it.why;
      burst(doors[k].x + doors[k].w / 2, heroY() - 10, ok);
      if (ok) {
        correct++; combo++; monAlive = false; sound("good");
        hud.setCombo(combo); hud.pop("+" + (1 + Math.floor(combo / 2)), "");
      } else {
        combo = 0; hp = Math.max(0, hp - 1); shake = 0.4; sound("bad");
        hud.setCombo(0); hud.pop("-♥", "bad");
        doors.forEach((d, di) => { if (d.correct) d.reveal = true; });
        if (hp <= 0) { hp = 1; hud.pop("you fell… revived", "bad"); } // never hard-block
      }
      hud.setScore(correct + "/" + items.length);
      setTimeout(() => {
        idx++; ctx.save({ i: idx, correct });
        if (idx >= items.length) {
          stop(); cleanup();
          ctx.done((correct / items.length) * 100, correct + " / " + items.length + " rooms cleared.");
          return;
        }
        buildRoom();
      }, 1100);
    }

    function doorAt(x) { return doors.findIndex(d => x >= d.x && x <= d.x + d.w); }

    // ---- input ----
    const keys = {};
    function kd(e) {
      if (["ArrowLeft", "ArrowRight", "Enter", " "].includes(e.key)) e.preventDefault();
      if (e.repeat) return;
      if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") keys.l = true;
      if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") keys.r = true;
      if (e.key === "Enter" || e.key === " ") choose(sel);
    }
    function ku(e) {
      if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") keys.l = false;
      if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") keys.r = false;
    }
    window.addEventListener("keydown", kd); window.addEventListener("keyup", ku);
    function ptr(e) { const r = C.cv.getBoundingClientRect(); return (e.touches ? e.touches[0].clientX : e.clientX) - r.left; }
    C.cv.addEventListener("pointerdown", e => {
      const x = ptr(e), d = doorAt(x);
      if (d >= 0) { sel = d; choose(d); }
    });

    // ---- helpers ----
    function px(g2, x, y, s, c) { g2.fillStyle = c; g2.fillRect(x, y, s, s); } // 1 pixel block
    function heart(g2, x, y, s, full) {
      g2.fillStyle = full ? COL.bad : "rgba(120,120,150,.4)";
      g2.fillRect(x, y + s, s * 5, s * 3);
      g2.fillRect(x + s, y, s * 1, s); g2.fillRect(x + s * 3, y, s * 1, s);
      g2.fillRect(x, y + s, s, s); g2.fillRect(x + s * 4, y + s, s, s);
      g2.fillRect(x + s, y + s * 4, s * 3, s);
      g2.fillRect(x + s * 2, y + s * 5, s, s);
    }
    function hero(g2, cx, by) {
      const p = 5; // pixel size
      const x0 = Math.round(cx - p * 2.5), y0 = by - p * 6;
      const bob = locked ? 0 : Math.round(Math.sin(performance.now() / 180) * 2);
      const y = y0 + bob;
      // helmet/head
      px(g2, x0 + p, y, p * 3, COL.heroDk);
      px(g2, x0 + p, y + p, p * 3, COL.hero);
      px(g2, x0 + p * 1.6, y + p, p, "#0a0814"); px(g2, x0 + p * 3, y + p, p, "#0a0814"); // eyes
      // body
      g2.fillStyle = COL.heroDk; g2.fillRect(x0, y + p * 2, p * 5, p * 3);
      g2.fillStyle = COL.hero; g2.fillRect(x0 + p, y + p * 2, p * 3, p * 3);
      // legs
      g2.fillStyle = COL.heroDk;
      g2.fillRect(x0 + p, y + p * 5, p, p); g2.fillRect(x0 + p * 3, y + p * 5, p, p);
      // sword
      g2.fillStyle = COL.gold; g2.fillRect(x0 + p * 5, y + p, p * 0.6, p * 3);
    }
    function monster(g2, cx, ty, alive, t) {
      const p = 6, x0 = Math.round(cx - p * 3), y0 = ty + (alive ? Math.round(Math.sin(t / 300) * 3) : 0);
      const body = alive ? COL.mon : "rgba(160,42,58,.25)";
      const dk = alive ? COL.monDk : "rgba(100,30,40,.2)";
      g2.fillStyle = dk; g2.fillRect(x0, y0 + p, p * 6, p * 4);
      g2.fillStyle = body; g2.fillRect(x0 + p, y0, p * 4, p * 5);
      // horns
      g2.fillStyle = dk; g2.fillRect(x0, y0, p, p); g2.fillRect(x0 + p * 5, y0, p, p);
      // eyes
      if (alive) { g2.fillStyle = COL.gold; g2.fillRect(x0 + p * 1.7, y0 + p * 1.5, p, p); g2.fillRect(x0 + p * 3.4, y0 + p * 1.5, p, p); }
      // legs
      g2.fillStyle = dk; g2.fillRect(x0 + p, y0 + p * 5, p, p); g2.fillRect(x0 + p * 4, y0 + p * 5, p, p);
    }

    // ---- main loop ----
    const stop = ctx.raf((dt, now) => {
      // move hero, snap selection to nearest door
      if (!locked) {
        if (keys.l) heroX -= 240 * dt;
        if (keys.r) heroX += 240 * dt;
        heroX = clamp(heroX, PAD + 10, C.w - PAD - 10);
        const d = doorAt(heroX); if (d >= 0) sel = d;
      }
      if (shake > 0) shake -= dt;
      const sx = shake > 0 ? rand(-4, 4) : 0, sy = shake > 0 ? rand(-3, 3) : 0;

      g.clearRect(0, 0, C.w, C.h);
      g.save(); g.translate(sx, sy);

      // floor tiles (checkerboard)
      const TS = 24;
      for (let y = 0; y < C.h; y += TS) for (let x = 0; x < C.w; x += TS) {
        g.fillStyle = ((x / TS + y / TS) % 2 === 0) ? COL.floor : COL.floor2;
        g.fillRect(x, y, TS, TS);
      }
      // wall border
      g.fillStyle = COL.wall;
      g.fillRect(0, 0, C.w, 8); g.fillRect(0, C.h - 8, C.w, 8);
      g.fillRect(0, 0, 8, C.h); g.fillRect(C.w - 8, 0, 8, C.h);

      // HUD inside canvas: hearts + depth + combo
      for (let h = 0; h < 3; h++) heart(g, 16 + h * 26, 16, 3, h < hp);
      g.fillStyle = COL.gold; g.font = "700 13px ui-monospace, Menlo, monospace"; g.textAlign = "right";
      g.fillText("DEPTH " + (idx + 1) + "/" + items.length, C.w - 16, 26);
      if (combo >= 2) { g.fillStyle = COL.doorLit; g.fillText("COMBO x" + combo, C.w - 16, 44); }

      // passage (if any) + question, wrapped
      let ty = 64;
      g.textAlign = "left"; g.textBaseline = "top";
      if (it.passage) {
        g.fillStyle = COL.dim; g.font = "12px ui-monospace, Menlo, monospace";
        ty = wrap(g, it.passage, 16, ty, C.w - 32, 16) + 8;
      }
      g.fillStyle = COL.txt; g.font = "700 15px ui-monospace, Menlo, monospace";
      ty = wrap(g, it.question, 16, ty, C.w - 32, 19) + 10;

      // monster guarding exit (top center)
      monster(g, C.w / 2, Math.min(ty + 6, C.h - 230), monAlive, now);

      // doors (bottom row)
      const dy = C.h - 132, dh = 64;
      g.textAlign = "center"; g.textBaseline = "alphabetic";
      doors.forEach((d, k) => {
        const lit = (k === sel && !locked) || d.reveal;
        const right = locked && d.correct, wrong = locked && k === sel && !d.correct;
        g.fillStyle = right ? "rgba(52,211,153,.25)" : wrong ? "rgba(251,93,106,.22)" : COL.door;
        roundRect(g, d.x, dy, d.w, dh, 6); g.fill();
        g.lineWidth = 3;
        g.strokeStyle = right ? COL.ok : wrong ? COL.bad : lit ? COL.doorLit : "#4a447a";
        roundRect(g, d.x, dy, d.w, dh, 6); g.stroke();
        // archway notch
        g.fillStyle = "rgba(0,0,0,.35)"; g.fillRect(d.x + d.w / 2 - 4, dy + dh - 14, 8, 14);
        g.fillStyle = COL.txt; g.font = "600 12px ui-monospace, Menlo, monospace";
        wrap(g, d.text, d.x + d.w / 2, dy + 18, d.w - 12, 14, true);
      });

      // hero on the floor near doors
      const tgt = doors[sel] ? doors[sel].x + doors[sel].w / 2 : heroX;
      if (locked) heroX += (tgt - heroX) * Math.min(1, dt * 8);
      hero(g, heroX, heroY());

      // particles
      parts.forEach(p => { p.x += p.vx * dt; p.y += p.vy * dt; p.vy += 420 * dt; p.life -= dt * 1.5; });
      parts = parts.filter(p => p.life > 0);
      parts.forEach(p => { g.globalAlpha = Math.max(0, p.life); g.fillStyle = p.c; g.fillRect(p.x, p.y, 5, 5); });
      g.globalAlpha = 1;

      // why banner
      if (whyText) {
        g.textAlign = "center"; g.fillStyle = flashOk ? COL.ok : COL.gold;
        g.font = "600 12px ui-monospace, Menlo, monospace";
        wrap(g, whyText, C.w / 2, dy - 16, C.w - 60, 14, true, true);
      }

      g.restore();

      // flash overlay
      if (flash > 0) {
        flash -= dt;
        g.fillStyle = (flashOk ? "rgba(52,211,153," : "rgba(251,93,106,") + (flash * 0.4) + ")";
        g.fillRect(0, 0, C.w, C.h);
      }
    });

    function cleanup() { C.dispose(); window.removeEventListener("keydown", kd); window.removeEventListener("keyup", ku); }
    function roundRect(c, x, y, w, h, r) { c.beginPath(); c.moveTo(x + r, y); c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r); c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r); c.closePath(); }
    // wrap returns the y after the last line. center=true centers each line at x; up=true draws lines upward.
    function wrap(c, text, x, y, maxW, lh, center, up) {
      const words = (text || "").split(" "); const lines = []; let line = "";
      for (const w of words) { const t = line + w + " "; if (c.measureText(t).width > maxW && line) { lines.push(line.trim()); line = w + " "; } else line = t; }
      if (line.trim()) lines.push(line.trim());
      if (up) {
        lines.forEach((ln, i) => c.fillText(ln, x, y - (lines.length - 1 - i) * lh));
        return y;
      }
      lines.forEach((ln, i) => c.fillText(ln, x, y + i * lh));
      return y + lines.length * lh;
    }
  },
});
