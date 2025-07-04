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
  const elements = document.querySelectorAll(".githubLogo");
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

      document.body.style.setProperty("--navbar-bg-color", "rgb(54, 54, 54)");
      document.body.style.setProperty("--navbar-text-color", "white");
      document.body.style.setProperty("--navbar-bg-hover", "rgb(75, 75, 75)");
      document.body.style.setProperty("--navbar-active", "rgb(99, 99, 99)");

      document
        .getElementById("configGear")
        .style.setProperty("filter", "invert(0)");

      elements.forEach((el) => {
        el.style.setProperty("filter", "invert(0)");
      });

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

      document.body.style.setProperty("--navbar-bg-color", "gray");
      document.body.style.setProperty("--navbar-text-color", "whitesmoke");
      document.body.style.setProperty(
        "--navbar-bg-hover",
        "rgb(101, 101, 101)"
      );
      document.body.style.setProperty("--navbar-active", "rgb(156, 156, 156)");

      document
        .getElementById("configGear")
        .style.setProperty("filter", "invert(1)");

      elements.forEach((el) => {
        el.style.setProperty("filter", "invert(0)");
      });

      break;
    case "contrast":
      document.body.style.setProperty("--bg-color", "#1E1E2F");
      document.body.style.setProperty("--text-color", "#EAEAEA");
      document.body.style.setProperty("--title-color", "#FFD700");
      document.body.style.setProperty("--division-color", "#2C2C3C");
      document.body.style.setProperty("--shadow-color", "#ffe1004d");
      document.body.style.setProperty("--hover-shadow-color", "#ffe100d4");

      document.body.style.setProperty("--navbar-bg-color", "rgb(3, 3, 7)");
      document.body.style.setProperty("--navbar-text-color", "#00FFFF");
      document.body.style.setProperty("--navbar-bg-hover", "rgb(42, 42, 84)");
      document.body.style.setProperty("--navbar-active", "rgb(104, 104, 185)");

      document
        .getElementById("configGear")
        .style.setProperty("filter", "invert(0)");

      elements.forEach((el) => {
        el.style.setProperty("filter", "invert(1)");
      });

      break;
  }
}

themeChoice.addEventListener("input", function () {
  const selectedTheme = themeChoice.value;
  switchTheme(selectedTheme);
  localStorage.setItem("theme", selectedTheme);
});
