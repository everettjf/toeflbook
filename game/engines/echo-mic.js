/* echo-mic — Speaking. Listen to a sentence, then repeat it aloud; the mic
   transcript is scored on word match (TOEFL 2026 Task 1 listen-and-repeat).
   data: { items:[ "sentence", ... ] } */
TDG.engine("echo-mic", {
  uses: "echo", label: "Echo Mic",
  play(ctx) {
    const { stage, data, hud, esc, clamp, rand, sound } = ctx;
    const items = data.items; const s = ctx.session || {};
    let i = s.i || 0, scores = s.scores || [];
    let rec = null, stopRaf = null, C = null, level = 0;

    function avg() { return scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0; }

    function teardown() {
      if (rec) { try { rec.stop(); } catch (e) {} rec = null; }
      if (stopRaf) { stopRaf(); stopRaf = null; }
      if (C) { C.dispose(); C = null; }
    }

    function finish(pct, said, html) {
      teardown();
      scores.push(pct);
      const fb = document.getElementById("fb");
      sound(pct >= 70 ? "good" : "bad");
      hud.setScore(avg() + "%");
      if (pct >= 70) { hud.setCombo((s._combo = (s._combo || 0) + 1)); hud.pop("+" + pct, ""); }
      else { s._combo = 0; hud.setCombo(0); hud.pop("✗", "bad"); }
      fb.innerHTML =
        '<div class="fb ' + (pct >= 70 ? "good" : "bad") + '">' + pct + "% match</div>" +
        '<div class="tscript">' + html + "</div>" +
        '<div class="btnrow" style="margin-top:12px"><button class="btn" id="next">Next →</button></div>';
      document.getElementById("next").onclick = () => { i++; ctx.save({ i, scores }); render(); };
    }

    function startRec(sentence, btn, tbox) {
      btn.classList.add("on"); btn.textContent = "⏹ Stop";
      tbox.style.display = "block"; tbox.textContent = "…";
      C = ctx.canvas(90); const g = C.ctx;
      let target = 0.2;
      stopRaf = ctx.raf((dt, now) => {
        target = clamp(target + rand(-0.25, 0.25), 0.08, 1);
        level += (target - level) * Math.min(1, dt * 8);
        g.clearRect(0, 0, C.w, C.h);
        const mid = C.h / 2, bars = Math.floor(C.w / 6);
        for (let b = 0; b < bars; b++) {
          const ph = now / 200 + b * 0.4;
          const amp = (Math.sin(ph) * 0.5 + 0.5) * level * (0.5 + rand(0, 0.5));
          const h = Math.max(2, amp * (C.h - 10));
          g.fillStyle = "rgba(108,140,255," + (0.35 + amp * 0.6) + ")";
          g.fillRect(b * 6 + 1, mid - h / 2, 4, h);
        }
      });
      rec = ctx.record({
        continuous: false, maxMs: 8000,
        onText: t => { tbox.textContent = t || "…"; }
      });
      if (!rec) { score(sentence, tbox.textContent); return; }
      rec.promise.then(said => score(sentence, said));
    }

    function score(sentence, said) {
      const r = ctx.compare(sentence, said || "");
      finish(r.pct, said, r.html);
    }

    function render() {
      teardown();
      if (i >= items.length) { return ctx.done(avg(), "Average match across " + items.length + " items."); }
      const sentence = items[i];
      const supported = ctx.canSTT;
      stage.innerHTML = hud.bar(i, items.length) +
        '<div class="card">' +
          '<div class="hint">🎤 Listen, then repeat the sentence aloud. Match the words as closely as you can.</div>' +
          '<div class="prompt-big">' + esc(sentence) + "</div>" +
          '<div class="btnrow" style="margin-top:12px">' +
            '<button class="btn ghost" id="hear">🔊 Hear it</button>' +
            (supported ? '<button class="btn rec" id="rec">🎤 Record & repeat</button>' : "") +
          "</div>" +
          (supported
            ? '<div class="tscript" id="tscript" style="display:none"></div>'
            : '<div class="warnbox">Speech recognition needs Chrome/Edge desktop. Type the sentence from memory instead.</div>' +
              '<textarea class="txt" id="txt" rows="3" placeholder="Type what you heard…"></textarea>' +
              '<div class="btnrow" style="margin-top:10px"><button class="btn" id="check">Check</button></div>') +
          '<div id="fb"></div>' +
        "</div>";

      document.getElementById("hear").onclick = () => ctx.speak(sentence);
      if (ctx.canTTS) ctx.speak(sentence);

      if (supported) {
        const btn = document.getElementById("rec");
        const tbox = document.getElementById("tscript");
        btn.onclick = () => {
          if (rec) { teardown(); return; }   // second click finishes (promise resolves -> score)
          startRec(sentence, btn, tbox);
        };
      } else {
        const ta = document.getElementById("txt");
        document.getElementById("check").onclick = () => score(sentence, ta.value);
      }
    }

    render();
  },
});
