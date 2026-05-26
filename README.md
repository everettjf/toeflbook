# 🎯 TOEFL iBT 2026 — 122-Day Sprint

A complete, free, self-coached prep system for the **new adaptive TOEFL iBT** (redesigned by ETS on 2026‑01‑21). Two parts that work together:

- 📘 **The Book** — a 122-day, evidence-based study plan (`book/`) → builds to a single PDF.
- 🎮 **The Game** — a browser app with **20 mini-game engines** that train Listening, Speaking, Reading & Writing by *playing* (`game/`).

> **Start:** 2026‑05‑26 · **Exam:** 2026‑09‑26 · **Target:** 100+ (CEFR C1) · **Daily commitment:** 90 min

---

## 🚀 Quick start

```bash
make start     # play the daily game in your browser  → http://localhost:8765
make build     # rebuild the study-plan PDF (book/toefl-book.pdf)
make stop      # stop the local game server
make help      # list targets   (override port: make start PORT=9000)
```

The game is plain static files — no build step, no install, **works fully offline** (even the 3D, via a vendored Three.js).

---

## 🎮 The Game

One game a day for 122 days. Each day is mapped to a skill and a game **engine**; engines **rotate** so the four weeks stay fresh, and a 🎲 **Shuffle** button swaps to another engine that fits the same content. Your progress, best score, and **mid-game resume** are saved in the browser; the calendar shows ✅ + score per day.

**20 engines, all built around teaching:**

| Engine | Style | Trains |
|---|---|---|
| Vocab Galaxy | 3D space (Three.js) | vocabulary |
| Word Tower | 3D stacking (Three.js) | vocabulary |
| Cube Match | CSS-3D rotating cube | vocabulary |
| Vocab Tetris | Tetris | vocabulary |
| Synonym Snake | Snake | vocabulary |
| Word Runner / Bubble Match / Word Cascade | arcade canvas | vocabulary |
| Grammar Invaders | Space Invaders | grammar / usage |
| Vocab Dungeon | NES-style roguelike | reading / vocab in context |
| Mock Gauntlet | boss battle | full-length reading mock |
| Sentence Surgeon | error correction | grammar / writing |
| Inference Detective | passage inference | reading |
| Listening Quiz | hidden-transcript audio | listening |
| Dictation Arcade | type-what-you-hear | listening |
| Echo Mic | listen & repeat (mic + scoring) | speaking |
| Rapid Interview | timed speaking + transcript | speaking |
| Email Composer | guided email + rubric | writing |
| Discussion Arena | academic discussion + rubric | writing |
| Sentence Builder | drag-to-order tiles | writing |

All 122 days are built: **200 unique academic words**, listening/dictation/echo sets, reading passages, grammar drills, writing tasks, and **4 full mock tests** (reading / listening / speaking / writing sections). 3D engines fall back to a quick-match mode when WebGL is unavailable; speech features need Chrome/Edge desktop and degrade gracefully elsewhere.

> Architecture (engine registry, per-day rotation, progress/resume, the engine contract, and data shapes) is documented in `CLAUDE.md` and the header comment of `game/core.js`.

---

## 📘 The Book

A 122-day plan for the **redesigned 2026 exam** — shorter (90 min), adaptive Reading/Listening, new Speaking (Listen & Repeat + Interview) and Writing (Build a Sentence + Email + Academic Discussion), AI scoring that penalizes templated answers.

Three principles run through every chapter:

1. **Early items matter most** — the adaptive engine punishes Module 1 mistakes; accuracy training targets early items.
2. **Real input beats drill** — total real-English exposure is the main score driver (podcasts, TED, Coursera).
3. **No templates** — train *structural thinking* (Email 4-part frame, Discussion PEEL), not memorized phrases.

It runs on a fixed **90-minute daily template** (Anki + shadowing as the non-negotiable floor, plus a rotating Main/Secondary skill block and a nightly error log) across **a compressed 6-day setup chapter + 8 bi-weekly chapters + a final taper**. Full methodology, daily schedule, checkpoints, and the free resource catalog live in [`book/README.md`](book/README.md) and [`book/resources.md`](book/resources.md).

Build the PDF:

```bash
make build        # → book/toefl-book.pdf   (requires pandoc + typst)
```

---

## 🗂 Repository structure

```
toeflbook/
├── README.md            ← you are here
├── Makefile             ← make start / build / stop / help
├── book/                ← the 122-day study plan
│   ├── README.md        ← plan overview, methodology, daily template
│   ├── resources.md     ← free tools, decks, URLs (the catalog)
│   ├── ch01–ch10*.md    ← the 10 chapters
│   ├── build.sh         ← pandoc → typst → toefl-book.pdf
│   └── toefl-book.pdf   ← compiled output
└── game/                ← the daily browser game
    ├── index.html       ← 122-day calendar launcher
    ├── play.html?d=N    ← single-day player
    ├── core.js          ← engine registry, rotation, progress, speech, scoring
    ├── content.js       ← all 122 days of content
    ├── engines/         ← 20 game engines (one file each)
    └── lib/three.min.js ← vendored Three.js (offline 3D)
```

---

## 📅 The 2026 exam (why this exists)

On 2026‑01‑21 ETS launched a redesigned **Adaptive TOEFL iBT** — shorter, adaptive, AI-scored, reported on a 1–6 CEFR band (with 0–120 also reported for two years). This project is built specifically for that format, not the old test. See `book/README.md` § 0 for the full old-vs-new breakdown and references.

---

*Free and self-contained. No paid course required — just the plan, the daily game, and the free tools listed in `book/resources.md`.*
