function convert(type1, type2, value) {
  if (type1 == type2) {
    return value;
  }

  let result;

  switch (type1) {
    case "Celsius":
      if (type2 == "Fahrenheit") {
        result = (9.0 / 5.0) * value + 32.0;
      } else {
        result = value + 273.15;
      }
      break;
    case "Fahrenheit":
      if (type2 == "Celsius") {
        result = (value - 32.0) / 1.8;
      } else {
        result = (value - 32.0) * (5.0 / 9.0) + 273.15;
      }
      break;
    case "Kelvin":
      if (type2 == "Celsius") {
        result = value - 273.15;
      } else {
        result = (value - 273.15) * (9.0 / 5.0) + 32;
      }
      break;
  }
  return result;
}

function input1Changed() {
  input2.value = convert(
    selection1.value,
    selection2.value,
    parseFloat(input1.value)
  );
  lastChanged = 1;
}
function input2Changed() {
  input1.value = convert(
    selection2.value,
    selection1.value,
    parseFloat(input2.value)
  );
  lastChanged = 2;
}

const input1 = document.getElementById("firstNumber");
const input2 = document.getElementById("secondNumber");
const selection1 = document.getElementById("firstSelection");
const selection2 = document.getElementById("secondSelection");

var lastChanged;

input1.addEventListener("input", function (event) {
  input1Changed();
});
input2.addEventListener("input", function (event) {
  input2Changed();
});

selection1.addEventListener("input", function (event) {
  if (lastChanged == 1) {
    input1Changed();
  } else {
    input2Changed();
  }
});
selection2.addEventListener("input", function (event) {
  if (lastChanged == 1) {
    input1Changed();
  } else {
    input2Changed();
  }
});
