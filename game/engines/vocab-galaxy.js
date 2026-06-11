/* vocab-galaxy — vocab. Fly through space and click the meaning-orb that
   matches the word. 3D engine (Three.js, vendored offline).
   data: { items:[{word, correct, options:[...]}] } */
TDG.engine("vocab-galaxy", {
  uses: "vocab", label: "Vocab Galaxy", threeD: true, webgl: true,
  play(ctx) {
    const THREE = ctx.THREE;
    const { stage, data, hud, shuffle, esc } = ctx;
    // graceful fallback when WebGL/Three.js is unavailable — keep the day playable
    function webglOK() { try { const c = document.createElement("canvas"); return !!(window.WebGLRenderingContext && (c.getContext("webgl") || c.getContext("experimental-webgl"))); } catch (e) { return false; } }
    if (!THREE || !webglOK()) return domFallback(ctx);
    const items = data.items; const s = ctx.session || {};
    let idx = s.i || 0, correct = s.correct || 0, combo = 0, locked = false;

    // overlay: the word + progress, crisp HTML over the 3D canvas
    stage.innerHTML =
      '<div class="canvas-wrap" id="cw">' +
        '<div id="galaxy-overlay" style="position:absolute;top:14px;left:0;right:0;text-align:center;z-index:5;pointer-events:none">' +
          '<div class="prompt-word" id="gword" style="margin:0">…</div>' +
          '<div class="hint">tap the orb with the right meaning</div>' +
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
    scene.fog = new THREE.FogExp2(0x070914, 0.035);
    const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 100);
    camera.position.set(0, 0, 7);
    scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    const pl = new THREE.PointLight(0x6c8cff, 1.2, 50); pl.position.set(0, 0, 8); scene.add(pl);

    // starfield
    const starGeo = new THREE.BufferGeometry();
    const sp = []; for (let k = 0; k < 600; k++) sp.push((Math.random() - 0.5) * 60, (Math.random() - 0.5) * 60, (Math.random() - 0.5) * 60 - 10);
    starGeo.setAttribute("position", new THREE.Float32BufferAttribute(sp, 3));
    const stars = new THREE.Points(starGeo, new THREE.PointsMaterial({ color: 0x8899ff, size: 0.08 }));
    scene.add(stars);

    function makeLabel(text) {
      const c = document.createElement("canvas"); c.width = 512; c.height = 256;
      const x = c.getContext("2d");
      x.fillStyle = "rgba(255,255,255,.96)"; x.font = "700 30px -apple-system, sans-serif";
      x.textAlign = "center"; x.textBaseline = "middle";
      const words = text.split(" "); let line = "", lines = [];
      for (const w of words) { const t = line + w + " "; if (x.measureText(t).width > 460 && line) { lines.push(line.trim()); line = w + " "; } else line = t; }
      lines.push(line.trim());
      const start = 128 - (lines.length - 1) * 19;
      lines.forEach((ln, i) => x.fillText(ln, 256, start + i * 38));
      const tex = new THREE.CanvasTexture(c); tex.minFilter = THREE.LinearFilter;
      const spr = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false }));
      spr.scale.set(2.4, 1.2, 1); spr.position.set(0, -1.6, 0.9);
      return spr;
    }

    const COLORS = [0x6c8cff, 0x22d3ee, 0xf472b6, 0x34d399];
    let orbs = [], parts = null, partVel = [];
    function clearOrbs() { orbs.forEach(o => scene.remove(o.group)); orbs = []; }

    function spawn() {
      clearOrbs();
      const it = items[idx];
      document.getElementById("gword").textContent = it.word;
      const opts = shuffle(it.options.slice(0, 4));
      const n = opts.length;
      opts.forEach((o, k) => {
        const grp = new THREE.Group();
        const mat = new THREE.MeshStandardMaterial({ color: COLORS[k % 4], emissive: COLORS[k % 4], emissiveIntensity: 0.35, roughness: 0.3, metalness: 0.4 });
        const mesh = new THREE.Mesh(new THREE.SphereGeometry(0.85, 32, 32), mat);
        grp.add(mesh); grp.add(makeLabel(o));
        const ang = (k / n) * Math.PI * 2;
        grp.position.set(Math.cos(ang) * 2.7, Math.sin(ang) * 1.5, -1 + Math.sin(ang) * 1.5);
        grp.userData = { correct: o === it.correct, mesh, base: grp.position.clone(), phase: Math.random() * 6, k };
        scene.add(grp); orbs.push({ group: grp, mesh });
      });
      locked = false;
    }

    function burst(pos, ok) {
      const geo = new THREE.BufferGeometry(); const pts = []; partVel = [];
      for (let k = 0; k < 80; k++) { pts.push(pos.x, pos.y, pos.z); partVel.push(new THREE.Vector3((Math.random() - 0.5) * 6, (Math.random() - 0.5) * 6, (Math.random() - 0.5) * 6)); }
      geo.setAttribute("position", new THREE.Float32BufferAttribute(pts, 3));
      if (parts) scene.remove(parts);
      parts = new THREE.Points(geo, new THREE.PointsMaterial({ color: ok ? 0x34d399 : 0xfb7185, size: 0.18 }));
      parts.userData.life = 1; scene.add(parts);
    }

    spawn();

    // raycasting
    const ray = new THREE.Raycaster(), mouse = new THREE.Vector2();
    function pick(e) {
      if (locked) return;
      const r = renderer.domElement.getBoundingClientRect();
      const cx = (e.touches ? e.touches[0].clientX : e.clientX) - r.left;
      const cy = (e.touches ? e.touches[0].clientY : e.clientY) - r.top;
      mouse.x = (cx / r.width) * 2 - 1; mouse.y = -(cy / r.height) * 2 + 1;
      ray.setFromCamera(mouse, camera);
      const hit = ray.intersectObjects(orbs.map(o => o.mesh))[0];
      if (!hit) return;
      const grp = hit.object.parent; const ok = grp.userData.correct;
      locked = true;
      burst(grp.position.clone(), ok);
      if (ok) { correct++; combo++; ctx.sound("good"); hud.setCombo(combo); hud.pop("+" + (1 + Math.floor(combo / 2)), ""); }
      else { combo = 0; ctx.sound("bad"); hud.setCombo(0); hud.pop("✗", "bad"); orbs.forEach(o => { if (o.group.userData.correct) o.mesh.material.emissiveIntensity = 1.2; }); }
      hud.setScore(correct + "/" + items.length);
      setTimeout(() => {
        idx++; ctx.save({ i: idx, correct });
        if (idx >= items.length) { stop(); cleanup(); ctx.done((correct / items.length) * 100, correct + " / " + items.length + " stars collected. 🌌"); return; }
        spawn();
      }, 720);
    }
    renderer.domElement.addEventListener("pointerdown", pick);

    const stop = ctx.raf((dt, now) => {
      stars.rotation.y += dt * 0.02; stars.rotation.x += dt * 0.01;
      camera.position.x = Math.sin(now / 4000) * 0.6;
      camera.lookAt(0, 0, 0);
      orbs.forEach(o => {
        const u = o.group.userData;
        o.group.position.y = u.base.y + Math.sin(now / 700 + u.phase) * 0.18;
        o.mesh.rotation.y += dt * 0.6;
        o.group.scale.setScalar(locked && u.correct ? 1.25 : 1);
      });
      if (parts) {
        const arr = parts.geometry.attributes.position.array;
        for (let k = 0; k < partVel.length; k++) { arr[k * 3] += partVel[k].x * dt; arr[k * 3 + 1] += partVel[k].y * dt; arr[k * 3 + 2] += partVel[k].z * dt; }
        parts.geometry.attributes.position.needsUpdate = true;
        parts.userData.life -= dt; parts.material.opacity = Math.max(0, parts.userData.life); parts.material.transparent = true;
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
    if (i >= items.length) return ctx.done((correct / items.length) * 100, correct + " / " + items.length + " stars collected. 🌌");
    const it = items[i]; const opts = shuffle(it.options.slice());
    stage.innerHTML = hud.bar(i, items.length) +
      '<div class="warnbox">✨ 3D unavailable here — playing the quick-match version. Best with WebGL in Chrome/Edge desktop.</div>' +
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
