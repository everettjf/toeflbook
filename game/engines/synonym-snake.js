/* synonym-snake — vocab. Classic grid snake: steer the snake head to EAT the
   food token labeled with the correct meaning. Eat right → grow + advance;
   eat wrong → shrink + advance. Walls wrap. Forgiving learning tool.
   data: { items:[{word, correct, options:[...]}] } */
TDG.engine("synonym-snake", {
  uses: "vocab", label: "Synonym Snake",
  play(ctx) {
    const { stage, data, hud, shuffle, clamp, rand } = ctx;
    const items = data.items; const s = ctx.session || {};
    let idx = s.i || 0, correct = s.correct || 0, combo = 0;

    const C = ctx.canvas(460); const g = C.ctx;

    // ---- layout ----
    const HEAD = 96;            // top zone for word banner
    const LEGEND = 110;         // bottom zone for color→meaning legend
    const CELL = 22;            // grid cell size (px)
    const COLORS = ["#34d399", "#fbbf24", "#60a5fa", "#f472b6"];

    let cols = 0, rows = 0, gridX = 0, gridY = 0;
    function computeGrid() {
      const availW = C.w - 24;
      const availH = C.h - HEAD - LEGEND - 12;
      cols = Math.max(8, Math.floor(availW / CELL));
      rows = Math.max(8, Math.floor(availH / CELL));
      gridX = Math.round((C.w - cols * CELL) / 2);
      gridY = HEAD;
    }
    computeGrid();

    // ---- snake state ----
    let snake = [];             // [{x,y}] head first, grid coords
    let dir = { x: 1, y: 0 };   // current direction
    let nextDir = { x: 1, y: 0 };
    let foods = [];             // [{x,y,text,correct,color}]
    let word = "";
    let stepMs = 150;           // movement interval, ramps down
    let acc = 0;                // ms accumulator
    let flash = 0, flashOk = false, parts = [];

    function cellFree(x, y) {
      return !snake.some(s => s.x === x && s.y === y) && !foods.some(f => f.x === x && f.y === y);
    }
    function placeFoods() {
      const it = items[idx];
      const opts = shuffle(it.options.slice(0, 4));
      foods = [];
      for (let k = 0; k < opts.length; k++) {
        let x, y, tries = 0;
        do { x = Math.floor(rand(0, cols)); y = Math.floor(rand(0, rows)); tries++; }
        while (!cellFree(x, y) && tries < 200);
        foods.push({ x, y, text: opts[k], correct: opts[k] === it.correct, color: COLORS[k % COLORS.length] });
      }
    }
    function resetSnake() {
      const cx = Math.floor(cols / 2), cy = Math.floor(rows / 2);
      snake = [{ x: cx, y: cy }, { x: cx - 1, y: cy }, { x: cx - 2, y: cy }];
      dir = { x: 1, y: 0 }; nextDir = { x: 1, y: 0 };
    }
    function spawnItem() {
      word = items[idx].word;
      resetSnake();
      placeFoods();
      stepMs = clamp(150 - idx * 4, 70, 150);
      hud.setScore(correct + "/" + items.length);
    }
    function burst(cellx, celly, ok) {
      const px = gridX + cellx * CELL + CELL / 2, py = gridY + celly * CELL + CELL / 2;
      for (let k = 0; k < 20; k++) parts.push({ x: px, y: py, vx: rand(-130, 130), vy: rand(-190, -20), life: 1, ok });
    }

    spawnItem();

    stage.insertAdjacentHTML("beforeend",
      '<p class="hint" style="margin-top:10px">⬆️⬇️⬅️➡️ Arrows / WASD / swipe — steer the snake to eat the correct meaning. Walls wrap around.</p>');

    // ---- input ----
    function setDir(x, y) { if (x === -dir.x && y === -dir.y) return; nextDir = { x, y }; }
    const kd = e => {
      const k = e.key;
      if (k === "ArrowLeft" || k === "a" || k === "A") { setDir(-1, 0); e.preventDefault(); }
      else if (k === "ArrowRight" || k === "d" || k === "D") { setDir(1, 0); e.preventDefault(); }
      else if (k === "ArrowUp" || k === "w" || k === "W") { setDir(0, -1); e.preventDefault(); }
      else if (k === "ArrowDown" || k === "s" || k === "S") { setDir(0, 1); e.preventDefault(); }
    };
    window.addEventListener("keydown", kd);
    // swipe via pointer direction
    let downX = 0, downY = 0, downAt = 0;
    const pd = e => { const r = C.cv.getBoundingClientRect(); downX = (e.touches ? e.touches[0].clientX : e.clientX) - r.left; downY = (e.touches ? e.touches[0].clientY : e.clientY) - r.top; downAt = 1; };
    const pu = e => {
      if (!downAt) return; downAt = 0;
      const r = C.cv.getBoundingClientRect();
      const ux = (e.changedTouches ? e.changedTouches[0].clientX : e.clientX) - r.left;
      const uy = (e.changedTouches ? e.changedTouches[0].clientY : e.clientY) - r.top;
      const dx = ux - downX, dy = uy - downY;
      if (Math.abs(dx) < 12 && Math.abs(dy) < 12) return;
      if (Math.abs(dx) > Math.abs(dy)) setDir(dx > 0 ? 1 : -1, 0); else setDir(0, dy > 0 ? 1 : -1);
    };
    C.cv.addEventListener("pointerdown", pd);
    window.addEventListener("pointerup", pu);

    function advance() {
      idx++; ctx.save({ i: idx, correct });
      if (idx >= items.length) {
        stop(); cleanup();
        ctx.done((correct / items.length) * 100, correct + " / " + items.length + " synonyms eaten.");
        return true;
      }
      spawnItem();
      return false;
    }

    function tick() {
      dir = nextDir;
      let nx = snake[0].x + dir.x, ny = snake[0].y + dir.y;
      // wrap around walls
      nx = (nx + cols) % cols; ny = (ny + rows) % rows;

      // self-collision: forgiving — just respawn the snake, keep playing
      if (snake.some(s => s.x === nx && s.y === ny)) { resetSnake(); return; }

      const head = { x: nx, y: ny };
      const hit = foods.find(f => f.x === nx && f.y === ny);
      snake.unshift(head);

      if (hit) {
        const ok = hit.correct;
        burst(nx, ny, ok); flash = 0.5; flashOk = ok;
        if (ok) {
          correct++; combo++; ctx.sound("good");
          hud.setCombo(combo); hud.pop("+" + (1 + Math.floor(combo / 2)), "");
          // grow: keep tail (don't pop) for a couple segments
          if (snake.length < 2) snake.push(snake[snake.length - 1]);
        } else {
          combo = 0; ctx.sound("bad");
          hud.setCombo(0); hud.pop("✗", "bad");
          // shrink a bit (lose up to 2 tail segments), keep min length 2
          snake.pop(); snake.pop();
          if (snake.length < 2) snake = snake.slice(0, 2);
          if (snake.length < 1) resetSnake();
        }
        advance();
        return;
      }
      snake.pop(); // normal move
    }

    function rr(x, y, w, h, r) { g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r); g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath(); }

    const stop = ctx.raf((dt, now) => {
      // step movement on timer (dt is seconds)
      acc += dt * 1000;
      while (acc >= stepMs) { acc -= stepMs; tick(); if (idx >= items.length) return; }

      // ---- draw ----
      g.clearRect(0, 0, C.w, C.h);

      // word banner (cyan glow like word-runner)
      g.fillStyle = "#22d3ee"; g.font = "900 30px -apple-system, sans-serif"; g.textAlign = "center";
      g.shadowColor = "rgba(34,211,238,.6)"; g.shadowBlur = 18;
      g.fillText(word, C.w / 2, 40); g.shadowBlur = 0;
      g.fillStyle = "#9aa0c8"; g.font = "600 12px sans-serif";
      g.fillText("eat the matching meaning · Item " + Math.min(idx + 1, items.length) + "/" + items.length, C.w / 2, 60);

      // grid backdrop
      const gw = cols * CELL, gh = rows * CELL;
      g.fillStyle = "rgba(20,24,48,.5)"; rr(gridX - 6, gridY - 6, gw + 12, gh + 12, 12); g.fill();
      g.strokeStyle = "rgba(124,140,255,.08)"; g.lineWidth = 1;
      for (let c = 0; c <= cols; c++) { const x = gridX + c * CELL; g.beginPath(); g.moveTo(x, gridY); g.lineTo(x, gridY + gh); g.stroke(); }
      for (let r = 0; r <= rows; r++) { const y = gridY + r * CELL; g.beginPath(); g.moveTo(gridX, y); g.lineTo(gridX + gw, y); g.stroke(); }

      // foods (color tokens with short index label)
      foods.forEach((f, i) => {
        const fx = gridX + f.x * CELL, fy = gridY + f.y * CELL;
        const pulse = 1 + Math.sin(now / 240 + i) * 0.06;
        const pad = (CELL - CELL * pulse) / 2 + 2;
        g.fillStyle = f.color; g.shadowColor = f.color; g.shadowBlur = 12;
        rr(fx + pad, fy + pad, CELL - pad * 2, CELL - pad * 2, 5); g.fill(); g.shadowBlur = 0;
        g.fillStyle = "rgba(10,12,28,.85)"; g.font = "800 11px sans-serif"; g.textAlign = "center"; g.textBaseline = "middle";
        g.fillText(String.fromCharCode(65 + i), fx + CELL / 2, fy + CELL / 2 + 0.5);
        g.textBaseline = "alphabetic";
      });

      // snake
      snake.forEach((seg, i) => {
        const sx = gridX + seg.x * CELL, sy = gridY + seg.y * CELL;
        if (i === 0) {
          const grd = g.createRadialGradient(sx + CELL / 2, sy + CELL / 2, 2, sx + CELL / 2, sy + CELL / 2, CELL);
          grd.addColorStop(0, "#ffffff"); grd.addColorStop(1, "#6c8cff");
          g.fillStyle = grd; g.shadowColor = "#6c8cff"; g.shadowBlur = 16;
          rr(sx + 2, sy + 2, CELL - 4, CELL - 4, 6); g.fill(); g.shadowBlur = 0;
        } else {
          const a = clamp(1 - i / (snake.length + 4), 0.3, 0.9);
          g.fillStyle = "rgba(108,140,255," + a + ")";
          rr(sx + 3, sy + 3, CELL - 6, CELL - 6, 5); g.fill();
        }
      });

      // legend: color → full option text (readable)
      const ly = gridY + gh + 16;
      g.textAlign = "left"; g.textBaseline = "alphabetic";
      foods.forEach((f, i) => {
        const row = ly + i * 24;
        g.fillStyle = f.color; rr(gridX, row - 11, 14, 14, 4); g.fill();
        g.fillStyle = "rgba(10,12,28,.9)"; g.font = "800 10px sans-serif"; g.textAlign = "center";
        g.fillText(String.fromCharCode(65 + i), gridX + 7, row + 0.5);
        g.fillStyle = "#cdd2f5"; g.font = "600 13px sans-serif"; g.textAlign = "left";
        let label = f.text; const maxW = C.w - gridX - 32;
        while (g.measureText(label).width > maxW && label.length > 4) label = label.slice(0, -2);
        if (label !== f.text) label = label.replace(/\s+$/, "") + "…";
        g.fillText(label, gridX + 22, row + 1);
      });

      // particles
      parts.forEach(p => { p.x += p.vx * dt; p.y += p.vy * dt; p.vy += 380 * dt; p.life -= dt * 1.4; });
      parts = parts.filter(p => p.life > 0);
      parts.forEach(p => { g.globalAlpha = Math.max(0, p.life); g.fillStyle = p.ok ? "#34d399" : "#fb7185"; g.fillRect(p.x, p.y, 4, 4); });
      g.globalAlpha = 1;

      // flash
      if (flash > 0) { flash -= dt; g.fillStyle = (flashOk ? "rgba(52,211,153," : "rgba(251,113,133,") + (flash * 0.45) + ")"; g.fillRect(0, 0, C.w, C.h); }
    });

    function cleanup() {
      C.dispose();
      window.removeEventListener("keydown", kd);
      window.removeEventListener("pointerup", pu);
    }
  },
});
