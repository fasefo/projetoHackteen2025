const themeChoice = document.getElementById("themeChoice");

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  switchTheme(savedTheme);
  themeChoice.value = savedTheme;
} else {
  switchTheme("light");
  themeChoice.value = "light";
}

function switchTheme(theme) {
  switch (theme) {
    case "dark":
      document.body.style.setProperty("--bg-color", "#1b1d1e");
      document.body.style.setProperty("--text-color", "whitesmoke");
      document.body.style.setProperty("--title-color", "white");
      document.body.style.setProperty("--division-color", "#909090");
      document.body.style.setProperty(
        "--shadow-color",
        "rgba(255, 255, 255, 0.07)"
      );
      document.body.style.setProperty(
        "--hover-shadow-color",
        "rgba(255, 255, 255, 0.35)"
      );
      document
        .getElementById("configGear")
        .style.setProperty("filter", "invert(0)");
      break;
      break;
    case "light":
      document.body.style.setProperty("--bg-color", "#e0f7ff9e");
      document.body.style.setProperty("--text-color", "#555");
      document.body.style.setProperty("--title-color", "black");
      document.body.style.setProperty("--division-color", "white");
      document.body.style.setProperty("--shadow-color", "rgba(0, 0, 0, 0.07)");
      document.body.style.setProperty(
        "--hover-shadow-color",
        "rgba(0, 0, 0, 0.2)"
      );
      document
        .getElementById("configGear")
        .style.setProperty("filter", "invert(1)");
      break;
  }
}

themeChoice.addEventListener("input", function () {
  const selectedTheme = themeChoice.value;
  switchTheme(selectedTheme);
  localStorage.setItem("theme", selectedTheme);
});
