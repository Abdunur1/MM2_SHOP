//это бургер меню
let burger_menu = document.querySelector(".line"),
  menu = document.querySelector(".menu");

burger_menu.addEventListener("click", function () {
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
});