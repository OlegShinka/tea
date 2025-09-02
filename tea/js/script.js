const Menu_open = document.querySelector(".menu__btn");
const Menu_close = document.querySelector(".mobile-menu__btn-close");
const Menu_list = document.querySelector(".header__mobile-menu");

Menu_open.addEventListener("click", () => {
  Menu_list.classList.add("header__mobile-menu--isOpen");
});

Menu_close.addEventListener("click", () => {
  Menu_list.classList.remove("header__mobile-menu--isOpen");
});
