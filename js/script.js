const menu = document.querySelector("[data-header='menu']");
const menuMobile = document.querySelector("[data-header='menu-mobile']");

const showMenu = (event) => {
  event.preventDefault();
  menuMobile.classList.toggle("menu-active");
  if (menuMobile.classList.contains("menu-active")) {
    menu.classList.add("active");
  } else {
    menu.classList.remove("active");
  }
};

menuMobile.addEventListener("click", showMenu);
