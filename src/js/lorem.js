// Lista de palavras comuns do Lorem Ipsum
const palavrasLorem = [
  "lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", 
  "elit", "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", 
  "et", "dolore", "magna", "aliqua", "ut", "enim", "ad", "minim", "veniam",
  "quis", "nostrud", "exercitation", "ullamco", "laboris", "nisi", "duis",
  "aute", "irure", "dolor", "in", "reprehenderit", "in", "voluptate", 
  "velit", "esse", "cillum", "dolore", "eu", "fugiat", "nulla", "pariatur"
];

// Função para gerar o Lorem Ipsum com base no número de palavras
function gerarLorem(quantidade) {
  let texto = "";

  // Loop para gerar a quantidade de palavras solicitada
  for (let i = 0; i < quantidade; i++) {
    const indice = Math.floor(Math.random() * palavrasLorem.length);  // Escolhe um índice aleatório
    texto += palavrasLorem[indice] + " ";  // Adiciona a palavra ao texto
  }

  return texto.trim() + ".";  // Retorna o texto gerado, removendo o último espaço e colocando um ponto final
}

// Função para capturar o clique no botão e gerar o Lorem Ipsum
document.getElementById("gerarLorem").addEventListener("click", function() {
  const quantidadeInput = document.getElementById("quantidade").value;
  const quantidade = parseInt(quantidadeInput); // Converte o valor para um número inteiro

  if (isNaN(quantidade) || quantidade <= 0) {
    alert("Por favor, insira um número válido!");
    return;
  }

  // Gerar o texto Lorem Ipsum
  const lorem = gerarLorem(quantidade);
  
  // Exibir o resultado no parágrafo
  document.getElementById("resultado").innerText = lorem;
});
