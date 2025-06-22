function loadNavbar(file, id) {
  fetch(file)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Could not load ${file}: ${response.statusText}`);
      }
      return response.text();
    })
    .then((data) => {
      document.getElementById("sideNavbar").innerHTML = data;
      requestAnimationFrame(() => {
        setActive(id);
      });
    })
    .catch((error) => {
      console.error("Error loading navbar:", error);
    });
}

function setActive(id) {
  document.getElementById(id).className = "active";
}
