function searchTools() {
  const searchInput = document
    .getElementById("searchInput")
    .value.toLowerCase();
  const tools = document.querySelectorAll(".tool");

  tools.forEach((tool) => {
    const toolTitle = tool.querySelector("p").textContent.toLowerCase();

    if (toolTitle.includes(searchInput)) {
      tool.style.display = "flex";
    } else {
      tool.style.display = "none";
    }
  });
}
