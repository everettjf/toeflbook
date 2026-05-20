/* email-composer — Writing. TOEFL 2026 email task: read a scenario, draft a
   short email (subject + body), then self-check against a rubric checklist.
   Honest self-assessment is the study habit being trained.
   DOM-based, faux email "card" with To / Subject / Body.
   data: { tasks:[ { prompt, scenario?, checklist:[ "..." ], minWords:50,
                      tips?:"...", sample?:"..." } ] } */
TDG.engine("email-composer", {
  uses: "writing", label: "Email Composer",
  play(ctx) {
    const { stage, data, hud, esc, sound, clamp } = ctx;
    const tasks = (data && data.tasks) || [];
    const s = ctx.session || {};
    let i = s.i || 0;
    let scores = s.scores || [];

    function avg(arr) { return arr.length ? Math.round(arr.reduce((a, b) => a + b, 0) / arr.length) : 0; }
    function refreshHud() { hud.setScore(scores.length ? avg(scores) + "%" : "·"); }
    function wordCount(t) { const m = (t || "").trim().match(/\S+/g); return m ? m.length : 0; }

    function render() {
      if (i >= tasks.length) {
        return ctx.done(avg(scores), "Drafted " + tasks.length + " emails. Keep practicing length + completeness.");
      }
      const t = tasks[i];
      const minWords = t.minWords || 50;

      stage.innerHTML = hud.bar(i, tasks.length) +
        '<div class="card">' +
          '<div class="hint">✉️ Read the situation, then write a short, complete email.</div>' +
          '<div class="prompt-big" style="font-size:19px;margin:10px 0 6px">' + esc(t.prompt) + "</div>" +
          (t.scenario ? '<p style="font-size:15px;line-height:1.6;color:var(--muted,#9aa);margin:4px 0 10px">' + esc(t.scenario) + "</p>" : "") +
          (t.tips ? '<div class="hint">💡 ' + esc(t.tips) + "</div>" : "") +
          '<div class="card" style="margin-top:12px;padding:0;overflow:hidden">' +
            '<div style="background:rgba(255,255,255,0.05);padding:8px 12px;font-size:13px;color:var(--muted,#9aa);border-bottom:1px solid rgba(255,255,255,0.08)">To: recipient · New message</div>' +
            '<div style="padding:10px 12px">' +
              '<input class="txt" id="subject" placeholder="Subject line (optional)" spellcheck="false" style="margin:0 0 8px">' +
              '<textarea class="txt" id="body" placeholder="Write your email here…" spellcheck="false" style="min-height:180px;margin:0"></textarea>' +
            "</div>" +
          "</div>" +
          '<div class="meta" style="margin-top:8px"><span></span>' +
            '<span id="wc" class="hint">0 / ' + minWords + " words</span></div>" +
          '<div class="btnrow" style="margin-top:12px"><button class="btn" id="submit">Submit</button></div>' +
          '<div id="fb"></div>' +
        "</div>";

      const subject = stage.querySelector("#subject");
      const body = stage.querySelector("#body");
      const wc = stage.querySelector("#wc");
      const submitBtn = stage.querySelector("#submit");
      const fb = stage.querySelector("#fb");

      function updateCount() {
        const n = wordCount(body.value);
        const ok = n >= minWords;
        wc.textContent = n + " / " + minWords + " words";
        wc.style.color = ok ? "var(--accent,#4ade80)" : "";
      }
      body.addEventListener("input", updateCount);
      updateCount();
      body.focus();

      function submit() {
        submitBtn.disabled = true;
        subject.disabled = true;
        body.disabled = true;
        const words = wordCount(body.value);
        const checklist = t.checklist || [];
        const checked = new Set();

        function score() {
          const lenPct = clamp(words / minWords, 0, 1);
          const covPct = checklist.length ? (checked.size / checklist.length) : 1;
          return Math.round(50 * lenPct + 50 * covPct);
        }

        fb.innerHTML =
          '<div class="fb good">Nice — you drafted ' + words + " word" + (words === 1 ? "" : "s") +
            ". Now self-check: tick each rubric point you actually covered (be honest!).</div>" +
          '<div id="checks" style="margin-top:10px">' +
            checklist.map((c, idx) =>
              '<button class="choice" data-i="' + idx + '" style="text-align:left">☐ ' + esc(c) + "</button>"
            ).join("") +
          "</div>" +
          (t.sample
            ? '<div class="hint" style="margin-top:12px">📩 Model answer:</div><div class="tscript">' + esc(t.sample) + "</div>"
            : '<div class="hint" style="margin-top:12px">No model answer for this one — compare against the checklist above and your word count. Keep it tight and complete!</div>') +
          '<div class="meta" style="margin-top:10px"><span id="sc" class="hint"></span><span></span></div>' +
          '<div class="btnrow" style="margin-top:8px"><button class="btn" id="next">Next →</button></div>';

        const sc = fb.querySelector("#sc");
        function refreshScore() { sc.textContent = "Self-score: " + score() + "% (" + checked.size + "/" + checklist.length + " covered)"; }
        refreshScore();

        fb.querySelectorAll("#checks .choice").forEach(b => {
          b.onclick = () => {
            const idx = +b.dataset.i;
            if (checked.has(idx)) { checked.delete(idx); b.classList.remove("correct"); b.textContent = "☐ " + checklist[idx]; }
            else { checked.add(idx); b.classList.add("correct"); b.textContent = "☑ " + checklist[idx]; sound("pop"); }
            refreshScore();
          };
        });

        fb.querySelector("#next").onclick = () => {
          const pct = score();
          scores.push(pct);
          sound(pct >= 70 ? "good" : "tick");
          hud.pop("+" + pct + "%", pct >= 70 ? "" : "");
          refreshHud();
          i++;
          ctx.save({ i: i, scores: scores });
          render();
        };
      }
      submitBtn.onclick = submit;
    }

    refreshHud();
    render();
  },
});
