# TOEFL project — local helpers
# Usage:
#   make start   serve the daily game locally and open it in your browser
#   make stop    stop the local game server
#   make build   rebuild the study-plan PDF
#   make help    list targets

PORT ?= 8765
GAME_URL = http://localhost:$(PORT)/index.html

.PHONY: start stop build help
.DEFAULT_GOAL := help

help:
	@echo "make start   - play the game at $(GAME_URL)"
	@echo "make stop    - stop the local game server"
	@echo "make build   - rebuild book/toefl-book.pdf"
	@echo "(override port: make start PORT=9000)"

start:
	@pkill -f "http.server $(PORT)" 2>/dev/null || true
	@echo "Serving game at $(GAME_URL)  (press Ctrl+C to stop)"
	@( sleep 1 && (command -v open >/dev/null 2>&1 && open "$(GAME_URL)" || true) ) &
	@cd game && python3 -m http.server $(PORT)

stop:
	@pkill -f "http.server $(PORT)" 2>/dev/null && echo "server stopped" || echo "no server running on port $(PORT)"

build:
	@cd book && ./build.sh
