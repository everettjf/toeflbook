/* discussion-arena — Writing (TOEFL Academic Discussion task).
   A professor poses a question, two classmates post opinions, and the player
   writes a contributing response. Self-check rubric scoring.
   data: { tasks:[{ prompt, professor?, posts?:[{name,text}], checklist:[...],
                     minWords:100, tips?, sample? }] } */
TDG.engine("discussion-arena", {
  uses: "writing", label: "Discussion Arena",
  play(ctx) {
    const { stage, data, hud, esc, clamp, sound } = ctx;
    const tasks = data.tasks;
    const s = ctx.session || {};
    let i = s.i || 0;
    let scores = s.scores || [];

    function mean(a) { return a.length ? a.reduce((x, y) => x + y, 0) / a.length : 0; }
    function countWords(t) { const m = (t || "").trim().match(/\S+/g); return m ? m.length : 0; }
    function avatar(name) { return esc((name || "?").trim().charAt(0).toUpperCase() || "?"); }

    function render() {
      if (i >= tasks.length) {
        return ctx.done(
          mean(scores),
          "Joined " + tasks.length + " discussions. Aim for a new reason + an example every time."
        );
      }
      const t = tasks[i];
      const minWords = t.minWords || 100;

      const postsHTML = (t.posts || []).map(p =>
        '<div class="forum-post">' +
          '<div class="avatar">' + avatar(p.name) + "</div>" +
          '<div class="bubble">' +
            '<div class="poster">' + esc(p.name || "Classmate") + "</div>" +
            '<div class="ptext">' + esc(p.text) + "</div>" +
          "</div>" +
        "</div>"
      ).join("");

      stage.innerHTML =
        hud.bar(i, tasks.length) +
        '<div class="card discussion-arena">' +
          '<div class="hint">💬 Class Discussion Board — read the thread, then post your own contribution.</div>' +
          (t.professor
            ? '<div class="forum-post prof">' +
                '<div class="avatar prof">🎓</div>' +
                '<div class="bubble">' +
                  '<div class="poster">Professor</div>' +
                  '<div class="ptext">' + esc(t.professor) + "</div>" +
                "</div>" +
              "</div>"
            : "") +
          '<div class="prompt-big" style="font-size:20px;margin:14px 0">' + esc(t.prompt) + "</div>" +
          postsHTML +
          (t.tips ? '<div class="hint">💡 ' + esc(t.tips) + "</div>" : "") +
          '<textarea class="txt" id="resp" rows="9" placeholder="Write your response… add a NEW reason and a specific example."></textarea>' +
          '<div class="meta"><span id="wc">0 words</span><span>need ' + minWords + "+</span></div>" +
          '<div class="btnrow" style="margin-top:12px"><button class="btn" id="post">Post response</button></div>' +
          '<div id="after"></div>' +
        "</div>";

      const ta = document.getElementById("resp");
      const wc = document.getElementById("wc");
      function updateCount() {
        const w = countWords(ta.value);
        wc.textContent = w + (w === 1 ? " word" : " words");
        wc.classList.toggle("ok", w >= minWords);
      }
      ta.addEventListener("input", updateCount);
      ta.value = s.draft && i === (s.i || 0) ? s.draft : "";
      updateCount();
      setTimeout(() => ta.focus(), 30);

      document.getElementById("post").onclick = () => submit(t, minWords);
    }

    function submit(t, minWords) {
      const ta = document.getElementById("resp");
      const words = countWords(ta.value);
      if (words === 0) { ta.focus(); return; }
      sound("pop");

      const checklist = t.checklist || [];
      const after = document.getElementById("after");
      document.getElementById("post").disabled = true;
      ta.disabled = true;

      after.innerHTML =
        '<div class="hint" style="margin-top:16px">✅ Self-check: tap each item you actually covered.</div>' +
        '<div class="selfcheck">' +
          checklist.map((c, idx) =>
            '<button class="check-item" data-i="' + idx + '"><span class="box">☐</span>' + esc(c) + "</button>"
          ).join("") +
        "</div>" +
        (t.sample
          ? '<div class="hint" style="margin-top:14px">📄 Model response:</div>' +
            '<div class="tscript">' + esc(t.sample) + "</div>"
          : "") +
        '<div class="meta" id="scoreline"><span></span><span></span></div>' +
        '<div class="btnrow" style="margin-top:8px"><button class="btn" id="next">Next →</button></div>';

      const checked = new Set();
      const items = after.querySelectorAll(".check-item");
      const scoreline = document.getElementById("scoreline").firstElementChild;

      function refresh() {
        const wordPart = 50 * clamp(words / minWords, 0, 1);
        const checkPart = checklist.length ? 50 * (checked.size / checklist.length) : 50;
        const pct = Math.round(wordPart + checkPart);
        scoreline.textContent = "Self-score: " + pct + "%  (" + words + " words · " +
          checked.size + "/" + checklist.length + " checked)";
        hud.setScore(pct + "%");
        return pct;
      }

      items.forEach(b => b.onclick = () => {
        const idx = +b.dataset.i;
        if (checked.has(idx)) { checked.delete(idx); b.classList.remove("on"); b.querySelector(".box").textContent = "☐"; }
        else { checked.add(idx); b.classList.add("on"); b.querySelector(".box").textContent = "☑"; sound("tick"); }
        refresh();
      });
      refresh();

      document.getElementById("next").onclick = () => {
        const wordPart = 50 * clamp(words / minWords, 0, 1);
        const checkPart = checklist.length ? 50 * (checked.size / checklist.length) : 50;
        scores.push(Math.round(wordPart + checkPart));
        i++;
        ctx.save({ i, scores });
        render();
      };
    }

    render();
  },
});
