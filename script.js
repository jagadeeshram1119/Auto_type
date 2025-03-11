document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed(".auto-type", {
    strings: ["developer", "designer", "programmer", "content creator"],
    typeSpeed: 100,
    backSpeed: 80,
    loop: true,
    backDelay: 1000,
    showCursor: true,
    cursorChar: "|",
    smartBackspace: true,
  });

  console.log("connected");
});

const questions = document.querySelectorAll(".qusition");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const icon = question.querySelector(".icon");

    answer.classList.toggle("active");
    icon.classList.toggle("rotate");

    if (icon.textContent === "+") {
      icon.textContent = "x";
    } else {
      icon.textContent = "+";
    }
  });
});
