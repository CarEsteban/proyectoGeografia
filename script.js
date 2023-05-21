
//Definición de variables

//Varibales de los botones (pines) y para cerrar
var botones = document.querySelectorAll(".pin");
var closeButtons = document.querySelectorAll(".closeButton");

//variables para las ventanas
var ventanasEmergentes = document.querySelectorAll(".ventana-emergente");

//Variables para sumar los puntos
var botonesSumarPuntos = document.querySelectorAll(".btnPuntos")
var punteosASumar = [];
var contadorPuntos = document.querySelector("#contadorPuntos");

//Para poder abrir las ventanas emergentes
Array.from(botones).forEach(function(boton) {
  boton.addEventListener("click", function() {
    var indice = Array.from(botones).indexOf(boton);
    ventanasEmergentes[indice].style.display = 'block';
  });
});

Array.from(closeButtons).forEach(function(boton) {
  boton.addEventListener("click", function() {
    var indice = Array.from(closeButtons).indexOf(boton);
    ventanasEmergentes[indice].style.display = 'none';

    //código para los puntos
    var suma = 0;
    punteosASumar.forEach(function(valor) {
      suma += parseInt(valor);
    });
    contadorPuntos.innerHTML=suma
    
  });
});

botonesSumarPuntos.forEach(function(boton) {
  boton.addEventListener('click', function() {
    var valorSeleccionado = boton.value;
    punteosASumar.push(valorSeleccionado);
  });
});