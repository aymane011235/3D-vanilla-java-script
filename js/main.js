//movement happened on this

const card = document.querySelector(".card");
const cont = document.querySelector(".container");
const sneaker = document.querySelector(".sneaker");

cont.addEventListener("mousemove", (e) => {
  // console.log(e.pageX, e.pageY);
  let xAxis = (window.innerWidth / 2 - e.pageX) / 15;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 15;
  // console.log(xAxis, yAxis);
  card.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
});
cont.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  sneaker.style.transform = "translateZ(100px)";
});

cont.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5 ease";
  card.style.transform = `rotateX(0deg) rotateY(0deg)`;
  sneaker.style.transform = "translateZ(0)";
});
