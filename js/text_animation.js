anime({
  targets: '#hello path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 3000,
  direction: 'alternate',
  loop: 1,
  endDelay: 200,
});
anime({
  targets: '#victor path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutQuad',
  duration: 1900,
  delay: 600,
  direction: 'alternate',
  loop: 1,
  endDelay: 1000,
});
anime({
  targets: '#well path',
  strokeDashoffset: [anime.setDashoffset, 99997700],
  easing: 'easeOutBounce',
  duration: 2020,
  delay: 2300,
  direction: 'alternate',
  loop: 1,
});

var translate = anime.timeline({
  easing: 'easeOutBounce',
  duration: 6000,
});

translate.add({
  targets: '.showcase_info',
  translateY: -200,
  opacity: 1,

  duration: 2500,
  delay: 6500,
});

// MORPHING

anime({
  targets: '.blob_anime polygon',
  points: [
    {
      value: [
        '145.8 43.3001C153.1 51.6001 148.5 71.9001 148.6 89.0001C148.7 106.1 153.5 119.9 150 131.6C146.5 143.4 134.7 153.1 122.6 153.8C110.6 154.6 98.4 146.4 86.4 140.6C74.4 134.9 62.8 131.5 56.6 123.7C50.4 115.8 49.6 103.4 52 91.9001C54.5 80.3001 60.1 69.7001 68.6 61.6001C77.1 53.6001 88.5 48.1001 103.9 43.5001C119.2 38.9001 138.4 35.1001 145.8 43.3001',
      ],
    },
    {
      value:
        '55.4,-18C61.5,0.6,48.9,25.3,30.9,37.2C12.9,49,-10.6,48,-30.6,35.1C-50.6,22.2,-67.2,-2.5,-61.5,-20.6C-55.8,-38.7,-27.9,-50.2,-1.6,-49.7C24.7,-49.2,49.4,-36.6,55.4,-18',
    },
    {
      value:
        '68,-26C75.4,1,60.2,31.4,37.2,47.1C14.2,62.9,-16.5,63.9,-35.4,49.9C-54.4,35.9,-61.5,6.8,-53.6,-20.7C-45.8,-48.2,-22.9,-74,3.7,-75.2C30.2,-76.4,60.5,-52.9,68,-26',
    },
    {
      value:
        '53.1,-16.4C61.3,8.1,55.4,38,39.2,48.5C23,59,-3.4,50,-24.4,34.5C-45.4,19,-61,-2.9,-56,-22.9C-51.1,-42.8,-25.5,-60.8,-1.6,-60.3C22.4,-59.8,44.9,-40.8,53.1,-16.4',
    },
  ],
  easing: 'easeOutQuad',
  duration: 20000,
  loop: false,
});

/* FORM*/
const button = document.querySelector('.button_open');
const form = document.querySelector('#main_form');
const close = document.querySelector('.close');
// Open form
button.addEventListener('click', () => {
  form.style.height = '50rem';
  form.style.visibility = 'visible';
  form.style.opacity = '1';
  document.getElementById('main_form').style.transition =
    'height .4s, opacity .5s';
});
// Close form
close.addEventListener('click', () => {
  form.style.height = '0';
  form.style.visibility = 'hidden';
  form.style.opacity = '0';
  document.getElementById('main_form').style.transition =
    'height 0.4s, opacity .4s';
});
//  CONTACT BTN


window.onload = function () {
  const contact = document.querySelectorAll('.open_contact');
  contact.addEventListener('click', () => {
    window.open('../contact.html', '_self');
  });
};
