//append header
const header = (() => {
  let header = document.querySelector("header");
  header.innerHTML = `
        <nav>
        <div class="header__alina-home">
            <a href="index.html#home">Alina <span class="accent-color">Albrecht</span></a>
        </div>
        <div class="header__page-sections">
            <a data-type='page-section' href="index.html#projects">Projects</a>
            <a data-type='page-section' href="index.html#tools">Tools</a>
            <a data-type='page-section' href="index.html#about-me">About Me</a>
            <a data-type='page-section' href="index.html#contact">Contact</a>
        </div>
        </nav>
        <div class="header__hamburger-icon">
            <i class="fas fa-bars"></i>
        </div>
    `;
})();

//Hamburger menu
const hamburgerIcon = document.querySelector(".header__hamburger-icon");
hamburgerIcon.addEventListener("click", () => setTimeout(toggleMenu, 300));

const sections = [...document.querySelectorAll("[data-type='page-section']")];
sections.forEach((section) =>
  section.addEventListener("click", () => setTimeout(toggleMenu, 300))
);

function toggleMenu() {
  if (screen.width <= 1000) {
    let expandedMenu = document.querySelector(".header__page-sections");
    expandedMenu.style.display === "none"
      ? (expandedMenu.style.display = "flex")
      : (expandedMenu.style.display = "none");
    expandedMenu.classList.add("hamburger-menu");
  }
}

//append footer
const footer = (() => {
  let footer = document.querySelector("footer");
  footer.innerHTML = `
    <h2 class="footer__title">Contact Me</h2>
   
      <a  class="footer__title" href="mailto:alina.albrecht@mailbox.org"
        >alina.albrecht@mailbox.org</a
      
    </p>
    <div class="footer__icon-container">
      <a
        class="icon-container__icon"
        href="https://www.linkedin.com/in/alina-albrecht-3ba4b198/"
        ><i class="fa fa-linkedin-square"></i
      ></a>
      <a class="icon-container__icon" href="https://github.com/alinaalbrecht"
        ><i class="fa fa-github"></i
      ></a>
    </div>
      `;
})();
