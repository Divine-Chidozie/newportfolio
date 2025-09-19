const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const navBar = document.querySelector(".navbar");

const contactForm = document.getElementById("contact-form");

const nameField = document.getElementById("name");
const nameError = document.querySelector(".name-error");

const emailField = document.getElementById("email");
const emailError = document.querySelector(".email-error");

const messageField = document.getElementById("message");
const messageError = document.querySelector(".message-error");

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

// Navbar background on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// =============== Contact Form ===============

function clearName() {
  nameError.textContent = "";
}

function clearEmail() {
  emailError.textContent = "";
}

function clearMessage() {
  messageError.textContent = "";
}

nameField.addEventListener("input", clearName);
emailField.addEventListener("input", clearEmail);
messageField.addEventListener("input", clearMessage);

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = nameField.value.trim();
  const email = emailField.value.trim();
  const message = messageField.value.trim();

  let isValid = true;

  const clearErrors = () => {
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
  };
  clearErrors();

  if (!name) {
    nameError.textContent = `Please enter your name`;
    isValid = false;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    emailError.textContent = `Please enter a valid email address`;
    isValid = false;
  }
  if (!message) {
    messageError.textContent = `Please enter your message`;
    isValid = false;
  }

  if (isValid) {
    console.log(`Name: ${name}\nEmail: ${email}\nMessage ${message}`);
    contactForm.reset();
  }
});
