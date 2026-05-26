# Project: TOEFL iBT 2026 122-Day Sprint Plan

## Repo structure

- `book/` — the 122-day study plan: `README.md`, `resources.md`, `ch01`–`ch10` chapter files, `build.sh` (pandoc → typst → `toefl-book.pdf`). Run the build from inside `book/` (`cd book && ./build.sh`).
- `game/` — daily browser games that let you play-and-learn the day's L/S/R/W focus. Architecture:
  - `core.js` — shared engine: the **engine registry + per-day rotation** (with a 🎲 shuffle that swaps among engines sharing a data shape), `Progress` (localStorage `tdg_progress_v2`, completion + mid-game **resume**), Speech (TTS/STT), scoring, HUD, result screen, canvas/raf helpers. Defines the **engine contract** (see its header comment) and the **data shapes** by `uses` category.
  - `engines/*.js` — 20 game engines, each `TDG.engine(name, {uses, play(ctx)})`. Categories (engines sharing a `uses` are interchangeable / rotate / shuffle):
    - `vocab` (8): vocab-galaxy [3D], word-runner, bubble-match, cube-match [CSS-3D], word-cascade, vocab-tetris, synonym-snake, word-tower-3d [3D].
    - `passage` (MCQ, 6): inference-detective, grammar-invaders, sentence-surgeon, listening-quiz (speaks a hidden script; items carry `audio:true`), vocab-dungeon (NES roguelike), mock-gauntlet (boss battle, 8 items/day).
    - `writing` (2): email-composer, discussion-arena (data shape `{tasks:[{prompt, checklist, minWords, ...}]}`; scored on word-count + self-checked rubric).
    - `dictation` (dictation-arcade), `echo` (echo-mic), `prompts` (rapid-interview), `scramble` (sentence-builder).
    - 3D engines set `threeD:true`; WebGL engines (vocab-galaxy, word-tower-3d) include a DOM fallback when WebGL is unavailable.
  - `content.js` — `CONTENT` with `startDate`, `chapters`, and `days{}` (**all 122 days built**, 5/26 → 9/24; Ch.1 is a compressed 6-day setup, Ch.2+ keep the fixed dates/exam). Each day declares `skill`, `engine`, `title`, `blurb`, `data` (shape must match the engine's `uses`). Validation rules: vocab `correct` must equal one of `options` verbatim and vocab words are globally unique; MCQ/`passage` `correct` is a 0-based index. Regenerate/merge with care — `/tmp/merge.js` pattern serializes days as JSON.
  - `play.html?d=N` — single day template (loads content → three.min.js → core → all engines). `index.html` — calendar launcher. `lib/three.min.js` — vendored offline (3D works without internet).
  - Run via `make start` (serves on :8765). To add a day: add a `days[N]` entry; to add an engine: drop a file in `engines/` and `<script>` it in `play.html`.

## Output format rules

These apply to files under `book/`.

### No Markdown tables in chapter / resources / README files

### No Markdown tables in chapter / resources / README files

Pandoc + typst renders Markdown tables with squeezed columns when cells are even moderately wide. URLs, multi-word descriptions, or examples break across many lines and become unreadable in the PDF.

**Use lists instead of tables.** Convert any "Prefix · Stands for · Category · Section · Example" or "Mock · Source · Why" style table to bulleted / nested bullets / definition-list paragraphs.

Acceptable: tables that live **inside a ```code``` fence** (they render as monospace, narrow columns OK — e.g., the Ch.9 mock-score Review Card template).

Not acceptable: any pipe-table at the document level meant to be rendered as a real table.

This rule applies to: README.md, resources.md, all chN-*.md, any future content files. Confirmed bad in PDF: the resources.md § 0 resource-code legend table — see screenshot from 2026-05-18.
