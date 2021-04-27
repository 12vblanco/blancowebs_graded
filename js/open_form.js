


// FORM
const button = document.querySelector('.button_open');
const form = document.querySelector('#form');
const close = document.querySelector('.close');


// Open form
button.addEventListener('click', () => {
    form.style.height = '50rem';
    form.style.visibility = 'visible';
    form.style.opacity = '1';
    document.getElementById("form").style.transition = "height .4s, opacity .5s";

});


// Close from 
close.addEventListener('click', () => {
    form.style.height = '0';
    form.style.visibility = 'hidden';
    form.style.opacity = '0';
    document.getElementById("form").style.transition = "height 0.4s, opacity .4s";
});


// CONTACT BTN
const contact = document.querySelectorAll('.open_contact');
contact.addEventListener('click', () => {
  window.open('../contact.html', '_self');
});


// BTN BORDER
// const btn_border = document.querySelector('.btn');
// btn_border.addEventListener('hover', (e) => {
//   btn_border.style.btn_border = '0px solid #7c9b5c';
// });



