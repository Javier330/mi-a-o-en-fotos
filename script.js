document.addEventListener('DOMContentLoaded', function() {
  const musicRadios = document.querySelectorAll('input[name="musicOption"]');
  const defaultMusicDiv = document.querySelector('.default-music');
  const customMusicDiv = document.querySelector('.custom-music');
  const photoForm = document.getElementById('photoForm');
  const resultDiv = document.getElementById('result');

  // Controla la visualización según la opción de música
  musicRadios.forEach(radio => {
    radio.addEventListener('change', function() {
      if (this.value === 'custom') {
        customMusicDiv.style.display = 'block';
        defaultMusicDiv.style.display = 'none';
      } else {
        customMusicDiv.style.display = 'none';
        defaultMusicDiv.style.display = 'block';
      }
    });
  });

  // Simulación de la generación del video resumen
  photoForm.addEventListener('submit', function(e) {
    e.preventDefault();

    let formData = new FormData(photoForm);
    let uploadedPhotos = {};
    const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

    months.forEach(month => {
      let fileInput = document.getElementById('foto-' + month);
      if (fileInput && fileInput.files.length > 0) {
        uploadedPhotos[month] = fileInput.files[0].name;
      }
    });

    let musicOption = formData.get('musicOption');
    let selectedMusic;
    if (musicOption === 'custom') {
      selectedMusic = formData.get('upload-music') ? formData.get('upload-music').name : 'Ningún archivo seleccionado';
    } else {
      selectedMusic = formData.get('select-music');
    }

    // Muestra un resultado simulado
    resultDiv.innerHTML = `<h3>Video Generado</h3>
    <p>Fotos subidas:</p>
    <ul>
      ${Object.keys(uploadedPhotos).map(month => `<li>${month.charAt(0).toUpperCase() + month.slice(1)}: ${uploadedPhotos[month]}</li>`).join('')}
    </ul>
    <p>Música seleccionada: ${selectedMusic}</p>
    <p>(Esta es una simulación de la generación de video resumen.)</p>`;
  });
});
