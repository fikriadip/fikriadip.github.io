/**
 * Navbar fixed
 */
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

/**
 * Hamburger Menu
 */
const hamburger = document.querySelector("#hamburger-menu");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

/**
 * Nav mobile click outside hamburger
 */
window.addEventListener("click", (e) => {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

/**
 * Add active description in portfolio projects
 */
$("#projects span").on("mouseover", function () {
  $(this).find(".description").removeClass("opacity-0");
  $(this).find(".description").addClass("description-active");
});

$("#projects span").on("mouseout", function () {
  $(this).find(".description").addClass("opacity-0");
  $(this).find(".description").removeClass("description-active");
});

/**
 * Dark Mode toggle
 */
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", () => {
  darkToggle.checked ? html.classList.add("dark") || (localStorage.theme = "dark") : html.classList.remove("dark") || (localStorage.theme = "light");
});

/**
 * Set the toggle position according to the mode
 */
if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}

/**
 * Preloader
 */
$(".preloader").delay(550).fadeOut(550);

/**
 * Send Contact Form
 */
const scriptURL = "https://script.google.com/macros/s/AKfycbyG19JnjmcqwmW7dHvgJ-mryofhWoLiL11ojI5SqwtPNYg6jtUyTG7eYul-OuWOhzn8/exec";
const form = document.forms["contact-form"];
const btnSend = document.querySelector(".btn-send");
const btnLoading = document.querySelector(".btn-loading");

form.addEventListener("submit", (e) => {
  event.preventDefault();
  // when the button is clicked display the loading button, remove the submit button
  btnLoading.classList.toggle("hidden");
  btnSend.classList.toggle("hidden");

  fetch(scriptURL, {
    method: "POST",
    body: new FormData(form),
  })
    .then((response) => {
      // show submit button, remove loading button
      btnLoading.classList.toggle("hidden");
      btnSend.classList.toggle("hidden");
      form.reset();
      Swal.fire({
        icon: "success",
        title: "SUCCESS",
        text: "Send Message Successfully",
        timer: 2300,
      });
      console.log("Success!", response);
    })
    .catch((error) => {
      Swal.fire({
        icon: "warning",
        title: "FAILED",
        text: "Send Message Failed",
        timer: 2300,
      }).catch((error) => console.error("Error!", error.message));
    });
  return true;
});

/**
 * Animation on scroll
 */
function aos_init() {
  AOS.init({
    duration: 1000,
    offset: 250,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });
}
window.addEventListener("load", () => {
  aos_init();
});
