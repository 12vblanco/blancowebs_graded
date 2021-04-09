anime({
  targets: '#hello path',
  strokeDashoffset: [anime.setDashoffset, 198],
  easing: 'easeInOutSine',
  duration: 3000,
  // delay: function(el, i) { return i * 250 },
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

anime({
  targets: '.showcase_info',
  translateY: -200,
  opacity: 1,
  duration: 6000,
  delay: 6400,
});

// anime({
//   targets: 'blob',
//   points: [
//     {value: '145.8 43.3001C153.1 51.6001 148.5 71.9001 148.6 89.0001C148.7 106.1 153.5 119.9 150 131.6C146.5 143.4 134.7 153.1 122.6 153.8C110.6 154.6 98.4 146.4 86.4 140.6C74.4 134.9 62.8 131.5 56.6 123.7C50.4 115.8 49.6 103.4 52 91.9001C54.5 80.3001 60.1 69.7001 68.6 61.6001C77.1 53.6001 88.5 48.1001 103.9 43.5001C119.2 38.9001 138.4 35.1001 145.8 43.3001'}
//     {value: '29.3,-35.9C36.9,-28.6,41.1,-18.3,43.2,-7.5C45.3,3.4,45.2,14.7,42.9,30.3C40.5,45.9,35.8,65.8,26.2,67.3C16.5,68.9,1.8,52.1,-11.2,42.3C-24.2,32.6,-35.5,29.8,-41.6,22.5C-47.6,15.2,-48.2,3.3,-50.7,-13.5C-53.2,-30.3,-57.5,-52,-49.3,-59.2C-41.2,-66.5,-20.6,-59.3,-4.9,-53.5C10.9,-47.7,21.8,-43.3,29.3,-35.9'}
//     {value: '33.2,-40.8C45.2,-29.4,58.6,-21.1,63,-9.1C67.5,2.8,63,18.3,53.6,27.3C44.1,36.3,29.6,38.9,17.4,39.9C5.2,40.9,-4.7,40.4,-20.1,41C-35.6,41.6,-56.7,43.2,-61.3,35.3C-65.9,27.4,-54.1,10,-45.8,-3.1C-37.5,-16.1,-32.8,-24.8,-25.8,-37.1C-18.7,-49.3,-9.4,-65.1,0.6,-65.8C10.6,-66.5,21.2,-52.2,33.2,-40.8'}
//   ],
//   easing: 'easeOutQuad',
//   duration: 8000,
//   loop: true,
//   direction: 'alternate',
// })