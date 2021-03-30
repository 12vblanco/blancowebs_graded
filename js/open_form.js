const button = document.querySelector('.button_open');
const form = document.querySelector('#form');
const close = document.querySelector('.close');
const input = document.querySelector('input');
button.addEventListener('click', () => {
    form.style.height = 'auto';
    form.style.display = 'flex';

});
close.addEventListener('click', () => {
    form.style.display = 'none';
    input.trigger("reset");
});

document.getElementByClass("form").style.transition = "display 2s";