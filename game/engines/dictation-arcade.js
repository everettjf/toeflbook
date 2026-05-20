/* dictation-arcade — Listening. Hear a spoken sentence, type exactly what you
   hear; scored on word accuracy via ctx.compare (LCS word match).
   DOM-based with a depleting "time bonus" bar for arcade feel.
   Falls back to showing the sentence text if speech synthesis is unavailable.
   data: { sentences:[ "..." ] } */
TDG.engine("dictation-arcade", {
  uses: "dictation", label: "Dictation Arcade",
  play(ctx) {
    const { stage, data, hud, esc, compare, sound, speak, canTTS, clamp } = ctx;
    const sentences = (data && data.sentences) || [];
    const s = ctx.session || {};
    let i = s.i || 0;
    let scores = s.scores || [];

    const BONUS_MS = 20000;        // bar fully depletes over ~20s

    function avg(arr) { return arr.length ? Math.round(arr.reduce((a, b) => a + b, 0) / arr.length) : 0; }
    function refreshHud() { hud.setScore(scores.length ? avg(scores) + "%" : "·"); }

    function finish() {
      ctx.done(avg(scores), "Average word accuracy across " + sentences.length + " sentences.");
    }

    function render() {
      if (i >= sentences.length) return finish();
      const target = sentences[i];

      stage.innerHTML = hud.bar(i, sentences.length) +
        '<div class="card">' +
          '<div class="hint">🎧 Listen and type exactly what you hear. Spelling and word order count.</div>' +
          (!canTTS
            ? '<div class="warnbox">Speech synthesis isn\'t available in this browser — use Chrome or Edge on desktop for audio. The sentence is shown below so you can still complete the day (you\'re still scored).</div>' +
              '<div class="prompt-big" style="font-size:18px">' + esc(target) + "</div>"
            : "") +
          '<div class="btnrow" style="margin-bottom:10px">' +
            '<button class="btn" id="play">🔊 Play</button>' +
            '<button class="btn ghost" id="slow">🐢 Slower</button>' +
          "</div>" +
          '<div class="progress" id="bonusbar"><i style="width:100%;background:linear-gradient(90deg,var(--accent2),var(--accent))"></i></div>' +
          '<textarea class="txt" id="answer" placeholder="Type what you hear…" spellcheck="false"></textarea>' +
          '<div class="btnrow" style="margin-top:12px"><button class="btn" id="check">Check</button></div>' +
          '<div id="fb"></div>' +
        "</div>";

      const playBtn = stage.querySelector("#play");
      const slowBtn = stage.querySelector("#slow");
      const checkBtn = stage.querySelector("#check");
      const answer = stage.querySelector("#answer");
      const fb = stage.querySelector("#fb");
      const barFill = stage.querySelector("#bonusbar > i");

      // ---- depleting time-bonus bar ----
      let startT = performance.now();
      let bonus = 1;        // remaining fraction at the moment of checking
      let stopRaf = null;
      let done = false;
      function tick(_dt, now) {
        const elapsed = now - startT;
        bonus = clamp(1 - elapsed / BONUS_MS, 0, 1);
        if (barFill) barFill.style.width = (bonus * 100).toFixed(1) + "%";
        if (bonus <= 0 && stopRaf) { stopRaf(); stopRaf = null; }
      }
      stopRaf = ctx.raf(tick);

      // ---- audio ----
      function play(rate) { if (canTTS) speak(target, rate); }
      playBtn.onclick = () => play();
      slowBtn.onclick = () => play(0.7);
      if (canTTS) play();          // auto-play on arrival
      answer.focus();

      // ---- check ----
      function check() {
        if (done) return;
        done = true;
        if (stopRaf) { stopRaf(); stopRaf = null; }
        const res = compare(target, answer.value);
        const good = res.pct >= 70;
        scores.push(res.pct);
        sound(good ? "good" : "bad");
        hud.pop((bonus > 0 ? "+" : "") + res.pct + "%", good ? "" : "bad");
        refreshHud();

        checkBtn.disabled = true;
        answer.disabled = true;
        const bonusNote = canTTS ? '  <span class="hint">· speed bonus ' + Math.round(bonus * 100) + "%</span>" : "";
        fb.innerHTML =
          '<div class="fb ' + (good ? "good" : "bad") + '">' + res.pct + "% — target was:" + bonusNote + "</div>" +
          '<div class="tscript">' + res.html + "</div>" +
          '<div class="btnrow" style="margin-top:12px"><button class="btn" id="next">Next →</button></div>';
        fb.querySelector("#next").onclick = () => {
          i++;
          ctx.save({ i: i, scores: scores });
          render();
        };
      }
      checkBtn.onclick = check;
      // Ctrl/Cmd+Enter as a quick submit
      answer.addEventListener("keydown", (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === "Enter") { e.preventDefault(); check(); }
      });
    }

    refreshHud();
    render();
  },
});
