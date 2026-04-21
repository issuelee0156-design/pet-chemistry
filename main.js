
let currentLang = localStorage.getItem('lang') || 'ko';

function initCommon() {
  const body = document.body;
  const savedTheme = localStorage.getItem('theme') || 'dark';
  body.setAttribute('data-theme', savedTheme);
  
  updateCommonUI();
}

function toggleTheme() {
  const body = document.body;
  const newTheme = body.getAttribute("data-theme") === "dark" ? "light" : "dark";
  body.setAttribute("data-theme", newTheme);
  localStorage.setItem('theme', newTheme);
  updateCommonUI();
}

function toggleLanguage() {
  currentLang = currentLang === 'ko' ? 'en' : 'ko';
  localStorage.setItem('lang', currentLang);
  updateCommonUI();
  if (typeof updatePageUI === 'function') {
    updatePageUI();
  }
}

function updateCommonUI() {
  const t = i18n[currentLang];
  
  // Theme button
  const themeBtn = document.getElementById("theme-toggle");
  if (themeBtn) {
    themeBtn.textContent = document.body.getAttribute("data-theme") === "dark" ? t.themeLight : t.themeDark;
  }
  
  // Lang button
  const langBtn = document.getElementById("lang-toggle");
  if (langBtn) {
    langBtn.textContent = t.langToggle;
  }
  
  // Navigation
  const navLotto = document.getElementById("nav-lotto");
  const navPet = document.getElementById("nav-pet");
  const navAbout = document.getElementById("nav-about");
  if (navLotto) navLotto.textContent = t.navLotto;
  if (navPet) navPet.textContent = t.navPet;
  if (navAbout) navAbout.textContent = t.navAbout;

  // Footer
  const footerAbout = document.getElementById("footer-about");
  const footerTerms = document.getElementById("footer-terms");
  const footerPrivacy = document.getElementById("footer-privacy");
  const footerContact = document.getElementById("footer-contact");
  if (footerAbout) footerAbout.textContent = t.navAbout;
  if (footerTerms) footerTerms.textContent = t.navTerms;
  if (footerPrivacy) footerPrivacy.textContent = t.navPrivacy;
  if (footerContact) footerContact.textContent = t.navContact;
}

window.addEventListener('DOMContentLoaded', initCommon);
