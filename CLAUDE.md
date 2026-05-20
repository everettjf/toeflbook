# Project: TOEFL iBT 2026 130-Day Sprint Plan

## Repo structure

- `book/` — the 130-day study plan: `README.md`, `resources.md`, `ch01`–`ch10` chapter files, `build.sh` (pandoc → typst → `toefl-book.pdf`). Run the build from inside `book/` (`cd book && ./build.sh`).
- `game/` — daily browser games that let you play-and-learn the day's L/S/R/W focus. Architecture:
  - `core.js` — shared engine: the **engine registry + per-day rotation** (with a 🎲 shuffle that swaps among engines sharing a data shape), `Progress` (localStorage `tdg_progress_v2`, completion + mid-game **resume**), Speech (TTS/STT), scoring, HUD, result screen, canvas/raf helpers. Defines the **engine contract** (see its header comment) and the **data shapes** by `uses` category.
  - `engines/*.js` — 10 game engines, each `TDG.engine(name, {uses, play(ctx)})`. Categories: `vocab` (vocab-galaxy [3D Three.js], word-runner, bubble-match, cube-match [CSS-3D], word-cascade — all interchangeable), `dictation` (dictation-arcade), `echo` (echo-mic), `prompts` (rapid-interview), `passage` (inference-detective), `scramble` (sentence-builder).
  - `content.js` — `CONTENT` with `startDate`, `chapters`, and `days{}` (Days 1–28 built). Each day declares `skill`, `engine`, `title`, `blurb`, `data` (shape must match the engine's `uses`). Validation: `correct` must equal one of `options` for vocab; inference `correct` is a 0-based index.
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
