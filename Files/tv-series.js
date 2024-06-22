
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
".toggle,toggle-ball,.container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");


});
