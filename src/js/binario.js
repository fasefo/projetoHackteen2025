function converterParaBinario() {
  var input = document.getElementById("numeroDecimal").value;
  var numero = parseInt(input, 10);

  if (!isNaN(numero)) {
    var binario = numero.toString(2);
    document.getElementById("resultadoBinario").textContent =
      numero + " em binário é: " + binario;
  } else {
    document.getElementById("resultadoBinario").textContent =
      "Digite um número decimal válido.";
  }
}

function converterParaDecimal() {
  var input = document.getElementById("numeroBinario").value;

  if (/^[01]+$/.test(input)) {
    var decimal = parseInt(input, 2);
    document.getElementById("resultadoDecimal").textContent =
      input + " em decimal é: " + decimal;
  } else {
    document.getElementById("resultadoDecimal").textContent =
      "Digite apenas números 0 ou 1 (binário).";
  }
}
