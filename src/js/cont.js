function contarTexto() {
      const texto = document.getElementById("texto").value;
      const caracteres = texto.length;
      const palavras = texto.trim() === ""
         ? 0
        : texto.trim().split(/\s+/).length; 
      document.getElementById("caracteres").innerText = caracteres;
      document.getElementById("palavras").innerText = palavras;
    }