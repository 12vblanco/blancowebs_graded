const button = document.querySelector('.button_open');
const form = document.querySelector('#form');
const close = document.querySelector('.close');

button.addEventListener('click', () => {
    form.style.height = '50rem';
    form.style.visibility = 'visible';
    form.style.opacity = '1';
    document.getElementById("form").style.transition = "all .4s";

});

close.addEventListener('click', () => {
    form.style.height = '0';
    form.style.visibility = 'hidden';
    document.getElementById("form").style.transition = "height 0.4s";
    // document.getElementById("form").style.transition = "opacity 0.2s";

});
