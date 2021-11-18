const fadeOut = document.querySelector('.--fadeout');
const fadeIn = document.querySelector('.--fadein');

const fadeOutDiv = function(e){
  fadeOut.classList.add('hidden');
  console.log('success');
}

fadeOut.addEventListener('mouseenter', fadeOutDiv);