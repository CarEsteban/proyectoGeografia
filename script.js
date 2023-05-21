//este codigo funciona con el pin no.5
//para los otros deberías te doy dos opciones que se me vienen a la mente
// 1. escribir una ventana para cada pregunta
// 2. intentar ver como pasar parametros y escribir una funcion 
//que haga lo mismo y que los parametros cambien la pregunta y 
//las respuestas JAJAJ

// suerte a quien le toque hacer lo de las preguntas <3

var boton = document.getElementById("quintaPregunta");
const ventanaEmergente = document.getElementById('VentanaEmergente');

boton.addEventListener("click", function() {
    ventanaEmergente.style.display = 'block';
});
