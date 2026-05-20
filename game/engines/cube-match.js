/* cube-match — Vocab. A real CSS-3D rotating cube; 4 side faces show the
   options. Auto-rotates around Y; drag horizontally to spin. Hit "Lock in
   front face" to answer with whatever face is most-facing-forward.
   DOM-based engine. data: { items:[{ word, correct, options:[...] }] } */
TDG.engine("cube-match", {
  uses: "vocab", label: "Cube Match", threeD: true,
  play(ctx) {
    const { stage, data, hud, esc, shuffle, sound } = ctx;
    const items = data.items;
    const s = ctx.session || {};
    let i = s.i || 0, correct = s.correct || 0, combo = 0;

    // ---- one-time style injection ----
    if (!document.getElementById("cube-match-style")) {
      const st = document.createElement("style");
      st.id = "cube-match-style";
      st.textContent = [
        ".cube-scene{perspective:900px;width:100%;height:340px;display:flex;",
          "align-items:center;justify-content:center;margin:8px 0 4px;",
          "touch-action:pan-y;user-select:none;cursor:grab;}",
        ".cube-scene.drag{cursor:grabbing;}",
        ".cube{position:relative;width:220px;height:220px;transform-style:preserve-3d;",
          "transition:transform .12s ease-out;will-change:transform;}",
        ".cube-face{position:absolute;width:220px;height:220px;display:flex;",
          "align-items:center;justify-content:center;text-align:center;",
          "padding:18px;box-sizing:border-box;border-radius:18px;",
          "backface-visibility:hidden;-webkit-backface-visibility:hidden;",
          "font-size:18px;font-weight:700;line-height:1.35;color:var(--ink);",
          "overflow-wrap:break-word;word-break:break-word;hyphens:auto;",
          "background:linear-gradient(150deg,var(--card2),var(--card));",
          "border:1px solid var(--line);",
          "box-shadow:inset 0 0 40px rgba(108,140,255,.14),0 0 24px rgba(0,0,0,.35);",
          "transition:border-color .15s,box-shadow .15s,background .15s;}",
        ".cube-face .lbl{display:block;}",
        ".cube-face .num{position:absolute;top:10px;left:12px;font-size:12px;",
          "font-weight:900;color:var(--accent2);opacity:.8;}",
        ".cube-face.front{transform:rotateY(0deg) translateZ(110px);}",
        ".cube-face.right{transform:rotateY(90deg) translateZ(110px);}",
        ".cube-face.back{transform:rotateY(180deg) translateZ(110px);}",
        ".cube-face.left{transform:rotateY(-90deg) translateZ(110px);}",
        ".cube-face.facing{border-color:var(--accent2);",
          "box-shadow:inset 0 0 50px rgba(34,211,238,.22),0 0 30px rgba(34,211,238,.35);}",
        ".cube-face.good{border-color:var(--good);background:linear-gradient(150deg,",
          "rgba(52,211,153,.35),rgba(52,211,153,.15));color:#d1fae5;}",
        ".cube-face.bad{border-color:var(--bad);background:linear-gradient(150deg,",
          "rgba(251,113,133,.35),rgba(251,113,133,.15));color:#fecdd3;}",
        ".cube-face.reveal{border-color:var(--good);box-shadow:inset 0 0 50px rgba(52,211,153,.3),0 0 26px rgba(52,211,153,.4);}",
        ".cube-hint{text-align:center;color:var(--muted);font-size:13px;margin:2px 0 14px;}",
      ].join("");
      document.head.appendChild(st);
    }

    // The 4 visible side faces, in clockwise order around Y.
    const FACES = ["front", "right", "back", "left"];
    // rotateY of the cube that brings each face to the front (i.e. the cube
    // must rotate by -(face angle) to face us).
    const FACE_ANGLE = { front: 0, right: -90, back: -180, left: -270 };

    let stopRAF = null, listeners = [], cube = null, scene = null;
    let rotY = 0;            // current cube rotateY in degrees
    let auto = true;         // auto-rotate on?
    let locked = false;      // answered this item?
    let dragging = false, lastX = 0;

    function cleanup() {
      if (stopRAF) { stopRAF(); stopRAF = null; }
      listeners.forEach(([el, ev, fn]) => el.removeEventListener(ev, fn));
      listeners = [];
    }
    function bind(el, ev, fn, opts) { el.addEventListener(ev, fn, opts); listeners.push([el, ev, fn]); }

    // Which face is currently most-facing-forward, given rotY: the face whose
    // FACE_ANGLE has the smallest angular distance to the current rotY.
    function frontFace() {
      let best = "front", bestDiff = 1e9;
      FACES.forEach(f => {
        let diff = ((rotY - FACE_ANGLE[f]) % 360 + 360) % 360;
        if (diff > 180) diff = 360 - diff;
        if (diff < bestDiff) { bestDiff = diff; best = f; }
      });
      return best;
    }

    function highlightFacing() {
      if (locked || !cube) return;
      const ff = frontFace();
      cube.querySelectorAll(".cube-face").forEach(el => {
        el.classList.toggle("facing", el.dataset.face === ff);
      });
    }

    function applyTransform() {
      if (cube) cube.style.transform = "rotateX(-12deg) rotateY(" + rotY.toFixed(2) + "deg)";
    }

    function render() {
      cleanup();
      rotY = 0; auto = true; locked = false; dragging = false;

      if (i >= items.length) {
        return ctx.done((correct / items.length) * 100, correct + " / " + items.length + " faces matched. 🎲");
      }
      const it = items[i];
      // Map shuffled options onto the 4 side faces; remember the correct face.
      const opts = it.options.slice(0, 4);
      const order = shuffle(opts.map((o, idx) => ({ o, idx })));
      const correctText = it.options[it.correct];

      const faceHTML = FACES.map((f, k) => {
        const x = order[k];
        return '<div class="cube-face ' + f + '" data-face="' + f + '" data-opt="' + esc(x.o) +
          '"><span class="num">' + (k + 1) + '</span><span class="lbl">' + esc(x.o) + "</span></div>";
      }).join("");

      stage.innerHTML = hud.bar(i, items.length) +
        '<div class="card">' +
          '<div class="hint">🎲 Spin the cube (drag it) and lock the meaning that matches the word.</div>' +
          '<div class="prompt-word" style="text-align:center">' + esc(it.word) + "</div>" +
          '<div class="cube-scene" id="cubeScene"><div class="cube" id="cube">' + faceHTML + "</div></div>" +
          '<div class="cube-hint" id="cubeHint">Auto-rotating… drag to aim.</div>' +
          '<div class="btnrow" style="justify-content:center">' +
            '<button class="btn" id="lockBtn">✓ Lock in front face</button>' +
          "</div>" +
          '<div id="fb"></div>' +
        "</div>";

      scene = document.getElementById("cubeScene");
      cube = document.getElementById("cube");
      applyTransform();

      // ---- auto-rotate loop ----
      stopRAF = ctx.raf((dt) => {
        if (auto && !dragging && !locked) {
          rotY -= 26 * dt;       // slow spin (deg/sec)
          if (rotY < -360) rotY += 360;
          applyTransform();
          highlightFacing();
        }
      });
      highlightFacing();

      // ---- drag to spin ----
      function px(e) { return e.touches ? e.touches[0].clientX : e.clientX; }
      function down(e) {
        if (locked) return;
        dragging = true; auto = false; lastX = px(e);
        scene.classList.add("drag");
        cube.style.transition = "none";
        document.getElementById("cubeHint").textContent = "Aim a face forward, then lock it.";
      }
      function move(e) {
        if (!dragging) return;
        const x = px(e), d = x - lastX; lastX = x;
        rotY += d * 0.55;
        applyTransform();
        highlightFacing();
        if (e.cancelable) e.preventDefault();
      }
      function up() {
        if (!dragging) return;
        dragging = false; scene.classList.remove("drag");
        cube.style.transition = "transform .12s ease-out";
        // snap to nearest face
        const ff = frontFace();
        rotY = FACE_ANGLE[ff] + Math.round((rotY - FACE_ANGLE[ff]) / 360) * 360;
        applyTransform();
        highlightFacing();
      }
      bind(scene, "mousedown", down);
      bind(window, "mousemove", move);
      bind(window, "mouseup", up);
      bind(scene, "touchstart", down, { passive: true });
      bind(scene, "touchmove", move, { passive: false });
      bind(window, "touchend", up);

      // ---- lock answer ----
      const lockBtn = document.getElementById("lockBtn");
      bind(lockBtn, "click", () => {
        if (locked) return;
        locked = true; auto = false;
        const ff = frontFace();
        const chosenEl = cube.querySelector('.cube-face[data-face="' + ff + '"]');
        const chosenText = chosenEl ? chosenEl.dataset.opt : "";
        const ok = chosenText === correctText;
        lockBtn.disabled = true;
        cube.querySelectorAll(".cube-face").forEach(el => el.classList.remove("facing"));
        chosenEl.classList.add(ok ? "good" : "bad");

        if (ok) {
          correct++; combo++; sound("good");
          hud.setCombo(combo); hud.pop(combo >= 2 ? "+1 🔥" : "+1", "");
        } else {
          combo = 0; sound("bad"); hud.setCombo(0); hud.pop("✗", "bad");
          // reveal the correct face and rotate it forward
          const rightEl = Array.prototype.find
            ? Array.prototype.find.call(cube.querySelectorAll(".cube-face"), el => el.dataset.opt === correctText)
            : null;
          if (rightEl) {
            rightEl.classList.add("reveal");
            const rf = rightEl.dataset.face;
            setTimeout(() => {
              rotY = FACE_ANGLE[rf] + Math.round((rotY - FACE_ANGLE[rf]) / 360) * 360;
              applyTransform();
            }, 380);
          }
        }
        hud.setScore(correct + "/" + items.length);

        const fb = document.getElementById("fb");
        fb.innerHTML =
          '<div class="fb ' + (ok ? "good" : "bad") + '" style="text-align:center">' +
            (ok ? "Correct! " : "Not quite — the match was “" + esc(correctText) + "”.") +
          "</div>" +
          '<div class="btnrow" style="justify-content:center;margin-top:12px">' +
            '<button class="btn" id="nextBtn">Next →</button></div>';
        bind(document.getElementById("nextBtn"), "click", () => {
          i++; ctx.save({ i, correct }); render();
        });
      });
    }

    if (s.i) hud.setScore(correct + "/" + items.length);
    render();
  },
});
