// Smooth scrolling
const scroll = new SmoothScroll('nav a[href*="#"]', {
 speed: 800
});

// Sticky header
window.onscroll = function() {stickyHeader()};

const header = document.querySelector("header");
const sticky = header.offsetTop;

function stickyHeader() {
 if (window.pageYOffset > sticky) {
  header.classList.add("sticky");
 } else {
  header.classList.remove("sticky");
 }
}

