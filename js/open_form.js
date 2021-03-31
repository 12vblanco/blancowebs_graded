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
