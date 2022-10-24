(function () {
  const openBtn = document.querySelector(".nav__menu");
  const menu = document.querySelector(".nav__links");
  const closeMenu = document.querySelector(".nav__close");

  openBtn.addEventListener("click", () => {
    menu.classList.add("nav__links--show");
  });

  closeMenu.addEventListener("click", () => {
    menu.classList.remove("nav__links--show");
  });
})();
