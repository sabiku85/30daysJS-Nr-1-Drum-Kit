function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const button = document.querySelector(`.button[data-key="${e.keyCode}"]`);

  if (!audio) return; // stop the function from running
  audio.currentTime = 0; //rewinds to the start  
  audio.play();

  button.classList.add('tapped'); // adds additional class .tapped
}

//for removing class .tapped after "transition" it needs to query all selectors with this class and than for each one there has to be "transitionend event's listener", that removes additional class by some function

function removeTapped(e) {
  if (e.propertyName !== 'transform') return; // skip it if it's not a transform

  this.classList.remove('tapped');
}

const tappedButtons = document.querySelectorAll('.button');
tappedButtons.forEach(button => button.addEventListener('transitionend', removeTapped));

window.addEventListener('keydown', playSound);