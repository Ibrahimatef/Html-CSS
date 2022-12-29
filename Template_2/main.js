let bullets = Array.from(document.querySelectorAll(".landing .bullets li"));
let images = Array.from(document.querySelectorAll(".landing img"));
let prev = document.getElementById("prevButton");
let next = document.getElementById("nextButton");

function removeAllActiveBullets() {
  bullets.forEach(function (bullet) {
    bullet.classList.remove("active");
  });
}

function removeAllImages() {
  images.forEach(function (image) {
    image.style.opacity = 0;
  });
}

function clicked() {
  removeAllActiveBullets();
  removeAllImages();
  this.classList.add("active");
  console.log(Number(this.id[3]));
  images[Number(this.id[3]) - 1].style.opacity = 1;
}

bullets.forEach(function (element) {
  element.onclick = clicked;
});

function nextButton() {
  let currentBullet = document.querySelector("li.active");
  removeAllActiveBullets();
  removeAllImages();
  let newBullet;
  if (Number(currentBullet.id[3]) === 3)
    newBullet = document.getElementById(`img1`);
  else
    newBullet = document.getElementById(
      `img${Number(currentBullet.id[3]) + 1}`
    );

  newBullet.classList.add("active");
  images[Number(newBullet.id[3]) - 1].style.opacity = 1;
}

function prevButton() {
  let currentBullet = document.querySelector("li.active");
  removeAllActiveBullets();
  removeAllImages();
  let newBullet;
  if (Number(currentBullet.id[3]) === 1)
    newBullet = document.getElementById(`img3`);
  else
    newBullet = document.getElementById(
      `img${Number(currentBullet.id[3]) - 1}`
    );

  newBullet.classList.add("active");
  images[Number(newBullet.id[3]) - 1].style.opacity = 1;
}

prev.onclick = prevButton;
next.onclick = nextButton;

let menuIcon = document.querySelector(".toggle-menu");
let menus = document.querySelector("header nav ul");
let labels = Array.from(document.querySelectorAll("header nav ul li a"));

menuIcon.onclick = function () {
  // console.log(typeof menus.style.height);
  if (menus.style.height == "" || menus.style.height === "0px") {
    menus.style.height = "300px";
  } else menus.style.height = "0px";
};

function removeAllActive() {
  labels.forEach(function (label) {
    label.classList.remove("active");
  });
}

labels.forEach(function (label) {
  label.onclick = function () {
    removeAllActive();
    this.classList.add("active");
  };
});

const interval = setInterval(() => next.click(), 5000);
// while (1) {
//   setTimeout(next.click(), 5000);
// }

let visited = false;
let plans = Array.from(document.querySelectorAll(".pricing .plans .plan"));
for (let i = 0; i < plans.length; i++) {
  plans[i].style.transition = `${i * 2 + 1}s`;
}

window.onscroll = function () {
  if (
    window.scrollY >= document.querySelector(".pricing").offsetTop &&
    !visited
  ) {
    visited = true;
    let plans = Array.from(document.querySelectorAll(".pricing .plans .plan"));
    plans.forEach((plan) => (plan.style.opacity = "1"));
  }
};
