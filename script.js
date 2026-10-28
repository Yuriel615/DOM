// ===== 1. Acceder a elementos del DOM =====
// document es el punto de entrada al DOM.
// getElementById busca un elemento por su atributo id.
const titulo = document.getElementById("titulo");
const inputNombre = document.getElementById("inputNombre");
const btnSaludar = document.getElementById("btnSaludar");
const mensaje = document.getElementById("mensaje");

const valor = document.getElementById("valor");
const btnSumar = document.getElementById("btnSumar");
const btnReiniciar = document.getElementById("btnReiniciar");

// ===== 2. Modificar contenido con textContent =====
// Cambiamos el texto del título apenas carga la página.
titulo.textContent = "El DOM en acción";

// ===== Ejemplo 1: Saludo (value + addEventListener + textContent) =====
btnSaludar.addEventListener("click", function () {
  // value devuelve lo que el usuario escribió en el input
  const nombre = inputNombre.value.trim();

  if (nombre === "") {
    mensaje.textContent = "Por favor, escribe tu nombre.";
  } else {
    mensaje.textContent = "¡Hola, " + nombre + "!";
  }
});

// ===== Ejemplo 2: Contador (addEventListener + textContent) =====
let contador = 0;

btnSumar.addEventListener("click", function () {
  contador++;
  valor.textContent = contador;
});

btnReiniciar.addEventListener("click", function () {
  contador = 0;
  valor.textContent = contador;
});
