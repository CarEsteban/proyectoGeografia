//este codigo funciona con el pin no.5
//para los otros deberías te doy dos opciones que se me vienen a la mente
// 1. escribir una ventana para cada pregunta
// 2. intentar ver como pasar parametros y escribir una funcion 
//que haga lo mismo y que los parametros cambien la pregunta y 
//las respuestas JAJAJ

// suerte a quien le toque hacer lo de las preguntas <3

var boton = document.getElementById("quintaPregunta");
const ventanaEmergente = document.getElementById('VentanaEmergente');

var closeButton = document.getElementById("closeButton");

boton.addEventListener("click", function() {
    ventanaEmergente.style.display = 'block';
});
closeButton.addEventListener("click", function() {
    ventanaEmergente.style.display = 'none';
});







//CÓDIGO PARA PUNTOS

//Definición de variables

document.querySelectorAll(".btnSumarPuntos").forEach(function(elemento){
    elemento.addEventListener("click", sumarPuntos);
});

document.querySelectorAll(".btnRestarPuntos").forEach(function(elemento){
    elemento.addEventListener("click", restarPuntos);
});

var punteo = 0

function sumarPuntos(){

    punteo += 10
    document.querySelector("#contadorPuntos").innerHTML=punteo

}
function restarPuntos(){

    punteo -= 10
    document.querySelector("#contadorPuntos").innerHTML=punteo

}