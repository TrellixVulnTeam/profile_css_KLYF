// export default function sticky() {
//     const initialCoords = header.getBoundingClientRect();

//     window.addEventListener('scroll', function() {
//     console.log(window.scrollY);

//     if(window.scrollY > initialCoords.top) navbar.classList.add('sticky');
//     else navbar.classList.remove('sticky');
    
//     }); 
    
// }





// const header = document.querySelector('.header');
// const navHeight = nav.getBoundingClientRect().height;
// // console.log(navHeight);

// const stickyNav = function(entries) {
//   const [entry] = entries;
//   // console.log(entry);

//   if(!entry.isIntersecting) navbar.classList.add('sticky');
//   else nav.classList.remove('sticky');
// };

// const headerObserver = new IntersectionObserver(stickyNav, {
//   root: null,
//   threshold: 0,
//   rootMargin: `${navHeight}px`,
// });
// headerObserver.observe(header);

// //  reveal sections

// const allSections = document.querySelectorAll('section');

// const revealSection = function(entries, observer){
//   const [entry] = entries;
//   // console.log(entry);

//   if(!entry.isIntersecting) return;

//   entry.target.classList.remove('section--hidden');
//   observer.unobserve(entry.target);
// };

// const sectionObserver = new IntersectionObserver(revealSection, {
//   root: null,
//   threshold: 0.15,
// });

// allSections.forEach(function(section) {
//   sectionObserver.observe(section);
//   // section.classList.add('section--hidden');
// });