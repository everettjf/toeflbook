/* TOEFL Daily Game — shared engine.
   Globals: CONTENT (content.js). Exposes window.TDG. */
(function () {
  "use strict";

  // ---------------- date helpers ----------------
  function parseDate(s) { const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d); }
  const START = parseDate(CONTENT.startDate);
  function dateForDay(n) { const d = new Date(START); d.setDate(d.getDate() + (n - 1)); return d; }
  function fmt(d) {
    const wk = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][d.getDay()];
    return wk + " " + (d.getMonth() + 1) + "/" + d.getDate();
  }
  function todayDayNum() {
    const now = new Date(); const t = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return Math.floor((t - START) / 86400000) + 1;
  }
  function chapterOf(day) {
    return CONTENT.chapters.find(c => day >= c.from && day <= c.to) || null;
  }

  // ---------------- progress (localStorage) ----------------
  const KEY = "tdg_progress_v1";
  const Progress = {
    _load() { try { return JSON.parse(localStorage.getItem(KEY)) || { days: {} }; } catch (e) { return { days: {} }; } },
    _save(o) { try { localStorage.setItem(KEY, JSON.stringify(o)); } catch (e) {} },
    get(day) { return this._load().days[day] || null; },
    complete(day, pct) {
      const s = this._load(); const prev = s.days[day] || { best: 0, plays: 0 };
      s.days[day] = { done: true, best: Math.max(prev.best, Math.round(pct)), plays: prev.plays + 1 };
      this._save(s);
    },
    stats() {
      const s = this._load(); const done = Object.keys(s.days).map(Number).filter(d => s.days[d].done).sort((a, b) => a - b);
      let streak = 0;
      if (done.length) { const top = done[done.length - 1]; streak = 1; for (let i = done.length - 2; i >= 0; i--) { if (done[i] === done[i + 1] - 1) streak++; else break; } }
      return { count: done.length, streak };
    },
  };

  // ---------------- speech ----------------
  const Speech = {
    canTTS: "speechSynthesis" in window,
    canSTT: !!(window.SpeechRecognition || window.webkitSpeechRecognition),
    speak(text, rate) {
      return new Promise(res => {
        if (!this.canTTS) { res(); return; }
        try { speechSynthesis.cancel(); } catch (e) {}
        const u = new SpeechSynthesisUtterance(text);
        u.lang = "en-US"; u.rate = rate || 0.95;
        u.onend = res; u.onerror = res;
        speechSynthesis.speak(u);
      });
    },
    record(opts) {
      opts = opts || {};
      const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SR) return null;
      const r = new SR(); r.lang = "en-US"; r.interimResults = true; r.continuous = !!opts.continuous;
      let finalText = "", resolve; const promise = new Promise(res => (resolve = res));
      r.onresult = e => {
        let interim = "";
        for (let i = e.resultIndex; i < e.results.length; i++) {
          const t = e.results[i][0].transcript;
          if (e.results[i].isFinal) finalText += t + " "; else interim += t;
        }
        if (opts.onText) opts.onText((finalText + " " + interim).trim());
      };
      r.onend = () => resolve(finalText.trim());
      r.onerror = () => {};
      try { r.start(); } catch (e) {}
      let timer = opts.maxMs ? setTimeout(() => { try { r.stop(); } catch (e) {} }, opts.maxMs) : null;
      return { promise, stop() { if (timer) clearTimeout(timer); try { r.stop(); } catch (e) {} } };
    },
  };

  // ---------------- scoring ----------------
  function norm(s) { return (s || "").toLowerCase().replace(/[^a-z0-9'\s]/g, " ").replace(/\s+/g, " ").trim(); }
  function tokens(s) { const n = norm(s); return n ? n.split(" ") : []; }
  // longest common subsequence over token arrays → returns set of matched indices in A
  function lcsMatch(a, b) {
    const n = a.length, m = b.length, dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
    for (let i = 1; i <= n; i++) for (let j = 1; j <= m; j++)
      dp[i][j] = a[i - 1] === b[j - 1] ? dp[i - 1][j - 1] + 1 : Math.max(dp[i - 1][j], dp[i][j - 1]);
    const matched = new Set(); let i = n, j = m;
    while (i > 0 && j > 0) {
      if (a[i - 1] === b[j - 1]) { matched.add(i - 1); i--; j--; }
      else if (dp[i - 1][j] >= dp[i][j - 1]) i--; else j--;
    }
    return { matched, len: dp[n][m] };
  }
  // returns { pct, html } comparing what was said vs target
  function compare(target, said) {
    const t = tokens(target), s = tokens(said);
    if (!t.length) return { pct: 0, html: "" };
    const { matched, len } = lcsMatch(t, s);
    const pct = Math.round((len / t.length) * 100);
    const orig = target.split(/\s+/);
    const html = orig.map((w, i) => {
      const cls = matched.has(i) ? "w-ok" : "w-miss";
      return '<span class="' + cls + '">' + esc(w) + "</span>";
    }).join(" ");
    return { pct, html };
  }
  function esc(s) { return (s + "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }
  function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

  // ---------------- UI shell ----------------
  const SKILL = { listening: "--listening", speaking: "--speaking", reading: "--reading", writing: "--writing", mixed: "--mixed" };
  let scoreEl;
  function shell(day, cfg) {
    const app = document.getElementById("app");
    const color = "var(" + (SKILL[cfg.skill] || "--mixed") + ")";
    const d = dateForDay(day);
    app.innerHTML =
      '<div class="topbar">' +
        '<a class="back" href="index.html">← Calendar</a>' +
        '<span class="daychip">Day ' + day + " · " + fmt(d) + "</span>" +
        '<span class="skillbadge" style="background:' + color + '">' + cfg.skill + "</span>" +
        '<span class="spacer"></span>' +
        '<span class="scorepill" id="scorepill">·</span>' +
      "</div>" +
      "<h1>" + esc(cfg.title) + "</h1>" +
      '<p class="sub">' + esc(cfg.blurb) + "</p>" +
      '<div id="stage"></div>';
    scoreEl = document.getElementById("scorepill");
    return document.getElementById("stage");
  }
  function setScore(txt) { if (scoreEl) scoreEl.textContent = txt; }
  function progressBar(i, total) {
    return '<div class="progress"><i style="width:' + Math.round((i / total) * 100) + '%"></i></div>' +
      '<div class="meta"><span>Item ' + Math.min(i + 1, total) + " / " + total + "</span><span></span></div>";
  }
  function stars(pct) { return pct >= 90 ? 3 : pct >= 70 ? 2 : pct >= 50 ? 1 : 0; }
  function result(day, pct, extra) {
    Progress.complete(day, pct);
    const st = stars(pct);
    const stage = document.getElementById("stage");
    stage.innerHTML =
      '<div class="card result">' +
        '<div class="stars">' + ("⭐".repeat(st) || "—") + "</div>" +
        '<div class="bignum">' + Math.round(pct) + "%</div>" +
        "<p class=\"hint\">" + (extra || "") + "</p>" +
        '<div class="btnrow" style="justify-content:center;margin-top:14px">' +
          '<button class="btn" onclick="location.reload()">Play again</button>' +
          '<a class="btn ghost" href="index.html">Back to calendar</a>' +
          (CONTENT.days[day + 1] ? '<a class="btn ghost" href="day-' + String(day + 1).padStart(3, "0") + '.html">Next day →</a>' : "") +
        "</div>" +
      "</div>";
    setScore(Math.round(pct) + "%");
  }

  // ---------------- games ----------------
  const Games = {};

  // 1) vocab-match : word + 4 options
  Games["vocab-match"] = function (stage, day, cfg) {
    const items = cfg.data.items; let i = 0, correct = 0;
    function render() {
      if (i >= items.length) return result(day, (correct / items.length) * 100, correct + " / " + items.length + " correct.");
      const it = items[i]; const opts = shuffle(it.options);
      stage.innerHTML = progressBar(i, items.length) +
        '<div class="card"><div class="prompt-big">' + esc(it.word) + "</div>" +
        opts.map(o => '<button class="choice">' + esc(o) + "</button>").join("") +
        '<div class="fb neutral" id="fb">Pick the best meaning.</div></div>';
      const btns = stage.querySelectorAll(".choice");
      btns.forEach(b => b.onclick = () => {
        btns.forEach(x => x.disabled = true);
        const ok = b.textContent === it.correct;
        if (ok) { correct++; b.classList.add("correct"); }
        else { b.classList.add("wrong"); btns.forEach(x => { if (x.textContent === it.correct) x.classList.add("correct"); }); }
        document.getElementById("fb").className = "fb " + (ok ? "good" : "bad");
        document.getElementById("fb").textContent = ok ? "Correct!" : "Answer: " + it.correct;
        setScore(correct + "/" + items.length);
        setTimeout(() => { i++; render(); }, ok ? 650 : 1500);
      });
    }
    render();
  };

  // 2) dictation-sprint : TTS → type → word accuracy
  Games["dictation-sprint"] = function (stage, day, cfg) {
    const list = cfg.data.sentences; let i = 0; const scores = [];
    const noTTS = !Speech.canTTS;
    function render() {
      if (i >= list.length) { const avg = scores.reduce((a, b) => a + b, 0) / scores.length; return result(day, avg, "Average word accuracy across " + list.length + " sentences."); }
      const target = list[i];
      stage.innerHTML = progressBar(i, list.length) +
        (noTTS ? '<div class="warnbox">⚠️ No speech synthesis in this browser (use Chrome/Edge desktop for real listening practice). The sentence is shown below so you can still complete the day.</div>' : "") +
        '<div class="card">' +
          (noTTS ? '<div class="prompt-big">' + esc(target) + "</div>" :
          '<div class="btnrow"><button class="btn" id="play">🔊 Play sentence</button><button class="btn ghost" id="slow">🐢 Slower</button></div>') +
          '<textarea class="txt" id="inp" placeholder="Type exactly what you hear…" style="margin-top:14px;min-height:90px"></textarea>' +
          '<div class="btnrow" style="margin-top:12px"><button class="btn" id="check">Check</button></div>' +
          '<div id="fb"></div>' +
        "</div>";
      if (!noTTS) {
        document.getElementById("play").onclick = () => Speech.speak(target);
        document.getElementById("slow").onclick = () => Speech.speak(target, 0.7);
        Speech.speak(target);
      }
      document.getElementById("check").onclick = () => {
        const said = document.getElementById("inp").value;
        const r = compare(target, said); scores.push(r.pct);
        document.getElementById("fb").innerHTML =
          '<div class="fb ' + (r.pct >= 70 ? "good" : "bad") + '">' + r.pct + "% — target was:</div>" +
          '<div class="tscript">' + r.html + "</div>" +
          '<div class="btnrow" style="margin-top:12px"><button class="btn" id="next">Next →</button></div>';
        document.getElementById("check").disabled = true;
        document.getElementById("next").onclick = () => { i++; render(); };
      };
    }
    render();
  };

  // 3) listen-repeat : TTS → speak → STT word match
  Games["listen-repeat"] = function (stage, day, cfg) {
    const items = cfg.data.items; let i = 0; const scores = [];
    const sttOk = Speech.canSTT;
    if (!sttOk) sttWarn(stage);
    function render() {
      if (i >= items.length) { const avg = scores.reduce((a, b) => a + b, 0) / scores.length; return result(day, avg, "Average match across " + items.length + " items."); }
      const target = items[i];
      stage.innerHTML = progressBar(i, items.length) +
        '<div class="card">' +
          '<div class="prompt-big">' + esc(target) + "</div>" +
          '<div class="btnrow"><button class="btn ghost" id="hear">🔊 Hear it</button>' +
            (sttOk ? '<button class="btn rec" id="rec">🎤 Record &amp; repeat</button>' : "") + "</div>" +
          (sttOk ? '<div class="tscript" id="ts">…</div>' : '<textarea class="txt" id="inp" placeholder="(speech not supported here) — type the sentence from memory" style="margin-top:12px"></textarea><div class="btnrow" style="margin-top:10px"><button class="btn" id="check">Check</button></div>') +
          '<div id="fb"></div>' +
        "</div>";
      document.getElementById("hear").onclick = () => Speech.speak(target);
      Speech.speak(target);
      if (sttOk) {
        const recBtn = document.getElementById("rec"); let ctrl = null;
        recBtn.onclick = () => {
          if (ctrl) { ctrl.stop(); return; }
          recBtn.classList.add("on"); recBtn.textContent = "■ Stop";
          document.getElementById("ts").textContent = "Listening…";
          ctrl = Speech.record({ continuous: false, maxMs: 8000, onText: t => document.getElementById("ts").textContent = t || "…" });
          ctrl.promise.then(said => {
            recBtn.classList.remove("on"); recBtn.textContent = "🎤 Record & repeat"; ctrl = null;
            const r = compare(target, said); scores.push(r.pct);
            document.getElementById("fb").innerHTML =
              '<div class="fb ' + (r.pct >= 70 ? "good" : "bad") + '">' + r.pct + "% match</div>" +
              '<div class="tscript">' + r.html + "</div>" +
              '<div class="btnrow" style="margin-top:12px"><button class="btn" id="next">Next →</button></div>';
            document.getElementById("next").onclick = () => { i++; render(); };
          });
        };
      } else {
        document.getElementById("check").onclick = () => {
          const r = compare(target, document.getElementById("inp").value); scores.push(r.pct);
          document.getElementById("fb").innerHTML = '<div class="fb ' + (r.pct >= 70 ? "good" : "bad") + '">' + r.pct + "%</div><div class=\"btnrow\" style=\"margin-top:12px\"><button class=\"btn\" id=\"next\">Next →</button></div>";
          document.getElementById("next").onclick = () => { i++; render(); };
        };
      }
    }
    render();
  };

  // 4) complete-words : fill the partly-blanked word
  Games["complete-words"] = function (stage, day, cfg) {
    const items = cfg.data.items; let i = 0, correct = 0;
    function render() {
      if (i >= items.length) return result(day, (correct / items.length) * 100, correct + " / " + items.length + " correct.");
      const it = items[i];
      stage.innerHTML = progressBar(i, items.length) +
        '<div class="card"><div class="prompt-big">' + esc(it.sentence) + "</div>" +
          '<input class="txt" id="inp" placeholder="Type the full word" autocomplete="off" autocapitalize="off">' +
          '<div class="btnrow" style="margin-top:12px"><button class="btn" id="check">Check</button></div>' +
          '<div id="fb"></div></div>';
      const inp = document.getElementById("inp"); inp.focus();
      function check() {
        const ok = norm(inp.value) === norm(it.answer);
        if (ok) correct++;
        document.getElementById("fb").innerHTML = '<div class="fb ' + (ok ? "good" : "bad") + '">' + (ok ? "Correct!" : "Answer: " + esc(it.answer)) + '</div><div class="btnrow" style="margin-top:12px"><button class="btn" id="next">Next →</button></div>';
        document.getElementById("check").disabled = true; inp.disabled = true;
        setScore(correct + "/" + items.length);
        document.getElementById("next").onclick = () => { i++; render(); };
      }
      document.getElementById("check").onclick = check;
      inp.addEventListener("keydown", e => { if (e.key === "Enter") check(); });
    }
    render();
  };

  // 5) interview-responder : prompt + 45s record + self-rate
  Games["interview-responder"] = function (stage, day, cfg) {
    const prompts = cfg.data.prompts; const secs = cfg.data.seconds || 45; let i = 0; const rates = [];
    const sttOk = Speech.canSTT;
    function render() {
      if (i >= prompts.length) { const avg = rates.reduce((a, b) => a + b, 0) / rates.length * 20; return result(day, avg, "Average self-rating across " + prompts.length + " answers."); }
      const p = prompts[i];
      stage.innerHTML = progressBar(i, prompts.length) +
        '<div class="card"><div class="prompt-big">' + esc(p) + "</div>" +
          '<div class="hint">No prep time — just like the real test. Hit start and speak for ' + secs + 's.</div>' +
          '<div class="btnrow" style="margin-top:12px"><button class="btn rec" id="go">▶ Start ' + secs + "s</button></div>" +
          '<div class="tscript" id="ts" style="margin-top:12px">Your spoken answer will appear here…</div>' +
          '<div id="fb"></div></div>';
      const go = document.getElementById("go");
      go.onclick = () => {
        const ts = document.getElementById("ts"); ts.textContent = "Listening…";
        let remaining = secs; go.disabled = true; go.classList.add("on");
        const tick = setInterval(() => { remaining--; go.textContent = "● " + remaining + "s"; if (remaining <= 0) clearInterval(tick); }, 1000);
        let ctrl = sttOk ? Speech.record({ continuous: true, maxMs: secs * 1000, onText: t => ts.textContent = t || "…" }) : null;
        const finish = said => {
          clearInterval(tick); go.classList.remove("on"); go.textContent = "▶ Start " + secs + "s";
          const words = tokens(said).length; const wpm = Math.round(words / (secs / 60));
          ts.textContent = said || "(no speech captured)";
          document.getElementById("fb").innerHTML =
            '<div class="fb neutral">Words: ' + words + " · ~" + (isFinite(wpm) ? wpm : 0) + ' wpm. Rate your own answer:</div>' +
            '<div class="btnrow" id="rate" style="margin-top:8px">' + [1, 2, 3, 4, 5].map(n => '<button class="btn ghost" data-n="' + n + '">' + "⭐".repeat(n) + "</button>").join("") + "</div>";
          stage.querySelectorAll("#rate button").forEach(b => b.onclick = () => { rates.push(+b.dataset.n); i++; render(); });
        };
        if (ctrl) ctrl.promise.then(finish);
        else setTimeout(() => finish(""), secs * 1000);
      };
    }
    render();
  };

  // 6) inference-detective : passage + question + 4 options + why
  Games["inference-detective"] = function (stage, day, cfg) {
    const items = cfg.data.items; let i = 0, correct = 0;
    function render() {
      if (i >= items.length) return result(day, (correct / items.length) * 100, correct + " / " + items.length + " correct.");
      const it = items[i]; const order = shuffle(it.options.map((o, idx) => ({ o, idx })));
      stage.innerHTML = progressBar(i, items.length) +
        '<div class="card"><p style="font-size:17px;line-height:1.6">' + esc(it.passage) + "</p>" +
          '<div class="prompt-big" style="font-size:19px">' + esc(it.question) + "</div>" +
          order.map(x => '<button class="choice" data-i="' + x.idx + '">' + esc(x.o) + "</button>").join("") +
          '<div id="fb"></div></div>';
      const btns = stage.querySelectorAll(".choice");
      btns.forEach(b => b.onclick = () => {
        btns.forEach(x => x.disabled = true);
        const chosen = +b.dataset.i; const ok = chosen === it.correct;
        if (ok) correct++; else btns.forEach(x => { if (+x.dataset.i === it.correct) x.classList.add("correct"); });
        b.classList.add(ok ? "correct" : "wrong");
        document.getElementById("fb").innerHTML = '<div class="fb ' + (ok ? "good" : "bad") + '">' + (ok ? "Correct! " : "Not quite. ") + esc(it.why) + '</div><div class="btnrow" style="margin-top:12px"><button class="btn" id="next">Next →</button></div>';
        setScore(correct + "/" + items.length);
        document.getElementById("next").onclick = () => { i++; render(); };
      });
    }
    render();
  };

  // 7) sentence-builder : click tiles into order
  Games["sentence-builder"] = function (stage, day, cfg) {
    const items = cfg.data.items; let i = 0, correct = 0;
    function render() {
      if (i >= items.length) return result(day, (correct / items.length) * 100, correct + " / " + items.length + " sentences correct.");
      const words = items[i].answer.replace(/[.]$/, "").split(" ");
      let bank = shuffle(words.map((w, idx) => ({ w, id: idx }))); let line = [];
      stage.innerHTML = progressBar(i, items.length) +
        '<div class="card"><div class="hint">Tap words to build a correct sentence. Tap a placed word to send it back.</div>' +
          '<div class="tileline" id="line"></div>' +
          '<div class="tilebank" id="bank"></div>' +
          '<div class="btnrow" style="margin-top:14px"><button class="btn" id="check">Check</button><button class="btn ghost" id="reset">Reset</button></div>' +
          '<div id="fb"></div></div>';
      function draw() {
        const lineEl = document.getElementById("line"), bankEl = document.getElementById("bank");
        lineEl.innerHTML = line.map(t => '<span class="tile" data-id="' + t.id + '" data-where="line">' + esc(t.w) + "</span>").join("") || '<span class="hint">…build here…</span>';
        bankEl.innerHTML = bank.map(t => '<span class="tile" data-id="' + t.id + '" data-where="bank">' + esc(t.w) + "</span>").join("");
        stage.querySelectorAll(".tile").forEach(el => el.onclick = () => {
          const id = +el.dataset.id;
          if (el.dataset.where === "bank") { const t = bank.find(x => x.id === id); bank = bank.filter(x => x.id !== id); line.push(t); }
          else { const t = line.find(x => x.id === id); line = line.filter(x => x.id !== id); bank.push(t); }
          draw();
        });
      }
      draw();
      document.getElementById("reset").onclick = () => { bank = shuffle(words.map((w, idx) => ({ w, id: idx }))); line = []; draw(); };
      document.getElementById("check").onclick = () => {
        const built = line.map(t => t.w).join(" ");
        const ok = norm(built) === norm(items[i].answer);
        if (ok) correct++;
        document.getElementById("fb").innerHTML = '<div class="fb ' + (ok ? "good" : "bad") + '">' + (ok ? "Correct!" : "Target: " + esc(items[i].answer)) + '</div><div class="btnrow" style="margin-top:12px"><button class="btn" id="next">Next →</button></div>';
        setScore(correct + "/" + items.length);
        document.getElementById("next").onclick = () => { i++; render(); };
      };
    }
    render();
  };

  // ---------------- warnings ----------------
  function ttsWarn(stage) {
    if (!Speech.canTTS) stage.innerHTML = '<div class="warnbox">⚠️ Your browser doesn\'t support speech synthesis. Use Chrome or Edge on desktop for audio. You can still read the target after checking.</div>';
  }
  function sttWarn(stage) {
    stage.innerHTML = '<div class="warnbox">⚠️ Speech recognition isn\'t available in this browser. Best in Chrome/Edge on desktop. Falling back to a typing mode so you can still complete the day.</div>';
  }

  // ---------------- router ----------------
  function start(day) {
    const cfg = CONTENT.days[day];
    const stage = shell(day, cfg || { skill: "mixed", title: "Day " + day, blurb: "" });
    if (!cfg) { stage.innerHTML = '<div class="card"><p>This day\'s game isn\'t built yet. <a href="index.html">Back to calendar</a>.</p></div>'; return; }
    const game = Games[cfg.gameType];
    if (!game) { stage.innerHTML = '<div class="card"><p>Unknown game type.</p></div>'; return; }
    const prev = Progress.get(day); if (prev && prev.best) setScore("best " + prev.best + "%");
    game(stage, day, cfg);
  }

  window.TDG = { start, Progress, Speech, dateForDay, fmt, todayDayNum, chapterOf, CONTENT };
})();
