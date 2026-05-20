/* listening-quiz — Listening. Spoken passage (TTS) + question + options + why.
   The transcript is HIDDEN until the player answers. Falls back to reading the
   passage when speech synthesis is unavailable.
   data: { items:[{passage,question,options,correct,why,audio?}] } */
TDG.engine("listening-quiz", {
  uses: "passage", label: "Listening Quiz",
  play(ctx) {
    const { stage, data, hud, esc, shuffle, sound, speak, canTTS } = ctx;
    const items = data.items;
    const s = ctx.session || {};
    let i = s.i || 0, correct = s.correct || 0, combo = 0;

    function render() {
      if (i >= items.length) {
        return ctx.done((correct / items.length) * 100,
          correct + " / " + items.length + " correct. 🎧");
      }
      const it = items[i];
      const order = shuffle(it.options.map((o, idx) => ({ o, idx })));
      hud.setScore(correct + "/" + items.length);
      hud.setCombo(combo);

      // --- header: audio controls (or fallback) -------------------------
      let head;
      if (canTTS) {
        head =
          '<div class="hint">🎧 Listen carefully — you can replay. The transcript appears after you answer.</div>' +
          '<div class="btnrow" style="margin:10px 0">' +
            '<button class="btn" id="play">🔊 Play audio</button>' +
            '<button class="btn ghost" id="slow">🐢 Slower</button>' +
          "</div>";
      } else {
        head =
          '<div class="warnbox">No speech synthesis here — use Chrome/Edge desktop to hear the audio. ' +
          "For now, read the script below and answer.</div>" +
          '<p style="font-size:17px;line-height:1.65;margin:12px 0">' + esc(it.passage) + "</p>";
      }

      stage.innerHTML = hud.bar(i, items.length) +
        '<div class="card">' + head +
          '<div class="prompt-big" style="font-size:20px">' + esc(it.question) + "</div>" +
          order.map(x => '<button class="choice" data-i="' + x.idx + '">' + esc(x.o) + "</button>").join("") +
          '<div id="fb"></div></div>';

      // --- wire audio ----------------------------------------------------
      if (canTTS) {
        const playBtn = document.getElementById("play");
        const slowBtn = document.getElementById("slow");
        playBtn.onclick = () => speak(it.passage);
        slowBtn.onclick = () => speak(it.passage, 0.7);
        speak(it.passage); // auto-play once on render
      }

      // --- wire choices --------------------------------------------------
      const btns = stage.querySelectorAll(".choice");
      btns.forEach(b => b.onclick = () => {
        btns.forEach(x => x.disabled = true);
        const chosen = +b.dataset.i, ok = chosen === it.correct;
        if (ok) {
          correct++; combo++; sound("good");
          hud.pop(combo >= 2 ? "+1 🔥" : "+1", "");
        } else {
          combo = 0; sound("bad"); hud.pop("✗", "bad");
          btns.forEach(x => { if (+x.dataset.i === it.correct) x.classList.add("correct"); });
        }
        b.classList.add(ok ? "correct" : "wrong");
        hud.setScore(correct + "/" + items.length);
        hud.setCombo(combo);

        // reveal feedback + transcript so the player can study
        document.getElementById("fb").innerHTML =
          '<div class="fb ' + (ok ? "good" : "bad") + '">' +
            (ok ? "Correct! " : "Not quite. ") + esc(it.why) + "</div>" +
          '<div class="tscript"><strong>Transcript:</strong> ' + esc(it.passage) + "</div>" +
          '<div class="btnrow" style="margin-top:12px">' +
            '<button class="btn" id="next">Next →</button></div>';
        document.getElementById("next").onclick = () => {
          i++; ctx.save({ i, correct }); render();
        };
      });
    }

    render();
  },
});
