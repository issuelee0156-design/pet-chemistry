function toggleTheme() {
  const body = document.body;
  const btn = document.getElementById("theme-toggle");
  if (body.getAttribute("data-theme") === "dark") {
    body.setAttribute("data-theme", "light");
    btn.textContent = "🌙 Dark Mode";
  } else {
    body.setAttribute("data-theme", "dark");
    btn.textContent = "☀️ Light Mode";
  }
}

function toggleLanguage() {
  const btn = document.getElementById("lang-toggle");
  const isKo = btn.textContent.trim() === "English";
  btn.textContent = isKo ? "한국어" : "English";

  const navLotto = document.getElementById("nav-lotto");
  const navPet = document.getElementById("nav-pet");
  if (navLotto) navLotto.textContent = isKo ? "Lotto Generator" : "로또 번호 생성";
  if (navPet) navPet.textContent = isKo ? "Pet Compatibility" : "반려동물 궁합";

  const title = document.getElementById("title");
  const subtitle = document.getElementById("subtitle");
  if (title && title.dataset.ko) {
    title.textContent = isKo ? title.dataset.en : title.dataset.ko;
  }
  if (subtitle && subtitle.dataset.ko) {
    subtitle.innerHTML = isKo ? subtitle.dataset.en : subtitle.dataset.ko;
  }
}
