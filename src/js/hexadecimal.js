function converterParaHex() {
  const input = document.getElementById("decimalInput").value;
  const decimal = parseInt(input, 10);

  if (!isNaN(decimal)) {
    const hex = decimal.toString(16).toUpperCase();
    document.getElementById("hexResultado").textContent =
      `O número ${decimal} em hexadecimal é: ${hex}`;
  } else {
    document.getElementById("hexResultado").textContent =
      "Digite um número decimal válido.";
  }
}

function converterParaDecimal() {
  const input = document.getElementById("hexInput").value.trim();

  if (/^[0-9a-fA-F]+$/.test(input)) {
    const decimal = parseInt(input, 16);
    document.getElementById("decResultado").textContent =
      `O número hexadecimal ${input.toUpperCase()} em decimal é: ${decimal}`;
  } else {
    document.getElementById("decResultado").textContent =
      "Digite um número hexadecimal válido (0-9, A-F).";
  }
}
