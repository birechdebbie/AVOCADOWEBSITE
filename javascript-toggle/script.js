

const button = document.getElementById("toggleButton");
  const text = document.getElementById("toggleText");

  button.onclick = function () {
    if (text.style.display === "none") {
      text.style.display = "block";
      button.textContent = "Hide Text";
    } else {
      text.style.display = "none";
      button.textContent = "Show Text";
    }
  };