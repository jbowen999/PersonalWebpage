"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const contactName = document.getElementById("name");
  const thankYouMessage = document.getElementById("thankYouMessage");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = contactName.value;
    const message = `Thanks ${contactName.value}, I will get back with you as soon as possible.`;
    thankYouMessage.textContent = message;
    form.reset();
  });
});
