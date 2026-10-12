const main = document.querySelector('.main');


window.addEventListener('wheel', function () {
  main.classList.add('blurred');


  // скільки пікселів прокрутили
  const scrollY = window.scrollY;

  if (scrollY > 0) {
    // якщо прокрутили більше 100px — блюр
    main.classList.add('blurred');
  } else {
    // якщо на самому верху — без блюру
    main.classList.remove('blurred');
  }

});


const open = document.getElementById("open");
const close = document.getElementById("close");
const modal = document.getElementById("backdrop");

open.addEventListener("click", () => {
  modal.style.display = "block";
})

close.addEventListener("click", () => {
  modal.style.display = "none";
})


const open1 = document.getElementById("open1");


open1.addEventListener("click", () => {
  modal.style.display = "block";
})


const open2 = document.getElementById("open2");

open2.addEventListener("click", () => {
  modal.style.display = "block";
})


const open3 = document.getElementById("open3");

open3.addEventListener("click", () => {
  modal.style.display = "block";
})


const open4 = document.getElementById("open4");

open4.addEventListener("click", () => {
  modal.style.display = "block";
})


const open5 = document.getElementById("open5");

open5.addEventListener("click", () => {
  modal.style.display = "block";
})


const open6 = document.getElementById("open6");

open6.addEventListener("click", () => {
  modal.style.display = "block";
})


const open7 = document.getElementById("open7");

open7.addEventListener("click", () => {
  modal.style.display = "block";
})

const open11 = document.getElementById("open11");
const close1 = document.getElementById("close1");
const modal1 = document.getElementById("backdrop1");

open11.addEventListener("click", () => {
  modal1.style.display = "block";
})

open11.addEventListener("click", () => {
  modal.style.display = "none";
})

close1.addEventListener("click", () => {
  modal1.style.display = "none";
})