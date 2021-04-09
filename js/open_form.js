


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

// BTN BORDER
const btn_border = document.querySelector('.btn');
btn_border.addEventListener('hover', (e) => {
  btn_border.style.btn_border = '0px solid #ffffff';});




// WORKS

// Copyright (c) 2021 by Frederic R. (https://codepen.io/fredericrous/pen/xxVXJYX)

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

// https://codepen.io/fredericrous/pen/xxVXJYX

const isApple = /apple/i.test(navigator.vendor);
isApple ? "proximity" : "unset";
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

