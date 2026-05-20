/* grammar-invaders — passage. Space-Invaders shooter: 4 ships descend, each
   carrying one answer option. Steer the cannon and SHOOT the ship holding the
   correct option. Teaches grammar/usage/reading-detail.
   data: { items:[{ passage, question, options:[A,B,C,D], correct, why }] }
   `correct` is the 0-based INDEX of the right option. */
TDG.engine("grammar-invaders", {
  uses: "passage", label: "Grammar Invaders",
  play(ctx) {
    const { stage, data, hud, shuffle, clamp, rand, esc } = ctx;
    const items = data.items; const s = ctx.session || {};
    let idx = s.i || 0, correct = s.correct || 0, combo = 0;

    const C = ctx.canvas(470); const g = C.ctx;
    stage.insertAdjacentHTML("beforeend", '<p class="hint" style="margin-top:10px">⬅️ ➡️ Arrows / A·D / drag to aim · <b>Space</b> or tap canvas to fire. Shoot the ship with the correct answer.</p>' +
      '<div class="btnrow" style="justify-content:center;margin-top:8px"><button class="btn" id="firebtn">🔥 Fire</button></div>');

    const COLORS = ["#7c8cff", "#22d3ee", "#f59e0b", "#fb7185"];
    const SHIP_W_FACTOR = 0.9;       // ship width relative to lane width
    const SHIP_H = 76;
    const CANNON_W = 46, CANNON_H = 22;
    const QUESTION_TOP = 14;

    let px = 0;                       // cannon x (center)
    let ships = [];                   // {x,y,w,text,color,idx,dead,explode,reveal}
    let bullets = [];                 // {x,y}
    let parts = [];
    let descend = 30;                 // px/sec, ramps up
    let locked = false;               // input frozen during resolve
    let questionText = "", passageText = "";
    let whyText = "", whyTimer = 0, whyOk = false;
    let questionH = 60;               // computed lane top each spawn

    function spawn() {
      const it = items[idx];
      questionText = it.question || "";
      passageText = it.passage || "";
      // pair options with their original index, then shuffle lane order
      const opts = (it.options || []).slice(0, 4).map((o, i) => ({ text: o, idx: i }));
      const order = shuffle(opts);
      const n = Math.max(1, order.length), laneW = C.w / n, sw = laneW * SHIP_W_FACTOR;
      ships = order.map((o, k) => ({
        x: k * laneW + (laneW - sw) / 2, w: sw, y: 96 + rand(0, 36),
        text: o.text, color: COLORS[k % COLORS.length],
        idx: o.idx, correctIdx: it.correct,
        dead: false, explode: 0, reveal: false,
      }));
      bullets = []; locked = false; whyText = ""; whyTimer = 0;
    }
    function burst(x, y, ok, count) {
      for (let k = 0; k < (count || 22); k++)
        parts.push({ x, y, vx: rand(-160, 160), vy: rand(-200, 40), life: 1, ok });
    }

    function resolve(hitShip) {
      // hitShip may be null when invaders reach bottom (miss)
      locked = true;
      const it = items[idx];
      let ok = false;
      if (hitShip) {
        ok = hitShip.idx === it.correct;
        hitShip.explode = 0.5; hitShip.dead = true;
        burst(hitShip.x + hitShip.w / 2, hitShip.y + SHIP_H / 2, ok);
      }
      if (ok) {
        correct++; combo++; ctx.sound("good"); hud.setCombo(combo);
        hud.pop("+" + (1 + Math.floor(combo / 2)), "");
      } else {
        combo = 0; ctx.sound("bad"); hud.setCombo(0);
        hud.pop(hitShip ? "✗" : "missed!", "bad");
        // reveal the correct ship (flash green)
        const right = ships.find(sh => sh.idx === it.correct);
        if (right) { right.reveal = true; right.dead = false; }
      }
      hud.setScore(correct + "/" + items.length);
      whyText = (ok ? "✓ " : "✗ ") + (it.why || (ok ? "Correct." : "Not quite."));
      whyOk = ok; whyTimer = 1.1;
      setTimeout(() => {
        idx++; ctx.save({ i: idx, correct });
        if (idx >= items.length) { finish(); return; }
        descend = Math.min(60, descend + 4);
        spawn();
      }, 1100);
    }

    function finish() {
      stop(); cleanup();
      ctx.done((correct / items.length) * 100, correct + " / " + items.length + " invaders cleared.");
    }

    spawn();
    px = C.w / 2;

    // ---- input ----
    const keys = {};
    function fire() {
      if (locked) return;
      bullets.push({ x: px, y: C.h - 56 });
      ctx.sound("tick");
    }
    const kd = e => {
      keys[e.key] = true;
      if (e.key === " " || e.code === "Space") { e.preventDefault(); fire(); }
    };
    const ku = e => { keys[e.key] = false; };
    window.addEventListener("keydown", kd); window.addEventListener("keyup", ku);

    let dragging = false, dragMoved = false, downX = 0;
    const xfromEvent = e => { const r = C.cv.getBoundingClientRect(); const cx = (e.touches ? e.touches[0].clientX : e.clientX) - r.left; return clamp(cx, CANNON_W / 2, C.w - CANNON_W / 2); };
    C.cv.addEventListener("pointerdown", e => { dragging = true; dragMoved = false; downX = e.clientX; px = xfromEvent(e); });
    C.cv.addEventListener("pointermove", e => { if (dragging) { if (Math.abs(e.clientX - downX) > 6) dragMoved = true; px = xfromEvent(e); } });
    const upHandler = e => {
      if (dragging && !dragMoved) fire();   // tap (no drag) = fire
      dragging = false;
    };
    window.addEventListener("pointerup", upHandler);
    const fb = document.getElementById("firebtn");
    if (fb) fb.addEventListener("click", fire);

    // ---- loop ----
    const stop = ctx.raf((dt) => {
      // move cannon
      if (keys["ArrowLeft"] || keys["a"] || keys["A"]) px -= 320 * dt;
      if (keys["ArrowRight"] || keys["d"] || keys["D"]) px += 320 * dt;
      px = clamp(px, CANNON_W / 2, C.w - CANNON_W / 2);

      const cannonY = C.h - 40;

      if (!locked) {
        // descend ships
        ships.forEach(sh => { if (!sh.dead) sh.y += descend * dt; });
        // move bullets up
        bullets.forEach(b => { b.y -= 460 * dt; });
        bullets = bullets.filter(b => b.y > -10);

        // bullet/ship collision
        for (const b of bullets) {
          for (const sh of ships) {
            if (sh.dead) continue;
            if (b.x >= sh.x && b.x <= sh.x + sh.w && b.y <= sh.y + SHIP_H && b.y >= sh.y) {
              b.y = -999;                 // consume bullet
              resolve(sh);
              break;
            }
          }
          if (locked) break;
        }
        bullets = bullets.filter(b => b.y > -10);

        // invaders reach the bottom unshot → miss
        if (!locked) {
          const reached = ships.some(sh => !sh.dead && sh.y + SHIP_H >= cannonY);
          if (reached) resolve(null);
        }
      }

      // ---- draw ----
      g.clearRect(0, 0, C.w, C.h);
      // starfield
      g.fillStyle = "rgba(124,140,255,.10)";
      const off = (performance.now() / 16) % 26;
      for (let y = -26 + off; y < C.h; y += 26)
        for (let x = ((y * 7) % 60); x < C.w; x += 60) g.fillRect(x, y, 2, 2);

      // question banner (wrapped)
      g.textAlign = "center";
      g.fillStyle = "#f2f4ff"; g.font = "800 17px -apple-system, sans-serif";
      g.shadowColor = "rgba(124,140,255,.5)"; g.shadowBlur = 10;
      let qy = QUESTION_TOP + 16;
      qy = wrapText(g, questionText || "Which option is correct?", C.w / 2, qy, C.w - 28, 21);
      g.shadowBlur = 0;
      // optional passage/context, smaller, below the question
      if (passageText) {
        g.fillStyle = "#9aa0c8"; g.font = "500 12px sans-serif";
        qy = wrapText(g, passageText, C.w / 2, qy + 6, C.w - 36, 16);
      }
      questionH = qy + 8;
      g.beginPath(); g.strokeStyle = "rgba(124,140,255,.18)"; g.lineWidth = 1;
      g.moveTo(0, questionH); g.lineTo(C.w, questionH); g.stroke();

      // item counter
      g.fillStyle = "#6b7299"; g.font = "700 11px sans-serif"; g.textAlign = "right";
      g.fillText("Item " + Math.min(idx + 1, items.length) + "/" + items.length, C.w - 8, QUESTION_TOP + 2);
      g.textAlign = "center";

      // ships
      ships.forEach(sh => {
        if (sh.dead && sh.explode <= 0 && !sh.reveal) return;
        if (sh.explode > 0) { sh.explode -= dt; return; }
        const cx = sh.x + sh.w / 2, cy = sh.y + SHIP_H / 2;
        const body = sh.reveal ? "rgba(52,211,153,.30)" : "rgba(20,26,54,.92)";
        const edge = sh.reveal ? "#34d399" : sh.color;
        // ship body (rounded hull + dome)
        g.fillStyle = body; g.strokeStyle = edge; g.lineWidth = 2;
        roundRect(g, sh.x + 3, sh.y + 8, sh.w - 6, SHIP_H - 10, 12); g.fill(); g.stroke();
        g.beginPath();
        g.ellipse(cx, sh.y + 12, Math.min(22, sh.w / 3), 9, 0, 0, Math.PI * 2);
        g.fillStyle = sh.reveal ? "#34d399" : sh.color; g.globalAlpha = 0.85; g.fill(); g.globalAlpha = 1;
        // legs
        g.strokeStyle = edge; g.lineWidth = 2;
        g.beginPath();
        g.moveTo(sh.x + 12, sh.y + SHIP_H - 2); g.lineTo(sh.x + 6, sh.y + SHIP_H + 6);
        g.moveTo(sh.x + sh.w - 12, sh.y + SHIP_H - 2); g.lineTo(sh.x + sh.w - 6, sh.y + SHIP_H + 6);
        g.stroke();
        // option text
        g.fillStyle = "#f2f4ff"; g.font = "600 12px sans-serif";
        wrapText(g, sh.text, cx, sh.y + 30, sh.w - 14, 15);
      });

      // bullets
      g.fillStyle = "#fde047"; g.shadowColor = "#fde047"; g.shadowBlur = 8;
      bullets.forEach(b => { g.fillRect(b.x - 2, b.y, 4, 12); });
      g.shadowBlur = 0;

      // cannon
      drawCannon(px, cannonY);

      // particles
      parts.forEach(p => { p.x += p.vx * dt; p.y += p.vy * dt; p.vy += 320 * dt; p.life -= dt * 1.5; });
      parts = parts.filter(p => p.life > 0);
      parts.forEach(p => { g.globalAlpha = Math.max(0, p.life); g.fillStyle = p.ok ? "#34d399" : "#fb7185"; g.fillRect(p.x, p.y, 4, 4); });
      g.globalAlpha = 1;

      // why explanation flash (near bottom)
      if (whyTimer > 0) {
        whyTimer -= dt;
        const a = Math.min(1, whyTimer * 2);
        g.globalAlpha = a;
        const bw = C.w - 20, bx = 10, by = C.h - 96;
        g.fillStyle = whyOk ? "rgba(16,46,34,.96)" : "rgba(46,18,26,.96)";
        g.strokeStyle = whyOk ? "#34d399" : "#fb7185"; g.lineWidth = 2;
        roundRect(g, bx, by, bw, 50, 10); g.fill(); g.stroke();
        g.fillStyle = whyOk ? "#a7f3d0" : "#fecdd3"; g.font = "600 12px sans-serif"; g.textAlign = "center";
        wrapText(g, whyText, C.w / 2, by + 18, bw - 20, 15);
        g.globalAlpha = 1;
      }
    });

    function drawCannon(x, y) {
      g.save();
      g.fillStyle = "#6c8cff"; g.strokeStyle = "#aab6ff"; g.lineWidth = 2;
      // base
      roundRect(g, x - CANNON_W / 2, y, CANNON_W, CANNON_H, 6); g.fill(); g.stroke();
      // barrel
      g.fillStyle = "#aab6ff";
      g.fillRect(x - 4, y - 12, 8, 14);
      g.shadowColor = "#6c8cff"; g.shadowBlur = 14;
      g.fillStyle = "rgba(108,140,255,.4)";
      roundRect(g, x - CANNON_W / 2, y, CANNON_W, CANNON_H, 6); g.fill();
      g.shadowBlur = 0;
      g.restore();
    }

    function cleanup() {
      C.dispose();
      window.removeEventListener("keydown", kd);
      window.removeEventListener("keyup", ku);
      window.removeEventListener("pointerup", upHandler);
    }
    function roundRect(c, x, y, w, h, r) { c.beginPath(); c.moveTo(x + r, y); c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r); c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r); c.closePath(); }
    // returns the y just below the last drawn line
    function wrapText(c, text, x, y, maxW, lh) {
      const words = (text + "").split(" "); let line = "", yy = y;
      for (const w of words) {
        const t = line + w + " ";
        if (c.measureText(t).width > maxW && line) { c.fillText(line.trim(), x, yy); line = w + " "; yy += lh; }
        else line = t;
      }
      c.fillText(line.trim(), x, yy);
      return yy + lh;
    }
  },
});
