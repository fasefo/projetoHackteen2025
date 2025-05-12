function verificarPrimo() {
  const num = parseInt(document.getElementById("numero").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(num)) {
    resultado.textContent = "Digite um número";
    return;
  }

  if (num < 1) {
    resultado.textContent = "Digite um número maior que 1";
    return;
  }
  if (num == 1) {
    resultado.textContent = "Não é um número primo!\nDivisores: 1";
    return;
  }

  let divisores = [];

  for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
      divisores.push(i);
    }
  }
  if (divisores.length == 1) {
    resultado.textContent = "É um número primo!\nDivisores: 1, " + num;
    return;
  } else {
    let stringDivisores = [];
    divisores.forEach((divisor) => {
      stringDivisores += ", " + divisor;
    });
    resultado.textContent =
      "Não é um número primo!\nDivisores: 1" + stringDivisores;
    return;
  }
}
