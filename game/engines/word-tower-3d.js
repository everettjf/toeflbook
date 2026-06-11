/* word-tower-3d — vocab. Tap the floating block carrying the right meaning;
   correct blocks fly onto a tower that literally grows taller over the
   session. 3D engine (Three.js, vendored offline).
   data: { items:[{word, correct, options:[...]}] } */
TDG.engine("word-tower-3d", {
  uses: "vocab", label: "Word Tower", threeD: true, webgl: true,
  play(ctx) {
    const THREE = ctx.THREE;
    const { stage, data, hud, shuffle, esc, rand } = ctx;
    // graceful fallback when WebGL/Three.js is unavailable — keep the day playable
    function webglOK() { try { const c = document.createElement("canvas"); return !!(window.WebGLRenderingContext && (c.getContext("webgl") || c.getContext("experimental-webgl"))); } catch (e) { return false; } }
    if (!THREE || !webglOK()) return domFallback(ctx);
    const items = data.items; const s = ctx.session || {};
    let idx = s.i || 0, correct = s.correct || 0, combo = 0, locked = false;
    let stacked = 0;        // visual tower height (blocks placed this session)
    let shake = 0;          // shake timer (seconds)

    // overlay: the word + hint, crisp HTML over the 3D canvas
    stage.innerHTML =
      '<div class="canvas-wrap" id="cw">' +
        '<div id="tower-overlay" style="position:absolute;top:14px;left:0;right:0;text-align:center;z-index:5;pointer-events:none">' +
          '<div class="prompt-word" id="gword" style="margin:0">…</div>' +
          '<div class="hint">tap the block with the right meaning — stack the tower</div>' +
        "</div>" +
      "</div>";
    const cw = document.getElementById("cw");
    const W = cw.clientWidth || 760, H = 460;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(W, H);
    renderer.domElement.className = "gamecanvas";
    cw.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x070914, 0.018);
    const camera = new THREE.PerspectiveCamera(58, W / H, 0.1, 200);
    camera.position.set(0, 2.4, 9);

    scene.add(new THREE.AmbientLight(0xffffff, 0.55));
    const key = new THREE.DirectionalLight(0xffffff, 0.9); key.position.set(4, 8, 6); scene.add(key);
    const fill = new THREE.PointLight(0x6c8cff, 1.1, 60); fill.position.set(-4, 2, 8); scene.add(fill);

    // starfield backdrop
    const starGeo = new THREE.BufferGeometry();
    const sp = []; for (let k = 0; k < 600; k++) sp.push((Math.random() - 0.5) * 80, (Math.random() - 0.5) * 80, (Math.random() - 0.5) * 80 - 10);
    starGeo.setAttribute("position", new THREE.Float32BufferAttribute(sp, 3));
    const stars = new THREE.Points(starGeo, new THREE.PointsMaterial({ color: 0x8899ff, size: 0.09 }));
    scene.add(stars);

    // ground / pedestal the tower rises from
    const PEDESTAL_Y = -2.2;
    const ped = new THREE.Mesh(
      new THREE.CylinderGeometry(2.6, 3.0, 0.5, 36),
      new THREE.MeshStandardMaterial({ color: 0x141a30, roughness: 0.85, metalness: 0.2, emissive: 0x0a0e1c })
    );
    ped.position.set(0, PEDESTAL_Y, 0); scene.add(ped);

    const BLOCK_W = 2.8, BLOCK_H = 0.74, BLOCK_D = 1.0;
    const GAP = 0.06;

    // Draw the option text onto a CanvasTexture used for the block's front face.
    function faceTexture(text, hex) {
      const c = document.createElement("canvas"); c.width = 512; c.height = 192;
      const x = c.getContext("2d");
      const r = (hex >> 16) & 255, g = (hex >> 8) & 255, b = hex & 255;
      x.fillStyle = "rgba(" + Math.round(r * 0.35) + "," + Math.round(g * 0.35) + "," + Math.round(b * 0.35) + ",1)";
      x.fillRect(0, 0, 512, 192);
      x.strokeStyle = "rgba(255,255,255,.5)"; x.lineWidth = 6; x.strokeRect(8, 8, 496, 176);
      x.fillStyle = "rgba(255,255,255,.98)"; x.font = "700 34px -apple-system, sans-serif";
      x.textAlign = "center"; x.textBaseline = "middle";
      const words = text.split(" "); let line = "", lines = [];
      for (const w of words) { const t = line + w + " "; if (x.measureText(t).width > 460 && line) { lines.push(line.trim()); line = w + " "; } else line = t; }
      lines.push(line.trim());
      const start = 96 - (lines.length - 1) * 21;
      lines.forEach((ln, i) => x.fillText(ln, 256, start + i * 42));
      const tex = new THREE.CanvasTexture(c); tex.minFilter = THREE.LinearFilter;
      return tex;
    }

    // a block is a slab with the labeled texture on its front (+Z) face
    function makeBlock(text, hex) {
      const tex = faceTexture(text, hex);
      const side = new THREE.MeshStandardMaterial({ color: hex, roughness: 0.4, metalness: 0.3, emissive: hex, emissiveIntensity: 0.18 });
      const front = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.5, metalness: 0.1, emissive: hex, emissiveIntensity: 0.12 });
      // BoxGeometry material order: px, nx, py, ny, pz(front), nz
      const mats = [side, side, side, side, front, side];
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(BLOCK_W, BLOCK_H, BLOCK_D), mats);
      mesh.userData.tex = tex;
      return mesh;
    }

    const COLORS = [0x6c8cff, 0x22d3ee, 0xf472b6, 0x34d399];
    let blocks = [];           // active choice blocks for current item
    const tower = [];          // placed (correct) blocks
    let parts = null, partVel = [];

    function clearBlocks() { blocks.forEach(b => { if (!b.userData.flying) scene.remove(b.mesh); }); blocks = []; }

    // arrange 4 floating blocks in a gentle arc near the top
    function spawn() {
      blocks.forEach(b => scene.remove(b.mesh)); blocks = [];
      const it = items[idx];
      document.getElementById("gword").textContent = it.word;
      const opts = shuffle(it.options.slice(0, 4));
      const n = opts.length;
      const arcW = 6.0;
      opts.forEach((o, k) => {
        const mesh = makeBlock(o, COLORS[k % 4]);
        const t = n > 1 ? k / (n - 1) : 0.5;          // 0..1 across the arc
        const bx = (t - 0.5) * arcW;
        const by = 3.0 + Math.sin(t * Math.PI) * 0.7;  // arc bow
        const bz = 1.2 - Math.cos((t - 0.5) * Math.PI) * 1.0;
        mesh.position.set(bx, by, bz);
        mesh.rotation.y = (0.5 - t) * 0.5;
        mesh.userData = Object.assign(mesh.userData, {
          correct: o === it.correct, base: mesh.position.clone(),
          phase: Math.random() * 6, flying: false, k,
        });
        scene.add(mesh); blocks.push({ mesh });
      });
      locked = false;
    }

    function burst(pos, ok) {
      const geo = new THREE.BufferGeometry(); const pts = []; partVel = [];
      for (let k = 0; k < 90; k++) { pts.push(pos.x, pos.y, pos.z); partVel.push(new THREE.Vector3((Math.random() - 0.5) * 7, rand(1, 7), (Math.random() - 0.5) * 7)); }
      geo.setAttribute("position", new THREE.Float32BufferAttribute(pts, 3));
      if (parts) scene.remove(parts);
      parts = new THREE.Points(geo, new THREE.PointsMaterial({ color: ok ? 0x34d399 : 0xfb7185, size: 0.2, transparent: true }));
      parts.userData.life = 1; scene.add(parts);
    }

    // animate a correct block flying onto the top of the tower
    function flyToTower(mesh) {
      const slot = stacked++;
      const targetY = PEDESTAL_Y + 0.25 + BLOCK_H / 2 + slot * (BLOCK_H + GAP);
      const target = new THREE.Vector3((slot % 2 ? 1 : -1) * 0.06 * (slot % 3), targetY, 0);
      mesh.userData.flying = true;
      mesh.userData.from = mesh.position.clone();
      mesh.userData.fromRot = mesh.rotation.y;
      mesh.userData.target = target;
      mesh.userData.t = 0;
      tower.push(mesh);
    }

    spawn();

    // raycasting (same pattern as vocab-galaxy)
    const ray = new THREE.Raycaster(), mouse = new THREE.Vector2();
    function pick(e) {
      if (locked) return;
      const r = renderer.domElement.getBoundingClientRect();
      const cx = (e.touches ? e.touches[0].clientX : e.clientX) - r.left;
      const cy = (e.touches ? e.touches[0].clientY : e.clientY) - r.top;
      mouse.x = (cx / r.width) * 2 - 1; mouse.y = -(cy / r.height) * 2 + 1;
      ray.setFromCamera(mouse, camera);
      const hit = ray.intersectObjects(blocks.map(b => b.mesh))[0];
      if (!hit) return;
      const mesh = hit.object; const ok = mesh.userData.correct;
      locked = true;
      burst(mesh.position.clone(), ok);
      if (ok) {
        correct++; combo++; ctx.sound("good"); hud.setCombo(combo); hud.pop("+" + (1 + Math.floor(combo / 2)), "");
        flyToTower(mesh);
        // the others fade out
        blocks.forEach(b => { if (b.mesh !== mesh) b.mesh.userData.fading = true; });
      } else {
        combo = 0; ctx.sound("bad"); hud.setCombo(0); hud.pop("✗", "bad"); shake = 0.5;
        blocks.forEach(b => { if (b.mesh.userData.correct) { for (const m of b.mesh.material) m.emissiveIntensity = 1.1; } });
      }
      hud.setScore(correct + "/" + items.length);
      setTimeout(() => {
        idx++; ctx.save({ i: idx, correct });
        if (idx >= items.length) { stop(); cleanup(); ctx.done((correct / items.length) * 100, correct + " / " + items.length + " blocks stacked."); return; }
        spawn();
      }, 760);
    }
    renderer.domElement.addEventListener("pointerdown", pick);

    const stop = ctx.raf((dt, now) => {
      stars.rotation.y += dt * 0.015;

      // gentle bob on floating (non-flying) choice blocks
      blocks.forEach(b => {
        const m = b.mesh, u = m.userData;
        if (u.flying) return;
        if (u.fading) {
          m.scale.multiplyScalar(1 - dt * 4); m.position.y += dt * 1.2;
        } else if (u.base) {
          m.position.y = u.base.y + Math.sin(now / 700 + u.phase) * 0.16;
          m.rotation.y = (0.5 - u.k / 3) * 0.5 + Math.sin(now / 900 + u.phase) * 0.08;
        }
      });

      // animate flying / settling tower blocks
      tower.forEach(m => {
        const u = m.userData;
        if (u.flying) {
          u.t = Math.min(1, u.t + dt * 1.6);
          const e = 1 - Math.pow(1 - u.t, 3);                 // ease-out cubic
          m.position.lerpVectors(u.from, u.target, e);
          m.position.y += Math.sin(u.t * Math.PI) * 1.4;       // little hop arc
          m.rotation.y = u.fromRot * (1 - e);
          if (u.t >= 1) { u.flying = false; m.position.copy(u.target); m.rotation.y = 0; }
        } else {
          // settled — subtle sway grows toward the top for a "tall tower" feel
          m.rotation.z = Math.sin(now / 1200 + m.position.y) * 0.006 * (m.position.y - PEDESTAL_Y);
        }
      });

      // camera: pull back + rise as the tower grows; gentle orbit + shake
      const towerTop = PEDESTAL_Y + 0.25 + stacked * (BLOCK_H + GAP);
      const targetZ = 9 + stacked * 0.55;
      const targetY = 1.4 + towerTop * 0.45;
      camera.position.z += (targetZ - camera.position.z) * Math.min(1, dt * 2);
      camera.position.y += (targetY - camera.position.y) * Math.min(1, dt * 2);
      let ox = Math.sin(now / 4500) * 0.7;
      if (shake > 0) { shake = Math.max(0, shake - dt); ox += (Math.random() - 0.5) * shake * 1.4; }
      camera.position.x = ox;
      camera.lookAt(0, Math.max(0, towerTop * 0.5) - 0.4, 0);

      if (parts) {
        const arr = parts.geometry.attributes.position.array;
        for (let k = 0; k < partVel.length; k++) {
          partVel[k].y -= dt * 6;                              // gravity
          arr[k * 3] += partVel[k].x * dt; arr[k * 3 + 1] += partVel[k].y * dt; arr[k * 3 + 2] += partVel[k].z * dt;
        }
        parts.geometry.attributes.position.needsUpdate = true;
        parts.userData.life -= dt; parts.material.opacity = Math.max(0, parts.userData.life);
        if (parts.userData.life <= 0) { scene.remove(parts); parts = null; }
      }
      renderer.render(scene, camera);
    });

    function cleanup() { try { renderer.forceContextLoss(); renderer.dispose(); } catch (e) {} }
  },
});

// DOM multiple-choice fallback (no WebGL) — shares the vocab data shape.
function domFallback(ctx) {
  const { stage, data, hud, shuffle, esc } = ctx;
  const items = data.items; const s = ctx.session || {};
  let i = s.i || 0, correct = s.correct || 0, combo = 0;
  function render() {
    if (i >= items.length) return ctx.done((correct / items.length) * 100, correct + " / " + items.length + " blocks stacked.");
    const it = items[i]; const opts = shuffle(it.options.slice());
    stage.innerHTML = hud.bar(i, items.length) +
      '<div class="warnbox">🧱 3D unavailable here — playing the quick-match version. Best with WebGL in Chrome/Edge desktop.</div>' +
      '<div class="card"><div class="prompt-word">' + esc(it.word) + "</div>" +
      opts.map(o => '<button class="choice">' + esc(o) + "</button>").join("") +
      '<div id="fb"></div></div>';
    const btns = stage.querySelectorAll(".choice");
    btns.forEach(b => b.onclick = () => {
      btns.forEach(x => x.disabled = true);
      const ok = b.textContent === it.correct;
      if (ok) { correct++; combo++; ctx.sound("good"); hud.setCombo(combo); hud.pop("+1"); b.classList.add("correct"); }
      else { combo = 0; ctx.sound("bad"); hud.setCombo(0); hud.pop("✗", "bad"); b.classList.add("wrong"); btns.forEach(x => { if (x.textContent === it.correct) x.classList.add("correct"); }); }
      hud.setScore(correct + "/" + items.length);
      setTimeout(() => { i++; ctx.save({ i, correct }); render(); }, ok ? 600 : 1200);
    });
  }
  render();
}
