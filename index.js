const fadeOut = document.querySelector('.--fadeout');
const fadeIn = document.querySelector('.--fadein');

const fadeOutDiv = function(e){
  fadeOut.classList.add('hidden');
}

const fadeInDiv = function(e){
 
  fadeOut.classList.add('unhide');
  console.log('success');
}

fadeOut.addEventListener('mouseenter', fadeOutDiv);
fadeIn.addEventListener('mouseenter', fadeInDiv);