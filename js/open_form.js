
// FORM
const button = document.querySelector('.button_open');
const form = document.querySelector('#form');
const close = document.querySelector('.close');

button.addEventListener('click', () => {
    form.style.height = '50rem';
    form.style.visibility = 'visible';
    form.style.opacity = '1';
    document.getElementById("form").style.transition = "height .4s, opacity .5s";

});

close.addEventListener('click', () => {
    form.style.height = '0';
    form.style.visibility = 'hidden';
    form.style.opacity = '0';
    document.getElementById("form").style.transition = "height 0.4s, opacity .4s";
});


// WORKS
const slider = document.querySelector('.wrapper');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', e => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', _ => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', _ => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', e => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const SCROLL_SPEED = 3;
  const walk = (x - startX) * SCROLL_SPEED;
  slider.scrollLeft = scrollLeft - walk;
});