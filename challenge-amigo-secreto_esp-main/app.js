
let amigos = [];


// Agregar un amigo a la lista
function agregarAmigo() {
  const input = document.getElementById("amigo");
  let nombre = input.value.trim(); // quitamos espacios en blanco

  // CONDICIONALES (if/else)

  if (nombre === "") {
    alert("Debe ingresar un nombre válido.");
  } else {
    amigos.push(nombre); // añadimos al array
    input.value = ""; // limpiamos la caja de texto
    mostrarLista(); // actualizamos la lista
    document.getElementById("resultado").innerHTML = ""; // limpiamos resultado
  }
}

// Mostrar todos los amigos en pantalla
function mostrarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // limpiar lista antes de dibujarla de nuevo


  // LOOPS (for)
  
  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

// Sortear un amigo secreto
function sortearAmigo() {
  // Condicional
  if (amigos.length === 0) {
    alert("Agrega al menos un nombre antes de sortear.");
  } else {

    let indice = Math.floor(Math.random() * amigos.length);

    let elegido = amigos[indice];

    // resultado en la pantalla
    const resultado = document.getElementById("resultado");
    resultado.innerHTML =
      "<li>Tu amigo secreto es: <strong>" + elegido + "</strong></li>";
  }
}

// Permitir que al presionar Enter se agregue un nombre
const inputNombre = document.getElementById("amigo");
inputNombre.addEventListener("keydown", function (evento) {
  if (evento.key === "Enter") {
    agregarAmigo();
  }
});
