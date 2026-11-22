
/* =========================================
   HBCU HISTORY & HERITAGE
   Website JavaScript
========================================= */


/* 1. MOBILE NAVIGATION */

const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector(".primary-nav");

if (menuToggle && primaryNav) {
  menuToggle.addEventListener("click", function () {
    const isOpen = primaryNav.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );
  });
}


/* 2. ACTIVE NAVIGATION LINK */

const currentPage = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".primary-nav a").forEach(function (link) {
  const linkPage = link.getAttribute("href");

  if (linkPage === currentPage) {
    link.classList.add("active");
    link.setAttribute("aria-current", "page");
  }
});


/* 3. HISTORY QUIZ */

const quizOptions = document.querySelectorAll(".quiz-option");
const quizFeedback = document.querySelector(".quiz-feedback");

quizOptions.forEach(function (option) {
  option.addEventListener("click", function () {
    // Remove previous answer styles.
    quizOptions.forEach(function (button) {
      button.classList.remove("correct", "wrong");
    });

    // Check the selected answer.
    if (option.dataset.answer === "correct") {
      option.classList.add("correct");

      if (quizFeedback) {
        quizFeedback.textContent =
          "Correct! Cheyney University was founded in 1837.";
      }
    } else {
      option.classList.add("wrong");

      if (quizFeedback) {
        quizFeedback.textContent =
          "Not quite. Try again! The correct answer is Cheyney University.";
      }
    }
  });
});


/* 4. SEARCHABLE HBCU DIRECTORY */

const schoolSearch = document.querySelector("#school-search");
const schoolCards = document.querySelectorAll(".school-card");
const searchCount = document.querySelector("#search-count");
const noResults = document.querySelector("#no-results");

if (schoolSearch) {
  schoolSearch.addEventListener("input", function () {
    const searchValue = schoolSearch.value.toLowerCase().trim();

    let visibleCount = 0;

    schoolCards.forEach(function (card) {
      const schoolName = card.dataset.search.toLowerCase();

      if (schoolName.includes(searchValue)) {
        card.style.display = "";
        visibleCount++;
      } else {
        card.style.display = "none";
      }
    });

    if (searchCount) {
      searchCount.textContent =
        "Showing " + visibleCount + " universities";
    }

    if (noResults) {
      noResults.hidden = visibleCount !== 0;
    }
  });
}


/* 5. CONTACT FORM */

const contactForm = document.querySelector("#contact-form");
const formFeedback = document.querySelector("#form-feedback");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const subject = document.querySelector("#subject").value;
    const message = document.querySelector("#message").value.trim();

    if (!name || !email || !subject || !message) {
      formFeedback.textContent =
        "Please complete all fields before submitting.";
      return;
    }

    formFeedback.textContent =
      "Thank you, " + name +
      "! Your demonstration form has been completed. No message was sent or stored.";

    contactForm.reset();
  });
}