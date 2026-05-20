#!/usr/bin/env bash
# Build the TOEFL book PDF from all chapter Markdown files.
# Requires: pandoc + typst (or another PDF engine).
#
# Usage:
#   ./build.sh                # default: PDF via typst
#   PDF_ENGINE=weasyprint ./build.sh
#   FORMAT=html ./build.sh    # build HTML instead of PDF

set -euo pipefail

cd "$(dirname "$0")"

PDF_ENGINE="${PDF_ENGINE:-typst}"
FORMAT="${FORMAT:-pdf}"
OUTPUT="toefl-book.${FORMAT}"

CHAPTERS=(
  README.md
  resources.md
  ch01-diagnosis-and-system-setup.md
  ch02-listening-and-vocabulary.md
  ch03-reading-and-academic-vocab.md
  ch04-speaking-listen-and-repeat.md
  ch05-writing-email-and-sentence.md
  ch06-speaking-interview-and-ai.md
  ch07-writing-academic-discussion.md
  ch08-adaptive-module1-mastery.md
  ch09-full-mocks-and-attribution.md
  ch10-final-week.md
)

echo "Building ${OUTPUT} with engine=${PDF_ENGINE}..."

if [ "$FORMAT" = "pdf" ]; then
  FONT_SIZE="${FONT_SIZE:-13pt}"
  pandoc "${CHAPTERS[@]}" \
    --output "$OUTPUT" \
    --pdf-engine="$PDF_ENGINE" \
    --toc \
    --toc-depth=2 \
    --variable fontsize="$FONT_SIZE" \
    --variable margin-x=2cm \
    --variable margin-y=2cm \
    --metadata title="TOEFL iBT 2026 · 132-Day Sprint Plan" \
    --metadata author="Personal study plan" \
    --metadata date="2026-05-17 → 2026-09-26"
else
  pandoc "${CHAPTERS[@]}" \
    --output "$OUTPUT" \
    --toc --toc-depth=2 \
    --standalone \
    --metadata title="TOEFL iBT 2026 · 132-Day Sprint Plan"
fi

echo "✓ Wrote $OUTPUT ($(du -h "$OUTPUT" | cut -f1))"
