
export function menuFade() {
    const nav = document.querySelector(".navbar");
    function hover(e){
        if (e.target.classList.contains('navbar__text')) {
            const link = e.target;
            
            const siblings = link.closest('.navbar').querySelectorAll('.navbar__text');
            siblings.forEach(el => {
            if (el !== link) el.style.opacity = this;
            });

        }
    }
    nav.addEventListener('mouseover', hover.bind(0.7));
    nav.addEventListener('mouseout', hover.bind(1));
};
    