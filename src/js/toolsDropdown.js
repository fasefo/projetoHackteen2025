toolsOpen = true;

function toggleContent() {
  var content = document.getElementById("toolsContent");
  if (toolsOpen) {
    toolsOpen = false;
    content.style.setProperty("opacity", "1");
    content.style.setProperty("pointer-events", "auto");
  } else {
    toolsOpen = true;
    content.style.setProperty("opacity", "0");
    content.style.setProperty("pointer-events", "none");
  }
  updateNavBar();
}

requestAnimationFrame(() => {
  document.addEventListener("click", function (event) {
    var content = document.getElementById("toolsContent");
    var trigger = document.getElementById("toolsDropdownTrigger");
    if (
      !content.contains(event.target) &&
      !trigger.contains(event.target) &&
      !toolsOpen
    ) {
      toggleContent();
    }
  });
});
