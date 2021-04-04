const card = document.querySelector(".card1");
// const card2 = document.querySelector(".card2");
// const card3 = document.querySelector(".card3");
const container = document.querySelector(".cards_container-1");
// const container2 = document.querySelector(".cards_container-2");
// const container3 = document.querySelector(".cards_container-3");
//Items
const title1 = document.querySelector(".card1 .card_title");
// const title2 = document.querySelector(".card2 .card_title");
// const title3 = document.querySelector(".card3 .card_title");
const icon = document.querySelector(".card_icon img");
const intouch = document.querySelector(".card_intouch");
const text = document.querySelector(".card_text");

//Moving Animation Event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  //Popout
  title.style.transform = "translateZ(150px)";
  icon.style.transform = "translateZ(200px) rotateZ(-45deg)";
  description.style.transform = "translateZ(125px)";
  sizes.style.transform = "translateZ(100px)";
  purchase.style.transform = "translateZ(75px)";
});
//Animate Out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  title.style.transform = "translateZ(0px)";
  icon.style.transform = "translateZ(0px) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
  sizes.style.transform = "translateZ(0px)";
  purchase.style.transform = "translateZ(0px)";
});


// //Movement Animation to happen
// const card1 = document.querySelector(".card1");
// const card2 = document.querySelector(".card2");
// const card3 = document.querySelector(".card3");
// const container1 = document.querySelector(".cards_container-1");
// const container2 = document.querySelector(".cards_container-2");
// const container3 = document.querySelector(".cards_container-3");
// //Items
// const title1 = document.querySelector(".card1 .card_title");
// const title2 = document.querySelector(".card2 .card_title");
// const title3 = document.querySelector(".card3 .card_title");
// const icon = document.querySelector(".card_icon img");
// const intouch = document.querySelector(".card_intouch");
// const text = document.querySelector(".card_text");

// //Moving Animation Event
// container1.addEventListener("mousemove", (e) => {
//   let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
//   let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
//   card1.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
// });
// container2.addEventListener("mousemove", (e) => {
//   let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
//   let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
//   card2.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
// });
// container3.addEventListener("mousemove", (e) => {
//   let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
//   let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
//   card3.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
// });
// //Animate In
// container1.addEventListener("mouseenter", (e) => {
//   card1.style.transition = "none";
//   //Popout
//   title1.style.transform = "translateZ(150px)";
//   icon.style.transform = "translateZ(200px) rotateZ(-45deg)";
//   text.style.transform = "translateZ(125px)";
//   intouch.style.transform = "translateZ(75px)";
// });
// container2.addEventListener("mouseenter", (e) => {
//   card2.style.transition = "none";
//   //Popout
//   title.style.transform = "translateZ(150px)";
//   icon.style.transform = "translateZ(200px) rotateZ(-45deg)";
//   text.style.transform = "translateZ(125px)";
//   intouch.style.transform = "translateZ(75px)";
// });
// container3.addEventListener("mouseenter", (e) => {
//   card3.style.transition = "none";


//   //Popout
//   title.style.transform = "translateZ(150px)";
//   icon.style.transform = "translateZ(200px) rotateZ(-45deg)";
//   text.style.transform = "translateZ(125px)";
//   intouch.style.transform = "translateZ(75px)";
// });
// //Animate Out
// container1.addEventListener("mouseleave", (e) => {
//   card1.style.transition = "all 0.5s ease";
//   card1.style.transform = `rotateY(0deg) rotateX(0deg)`;
//   //Popback
//   title1.style.transform = "translateZ(0px)";
//   icon.style.transform = "translateZ(0px) rotateZ(0deg)";
//   text.style.transform = "translateZ(0px)";
//   intouch.style.transform = "translateZ(0px)";
// });
// container2.addEventListener("mouseleave", (e) => {
//   card2.style.transition = "all 0.5s ease";
//   card2.style.transform = `rotateY(0deg) rotateX(0deg)`;
//   //Popback
//   title2.style.transform = "translateZ(0px)";
//   icon.style.transform = "translateZ(0px) rotateZ(0deg)";
//   text.style.transform = "translateZ(0px)";
//   intouch.style.transform = "translateZ(0px)";
// });
// container3.addEventListener("mouseleave", (e) => {
//   card3.style.transition = "all 0.5s ease";
//   card3.style.transform = `rotateY(0deg) rotateX(0deg)`;
//   //Popback
//   title3.style.transform = "translateZ(0px)";
//   icon.style.transform = "translateZ(0px) rotateZ(0deg)";
//   text.style.transform = "translateZ(0px)";
//   intouch.style.transform = "translateZ(0px)";
// });
