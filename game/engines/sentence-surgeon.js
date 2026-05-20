/* sentence-surgeon — Writing / grammar error-correction. passage + question + options + why.
   DOM-based engine, "surgery" flavor. The `passage` holds the original (often flawed)
   sentence; `question` is the instruction (e.g. "Choose the correct revision."); `options`
   are candidate rewrites; `correct` is the index of the best fix; `why` explains the grammar.
   data: { items:[{passage,question,options,correct,why}] } */
TDG.engine("sentence-surgeon", {
  uses: "passage", label: "Sentence Surgeon",
  play(ctx) {
    const { stage, data, hud, esc, shuffle, sound } = ctx;
    const items = data.items;
    const s = ctx.session || {};
    let i = s.i || 0, correct = s.correct || 0, combo = 0;
    hud.setScore(correct + "/" + items.length);

    function render() {
      if (i >= items.length)
        return ctx.done((correct / items.length) * 100, correct + " / " + items.length + " sentences healed. 🩺");
      const it = items[i];
      const order = shuffle(it.options.map((o, idx) => ({ o, idx })));
      stage.innerHTML = hud.bar(i, items.length) +
        '<div class="card">' +
          '<div class="hint">🩺 Operating room — diagnose the flaw, then pick the cleanest revision.</div>' +
          '<div class="patient" style="margin:12px 0;padding:12px 14px;border-left:4px solid var(--writing,#e2725b);' +
            'background:rgba(226,114,91,.08);border-radius:8px;font-family:ui-monospace,Menlo,Consolas,monospace;' +
            'font-size:16px;line-height:1.6;color:#444">' +
            '<span style="opacity:.6;font-style:italic">🤕 Patient: </span>“' + esc(it.passage) + '”' +
          "</div>" +
          '<div class="prompt-big" style="font-size:19px;margin-bottom:6px">' + esc(it.question || "Choose the correct revision.") + "</div>" +
          order.map(x => '<button class="choice" data-i="' + x.idx + '">' + esc(x.o) + "</button>").join("") +
          '<div id="fb"></div>' +
        "</div>";

      const btns = stage.querySelectorAll(".choice");
      btns.forEach(b => b.onclick = () => {
        btns.forEach(x => x.disabled = true);
        const chosen = +b.dataset.i, ok = chosen === it.correct;
        if (ok) {
          correct++; combo++;
          sound("good"); hud.pop("✅ +1", ""); hud.pop("🩹", "");
        } else {
          combo = 0;
          sound("bad"); hud.pop("✗", "bad");
          btns.forEach(x => { if (+x.dataset.i === it.correct) x.classList.add("correct"); });
        }
        b.classList.add(ok ? "correct" : "wrong");
        hud.setScore(correct + "/" + items.length);
        hud.setCombo(combo);

        const flourish = ok
          ? "🩺 Operation successful — sutured clean. "
          : "🩹 Operation failed — the flaw remains. ";
        document.getElementById("fb").innerHTML =
          '<div class="fb ' + (ok ? "good" : "bad") + '">' + flourish + esc(it.why || "") + "</div>" +
          '<div class="btnrow" style="margin-top:12px"><button class="btn" id="next">Next patient →</button></div>';
        document.getElementById("next").onclick = () => {
          i++; ctx.save({ i, correct }); render();
        };
      });
    }
    render();
  },
});
