const navbar = document.getElementById("sideNavbar");

const body = document.body;

const resizeObserver = new ResizeObserver((entries) => {
  for (let entry of entries) {
    const { width, height } = entry.contentRect;
    size = (210 / 1980) * width;
    size = Math.max(size, 110);
    navbar.style.setProperty("flex", "0 1 " + size + "px");
    var content = document.getElementById("toolsContent");
    content.style.setProperty("left", size + 15 + "px");
  }
});

function updateNavBar() {
  const width = document.body.getBoundingClientRect().width;
  size = (210 / 1980) * width;
  size = Math.max(size, 110);
  navbar.style.setProperty("flex", "0 1 " + size + "px");
  var content = document.getElementById("toolsContent");
  content.style.setProperty("left", size + 15 + "px");
}

resizeObserver.observe(body);
