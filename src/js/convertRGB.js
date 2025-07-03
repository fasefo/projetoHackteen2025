function hexParaRgb(hex) {
      hex = hex.replace('#', '').trim();

      if (hex.length === 3) {
        hex = hex.split('').map(char => char + char).join('');
      }
      if (hex.length !== 6 || /[^0-9a-f]/i.test(hex)) return null;

      let r = parseInt(hex.slice(0, 2), 16);
      let g = parseInt(hex.slice(2, 4), 16);
      let b = parseInt(hex.slice(4, 6), 16);

      return `rgb(${r}, ${g}, ${b})`;
    }

    function rgbParaHex(rgb) {
      let [r, g, b] = rgb.split(',').map(n => parseInt(n.trim()));

      if ([r, g, b].some(n => isNaN(n) || n < 0 || n > 255)) return null;

      return '#' + [r, g, b].map(n =>
        n.toString(16).padStart(2, '0')
      ).join('').toUpperCase();
    }

    function converterHex() {
      const hexInput = document.getElementById('hex').value;
      const rgb = hexParaRgb(hexInput);
      if (rgb) {
        document.getElementById('rgb').value = rgb;
        let cor = hexInput.startsWith('#') ? hexInput : '#' + hexInput;
        document.getElementById('corPreview').style.background = cor;
      }
    }

    function converterRgb() {
      const rgbInput = document.getElementById('rgb').value;
      const hex = rgbParaHex(rgbInput);
      if (hex) {
        document.getElementById('hex').value = hex;
        document.getElementById('corPreview').style.background = hex;
      }
    }

    function copiar(id) {
      const input = document.getElementById(id);
      input.select();
      document.execCommand("copy");

      // Feedback visual rápido
      const original = input.value;
      input.value = "Copiado!";
      setTimeout(() => input.value = original, 1000);
    }