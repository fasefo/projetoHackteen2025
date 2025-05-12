const input = document.getElementById("jsonInput");
const output = document.getElementById("output");

input.addEventListener("input", function (event) {
  try {
    let obj = JSON.parse(input.value);
    output.value = JSON.stringify(obj, null, 2);
  } catch (e) {
    output.value = "Json inválido. \nErro: " + e.message;
  }
});
