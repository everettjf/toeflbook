/* rapid-interview — Speaking. No prep time: hit start and speak for N seconds,
   like the real test. Captures transcript + word count + speaking rate (wpm),
   then you self-rate 1–5 stars. data: { seconds:45, prompts:[ "..." ] } */
TDG.engine("rapid-interview", {
  uses: "prompts", label: "Rapid Interview",
  play(ctx) {
    const { stage, data, hud, esc, tokens, clamp, lerp, sound } = ctx;
    const prompts = data.prompts || [];
    const seconds = data.seconds || 45;
    const s = ctx.session || {};
    let i = s.i || 0, rates = s.rates || [];

    // active resources for the current prompt (cleaned up on advance/finish)
    let C = null, stopRaf = null, rec = null, ticked = -1;

    function teardown() {
      if (stopRaf) { stopRaf(); stopRaf = null; }
      if (C) { C.dispose(); C = null; }
      if (rec) { try { rec.stop(); } catch (e) {} rec = null; }
    }

    function finish() {
      teardown();
      const avg = rates.length ? (rates.reduce((a, b) => a + b, 0) / rates.length) * 20 : 0;
      ctx.done(avg, "Average self-rating across " + prompts.length + " answers.");
    }

    function render() {
      teardown();
      if (i >= prompts.length) { finish(); return; }
      const prompt = prompts[i];
      stage.innerHTML = hud.bar(i, prompts.length) +
        '<div class="card">' +
          '<div class="prompt-big" style="font-size:21px;line-height:1.5">' + esc(prompt) + "</div>" +
          '<div class="hint" style="margin-top:10px">🎙️ No prep time — hit start and speak for ' + seconds + "s.</div>" +
          '<div class="btnrow" style="margin-top:14px"><button class="btn rec" id="startbtn">▶ Start ' + seconds + "s</button></div>" +
          '<div id="ringwrap" style="display:flex;justify-content:center;margin-top:8px"></div>' +
          '<div class="tscript" id="tscript" style="margin-top:12px;min-height:24px;color:#cdd2f5;line-height:1.6"></div>' +
          '<div id="after"></div>' +
        "</div>";

      stage.querySelector("#startbtn").onclick = startTimer;
    }

    function startTimer() {
      const startBtn = stage.querySelector("#startbtn");
      if (startBtn) startBtn.disabled = true;
      const tscript = stage.querySelector("#tscript");

      // arcade timer ring on a small canvas
      C = ctx.canvas(140);
      const wrap = stage.querySelector("#ringwrap");
      if (wrap) wrap.appendChild(C.cv);
      const g = C.ctx;
      const total = seconds;
      let remain = seconds;
      ticked = -1;

      stopRaf = ctx.raf((dt) => {
        remain = clamp(remain - dt, 0, total);
        const sec = Math.ceil(remain);
        if (sec !== ticked) { ticked = sec; if (sec > 0) sound("tick"); }

        const frac = remain / total;                 // 1 -> 0
        const cx = C.w / 2, cy = C.h / 2, r = Math.min(cx, cy) - 14;
        const danger = 1 - frac;                      // 0 early -> 1 at end
        const col = "rgb(" + Math.round(lerp(108, 251, danger)) + "," +
          Math.round(lerp(140, 80, danger)) + "," + Math.round(lerp(255, 90, danger)) + ")";

        g.clearRect(0, 0, C.w, C.h);
        // track
        g.beginPath(); g.arc(cx, cy, r, 0, Math.PI * 2);
        g.strokeStyle = "rgba(124,140,255,.16)"; g.lineWidth = 10; g.stroke();
        // depleting arc (from top, clockwise)
        const start = -Math.PI / 2;
        g.beginPath(); g.arc(cx, cy, r, start, start + Math.PI * 2 * frac);
        g.strokeStyle = col; g.lineWidth = 10; g.lineCap = "round";
        g.shadowColor = col; g.shadowBlur = 16; g.stroke(); g.shadowBlur = 0;
        // center seconds
        g.fillStyle = col; g.textAlign = "center"; g.textBaseline = "middle";
        g.font = "900 34px -apple-system, sans-serif";
        g.fillText(String(Math.max(0, sec)), cx, cy + 1);
      });

      // capture speech if available; otherwise just run the timer
      rec = ctx.record({
        continuous: true, maxMs: seconds * 1000,
        onText: t => { if (tscript) tscript.textContent = t; },
      });

      if (rec) {
        rec.promise.then(said => onFinish(said || ""));
      } else {
        if (tscript) tscript.textContent = "(speech capture unavailable — speak anyway, then self-rate)";
        setTimeout(() => onFinish(""), seconds * 1000);
      }
    }

    function onFinish(said) {
      teardown();
      const words = tokens(said).length;
      const wpm = Math.round(words / (seconds / 60));
      const after = stage.querySelector("#after");
      if (!after) return;
      sound("pop");
      after.innerHTML =
        '<div class="hint" style="margin-top:14px">Words: ' + words + " · ~" + wpm + " wpm. Rate your own answer:</div>" +
        '<div class="btnrow" id="starrow" style="margin-top:8px">' +
          [1, 2, 3, 4, 5].map(n =>
            '<button class="btn ghost star" data-n="' + n + '">' + "⭐".repeat(n) + "</button>").join("") +
        "</div>";
      after.querySelectorAll(".star").forEach(b => b.onclick = () => {
        const n = +b.dataset.n;
        rates.push(n);
        i++;
        ctx.save({ i, rates });
        sound("good");
        render();
      });
    }

    render();
  },
});
