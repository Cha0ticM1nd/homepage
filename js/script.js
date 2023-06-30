{
  const welcome = () => {
    console.log("Hello everyone!");
  };

  const toggleTheme = () => {
    const body = document.querySelector(".body");
    const section = document.querySelectorAll(".section");
    const sectionImageDescription = document.querySelectorAll(
      ".js-imageDescription"
    );
    const themeName = document.querySelector(".js-themeNameChange");
    const navigationLink = document.querySelectorAll(".js-navigationLink");
    const footerLink = document.querySelector(".js-footerLink");
    const footerText = document.querySelector(".js-footerText");

    body.classList.toggle("body--light");
    headerButton.classList.toggle("header__button--light");
    footerLink.classList.toggle("footer__link--light");
    footerText.classList.toggle("footer__text--dark");
    section.forEach((section) => section.classList.toggle("section--dark"));

    sectionImageDescription.forEach((sectionImageDescription) =>
      sectionImageDescription.classList.toggle(
        "section__imageDescription--dark"
      )
    );

    navigationLink.forEach((navigationLink) =>
      navigationLink.classList.toggle("navigation__link--light")
    );

    themeName.innerText = body.classList.contains("body--light")
      ? "Jasny"
      : "Ciemny";
  };

  const headerButton = document.querySelector(".js-button");

  const init = () => {
    headerButton.addEventListener("click", toggleTheme);

    welcome();
  };

  init();
}
