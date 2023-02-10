const run =  () => {
    let mario = document.querySelector('.image')
    mario.classList.toggle('moveLeftToRight')
}
function startAnimation() {
    var element = document.querySelector('.jump');
    element.style.animation = "jumping 0.8s ease-in-out infinite";
  }

  function stopAnimation() {
    var element = document.querySelector('.jump');
    element.style.animation = "none";
  } 