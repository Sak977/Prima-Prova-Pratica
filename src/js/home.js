const btnLeft = document.querySelectorAll(".slider__btn--left");
const btnRight = document.querySelectorAll(".slider__btn--right");
const slider = document.querySelectorAll(".slider");
const slideHoverBlackList = document.querySelector(".slide-hover-blacklist");
const blacklistDiv = document.querySelector(".blacklist-div");
const closeblacklistDiv = document.querySelector(".chiudi");
const overlay = document.querySelector(".overlay");

// const btns = Array.from(btnLeft).concat(Array.from(btnRight));
// const btn2 = new Array(...btnLeft, ...btnRight);
const btns = [...btnLeft, ...btnRight];

const nextSlide = function (btnR, i) {
  slider[i].style.transform = `translateX(-100%)`;
  // slider.style.overflow = "visible";
  btnR.classList.add("hidden");
  btnLeft[i].classList.remove("hidden");
};

const previousSlide = function (btnL, i) {
  slider[i].style.transform = `translateX(0%)`;
  // slider.style.overflow = "hidden";
  btnL.classList.add("hidden");
  btnRight[i].classList.remove("hidden");
};

const slideHoverFilm = function () {
  blacklistDiv.classList.remove("hidden");
  overlay.classList.remove("hidden");
  document.querySelector("main").classList.add("fixed");
};

const closeHoverFilm = function (event) {
  event.preventDefault();
  blacklistDiv.classList.add("hidden");
  overlay.classList.add("hidden");
  document.querySelector("main").classList.remove("fixed");
};

btnRight.forEach((btnR, i) =>
  btnR.addEventListener("click", function () {
    nextSlide(btnR, i);
  })
);

btnLeft.forEach((btnL, i) =>
  btnL.addEventListener("click", function () {
    previousSlide(btnL, i);
  })
);

// blacklist
slideHoverBlackList.addEventListener("click", function (e) {
  if (e.target.classList.contains("slider__btn--left")) return;
  slideHoverFilm();
});

closeblacklistDiv.addEventListener("click", function (e) {
  closeHoverFilm(e);
});
