import * as THREE from 'three';
import './styles.css';

const app = document.querySelector('#app');

app.innerHTML = `
  <header class="site-header" aria-label="Main navigation">
    <a class="brand" href="#hero" aria-label="Prof Doctor of Philocoffee home">
      <span class="brand-mark">P</span>
      <span>Prof Doctor of Philocoffee</span>
    </a>
    <nav class="nav-links" aria-label="Sections">
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#courses">Courses</a>
      <a href="/blog.html">Blog</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <main>
    <section id="hero" class="hero">
      <div class="hero-bg" aria-hidden="true"></div>
      <canvas id="coffee-scene" aria-label="3D coffee cup animation"></canvas>
      <div class="hero-content">
        <p class="eyebrow">Ekkamai Coffee Lab & Cafe</p>
        <h1>Prof Doctor of Philocoffee</h1>
        <p class="hero-copy">
          A focused cafe concept for thoughtful coffee, sensory exploration,
          and hands-on brewing practice in the creative heart of Ekkamai.
        </p>
        <div class="hero-actions">
          <a class="button primary" href="#courses">Explore programs</a>
          <a class="button ghost" href="#contact">Visit us</a>
        </div>
      </div>
      <div class="hero-panel" aria-label="Cafe highlights">
        <span>Specialty coffee</span>
        <span>Brewing sessions</span>
        <span>Learning programs</span>
      </div>
    </section>

    <section id="about" class="section split">
      <div>
        <p class="section-kicker">About</p>
        <h2>A calm coffee classroom with cafe energy.</h2>
      </div>
      <div class="section-copy">
        <p>
          Prof Doctor of Philocoffee is presented here as an Ekkamai cafe landing
          page with a coffee-first personality: refined, curious, and welcoming.
          The design keeps the story grounded while giving room for learning,
          tasting, and slow conversation.
        </p>
        <p>
          Since public information is limited, the page avoids unverifiable claims
          and focuses on flexible cafe content that can be updated with real menus,
          hours, and social links later.
        </p>
      </div>
    </section>

    <section id="services" class="section services">
      <div class="section-heading">
        <p class="section-kicker">Services</p>
        <h2>Cafe experiences designed for everyday visits and deeper coffee study.</h2>
      </div>
      <div class="service-grid">
        <article class="service-card">
          <span class="card-number">01</span>
          <h3>Signature coffee bar</h3>
          <p>Espresso-based drinks, slow bar selections, and seasonal coffee ideas for curious drinkers.</p>
        </article>
        <article class="service-card">
          <span class="card-number">02</span>
          <h3>Slow bar tasting</h3>
          <p>Guided tasting moments that highlight aroma, texture, origin, and brewing method.</p>
        </article>
        <article class="service-card">
          <span class="card-number">03</span>
          <h3>Private cafe moments</h3>
          <p>Small-group sessions for friends, teams, and guests who want a quieter coffee experience.</p>
        </article>
      </div>
    </section>

    <section id="courses" class="section courses">
      <div class="section-heading">
        <p class="section-kicker">Courses</p>
        <h2>Learning programs for people who want to taste with more confidence.</h2>
      </div>
      <div class="course-list">
        <article>
          <div>
            <h3>Brewing Foundations</h3>
            <p>Understand grind size, water, ratios, extraction, and repeatable home brewing.</p>
          </div>
          <span>Beginner</span>
        </article>
        <article>
          <div>
            <h3>Espresso Practical</h3>
            <p>Dial-in basics, milk texture, workflow, and drink consistency behind the bar.</p>
          </div>
          <span>Hands-on</span>
        </article>
        <article>
          <div>
            <h3>Sensorial Coffee Lab</h3>
            <p>Compare aroma, acidity, sweetness, body, and aftertaste through guided cupping.</p>
          </div>
          <span>Tasting</span>
        </article>
      </div>
    </section>

    <section id="contact" class="section contact">
      <div>
        <p class="section-kicker">Contact</p>
        <h2>Plan a visit in Ekkamai.</h2>
        <p class="contact-copy">
          Add the confirmed address, opening hours, phone number, Line, or Instagram
          when the official details are available.
        </p>
      </div>
      <form class="contact-form" aria-label="Contact form">
        <label>
          Name
          <input type="text" name="name" placeholder="Your name" />
        </label>
        <label>
          Email
          <input type="email" name="email" placeholder="you@example.com" />
        </label>
        <label>
          Message
          <textarea name="message" rows="4" placeholder="Ask about coffee, courses, or private sessions"></textarea>
        </label>
        <button type="submit">Send inquiry</button>
      </form>
    </section>
  </main>

  <footer class="footer">
    <span>Prof Doctor of Philocoffee</span>
    <span>Ekkamai, Bangkok</span>
  </footer>
`;

const form = document.querySelector('.contact-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.classList.add('sent');
  form.querySelector('button').textContent = 'Inquiry ready';
});

const canvas = document.querySelector('#coffee-scene');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const group = new THREE.Group();
scene.add(group);

const cupMaterial = new THREE.MeshStandardMaterial({
  color: 0xf6f0e4,
  roughness: 0.45,
  metalness: 0.05,
});
const coffeeMaterial = new THREE.MeshStandardMaterial({
  color: 0x4b2b1f,
  roughness: 0.6,
});
const accentMaterial = new THREE.MeshStandardMaterial({
  color: 0xb86f45,
  roughness: 0.35,
});

const cup = new THREE.Mesh(
  new THREE.CylinderGeometry(1.2, 0.9, 1.45, 56, 1, true),
  cupMaterial,
);
cup.position.y = -0.15;
group.add(cup);

const coffee = new THREE.Mesh(
  new THREE.CylinderGeometry(1.06, 1.06, 0.06, 56),
  coffeeMaterial,
);
coffee.position.y = 0.6;
group.add(coffee);

const saucer = new THREE.Mesh(
  new THREE.CylinderGeometry(1.65, 1.65, 0.14, 64),
  cupMaterial,
);
saucer.position.y = -0.95;
group.add(saucer);

const handle = new THREE.Mesh(
  new THREE.TorusGeometry(0.46, 0.08, 18, 48, Math.PI * 1.35),
  cupMaterial,
);
handle.position.set(1.15, -0.12, 0);
handle.rotation.set(Math.PI / 2, 0, Math.PI / 10);
group.add(handle);

for (let i = 0; i < 9; i += 1) {
  const bean = new THREE.Mesh(
    new THREE.SphereGeometry(0.09, 20, 12),
    accentMaterial,
  );
  const angle = (i / 9) * Math.PI * 2;
  bean.position.set(Math.cos(angle) * 2.25, Math.sin(i) * 0.28 + 0.15, Math.sin(angle) * 1.2);
  bean.scale.set(1, 0.58, 0.82);
  bean.rotation.z = angle;
  group.add(bean);
}

scene.add(new THREE.AmbientLight(0xffffff, 1.3));
const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
keyLight.position.set(3, 4, 5);
scene.add(keyLight);

camera.position.set(0, 0.45, 5.1);

function resizeScene() {
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  renderer.setSize(width, height, false);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
}

function animate(time) {
  resizeScene();
  group.rotation.y = time * 0.00045;
  group.rotation.x = Math.sin(time * 0.0008) * 0.08;
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
