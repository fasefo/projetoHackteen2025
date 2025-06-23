document.getElementById("buscarEndereco").addEventListener("click", function () {
        const endereco = document.getElementById("endereco").value;

        if (endereco.trim() === "") {
          alert("Por favor, insira um endereço válido.");
          return;
        }

        // URL da API Nominatim para geocodificação
        const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(endereco)}`;

        // Fazendo a requisição à API Nominatim
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            console.log(data); // Verificando o que foi retornado pela API

            if (data && data.length > 0) {
              const resultado = data[0]; // Pegando o primeiro resultado
              const latitude = resultado.lat;
              const longitude = resultado.lon;

              // Exibindo as coordenadas no parágrafo
              document.getElementById("resultado").innerHTML = `Latitude: ${latitude} <br> Longitude: ${longitude}`;

              // Gerando o link para o Google Maps com as coordenadas
              const googleMapsLink = `https://www.google.com/maps?q=${latitude},${longitude}`;

              // Exibindo o link do Google Maps
              const link = document.getElementById("linkGoogleMaps");
              link.href = googleMapsLink;
              link.style.display = "block";  // Exibindo o link
              link.innerText = "Abrir no Google Maps";
            } else {
              // Se não encontrar o endereço
              document.getElementById("resultado").innerText = "Endereço não encontrado!";
              document.getElementById("linkGoogleMaps").style.display = "none";  // Escondendo o link
            }
          })
          .catch((error) => {
            console.error("Erro ao buscar coordenadas:", error);
            document.getElementById("resultado").innerText = "Erro ao buscar coordenadas.";
            document.getElementById("linkGoogleMaps").style.display = "none";  // Escondendo o link se ocorrer erro
          });
      });