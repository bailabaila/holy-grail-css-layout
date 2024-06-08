function toggleNav() {
  const outerGrid = document.querySelector(".outer-grid");
  outerGrid.classList.toggle("outer-grid-expanded");

  const navbar = document.querySelector("nav");
  navbar.classList.toggle("hide-nav");
}
