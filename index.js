
const nav = document.querySelector(".navbar");
///////////////////////////////////////
// Smooth scrolling

document.querySelector('.navbar').addEventListener('click', function (e) {
  e.preventDefault();
  // Matching strategy
  if (e.target.classList.contains('navbar__text')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});





////////////////////////////////////////

// Menu fade animation
const handleHover = function (e) {
  if (e.target.classList.contains('navbar__text')) {
    const link = e.target;
    
    const siblings = link.closest('.navbar').querySelectorAll('.navbar__text');
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    
  }
};
nav.addEventListener('mouseover', handleHover.bind(0.7));
nav.addEventListener('mouseout', handleHover.bind(1));





//////////////////////////////////////////////
// Reveal sections
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





//////////////////////////////////////////////

// slider

const slider = function(){

  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');


  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions

  const createDots =function(){
    slides.forEach(function(_, i) {
      dotContainer.insertAdjacentHTML('beforeend', 
      `<button class="dots__dot" data-slide="${i}"></button>`);
    })
  }


  const activateDot = function(slide) {
    document.querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'));

    document.querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
  };



  const goToSlide = function(slide) {
      slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
      );
  }



  // Next slide
  const nextSlide = function() {
      if (curSlide === maxSlide - 1){
      curSlide = 0;
    } else {
    curSlide++;
    };

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function() {
    if (curSlide === 0){
    curSlide = maxSlide -1;
    } else {
    curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
    };


  // init function
    const init = function() {
      goToSlide(0);
      createDots();
      activateDot(0);
    }

    init();

    // Event handlers 
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function(e) {
    // console.log(e);
    if(e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide(); // Short circuited version
  });

  dotContainer.addEventListener('click', function (e) {
      if (e.target.classList.contains('dots__dot')) {
        const { slide } = e.target.dataset;
        goToSlide(slide);
        activateDot(slide);
    };
  });
};

slider();



// ///////////////////////////////////////
// Hamburger

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

