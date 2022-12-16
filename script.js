"use strict!";
let docTitle = document.title,
    langTitle = "Come back👏🏻";
const english = document.getElementById("en"),
    polish = document.getElementById("pl"),
    ukrainian = document.getElementById("ua"),
    change_work = document.getElementById("translate-work"),
    change_name = document.getElementById("translate-name"),
    change_text = document.getElementById("translate"),
    r = document.querySelector(":root"),
    body = document.querySelector("body"),
    buttonChangeTheme = document.querySelector(".theme"),
    cvLinkChangeEN = document.querySelector('.ico-cv_en'),
    cvLinkChangePL = document.querySelector('.ico-cv_pl'),
    cvLinkChangeUA = document.querySelector('.ico-cv_ua');

window.addEventListener("blur", () => {
    document.title = langTitle;
});
window.addEventListener("focus", () => {
    document.title = docTitle;
});

english.addEventListener(
    "click",
    function () {
        change(english, polish, ukrainian);
    },
    false
);
polish.addEventListener(
    "click",
    function () {
        change(polish, english, ukrainian);
    },
    false
);
ukrainian.addEventListener(
    "click",
    function () {
        change(ukrainian, english, polish);
    },
    false
);
function change(lang_on, lang_off1, lang_off2) {
    if (!lang_on.classList.contains("current_lang")) {
        lang_on.classList.add("current_lang");
        lang_off1.classList.remove("current_lang");
        lang_off2.classList.remove("current_lang");
    }
        cvLinkChangeEN.classList.remove('hide');
        cvLinkChangeEN.classList.remove('show');
        cvLinkChangePL.classList.remove('hide');
        cvLinkChangePL.classList.remove('show');
        cvLinkChangeUA.classList.remove('hide');
        cvLinkChangeUA.classList.remove('show');
    

    if (lang_on.innerHTML == "EN") {
        change_text.innerHTML =
            "Hi, I'm a web developer from Warsaw, PL.<br>Currently working on freelance projects.<br>In my spare time I enjoy DIY, gaming and building my own projects.<br>My preferred tools are vanilla JS, React and HTML/CSS.<br>Good at communicating with clients.";
        change_name.innerHTML = "Oleksandr Dzisiak";
        change_work.innerHTML = "Front-end Developer";
        langTitle = "Come back👏🏻";
        r.style.setProperty("--Flag", "var(--EN)");
        cvLinkChangeEN.classList.add('show');
        cvLinkChangePL.classList.add('hide');
        cvLinkChangeUA.classList.add('hide');

        

    } else if (lang_on.innerHTML == "PL") {
        change_text.innerHTML =
            "Cześć, jestem web developerem z Warszawy. Obecnie pracuje nad niezależnymi projektami. W wolnym czasie lubię majsterkować, grać i tworzyć własne projekty.<br>Moje preferowane narzędzia to Vanilla JS, React i HTML/CSS.<br>Dobry w komunikacji z klientami.";
        change_name.innerHTML = "Oleksandr Dzisiak";
        change_work.innerHTML = "Front-end Developer";
        langTitle = "Wróć👏🏻";
        r.style.setProperty("--Flag", "var(--PL)");

        cvLinkChangeEN.classList.add('hide');
        cvLinkChangePL.classList.add('show');
        cvLinkChangeUA.classList.add('hide');

    } else if (lang_on.innerHTML == "UA") {
        change_text.innerHTML = `Привіт, я веб-розробник із Варшави.<br>Зараз працюю над фрілансерськими проектами.<br>У вільний час я люблю DIY, ігри та створення власних проектів.<br>Моїми улюбленими інструментами є ванільний JS, React і HTML/CSS.<br>Добре вмію спілкуватися з клієнтами.`;
        change_name.innerHTML = "Олександр Дзісяк";
        change_work.innerHTML = "Фронтенд розробник";
        langTitle = "Повернись👏🏻";
        r.style.setProperty("--Flag", "var(--UA)");
        cvLinkChangeEN.classList.add('hide');
        cvLinkChangePL.classList.add('hide');
        cvLinkChangeUA.classList.add('show');
    }
}

buttonChangeTheme.addEventListener("click", changeThemes);
function changeThemes() {
    body.classList.toggle("dark");
    buttonChangeTheme.classList.toggle("light");
    if (buttonChangeTheme.textContent === "Go Light Theme") {
        r.style.setProperty("--primaryColor", "#f1faee");
        r.style.setProperty("--ascentColor", "#1d3557");
        r.style.setProperty("--White", "white");
        r.style.setProperty("--BackgroundColor", "#457b9d");
        r.style.setProperty("--HoverAscentColor", "#04070c");
        r.style.setProperty("--BtnTextColor", '#04070c');
        buttonChangeTheme.textContent = "Go Dark Theme";
    } else {
        buttonChangeTheme.textContent = "Go Light Theme";
        r.style.setProperty("--primaryColor", "#16213E");
        r.style.setProperty("--ascentColor", "#E94560");
        r.style.setProperty("--White", "white");
        r.style.setProperty("--BackgroundColor", "#0F3460");
        r.style.setProperty("--HoverAscentColor", "#9c2e40");
        r.style.setProperty("--BtnTextColor", "white");
    }
}
