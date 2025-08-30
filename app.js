// Empezamos con la declarion de variable o array
let nombre = [];

//creamos la function añadir
/*function agregarNombre() {
  const input = document.querySelector(".digitar");
  const nombres = input.value.trim(); // el trim es para eliminar espacios

  if (nombres === "") return; //no añadir si esta vacio
  const lista = document.querySelector(".demo");
  const nuevoItem = document.createElement("li");
  nuevoItem.textContent = nombres;

  lista.appendChild(nuevoItem); // añadir a la lista
  input.value = ""; //limpiar el campo de texto
  input.focus(); // volver a enfocar para escribir rapido
}*/

//Practicar otra vez el juego del chalenge

function agregarNombre() {
  const input = document.querySelector(".digitar");
  const nombres = input.value.trim(); //el trim() es para eliminar espacios
  if (nombres === "") return; // esta condicion cumple de no añadir si esta vacio

  //guardamos los nombres en el array
  nombre.push(nombres);
  console.log(nombre);

  //mostrar lista
  mostrarLista();
  //limpiamos el input y dejamos en el focus
  input.value = "";
  input.focus();
}
//creamos la function mostrar lista
function mostrarLista() {
  const lista = document.querySelector(".demo");
  lista.innerHTML = ""; //limpiamos antes de volver a limpiar
  nombre.forEach(n => {
    const li = document.createElement("li");
    li.textContent = n;
    lista.appendChild(li);
  });
}
//agreamos una function para el boton sortear
function sortear() {
  if (nombre.length < 2) {
    alert("Debes ingresar al menos 2 nombres");
    return;
  }
  //clonamos el array para quitar los asignados
  let disponibles = [...nombre];
  let resultado = {};

  for (let n of nombre) {
    let opciones = disponibles.filter(op => op !== n);

    if (opciones.length === 0) {
      document.getElementById("resultado").textContent =
        "Sorteo invalido 😅. Intante nuevamente.";
      return;
    }
    let elegido = opciones[Math.floor(Math.random() * opciones.length)];
    resultado[n] = elegido;
    disponibles = disponibles.filter(op => op !== elegido);
  }

  // mostramos el resultado
  let texto = "";
  for (let [a, b] of Object.entries(resultado)) {
    texto += `${a} → ${b}\n`;
  }
  document.getElementById("resultado").textContent = texto;
}