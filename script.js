const header = (() => {
    let header = document.querySelector("header");
    header.innerHTML = `
        <nav>
        <div class="home">
            <a href="#home">Alina <span class="accent-color">Albrecht</span></a>
        </div>
        <div class="page-sections">
            <a href="#projects">Projects</a>
            <a href="#tools">Tools</a>
            <a href="#contact">Contact</a>
        </div>
        </nav>
        <div class="hamburger-icon">
            <i class="fas fa-bars"></i>
        </div>
    `
})();
 

