const imgFade = document.querySelectorAll('.--imgFade');
const textFade = document.querySelectorAll('.--textFade');

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



// const panels = document.querySelectorAll('.panel');

// function fadeOutText() {
//   this.classList.toggle('hidden');
// }

// function toggleActive(e) {
//   // console.log(e.propertyName);
//   if(e.propertyName.includes('flex')) {
//     this.classList.toggle('open-active');
//   }
// }

//     panels.forEach(panel => panel.addEventListener('click', toggleOpen));
//     panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));