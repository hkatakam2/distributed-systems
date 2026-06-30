(function () {
  function setupQuiz(quiz) {
    var buttons = quiz.querySelectorAll("button[data-correct]");
    var feedback = quiz.querySelector(".feedback");
    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        buttons.forEach(function (b) {
          b.classList.remove("correct", "incorrect");
        });
        var isCorrect = button.getAttribute("data-correct") === "true";
        button.classList.add(isCorrect ? "correct" : "incorrect");
        feedback.textContent = isCorrect
          ? button.getAttribute("data-why")
          : "Not quite. Re-read the nearby tradeoff and try again.";
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".quiz").forEach(setupQuiz);
  });
})();
