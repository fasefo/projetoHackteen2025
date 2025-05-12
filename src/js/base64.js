function converterParaBase64() {
  const texto = document.getElementById("textoInput").value;
  try {
    const base64 = btoa(unescape(encodeURIComponent(texto)));
    document.getElementById("resultadoBase64").textContent = `Base64: ${base64}`;
  } catch (e) {
    document.getElementById("resultadoBase64").textContent =
      "Erro ao converter. Verifique o texto inserido.";
  }
}

function converterParaTexto() {
  const base64 = document.getElementById("base64Input").value;
  try {
    const texto = decodeURIComponent(escape(atob(base64)));
    document.getElementById("resultadoTexto").textContent = `Texto: ${texto}`;
  } catch (e) {
    document.getElementById("resultadoTexto").textContent =
      "Erro ao decodificar. Verifique se o base64 está correto.";
  }
}
