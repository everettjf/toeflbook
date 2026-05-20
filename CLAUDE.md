# Project: TOEFL iBT 2026 130-Day Sprint Plan

## Repo structure

- `book/` — the 130-day study plan: `README.md`, `resources.md`, `ch01`–`ch10` chapter files, `build.sh` (pandoc → typst → `toefl-book.pdf`). Run the build from inside `book/` (`cd book && ./build.sh`).
- `game/` — daily browser games (one HTML page per study day) that let you play-and-learn the day's L/S/R/W focus. (In development.)

## Output format rules

These apply to files under `book/`.

### No Markdown tables in chapter / resources / README files

### No Markdown tables in chapter / resources / README files

Pandoc + typst renders Markdown tables with squeezed columns when cells are even moderately wide. URLs, multi-word descriptions, or examples break across many lines and become unreadable in the PDF.

**Use lists instead of tables.** Convert any "Prefix · Stands for · Category · Section · Example" or "Mock · Source · Why" style table to bulleted / nested bullets / definition-list paragraphs.

Acceptable: tables that live **inside a ```code``` fence** (they render as monospace, narrow columns OK — e.g., the Ch.9 mock-score Review Card template).

Not acceptable: any pipe-table at the document level meant to be rendered as a real table.

This rule applies to: README.md, resources.md, all chN-*.md, any future content files. Confirmed bad in PDF: the resources.md § 0 resource-code legend table — see screenshot from 2026-05-18.
