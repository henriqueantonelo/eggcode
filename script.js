///Funcionamento do switch de temas
document.addEventListener("DOMContentLoaded", function () {
  let theme_toggler = document.getElementById("theme-btn");

  // Função para alternar o tema
  function toggleTheme() {
    document.body.classList.toggle("dark-mode");

    // Verificar se a classe 'dark-mode' está presente no corpo do documento
    let isDarkMode = document.body.classList.contains("dark-mode");

    // Armazenar a preferência de tema no localStorage
    localStorage.setItem("tema", isDarkMode ? "dark" : "light");
  }

  theme_toggler.addEventListener("click", toggleTheme);

  let temaArmazenado = localStorage.getItem("tema");

  if (temaArmazenado === "dark") {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
});

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
