/* inference-detective — Reading. passage + question + options + why.
   DOM-based reference engine. data: { items:[{passage,question,options,correct,why}] } */
TDG.engine("inference-detective", {
  uses: "passage", label: "Inference Detective",
  play(ctx) {
    const { stage, data, hud, esc, shuffle, sound } = ctx;
    const items = data.items; const s = ctx.session || {};
    let i = s.i || 0, correct = s.correct || 0;
    function render() {
      if (i >= items.length) return ctx.done((correct / items.length) * 100, correct + " / " + items.length + " inferences cracked. 🕵️");
      const it = items[i];
      const order = shuffle(it.options.map((o, idx) => ({ o, idx })));
      stage.innerHTML = hud.bar(i, items.length) +
        '<div class="card"><div class="hint">🕵️ Read the evidence, then pick the inference the text actually supports.</div>' +
          '<p style="font-size:17px;line-height:1.65;margin:12px 0">' + esc(it.passage) + "</p>" +
          '<div class="prompt-big" style="font-size:20px">' + esc(it.question) + "</div>" +
          order.map(x => '<button class="choice" data-i="' + x.idx + '">' + esc(x.o) + "</button>").join("") +
          '<div id="fb"></div></div>';
      const btns = stage.querySelectorAll(".choice");
      btns.forEach(b => b.onclick = () => {
        btns.forEach(x => x.disabled = true);
        const chosen = +b.dataset.i, ok = chosen === it.correct;
        if (ok) { correct++; sound("good"); hud.pop("+1", ""); }
        else { sound("bad"); hud.pop("✗", "bad"); btns.forEach(x => { if (+x.dataset.i === it.correct) x.classList.add("correct"); }); }
        b.classList.add(ok ? "correct" : "wrong");
        document.getElementById("fb").innerHTML =
          '<div class="fb ' + (ok ? "good" : "bad") + '">' + (ok ? "Correct! " : "Not quite. ") + esc(it.why) + "</div>" +
          '<div class="btnrow" style="margin-top:12px"><button class="btn" id="next">Next →</button></div>';
        hud.setScore(correct + "/" + items.length);
        document.getElementById("next").onclick = () => { i++; ctx.save({ i, correct }); render(); };
      });
    }
    render();
  },
});
