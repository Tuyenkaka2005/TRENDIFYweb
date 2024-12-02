const joinButtons = document.querySelectorAll("#joinButton");
joinButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    window.location.href = `challenge${index + 1}.html`;
  });
});
