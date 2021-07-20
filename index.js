// Adding handler function against any "keydown" event on the browser window:
window.addEventListener("keydown", function(event) {
  playSound(event.keyCode); // calling a custom funcion that's defined later
  animateKey(event.keyCode); // calling a custom funcion that's defined later
})


// Defining playSound custom function:
function playSound(keyCode) {
  var sound = document.querySelector(`audio[data-key="${keyCode}"]`);
  if (!!sound) { // making sure that the sound object is defined
    sound.currentTime = 0;
    sound.play();
  }
}

// Defining animateKey custom function
function animateKey (keyCode){
  var targetKey = document.querySelector(`.key[data-key="${keyCode}"]`);
  if (!!targetKey) { // making sure that the target key is a valid one
    targetKey.classList.add("playing");
    setTimeout(function() {
      targetKey.classList.remove("playing");
    } , 100);
  }
}
