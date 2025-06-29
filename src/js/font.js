const fontChoice = document.getElementById("fontChoice");

const savedFont = localStorage.getItem("font");
if (savedFont) {
  switchFont(savedFont);
  fontChoice.value = savedFont;
} else {
  switchFont("mid");
  fontChoice.value = "mid";
}

function switchFont(font) {
  pageBody = document.getElementById("pageBody");
  switch (font) {
    case "small":
      percentage = 70;
      pageBody.style.setProperty("font-size", percentage.toString() + "%");
      break;
    case "mid":
      percentage = 100;
      pageBody.style.setProperty("font-size", percentage.toString() + "%");
      break;
    case "big":
      percentage = 135;
      pageBody.style.setProperty("font-size", percentage.toString() + "%");
      break;
  }
}

fontChoice.addEventListener("input", function () {
  const selectedFont = fontChoice.value;
  switchFont(selectedFont);
  localStorage.setItem("font", selectedFont);
});
