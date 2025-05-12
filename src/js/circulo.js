function calcular() {
  const raio = parseFloat(document.getElementById("raio").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(raio) || raio <= 0) {
    resultado.textContent = "Digite um raio válido.";
    return;
  }

  const pi = 3.14;
  const perimetro = 2 * pi * raio;
  const area = pi * raio * raio;

  resultado.innerHTML =
    "Perímetro: " +
    perimetro.toFixed(2) +
    "<br>" +
    "Área: " +
    area.toFixed(2);
}
