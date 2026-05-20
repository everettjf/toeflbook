/* vocab-tetris — vocab. Tetris-flavored: the target WORD glows up top; the four
   option meanings fall one at a time as labeled blocks down a narrow well. Steer
   the falling block over the well and HARD-DROP only the CORRECT-meaning block to
   clear a line (flash + particle burst). Dropping a wrong block stacks the pile;
   if it tops out the round still advances as a miss.
   data: { items:[{word, correct, options:[...]}] } */
TDG.engine("vocab-tetris", {
  uses: "vocab", label: "Vocab Tetris",
  play(ctx) {
    const { stage, data, hud, shuffle, clamp, rand } = ctx;
    const items = data.items; const s = ctx.session || {};
    let idx = s.i || 0, correct = s.correct || 0, combo = 0;

    const C = ctx.canvas(460); const g = C.ctx;
    stage.insertAdjacentHTML("beforeend", '<p class="hint" style="margin-top:10px">Meanings fall one by one. HARD-DROP (<b>Space</b> / ↓ / tap) the block that matches the word. Drop a wrong one and it piles up.</p>');

    // ---- well geometry ----
    const COLS = 5;                 // grid columns (backdrop only)
    const TOP = 90;                 // y where the well begins (below word banner)
    const ROW_H = 34;               // stacked-row height
    const BLOCK_H = 60;             // falling block height (full-width, readable)
    const PALETTE = ["#6c8cff", "#22d3ee", "#f472b6", "#fbbf24"]; // per-option colors

    let wellX = 0, wellW = 0, cellW = 0, floorY = 0, maxRows = 0;
    function layout() {
      wellW = Math.min(360, C.w - 24);
      wellX = (C.w - wellW) / 2;
      cellW = wellW / COLS;
      floorY = C.h - 14;
      maxRows = Math.floor((floorY - TOP) / ROW_H);
    }
    layout();

    // ---- per-item state ----
    let word = "", correctText = "";
    let queue = [];                 // shuffled options remaining to fall this item
    let piece = null;               // { text, correct, color, col, y, vy }
    let stackRows = [];             // array of locked rows (just for the pile look)
    let flash = 0, flashOk = false, parts = [], lineFlash = 0;
    let advancing = false;
    let dropSpeed = 70;             // px/sec base fall

    function spawnItem() {
      const it = items[idx];
      word = it.word; correctText = it.correct;
      const opts = it.options.slice(0, 4);
      // pair each option with a stable color, then shuffle fall order
      const colored = shuffle(opts.map((o, k) => ({ text: o, correct: o === it.correct, color: PALETTE[k % PALETTE.length] })));
      queue = colored;
      stackRows = [];
      advancing = false;
      dropSpeed = 70;
      nextPiece();
    }
    function nextPiece() {
      if (!queue.length) { advance(); return; }
      const o = queue.shift();
      piece = { text: o.text, correct: o.correct, color: o.color, col: Math.floor(COLS / 2), y: TOP, vy: dropSpeed };
    }
    function stackHeight() { return stackRows.length * ROW_H; }

    function lockPiece(hardDropped) {
      if (!piece) return;
      const cx = wellX + piece.col * cellW + cellW / 2;
      const py = floorY - stackHeight() - ROW_H / 2;
      if (piece.correct) {
        // line clear!
        correct++; combo++;
        ctx.sound("good");
        hud.setCombo(combo);
        hud.pop("+" + (1 + Math.floor(combo / 2)), "");
        lineFlash = 0.5; flash = 0.4; flashOk = true;
        burst(cx, py, true);
        piece = null;
        advance();
      } else {
        // wrong → raise the pile
        combo = 0;
        ctx.sound("bad");
        hud.setCombo(0);
        hud.pop("✗", "bad");
        flash = 0.35; flashOk = false;
        burst(cx, py, false);
        stackRows.push({ text: piece.text, color: piece.color, col: piece.col });
        piece = null;
        if (stackRows.length >= maxRows) { advance(); return; } // topped out
        nextPiece();
      }
      hud.setScore(correct + "/" + items.length);
    }

    function advance() {
      if (advancing) return;
      advancing = true; piece = null;
      hud.setScore(correct + "/" + items.length);
      setTimeout(() => {
        idx++; ctx.save({ i: idx, correct });
        if (idx >= items.length) { stop(); cleanup(); ctx.done((correct / items.length) * 100, correct + " / " + items.length + " lines cleared."); return; }
        spawnItem();
      }, 600);
    }

    function burst(x, y, ok) { for (let k = 0; k < 20; k++) parts.push({ x, y, vx: rand(-130, 130), vy: rand(-190, -20), life: 1, ok }); }

    spawnItem();

    // ---- input ----
    const keys = {};
    function move(d) { if (piece && !advancing) piece.col = clamp(piece.col + d, 0, COLS - 1); }
    function hardDrop() { if (piece && !advancing) lockPiece(true); }
    const kd = e => {
      if (advancing) return;
      const k = e.key;
      if (k === "ArrowLeft" || k === "a" || k === "A") { move(-1); e.preventDefault(); }
      else if (k === "ArrowRight" || k === "d" || k === "D") { move(1); e.preventDefault(); }
      else if (k === "ArrowDown" || k === " " || k === "Spacebar" || k === "s" || k === "S") { hardDrop(); e.preventDefault(); }
      else keys[k] = true;
    };
    const ku = e => { keys[e.key] = false; };
    window.addEventListener("keydown", kd); window.addEventListener("keyup", ku);

    // pointer: drag to aim a column, tap (no drag) to hard-drop
    let dragging = false, dragMoved = false;
    const colFromEvent = e => {
      const r = C.cv.getBoundingClientRect();
      const cx = (e.touches ? e.touches[0].clientX : e.clientX) - r.left;
      return clamp(Math.floor((cx - wellX) / cellW), 0, COLS - 1);
    };
    const pd = e => { dragging = true; dragMoved = false; if (piece && !advancing) piece.col = colFromEvent(e); };
    const pm = e => { if (dragging && piece && !advancing) { const c = colFromEvent(e); if (c !== piece.col) dragMoved = true; piece.col = c; } };
    const pu = () => { if (dragging && !dragMoved) hardDrop(); dragging = false; };
    C.cv.addEventListener("pointerdown", pd);
    C.cv.addEventListener("pointermove", pm);
    window.addEventListener("pointerup", pu);

    // ---- loop ----
    const stop = ctx.raf((dt) => {
      // gravity on the active piece
      if (piece && !advancing) {
        piece.y += piece.vy * dt;
        const restY = floorY - stackHeight() - BLOCK_H;
        if (piece.y >= restY) { piece.y = restY; lockPiece(false); }
      }

      // ---- draw ----
      g.clearRect(0, 0, C.w, C.h);

      // subtle grid backdrop in the well
      g.fillStyle = "rgba(20,24,52,.55)";
      roundRect(g, wellX - 4, TOP - 6, wellW + 8, floorY - TOP + 12, 12); g.fill();
      g.strokeStyle = "rgba(124,140,255,.10)"; g.lineWidth = 1;
      for (let c = 1; c < COLS; c++) { const x = wellX + c * cellW; g.beginPath(); g.moveTo(x, TOP); g.lineTo(x, floorY); g.stroke(); }
      for (let y = floorY; y > TOP; y -= ROW_H) { g.beginPath(); g.moveTo(wellX, y); g.lineTo(wellX + wellW, y); g.stroke(); }
      // well walls
      g.strokeStyle = "#2c3163"; g.lineWidth = 2;
      roundRect(g, wellX - 4, TOP - 6, wellW + 8, floorY - TOP + 12, 12); g.stroke();

      // word banner (cyan glow, like word-runner)
      g.textAlign = "center";
      g.fillStyle = "#22d3ee"; g.font = "900 30px -apple-system, sans-serif";
      g.shadowColor = "rgba(34,211,238,.6)"; g.shadowBlur = 18;
      g.fillText(word, C.w / 2, 40); g.shadowBlur = 0;
      g.fillStyle = "#9aa0c8"; g.font = "600 12px sans-serif";
      g.fillText("drop the matching meaning · Item " + Math.min(idx + 1, items.length) + "/" + items.length, C.w / 2, 60);

      // locked pile (wrong drops) — shown as dim bars with a single truncated line
      stackRows.forEach((r, i) => {
        const bx = wellX + 3, bw = wellW - 6;
        const by = floorY - (i + 1) * ROW_H + 2;
        g.globalAlpha = 0.5; g.fillStyle = r.color;
        roundRect(g, bx, by, bw, ROW_H - 4, 7); g.fill();
        g.globalAlpha = 0.95; g.fillStyle = "#0b1020"; g.font = "700 11px sans-serif"; g.textAlign = "center";
        g.fillText(trunc("✗ " + r.text, bw - 16), bx + bw / 2, by + (ROW_H - 4) / 2 + 4);
        g.globalAlpha = 1;
      });

      // line-clear flash sweeping the bottom row
      if (lineFlash > 0) {
        lineFlash -= dt;
        const a = Math.max(0, lineFlash) * 1.6;
        g.fillStyle = "rgba(52,211,153," + a + ")";
        roundRect(g, wellX, floorY - stackHeight() - ROW_H, wellW, ROW_H, 6); g.fill();
      }

      // falling piece (full well width so the meaning is readable)
      if (piece) {
        const bx = wellX + 3, bw = wellW - 6;
        drawBlock(bx, piece.y, bw, BLOCK_H, piece.color, piece.text, 1);
        // drop guide line at the resting position
        const restY = floorY - stackHeight() - BLOCK_H;
        g.strokeStyle = "rgba(255,255,255,.18)"; g.setLineDash([5, 5]); g.lineWidth = 1;
        g.beginPath(); g.moveTo(bx, restY); g.lineTo(bx + bw, restY); g.stroke(); g.setLineDash([]);
      }

      // particles
      parts.forEach(p => { p.x += p.vx * dt; p.y += p.vy * dt; p.vy += 400 * dt; p.life -= dt * 1.4; });
      parts = parts.filter(p => p.life > 0);
      parts.forEach(p => { g.globalAlpha = Math.max(0, p.life); g.fillStyle = p.ok ? "#34d399" : "#fb7185"; g.fillRect(p.x, p.y, 4, 4); });
      g.globalAlpha = 1;

      // full-screen flash
      if (flash > 0) { flash -= dt; g.fillStyle = (flashOk ? "rgba(52,211,153," : "rgba(251,113,133,") + (Math.max(0, flash) * 0.4) + ")"; g.fillRect(0, 0, C.w, C.h); }
    });

    hud.setScore(correct + "/" + items.length);

    // ---- helpers ----
    function drawBlock(x, y, w, h, color, text, alpha) {
      g.globalAlpha = alpha;
      g.fillStyle = color;
      g.strokeStyle = "rgba(255,255,255,.28)"; g.lineWidth = 2;
      roundRect(g, x, y, w, h, 8); g.fill(); g.stroke();
      // glossy top highlight
      g.fillStyle = "rgba(255,255,255,.16)";
      roundRect(g, x + 3, y + 3, w - 6, Math.min(10, h / 3), 5); g.fill();
      g.globalAlpha = Math.min(1, alpha + 0.2);
      g.fillStyle = "#0b1020"; g.font = "700 13px sans-serif"; g.textAlign = "center";
      wrapText(g, text, x + w / 2, y + h / 2, w - 18, 16);
      g.globalAlpha = 1;
    }
    function trunc(text, maxW) {
      text = text + "";
      if (g.measureText(text).width <= maxW) return text;
      while (text.length > 1 && g.measureText(text + "…").width > maxW) text = text.slice(0, -1);
      return text + "…";
    }

    function cleanup() {
      C.dispose();
      window.removeEventListener("keydown", kd);
      window.removeEventListener("keyup", ku);
      window.removeEventListener("pointerup", pu);
    }
    function roundRect(c, x, y, w, h, r) { c.beginPath(); c.moveTo(x + r, y); c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r); c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r); c.closePath(); }
    function wrapText(c, text, x, y, maxW, lh) {
      const words = (text + "").split(" "); let line = "", lines = [];
      for (const w of words) { const t = line + w + " "; if (c.measureText(t).width > maxW && line) { lines.push(line.trim()); line = w + " "; } else line = t; }
      lines.push(line.trim());
      const startY = y - ((lines.length - 1) * lh) / 2;
      lines.forEach((ln, i) => c.fillText(ln, x, startY + i * lh));
    }
  },
});
