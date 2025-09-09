const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

// ===================== TOGGLE MENU =====================
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("toggle");
});

// Close menu when clicking a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.classList.remove("toggle");
  });
});

// ===================== SCROLL REVEAL =====================
function revealOnScroll() {
  const reveal = document.querySelectorAll(".reveal");

  reveal.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

// ===================== PAGE FADE IN/OUT =====================
document.addEventListener("DOMContentLoaded", () => {
  // Fade in page
  document.body.classList.add("fade-in");

  // Smooth transition on internal links
  const links = document.querySelectorAll("a");

  links.forEach((link) => {
    const href = link.getAttribute("href");

    // Skip external links, anchors, and blank targets
    if (
      href &&
      !href.startsWith("http") &&
      !href.startsWith("#") &&
      link.getAttribute("target") !== "_blank"
    ) {
      link.addEventListener("click", function (e) {
        e.preventDefault();

        document.body.classList.add("fade-out");

        setTimeout(() => {
          window.location.href = href;
        }, 500); // match CSS transition duration
      });
    }
  });

  // Run scroll animation on load
  revealOnScroll();
});
