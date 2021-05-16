const header = (() => {
  let header = document.querySelector("header");
  header.innerHTML = `
        <nav>
        <div class="home">
            <a href="index.html#home">Alina <span class="accent-color">Albrecht</span></a>
        </div>
        <div class="page-sections">
            <a href="index.html#projects">Projects</a>
            <a href="#tools">Tools</a>
            <a href="#contact">Contact</a>
        </div>
        </nav>
        <div class="hamburger-icon">
            <i class="fas fa-bars"></i>
        </div>
    `;
})();

const footer = (() => {
  let footer = document.querySelector("footer");
  footer.innerHTML = `
    <h2>Contact Me</h2>
    <p class="accent-color">
      <a href="mailto:alina.albrecht@mailbox.org"
        >alina.albrecht@mailbox.org</a
      >
    </p>
    <div class="footer-icons">
      <a
        class="footer-icon"
        href="https://www.linkedin.com/in/alina-albrecht-3ba4b198/"
        ><i class="fa fa-linkedin-square"></i
      ></a>
      <a class="footer-icon" href="https://github.com/alinaalbrecht"
        ><i class="fa fa-github"></i
      ></a>
    </div>
      `;
})();
