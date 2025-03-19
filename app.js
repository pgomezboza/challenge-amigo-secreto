let listaDeAmigos = [];

function agregarNuevoAmigo() {
  const nombreDelAmigo = obtenerNombreDelAmigo();

  if (esNombreValido(nombreDelAmigo)) {
    listaDeAmigos.push(nombreDelAmigo);
    limpiarCampoDeEntrada();
    actualizarListaVisual();
  } else {
    alert("Por favor, inserte un nombre válido");
  }
}

function obtenerNombreDelAmigo() {
  return document.getElementById("amigo").value.trim();
}

function esNombreValido(nombre) {
  return nombre !== "";
}

function limpiarCampoDeEntrada() {
  document.querySelector("#amigo").value = "";
}

function actualizarListaVisual() {
  const contenedorDeLista = document.querySelector("#listaAmigos");
  contenedorDeLista.innerHTML = "";

  listaDeAmigos.forEach(amigo => {
    const elementoDeLista = document.createElement("li");
    elementoDeLista.textContent = amigo;
    contenedorDeLista.appendChild(elementoDeLista);
  });
}


function sortearAmigoAleatorio() {
  if (listaDeAmigos.length === 0) {
    alert("Por favor, inserte un nombre antes de sortear");
    return;
  }

  const indiceAleatorio = obtenerIndiceAleatorio(listaDeAmigos.length);
  mostrarAmigoSorteado(listaDeAmigos[indiceAleatorio]);
}

function obtenerIndiceAleatorio(cantidad) {
  return Math.floor(Math.random() * cantidad);
}

function mostrarAmigoSorteado(amigo) {
  document.querySelector("#resultado").textContent = amigo;
}
