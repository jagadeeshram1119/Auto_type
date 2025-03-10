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
