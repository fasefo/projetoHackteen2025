function calcularJurosCompostos(principal, taxa, periodos) {
  const montante = principal * Math.pow(1 + taxa / 100, periodos);
  return montante.toFixed(2);
}

function calcularMontante() {
  const principal = parseFloat(document.getElementById("principal").value);
  const taxa = parseFloat(document.getElementById("taxa").value);
  const periodos = parseInt(document.getElementById("periodos").value);

  if (isNaN(principal) || isNaN(taxa) || isNaN(periodos)) {
    alert("Por favor, insira valores válidos!");
  } else {
    const montanteFinal = calcularJurosCompostos(principal, taxa, periodos);
    document.getElementById(
      "resultado"
    ).textContent = `Montante Final: R$ ${montanteFinal}`;
  }
}

document.getElementById("calcular").addEventListener("click", function (event) {
  event.preventDefault();
  calcularMontante();
});
