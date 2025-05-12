function verificarPrimo() {
  const num = parseInt(document.getElementById("numero").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(num) || num <= 1) {
    resultado.textContent = "Digite um número maior que 1.";
    return;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      resultado.textContent = num + " NÃO é um número primo.";
      return;
    }
  }

  resultado.textContent = num + " É um número primo!";
}
