const imgFade = document.querySelector('.--imgFade');
const textFade = document.querySelector('.--textFade');

const fadeOutText = function(e){
  textFade.classList.remove('unhide');
  textFade.classList.add('hidden');
  imgFade.classList.remove('hidden');
  // imgFade.classList.add('unhide');
  
}

const fadeUpText = function(e){
  textFade.classList.add('unhide');
  imgFade.classList.add('hidden');
  
}

textFade.addEventListener('mouseenter', fadeUpText);
textFade.addEventListener('mouseleave', fadeOutText);
