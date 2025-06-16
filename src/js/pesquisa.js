function searchTools() {
  const searchInput = document
    .getElementById("searchInput")
    .value.toLowerCase();
  if (searchInput != "") {
    document
      .getElementById("searchFeedback")
      .style.setProperty("display", "block");
  } else {
    document
      .getElementById("searchFeedback")
      .style.setProperty("display", "none");
  }
  const tools = document.querySelectorAll(".toolWrapper");
  console.log(tools);
  tools.forEach((tool) => {
    const toolTitle = tool.querySelector("p").textContent.toLowerCase();
    if (toolTitle.includes(searchInput)) {
      tool.style.display = "flex";
    } else {
      tool.style.display = "none";
    }
  });
}
