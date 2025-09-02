const Menu_open = document.querySelector(".menu__btn");
const Menu_close = document.querySelector(".mobile-menu__btn-close");
const Menu_list = document.querySelector(".header__mobile-menu");
const Backdrop = document.querySelector(".backdrop");

Menu_open.addEventListener("click", () => {
  Menu_list.classList.add("header__mobile-menu--isOpen");
  Backdrop.classList.add("isVisible");
});

Menu_close.addEventListener("click", () => {
  Menu_list.classList.remove("header__mobile-menu--isOpen");
  Backdrop.classList.remove("isVisible");
});

// close Menu to click backdrop

Backdrop.addEventListener("click", () => {
  Menu_list.classList.remove("header__mobile-menu--isOpen");
  Backdrop.classList.remove("isVisible");
});
