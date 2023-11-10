// Cargar contenido de archivos de texto en secciones correspondientes
window.addEventListener("DOMContentLoaded", function () {
    fetch("justificacion.txt")
        .then(response => response.text())
        .then(content => {
            const justificacionSection = document.querySelector("#justificacion");
            if (justificacionSection) {
                justificacionSection.innerHTML = `<h2>Justificación</h2>${content}`;
            }
        });

    fetch("objetivos.txt")
        .then(response => response.text())
        .then(content => {
            const objetivosSection = document.querySelector("#objetivos");
            if (objetivosSection) {
                objetivosSection.innerHTML = `<h2>Objetivos</h2>${content}`;
            }
        });

    fetch("metodologia_evaluacion.txt")
        .then(response => response.text())
        .then(content => {
            const metodologiaSection = document.querySelector("#metodologia");
            if (metodologiaSection) {
                metodologiaSection.innerHTML = `<h2>Metodología y Evaluación</h2>${content}`;
            }
        });
        fetch("justificacion_paleografia.txt")
        .then(response => response.text())
        .then(content => {
            const justificacionSection = document.querySelector("#justificacion_paleografia");
            if (justificacionSection) {
                justificacionSection.innerHTML = `<h2>Justificación</h2>${content}`;
            }
        });

        fetch("metodologia_evaluacion_taller_paleografia.txt")
        .then(response => response.text())
        .then(content => { 
            const metodologiaSection = document.querySelector("#metodologia_evaluacion_taller_paleografia");
            if (metodologiaSection) {
                metodologiaSection.innerHTML = `<h2>Metodología y evaluación</h2>${content}`;
            }
        });

});
