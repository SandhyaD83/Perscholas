
//The function window.pageYOffset returns the current vertical position of the scroll bar,
window.onscroll = function() {
  const div = document.querySelector('.textContainer2');
  const y = window.pageYOffset;
  if (y > 1200) {
    div.style.backgroundColor = "lightgray";
  } else {
    div.style.backgroundColor = "initial";
  }
};