import './styles.css';

const app = document.querySelector('#app');

const newsCards = [
  {
    title: 'Anthropic เปิดตัว Claude Science และขยับสู่การค้นพบยา',
    date: 'July 4, 2026',
    datetime: '2026-07-04',
    source: 'The Verge',
    sourceUrl: 'https://www.theverge.com/ai-artificial-intelligence/961311/anthropic-claude-science-ai-drug-development',
    summary:
      'Anthropic เปิดตัว Claude Science สำหรับงานวิจัยและประกาศความตั้งใจพัฒนายาของตัวเอง โดยเฉพาะโรคที่ยังถูกละเลย ข่าวนี้สะท้อนว่า AI กำลังขยับจากเครื่องมือช่วยวิเคราะห์ไปสู่ผู้เล่นโดยตรงในวงการวิทยาศาสตร์ชีวภาพ',
  },
  {
    title: 'สหรัฐฯ ยกเลิกข้อจำกัดส่งออกโมเดล AI ขั้นสูงของ Anthropic',
    date: 'July 1, 2026',
    datetime: '2026-07-01',
    source: 'The Guardian',
    sourceUrl: 'https://www.theguardian.com/technology/2026/jul/01/anthropic-fable-mythos-ai-models-us-export-controls-lifted',
    summary:
      'รัฐบาลสหรัฐฯ ยกเลิกข้อจำกัดการเข้าถึงโมเดล Fable และ Mythos ของ Anthropic หลังมีความกังวลด้านความปลอดภัยไซเบอร์ เหตุการณ์นี้ชี้ว่า frontier AI จะถูกกำกับเข้มขึ้น และบริษัท AI ต้องพิสูจน์มาตรการความปลอดภัยมากกว่าเดิม',
  },
  {
    title: 'เบื้องหลังการนำโมเดล AI ชั้นนำกลับมาออนไลน์',
    date: 'July 3, 2026',
    datetime: '2026-07-03',
    source: 'Axios',
    sourceUrl: 'https://www.axios.com/2026/07/03/anthropic-ai-models-revived-behind-the-scenes',
    summary:
      'รายงานเบื้องหลังเล่าว่าหน่วยงานรัฐและบริษัท AI ต้องเร่งประสานงานหลังโมเดลขั้นสูงถูกจำกัดการใช้งาน ประเด็นสำคัญคือโลกยังต้องการกรอบอนุมัติและตรวจสอบโมเดล AI ที่โปร่งใสกว่านี้',
  },
  {
    title: 'Anthropic เจรจา Samsung เพื่อพัฒนาชิป AI ของตัวเอง',
    date: 'July 4, 2026',
    datetime: '2026-07-04',
    source: 'The Economic Times',
    sourceUrl: 'https://m.economictimes.com/tech/artificial-intelligence/anthropic-in-talks-with-samsung-to-develop-custom-ai-chip/articleshow/132163085.cms',
    summary:
      'Anthropic มีรายงานว่าเจรจากับ Samsung เพื่อสร้างชิป AI แบบเฉพาะทาง หากเกิดขึ้นจริงจะช่วยลดการพึ่งพาผู้ผลิตชิปภายนอก และเป็นสัญญาณว่าบริษัทโมเดลใหญ่ต้องควบคุมทั้งซอฟต์แวร์และฮาร์ดแวร์มากขึ้น',
  },
  {
    title: 'Google Project Genie ทำให้การสร้างโลก 3D ด้วย AI เข้าใกล้ผู้ใช้ทั่วไป',
    date: 'January 29, 2026',
    datetime: '2026-01-29',
    source: 'Google Labs / Project Genie context',
    sourceUrl: 'https://labs.google/projectgenie',
    summary:
      'Project Genie เปิดให้ผู้ใช้บางกลุ่มสร้างโลกอินเทอร์แอคทีฟจาก prompt หรือภาพได้ แนวทางนี้ทำให้ AI ไม่ได้หยุดแค่ข้อความหรือภาพนิ่ง แต่กำลังเข้าไปแตะงานเกม ซิมูเลชัน และการฝึก agent',
  },
  {
    title: 'โมเดลวิดีโอ AI รุ่นใหม่ดันประเด็นลิขสิทธิ์และความสมจริง',
    date: 'February 2026',
    datetime: '2026-02',
    source: 'ByteDance Seed / Seedance context',
    sourceUrl: 'https://seed.bytedance.com/en/seedance2_0',
    summary:
      'Seedance 2.0 และโมเดลวิดีโอรุ่นใหม่ทำให้คลิปที่สร้างจาก AI สมจริงขึ้นมาก พร้อมกับคำถามเรื่องลิขสิทธิ์ ตัวตนของนักแสดง และผลกระทบต่อการผลิตสื่อในอนาคต',
  },
];

app.innerHTML = `
  <header class="site-header blog-header" aria-label="Main navigation">
    <a class="brand" href="/" aria-label="Prof Doctor of Philocoffee home">
      <span class="brand-mark">P</span>
      <span>Prof Doctor of Philocoffee</span>
    </a>
    <nav class="nav-links" aria-label="Sections">
      <a href="/">Home</a>
      <a href="/#about">About</a>
      <a href="/#courses">Courses</a>
      <a href="/blog.html" aria-current="page">Blog</a>
      <a href="/#contact">Contact</a>
    </nav>
  </header>

  <main class="blog-page">
    <section class="blog-hero" aria-labelledby="blog-title">
      <p class="section-kicker">Daily AI News</p>
      <h1 id="blog-title">ข่าว AI ใหม่ แบบสั้น กระชับ อ่านง่าย</h1>
      <p>
        สรุปข่าว AI สำคัญแบบ text-only สำหรับอ่านเร็วทุกวัน Codex จะค้นหา
        ข่าวใหม่ สรุปเป็นภาษาไทย และอัปเดตหน้านี้ทุกเช้าเวลา 09:00 น.
      </p>
    </section>

    <section class="blog-meta" aria-label="Update information">
      <span>Daily update schedule</span>
      <strong>09:00 Asia/Bangkok</strong>
      <span>Current edition: July 4, 2026</span>
    </section>

    <section class="news-grid" aria-label="Daily AI news cards">
      ${newsCards
        .map(
          (card) => `
            <article class="news-card">
              <div class="news-card-topline">
                <time datetime="${card.datetime}">${card.date}</time>
                <a href="${card.sourceUrl}" target="_blank" rel="noreferrer">${card.source}</a>
              </div>
              <h2>${card.title}</h2>
              <p>${card.summary}</p>
            </article>
          `,
        )
        .join('')}
    </section>
  </main>

  <footer class="footer">
    <span>Prof Doctor of Philocoffee</span>
    <span>Daily AI News</span>
  </footer>
`;
