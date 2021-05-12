/* FORM*/
const button = document.querySelector('.button_open');
const form = document.querySelector('#main_form');
const close = document.querySelector('.close');
// Open form
button.addEventListener('click', () => {
  form.style.height = '50rem';
  form.style.visibility = 'visible';
  form.style.opacity = '1';
  document.getElementById('main_form').style.transition = 'height .4s, opacity .5s';
});
// Close form
close.addEventListener('click', () => {
  form.style.height = '0';
  form.style.visibility = 'hidden';
  form.style.opacity = '0';
  document.getElementById('main_form').style.transition = 'height 0.4s, opacity .4s';
});
//  CONTACT BTN
const contact = document.querySelectorAll('.open_contact');
contact.addEventListener('click', () => {
  window.open('../contact.html', '_self');
});
