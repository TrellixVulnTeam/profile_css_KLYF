export function hamburgerMenu() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navLink = document.querySelectorAll(".nav-item");

    const mobileMenu = function() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }

    const closeMenu = function () {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }

    
        hamburger.addEventListener("click", mobileMenu);

        // navLink.forEach(n => n.addEventListener("click", closeMenu));

 };
// export default hamburgerMenu;





