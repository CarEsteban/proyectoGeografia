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

var botonesSumarPuntos = document.querySelectorAll(".btnPuntos")
var punteosASumar = [];


// Agregar evento "click" a los botones para guardar los valores en el array
botonesSumarPuntos.forEach(function(boton) {
    boton.addEventListener('click', function() {
      var valorSeleccionado = boton.value;
      punteosASumar.push(valorSeleccionado);
    });
  });
  
  // Evento "click" en el botón closeButton para sumar los valores del array
  closeButton.addEventListener('click', function() {
    var suma = 0;
    punteosASumar.forEach(function(valor) {
      suma += parseInt(valor);
    });
    document.querySelector("#contadorPuntos").innerHTML=suma
    // Resto del código para mostrar o utilizar la suma de los valores
  });