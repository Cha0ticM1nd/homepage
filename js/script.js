console.log("Hello everyone!");

let headerButton = document.querySelector(".header__button");
let body = document.querySelector(".body");
let section = document.querySelectorAll(".section");
let sectionImageDescription = document.querySelectorAll(".section__imageDescription");
let themeName = document.querySelector(".themeName");
let navigationLink = document.querySelectorAll(".navigation__link");
let footerLink = document.querySelector(".footer__link");
let footerText = document.querySelector(".footer__text");

headerButton.addEventListener("click", () => {
  themeName.innerText = body.classList.contains("body--light")
    ? "Jasny"
    : "Ciemny";

  headerButton.classList.toggle("header__button--light");

  body.classList.toggle("body--light");

  sectionImageDescription.forEach((sectionImageDescription) =>
    sectionImageDescription.classList.toggle("section__imageDescription--dark")
  );

  section.forEach((section) => section.classList.toggle("section--dark"));

  navigationLink.forEach((navigationLink) => navigationLink.classList.toggle("navigation__link--light"));

  footerLink.classList.toggle("footer__link--light");

  footerText.classList.toggle("footer__text--dark");
});
