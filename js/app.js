const translations = {
  ko: {
    navGames: '대표작', navAbout: '스튜디오', navContact: '문의하기 ↗',
    heroTitle: '상상 너머의<br><span class="outline-word">플레이</span><span class="coral">.</span>',
    heroDescription: '작은 선택이 새로운 모험이 되는 순간.<br>Insoft는 손끝에서 펼쳐지는 즐거움을 만듭니다.',
    explore: '대표작 만나보기', scroll: '아래로 탐험하기', available: '지금 App Store에서',
    gameCategory: '캐주얼 · 애니메이션 스타일', gameHook: '천사일까, 악마일까.<br>다음 모습은 당신의 선택.',
    gameDescription: '천사 또는 악마를 선택하고, 어울리는 아이템을 모으세요. 플레이할수록 성장하는 캐릭터와 새로운 변신을 만나보세요.',
    platform: '플랫폼', genre: '장르', genreValue: '캐주얼', play: '플레이', free: '무료 · 광고 포함',
    step1Title: '나만의 편을 선택하세요.', step1Description: '천사와 악마, 서로 다른 매력의 시작.',
    step2Title: '선택에 맞게 모으세요.', step2Description: '캐릭터에 어울리는 아이템으로 성장하세요.',
    step3Title: '새로운 모습을 만나세요.', step3Description: '아이템을 모으며 다음 변신을 발견하세요.',
    aboutTitle: '호기심에서 시작해,<br><span>즐거움으로 남도록.</span>',
    aboutDescription: 'Insoft는 모바일 게임을 만드는 스튜디오입니다. 부담 없이 시작할 수 있는 플레이 안에, 새로운 선택과 발견의 즐거움을 담습니다.<br><br>일상 속 짧은 순간이 조금 더 특별한 시간이 되도록. 우리는 오늘도 다음 플레이를 상상합니다.',
    contactTitle: '다음 이야기는,<br>함께 만들어요.', contactDescription: '게임 문의부터 협업 제안까지.<br>Insoft에게 전하고 싶은 이야기를 보내주세요.',
    emailUs: '이메일 보내기', footerLine: '상상은 자유롭게. 플레이는 즐겁게.', backTop: '맨 위로 ↑',
    privacy: '개인정보처리방침', terms: '이용약관', deletion: '데이터 삭제 안내'
  },
  en: {
    navGames: 'Our game', navAbout: 'The studio', navContact: 'Say hello ↗',
    heroTitle: 'Imagine more.<br><span class="outline-word">Play beyond</span><span class="coral">.</span>',
    heroDescription: 'A little choice. A whole new adventure.<br>We bring imaginative play to your fingertips.',
    explore: 'Meet our game', scroll: 'Scroll to explore', available: 'Available on the App Store',
    gameCategory: 'Casual · Anime style', gameHook: 'Angel or devil?<br>Your next form is your choice.',
    gameDescription: 'Choose your side, collect matching items, and watch your character grow. Discover new transformations with every run.',
    platform: 'PLATFORM', genre: 'GENRE', genreValue: 'Casual', play: 'PLAY', free: 'Free · Contains ads',
    step1Title: 'Choose your side.', step1Description: 'Angel or devil. A different adventure awaits.',
    step2Title: 'Collect your power.', step2Description: 'Pick up matching items to grow your character.',
    step3Title: 'Discover a new you.', step3Description: 'Keep collecting to unlock your next transformation.',
    aboutTitle: 'Made with curiosity.<br><span>Remembered for the fun.</span>',
    aboutDescription: 'Insoft is a mobile game studio. We create easy-to-start experiences filled with choices, discoveries, and a little imagination.<br><br>Because a small moment in your day can become something special. We’re always imagining what comes next.',
    contactTitle: 'Let’s make<br>the next story.', contactDescription: 'Game support or a collaboration idea?<br>We’d love to hear from you.',
    emailUs: 'SEND US AN EMAIL', footerLine: 'Free to imagine. Made to play.', backTop: 'Back to top ↑',
    privacy: 'Privacy Policy', terms: 'Terms (한국어)', deletion: 'Data Deletion (한국어)'
  }
};
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');
let currentLanguage = 'ko';
function closeMenu() {
  nav?.classList.remove('open');
  menu?.setAttribute('aria-expanded', 'false');
  menu?.setAttribute('aria-label', currentLanguage === 'en' ? 'Open menu' : '메뉴 열기');
}
function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLanguage = lang;
  // Legal document bodies keep the language of their original source text.
  if (document.body.dataset.page === 'home') document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const value = translations[lang][el.dataset.i18n];
    if (value !== undefined) {
      el.innerHTML = value;
      el.lang = lang;
    }
  });
  document.querySelectorAll('[data-lang]').forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.lang === lang));
  });
  if (document.body.dataset.page === 'home') {
    document.title = lang === 'en' ? 'Insoft — Imagine more. Play beyond.' : 'Insoft — 상상 너머의 플레이';
    const description = lang === 'en'
      ? 'Insoft mobile game studio. Choose your side in Angel Or Devil : Anime.'
      : 'Insoft 모바일 게임 스튜디오. Angel Or Devil : Anime에서 천사와 악마, 나만의 모험을 선택하세요.';
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', document.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
  }
  closeMenu();
  try { localStorage.setItem('insoft-language', lang); } catch {}
}
document.querySelectorAll('[data-lang]').forEach(button => {
  button.addEventListener('click', () => setLanguage(button.dataset.lang));
});
try { if (localStorage.getItem('insoft-language') === 'en') setLanguage('en'); } catch {}
menu?.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  nav?.classList.toggle('open', open);
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', currentLanguage === 'en' ? (open ? 'Close menu' : 'Open menu') : (open ? '메뉴 닫기' : '메뉴 열기'));
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu?.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menu.focus();
  }
});
