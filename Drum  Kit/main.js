const keys = document.querySelectorAll('.keys')


const removeTransition = (e) => {
    if(e.propertName != "transform") return
    this.classList.remove('playing')
  }
  const playSound = (e) => {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if(!audio) {
      return;
    } 
    audio.play();
    key.classList.add('playing')
    setTimeout(() => {
      key.classList.remove('playing')
    }, 100)
  }

keys.forEach(key => key.addEventListener('transitioned', removeTransition))
window.addEventListener('keydown', playSound); //keypress works the same? ig so