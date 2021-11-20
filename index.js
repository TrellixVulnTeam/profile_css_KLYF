const fadeOut = document.querySelector('.--fadeout');
const textFade = document.querySelector('.--textFade');

const fadeOutDiv = function(e){
  textFade.classList.remove('unhide');
  textFade.classList.add('hidden');
}

const fadeInDiv = function(e){
 
  textFade.classList.add('unhide');
  console.log('success ');
}


textFade.addEventListener('mouseenter', fadeInDiv);
textFade.addEventListener('mouseleave', fadeOutDiv);
