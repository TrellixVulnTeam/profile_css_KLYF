const fadeOut = document.querySelector('.--fadeout');
const fadeIn = document.querySelector('.--fadein');

const fadeOutDiv = function(e){
  fadeIn.classList.add('hidden');
}

const fadeInDiv = function(e){
 
  fadeIn.classList.add('unhide');
  console.log('success ');
}


fadeIn.addEventListener('mouseenter', fadeInDiv);
fadeIn.addEventListener('mouseleave', fadeOutDiv);