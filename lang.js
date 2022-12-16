const english = document.getElementById("en"),
  polish = document.getElementById("pl"),
  ukrainian = document.getElementById("ua"),
  change_work = document.getElementById("translate-work"),
  change_name = document.getElementById("translate-name"),
  change_text = document.getElementById("translate")


english.addEventListener("click", function() {
    change(english, polish, ukrainian);
  }, false
);

polish.addEventListener("click", function() {
    change(polish, english, ukrainian);
  }, false
);

ukrainian.addEventListener("click", function() {
    change(ukrainian, english, polish);
  }, false
);

function change(lang_on, lang_off1, lang_off2) {
  if (!lang_on.classList.contains("current_lang")) {
    lang_on.classList.add("current_lang");
    lang_off1.classList.remove("current_lang");
    lang_off2.classList.remove("current_lang");
  }

  if (lang_on.innerHTML == "EN") {
    change_text.innerHTML = "Hi, I'm a web developer from Warsaw, PL. Currently working on freelance projects. In my spare time I enjoy DIY, gaming and building my own projects. My preferred tools are vanilla JS, React and HTML/CSS. Good at communicating with clients.";
    change_name.innerHTML = "Oleksandr Dzisiak";
    change_work.innerHTML = "Front-end Developer";
  }
  
  else if (lang_on.innerHTML == "PL") {
    change_text.innerHTML = "Cześć, jestem web developerem z Warszawy. Obecnie pracuje nad niezależnymi projektami. W wolnym czasie lubię majsterkować, grać i tworzyć własne projekty. Moje preferowane narzędzia to Vanilla JS, React i HTML/CSS. Dobry w komunikacji z klientami.";
    change_name.innerHTML = "Oleksandr Dzisiak";
    change_work.innerHTML = "Front-end Developer";
  }
  
  else if (lang_on.innerHTML == "UA") {
    change_text.innerHTML = `Привіт, я веб-розробник із Варшави. Зараз працюю над фрілансерськими проектами. У вільний час я люблю DIY, ігри та створення власних проектів. Моїми улюбленими інструментами є ванільний JS, React і HTML/CSS. Добре вмію спілкуватися з клієнтами.`;
    change_name.innerHTML = "Олександр Дзісяк";
    change_work.innerHTML = "Фронтенд разработчик";
  }
}
