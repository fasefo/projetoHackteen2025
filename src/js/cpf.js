function gerarCPF() {
  function gerarDigito(cpfArray) {
    const peso = cpfArray.length + 1;
    const soma = cpfArray.reduce((acc, val, i) => acc + val * (peso - i), 0);
    const resto = soma % 11;
    return resto < 2 ? 0 : 11 - resto;
  }

  const cpf = [];
  for (let i = 0; i < 9; i++) {
    cpf.push(Math.floor(Math.random() * 10));
  }

  cpf.push(gerarDigito(cpf));
  cpf.push(gerarDigito(cpf));

  const formatado = cpf
    .join("")
    .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");

  document.getElementById("cpfGerado").textContent = "CPF gerado: " + formatado;
}
