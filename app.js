// Empezamos con la declarion de variable o array
let nombre = [];

//creamos la function añadir
function agregarNombre() {
  const input = document.querySelector(".digitar");
  const nombres = input.value.trim(); // el trim es para eliminar espacios

  if (nombres === "") return; //no añadir si esta vacio
  const lista = document.querySelector(".demo");
  const nuevoItem = document.createElement("li");
  nuevoItem.textContent = nombres;

  lista.appendChild(nuevoItem); // añadir a la lista
  input.value = ""; //limpiar el campo de texto
  input.focus(); // volver a enfocar para escribir rapido
}
