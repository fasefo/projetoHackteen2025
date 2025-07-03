let counter = 1;
setInterval(() => {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) counter = 1;
}, 5000);

const slider = document.querySelector(".slider");

const sliderResizeObserver = new ResizeObserver((entries) => {
  for (let entry of entries) {
    const { width, height } = entry.contentRect;
    slider.style.setProperty("height", `${(width * 350) / 1000}px`);
  }
});

sliderResizeObserver.observe(slider);
