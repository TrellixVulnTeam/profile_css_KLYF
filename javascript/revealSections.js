export function revealSections() {
    const allSections = document.querySelectorAll('.section');

    const revealSection = function (entries, observer) {
    const [entry] = entries;
        

    if (!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden');
    entry.target.classList.add('fadeUp');
    observer.unobserve(entry.target);
    };

    const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
    });

    allSections.forEach(function (section) {
    sectionObserver.observe(section);
    });

};

