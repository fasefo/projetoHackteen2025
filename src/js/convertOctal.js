function convert(type, value) {
  if (type == 1) {
    return parseInt(value, 8);
  } else {
    return parseInt(value, 10).toString(8);
  }
}

function inputOctalChanged() {
  inputDecimal.value = convert(1, inputOctal.value);
}

function inputDecimalChanged() {
  inputOctal.value = convert(2, inputDecimal.value);
}

const inputOctal = document.getElementById("octal");
const inputDecimal = document.getElementById("decimal");

inputOctal.addEventListener("input", inputOctalChanged);
inputDecimal.addEventListener("input", inputDecimalChanged);
