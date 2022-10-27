// Navbar Fixed
window.onscroll = () => {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.scrollY > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// Hamburger Menu
const hamburger = document.querySelector("#hamburger-menu");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Nav mobile click outside hamburger
window.addEventListener("click", (e) => {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// Add active description in portfolio projects
$("#projects span").on("mouseover", function () {
  $(this).find(".description").removeClass("opacity-0");
  $(this).find(".description").addClass("description-active");
});

$("#projects span").on("mouseout", function () {
  $(this).find(".description").addClass("opacity-0");
  $(this).find(".description").removeClass("description-active");
});

// Dark mode Toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", () => {
  darkToggle.checked ? html.classList.add("dark") || (localStorage.theme = "dark") : html.classList.remove("dark") || (localStorage.theme = "light");
});

// Set the toggle position according to the mode
if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}
