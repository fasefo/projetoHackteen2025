function convert(type, value) {
  if (type == 1) {
    return parseInt(value, 2);
  } else {
    return parseInt(value, 10).toString(2);
  }
}

function input1Changed() {
  input2.value = convert(1, input1.value);
}
function input2Changed() {
  input1.value = convert(2, input2.value);
}

const input1 = document.getElementById("hexadecimal");
const input2 = document.getElementById("decimal");

input1.addEventListener("input", function (event) {
  input1Changed();
});
input2.addEventListener("input", function (event) {
  input2Changed();
});
