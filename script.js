// Challenge nº1
const calcAge = function (age) {
  age = age * 365;
  calcAgeInput = document.getElementById("calc-age");
  ageResult = document.getElementById(
    "ageResult"
  ).innerHTML = `${calcAgeInput.value} Years = ${age} Days `;
};

const dropDownMenu = document.querySelector(".dropdown-menu");
const menuBtn = document.querySelector(".fa-bars");
menuBtn.addEventListener("click", function () {
  dropDownMenu.classList.toggle("dropdown-active");
  menuBtn.classList.toggle("icon-active");
  menuBtn.classList.toggle("rotate");
});
