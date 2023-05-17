const languageList = document.getElementById("language_list");
const subMenuList = document.getElementById("sub_list");
const subMenuToggler = document.getElementById("sub_menu_toggler");
const arrow = document.getElementById("down_arrow");
const mobileMenu = document.querySelector(".right_content");

const menuIcon = document.getElementById("menu_icon");

// for open and close submenu
languageList.addEventListener("click", () => {
  subMenuList.classList.toggle("open_submenu");
  arrow.classList.toggle("down_arrow_rotate");
});

// on focus change hide submenu
subMenuToggler.addEventListener("focusout", () => {
  subMenuList.classList.remove("open_submenu");
  arrow.classList.remove("down_arrow_rotate");
});

// animate menu icon
menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("is-active");
  mobileMenu.classList.toggle("open_nav");
});
