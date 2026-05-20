/* sentence-builder — Writing. Tap scrambled word tiles into order.
   TOEFL 2026 "Build a Sentence". data: { items:[{ answer:"..." }] } */
TDG.engine("sentence-builder", {
  uses: "scramble", label: "Sentence Builder",
  play(ctx) {
    const { stage, data, hud, esc, shuffle, norm, sound } = ctx;
    const items = data.items; const s = ctx.session || {};
    let i = s.i || 0, correct = s.correct || 0;

    // one-time pop animation for landed tiles
    if (!document.getElementById("sb-style")) {
      const st = document.createElement("style");
      st.id = "sb-style";
      st.textContent =
        "@keyframes sb-pop{0%{transform:scale(.4);opacity:.2}60%{transform:scale(1.18)}100%{transform:scale(1);opacity:1}}" +
        ".tile.sb-land{animation:sb-pop .22s ease-out}";
      document.head.appendChild(st);
    }
    hud.setScore(correct + "/" + items.length);

    function words(answer) { return answer.replace(/\.\s*$/, "").split(/\s+/).filter(Boolean); }

    function render() {
      if (i >= items.length)
        return ctx.done((correct / items.length) * 100, correct + " / " + items.length + " sentences built. ✍️");

      const it = items[i];
      const target = words(it.answer);                 // correct order, w/o trailing "."
      const total = target.length;
      // tiles: { id, text }, unique id so repeated words work
      const bank = shuffle(target.map((w, k) => ({ id: k, text: w })));
      const line = [];                                  // placed tiles, in order

      stage.innerHTML = hud.bar(i, items.length) +
        '<div class="card">' +
          '<div class="hint">✍️ Tap the words to build a correct sentence. Tap a placed word to send it back.</div>' +
          '<div class="meta" style="margin-top:10px"><span id="count">words placed 0/' + total + '</span><span></span></div>' +
          '<div class="tileline" id="line"></div>' +
          '<div class="tilebank" id="bank"></div>' +
          '<div id="fb"></div>' +
          '<div class="btnrow" style="margin-top:14px">' +
            '<button class="btn" id="check">Check</button>' +
            '<button class="btn ghost" id="hint">Hint</button>' +
            '<button class="btn ghost" id="reset">Reset</button>' +
          "</div>" +
        "</div>";

      const lineEl = document.getElementById("line");
      const bankEl = document.getElementById("bank");
      const countEl = document.getElementById("count");
      const fbEl = document.getElementById("fb");

      function tileEl(t, where) {
        const e = document.createElement("button");
        e.className = "tile sb-land";
        e.textContent = t.text;
        e.dataset.id = t.id;
        e.onclick = () => (where === "bank" ? place(t.id) : unplace(t.id));
        setTimeout(() => e.classList.remove("sb-land"), 240);
        return e;
      }
      function draw() {
        lineEl.innerHTML = ""; bankEl.innerHTML = "";
        line.forEach(t => lineEl.appendChild(tileEl(t, "line")));
        bank.forEach(t => bankEl.appendChild(tileEl(t, "bank")));
        countEl.textContent = "words placed " + line.length + "/" + total;
      }
      function place(id) {
        const k = bank.findIndex(t => t.id === id); if (k < 0) return;
        line.push(bank.splice(k, 1)[0]); sound("pop"); fbEl.innerHTML = ""; draw();
      }
      function unplace(id) {
        const k = line.findIndex(t => t.id === id); if (k < 0) return;
        bank.push(line.splice(k, 1)[0]); fbEl.innerHTML = ""; draw();
      }

      document.getElementById("hint").onclick = () => {
        // place the next correct word (by target order at current position)
        const want = target[line.length]; if (want === undefined) return;
        const k = bank.findIndex(t => t.text === want);
        if (k >= 0) { line.push(bank.splice(k, 1)[0]); sound("pop"); fbEl.innerHTML = ""; draw(); }
      };
      document.getElementById("reset").onclick = () => {
        while (line.length) bank.push(line.pop());
        fbEl.innerHTML = ""; draw();
      };
      document.getElementById("check").onclick = () => {
        const built = line.map(t => t.text).join(" ");
        const ok = norm(built) === norm(it.answer);
        if (ok) {
          correct++; sound("good"); hud.pop("+1", "");
          hud.setCombo(correct >= 1 ? correct : 0);
          fbEl.innerHTML = '<div class="fb good">Correct! 🎉</div>';
        } else {
          sound("bad"); hud.pop("✗", "bad"); hud.setCombo(0);
          fbEl.innerHTML = '<div class="fb bad">Not quite. Target: ' + esc(it.answer) + "</div>";
        }
        hud.setScore(correct + "/" + items.length);
        fbEl.innerHTML += '<div class="btnrow" style="margin-top:12px"><button class="btn" id="next">Next →</button></div>';
        document.getElementById("next").onclick = () => { i++; ctx.save({ i, correct }); render(); };
      };

      draw();
    }
    render();
  },
});
