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
  sideNavBar = document.getElementById("sideNavbar");
  switch (font) {
    case "small":
      percentage = 70;
      document.body.style.setProperty("font-size", percentage.toString() + "%");
      sideNavBar.style.setProperty(
        "width",
        ((110 * percentage) / 100).toString() + "px"
      );
      break;
    case "mid":
      percentage = 100;
      document.body.style.setProperty("font-size", percentage.toString() + "%");
      sideNavBar.style.setProperty(
        "width",
        ((110 * percentage) / 100).toString() + "px"
      );
      break;
    case "big":
      percentage = 135;
      document.body.style.setProperty("font-size", percentage.toString() + "%");
      sideNavBar.style.setProperty(
        "width",
        ((110 * percentage) / 100).toString() + "px"
      );
      break;
  }
}

fontChoice.addEventListener("input", function () {
  const selectedFont = fontChoice.value;
  switchFont(selectedFont);
  localStorage.setItem("font", selectedFont);
});
