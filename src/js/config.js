const configGear = document.getElementById("configGear");
const menu = document.getElementById("configDropdown");

menuOpen = false;

updateMenu();

function updateMenu() {
  if (menuOpen) {
    menu.style.setProperty("opacity", "1");
    menu.style.setProperty("pointer-events", "auto");
    menu.style.setProperty("transform", "translateY(0)");
    return;
  }
  menu.style.setProperty("opacity", "0");
  menu.style.setProperty("pointer-events", "none");
  menu.style.setProperty("transform", "translateY(-10px)");
}

configGear.addEventListener("click", function () {
  menuOpen = !menuOpen;
  updateMenu();
});

document.addEventListener("click", function (event) {
  if (!menu.contains(event.target) && !configGear.contains(event.target)) {
    menuOpen = false;
    updateMenu();
  }
});
