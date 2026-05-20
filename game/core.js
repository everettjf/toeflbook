/* ============================================================
   TOEFL Daily Game — CORE
   Shared engine for the daily mini-games.
   - Engine registry + per-day rotation (with 🎲 shuffle).
   - Progress + mid-game resume (localStorage).
   - Speech (TTS / STT), scoring, canvas + HUD helpers.

   Globals consumed: CONTENT (content.js).
   Exposes window.TDG.

   ---- ENGINE CONTRACT -------------------------------------------------
   Each file in engines/ registers itself:

     TDG.engine("word-runner", {
       uses: "vocab",        // data category (see DATA SHAPES below)
       threeD: false,        // optional — shows a 3D badge
       label: "Word Runner", // optional friendly name
       play(ctx) { ... }     // build the game inside ctx.stage
     });

   ctx = {
     stage,            // the DOM element to render into (already empty)
     day, skill,       // day number + skill string
     data,             // the day's data (shape depends on `uses`)
     hud,              // { setScore(txt), setCombo(n), pop(text,kind), bar(i,total) }
     session,          // saved resume state for this day (or null)
     save(state),      // persist resume state { i, ... }
     done(pct, msg),   // finish: records best %, clears session, shows result
     ...HELPERS        // speak, record, compare, tokens, norm, shuffle, esc,
                       // rand, clamp, lerp, canvas, on, raf, sound
   }

   ---- DATA SHAPES (by `uses`) -----------------------------------------
   vocab    : { items:[{ word, correct, options:[...] }] }
   dictation: { sentences:[ "..." ] }
   echo     : { items:[ "..." ] }
   prompts  : { seconds, prompts:[ "..." ] }
   passage  : { items:[{ passage, question, options:[...], correct, why }] }
   scramble : { items:[{ answer:"..." }] }

   Engines sharing a `uses` category are interchangeable — that's what
   the per-day rotation and 🎲 shuffle swap between.
   ==================================================================== */
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
  function chapterOf(day) { return CONTENT.chapters.find(c => day >= c.from && day <= c.to) || null; }

  // ---------------- progress + resume (localStorage) ----------------
  const KEY = "tdg_progress_v2";
  const Progress = {
    _load() { try { return JSON.parse(localStorage.getItem(KEY)) || { days: {}, sessions: {}, prefs: {} }; } catch (e) { return { days: {}, sessions: {}, prefs: {} }; } },
    _save(o) { try { localStorage.setItem(KEY, JSON.stringify(o)); } catch (e) {} },
    get(day) { return this._load().days[day] || null; },
    complete(day, pct) {
      const s = this._load(); const prev = s.days[day] || { best: 0, plays: 0 };
      s.days[day] = { done: true, best: Math.max(prev.best, Math.round(pct)), plays: prev.plays + 1, last: Date.now() };
      if (s.sessions) delete s.sessions[day];
      this._save(s);
    },
    session(day) { const s = this._load(); return (s.sessions && s.sessions[day]) || null; },
    saveSession(day, st) { const s = this._load(); (s.sessions = s.sessions || {})[day] = st; this._save(s); },
    clearSession(day) { const s = this._load(); if (s.sessions) delete s.sessions[day]; this._save(s); },
    pref(k, v) { const s = this._load(); s.prefs = s.prefs || {}; if (v === undefined) return s.prefs[k]; s.prefs[k] = v; this._save(s); },
    stats() {
      const s = this._load(); const done = Object.keys(s.days).map(Number).filter(d => s.days[d].done).sort((a, b) => a - b);
      let streak = 0;
      if (done.length) { streak = 1; for (let i = done.length - 2; i >= 0; i--) { if (done[i] === done[i + 1] - 1) streak++; else break; } }
      const bests = done.map(d => s.days[d].best || 0);
      const avg = bests.length ? Math.round(bests.reduce((a, b) => a + b, 0) / bests.length) : 0;
      return { count: done.length, streak, avg };
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
      const timer = opts.maxMs ? setTimeout(() => { try { r.stop(); } catch (e) {} }, opts.maxMs) : null;
      return { promise, stop() { if (timer) clearTimeout(timer); try { r.stop(); } catch (e) {} } };
    },
  };

  // ---------------- tiny WebAudio blips (game juice, no assets) ----------------
  let _ac = null;
  function sound(kind) {
    try {
      _ac = _ac || new (window.AudioContext || window.webkitAudioContext)();
      const t = _ac.currentTime, o = _ac.createOscillator(), g = _ac.createGain();
      const map = { good: [660, 990], bad: [200, 120], pop: [520, 760], tick: [880, 880], win: [523, 1046] };
      const [f0, f1] = map[kind] || map.tick;
      o.type = kind === "bad" ? "sawtooth" : "triangle";
      o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(f1, t + 0.12);
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.18, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.22);
      o.connect(g); g.connect(_ac.destination); o.start(t); o.stop(t + 0.24);
    } catch (e) {}
  }

  // ---------------- scoring ----------------
  function norm(s) { return (s || "").toLowerCase().replace(/[^a-z0-9'\s]/g, " ").replace(/\s+/g, " ").trim(); }
  function tokens(s) { const n = norm(s); return n ? n.split(" ") : []; }
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
  function compare(target, said) {
    const t = tokens(target), s = tokens(said);
    if (!t.length) return { pct: 0, html: "" };
    const { matched, len } = lcsMatch(t, s);
    const pct = Math.round((len / t.length) * 100);
    const orig = target.split(/\s+/);
    const html = orig.map((w, i) => '<span class="' + (matched.has(i) ? "w-ok" : "w-miss") + '">' + esc(w) + "</span>").join(" ");
    return { pct, html };
  }
  function esc(s) { return (s + "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }
  function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
  function rand(a, b) { return a + Math.random() * (b - a); }
  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
  function lerp(a, b, t) { return a + (b - a) * t; }
  function stars(pct) { return pct >= 90 ? 3 : pct >= 70 ? 2 : pct >= 50 ? 1 : 0; }

  // ---------------- engine registry + rotation ----------------
  const ENGINES = {}; // name -> def
  function engine(name, def) { def.name = name; ENGINES[name] = def; }
  function enginesFor(uses) { return Object.keys(ENGINES).filter(n => ENGINES[n].uses === uses); }

  // Deterministic per-day engine: start from the day's declared engine, then
  // rotate within its category by day number so the 4 weeks feel varied.
  function pickEngine(day, cfg) {
    const declared = cfg.engine;
    const base = ENGINES[declared] ? ENGINES[declared].uses : (cfg.uses || "vocab");
    const pool = enginesFor(base);
    if (!pool.length) return declared && ENGINES[declared] ? declared : null;
    if (Progress.pref("shuffle")) return pool[Math.floor(Math.random() * pool.length)];
    if (declared && ENGINES[declared]) return declared;        // honor explicit assignment
    return pool[(day - 1) % pool.length];                       // rotate by day
  }

  // ---------------- UI shell + HUD ----------------
  const SKILL = { listening: "--listening", speaking: "--speaking", reading: "--reading", writing: "--writing", mixed: "--mixed" };
  let scoreEl, comboEl, _stage;
  function shell(day, cfg, eng) {
    const app = document.getElementById("app");
    const color = "var(" + (SKILL[cfg.skill] || "--mixed") + ")";
    const d = dateForDay(day);
    const shuffleOn = !!Progress.pref("shuffle");
    app.innerHTML =
      '<div class="topbar">' +
        '<a class="back" href="index.html">← Calendar</a>' +
        '<span class="daychip">Day ' + day + " · " + fmt(d) + "</span>" +
        '<span class="skillbadge" style="background:' + color + '">' + esc(cfg.skill) + "</span>" +
        (eng && eng.threeD ? '<span class="badge3d">3D</span>' : "") +
        '<span class="spacer"></span>' +
        '<button class="shufbtn' + (shuffleOn ? " on" : "") + '" id="shufbtn" title="Swap to a random game engine for this skill">🎲 ' + (shuffleOn ? "Shuffle: on" : "Shuffle") + "</button>" +
        '<span class="combopill" id="combopill"></span>' +
        '<span class="scorepill" id="scorepill">·</span>' +
      "</div>" +
      "<h1>" + esc(cfg.title) + "</h1>" +
      '<p class="sub">' + esc(cfg.blurb) + "</p>" +
      '<div class="enginetag">▶ ' + esc((eng && (eng.label || eng.name)) || "game") + "</div>" +
      '<div id="stage" class="stage"></div>';
    scoreEl = document.getElementById("scorepill");
    comboEl = document.getElementById("combopill");
    document.getElementById("shufbtn").onclick = () => { Progress.pref("shuffle", !Progress.pref("shuffle")); location.reload(); };
    _stage = document.getElementById("stage");
    return _stage;
  }
  function setScore(txt) { if (scoreEl) scoreEl.textContent = txt; }
  function setCombo(n) { if (comboEl) { if (n >= 2) { comboEl.textContent = "🔥 x" + n; comboEl.classList.add("show"); } else comboEl.classList.remove("show"); } }
  function pop(text, kind) {
    if (!_stage) return;
    const e = document.createElement("div");
    e.className = "scorepop " + (kind || "");
    e.textContent = text;
    _stage.appendChild(e);
    setTimeout(() => e.remove(), 900);
  }
  function barHTML(i, total) {
    return '<div class="progress"><i style="width:' + Math.round((i / total) * 100) + '%"></i></div>' +
      '<div class="meta"><span>Item ' + Math.min(i + 1, total) + " / " + total + "</span><span></span></div>";
  }

  function result(day, pct, extra) {
    Progress.complete(day, pct);
    const st = stars(pct); sound("win");
    const stage = _stage || document.getElementById("stage");
    const next = CONTENT.days[day + 1];
    stage.innerHTML =
      '<div class="card result">' +
        '<div class="confetti"></div>' +
        '<div class="stars">' + ("⭐".repeat(st) || "—") + "</div>" +
        '<div class="bignum" id="bignum">0%</div>' +
        '<p class="hint">' + (extra || "") + "</p>" +
        '<div class="btnrow" style="justify-content:center;margin-top:14px">' +
          '<button class="btn" onclick="location.reload()">↻ Play again</button>' +
          '<a class="btn ghost" href="index.html">Calendar</a>' +
          (next ? '<a class="btn ghost" href="play.html?d=' + (day + 1) + '">Next day →</a>' : "") +
        "</div>" +
      "</div>";
    // count-up animation
    const tgt = Math.round(pct); const el = document.getElementById("bignum"); let cur = 0;
    const iv = setInterval(() => { cur += Math.max(1, Math.round(tgt / 24)); if (cur >= tgt) { cur = tgt; clearInterval(iv); } el.textContent = cur + "%"; }, 28);
    setScore(tgt + "%");
  }

  // ---------------- canvas + loop helpers ----------------
  // Returns { cv, ctx, w, h, dispose } sized to the stage width, hi-DPI aware.
  function canvas(stage, height) {
    const cv = document.createElement("canvas");
    cv.className = "gamecanvas";
    stage.appendChild(cv);
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0, h = height || 420;
    function size() {
      w = cv.clientWidth || stage.clientWidth || 760;
      cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr);
      cv.style.height = h + "px";
      const c = cv.getContext("2d"); c.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    cv.style.width = "100%";
    requestAnimationFrame(size); size();
    const onresize = () => size();
    window.addEventListener("resize", onresize);
    return { cv, ctx: cv.getContext("2d"), get w() { return w; }, get h() { return h; },
      dispose() { window.removeEventListener("resize", onresize); } };
  }
  // requestAnimationFrame loop with auto-stop; returns stop().
  function raf(fn) {
    let running = true, last = performance.now();
    function step(now) {
      if (!running) return;
      const dt = Math.min(0.05, (now - last) / 1000); last = now;
      fn(dt, now); requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
    return () => { running = false; };
  }
  function on(el, ev, fn) { el.addEventListener(ev, fn); }

  // ---------------- router ----------------
  function start(day) {
    const cfg = CONTENT.days[day];
    if (!cfg) { const stage = shell(day, { skill: "mixed", title: "Day " + day, blurb: "" }, null);
      stage.innerHTML = '<div class="card"><p>This day isn\'t built yet. <a href="index.html">Back to calendar</a>.</p></div>'; return; }
    const name = pickEngine(day, cfg);
    const eng = ENGINES[name];
    const stage = shell(day, cfg, eng);
    if (!eng) { stage.innerHTML = '<div class="card"><p>Engine "' + esc(String(name)) + '" not loaded.</p></div>'; return; }
    const prev = Progress.get(day); if (prev && prev.best) setScore("best " + prev.best + "%");
    // resume only valid when the same engine produced the session
    let session = Progress.session(day);
    if (session && session.eng && session.eng !== name) session = null;

    const helpers = {
      stage, day, skill: cfg.skill, data: cfg.data, session,
      hud: { setScore, setCombo, pop, bar: barHTML },
      save(state) { Progress.saveSession(day, Object.assign({ eng: name }, state)); },
      done(pct, msg) { result(day, pct, msg); },
      speak: Speech.speak.bind(Speech), record: Speech.record.bind(Speech),
      canTTS: Speech.canTTS, canSTT: Speech.canSTT,
      compare, tokens, norm, shuffle, esc, rand, clamp, lerp, stars,
      canvas: (h) => canvas(stage, h), raf, on, sound,
      THREE: window.THREE || null,
    };
    if (session && session.i) setScore("resumed · item " + (session.i + 1));
    try { eng.play(helpers); }
    catch (e) { console.error(e); stage.innerHTML = '<div class="card"><p>Game error: ' + esc(e.message) + "</p></div>"; }
  }

  window.TDG = {
    engine, ENGINES, enginesFor,
    start, Progress, Speech,
    dateForDay, fmt, todayDayNum, chapterOf, CONTENT,
    // expose helpers for engines that load standalone
    helpers: { compare, tokens, norm, shuffle, esc, rand, clamp, lerp, stars, sound },
  };
})();
