const sectionSelectAtack = document.getElementById("seleccionar-ataque");
const sectionRestart = document.getElementById("reiniciar");
const botonMascotaJugador = document.getElementById("boton-mascota");
const botonTierra = document.getElementById("boton-tierra");
const buttonRestart = document.getElementById("boton-reiniciar");

const sectionSelectPet = document.getElementById("seleccionar-mascota");


const spanMascotaJugador = document.getElementById("mascota-jugador");

const spanMascotaEnemigo = document.getElementById("mascota-enemigo");

const lifePlayer = document.getElementById("lifes-player");
const lifeEnemy = document.getElementById("lifes-enemy");

const sectionMensajes = document.getElementById("resultado");
//const sectionResultado = document.getElementById('mensajes');
const ataquesDelJugador = document.getElementById("ataque-del-jugador");
const ataquesDelEnemigo = document.getElementById("ataque-del-enemigo");

const contenedorTarjetas = document.getElementById("contenedorTarjetas");
const sectionMensaje = document.getElementById("resultado");
const botonFuego = document.getElementById("boton-fuego");
const botonAgua = document.getElementById("boton-agua");

/* Arrays */
let mokepones = [];

let ataqueJugador;
let ataqueEnemigo;

let opcionDeMokepones;
let inputHipodoge;
let inputcapipepo;
let inputratigueya;

let resultadoPelea;
let lifesgame;
let winPlayer = 3;
let winEneny = 3;

/* Creare class */
/* Constructor= Lo que se va a construir 
    his=hace referencia esto mismo
        es decir el nombre del mokepon va  aser = al nombre que estamos usando como parametros
    */
class Mokepon {
  constructor(name, photo, life) {
    this.name = name;
    this.photo = photo;
    this.life = life;
    this.attack = [];
  }
}
/* Objetos instancia que vienen desde la clase */
let hipodoge = new Mokepon("Hipodoge", "./assets/hipodoge_attack.png", 5);

let capipepo = new Mokepon("Capipepo", "./assets/capipepo_attack.png", 5);

let ratigueya = new Mokepon("Ratigueya", "./assets/ratigueya.png", 5);

/* Objetos literalios, que solo guardan información  */
hipodoge.attack.push(
  { nombre: "💧", id: "boton-agua" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "🥌", id: "boton-tierra" }
);

capipepo.attack.push(
  { nombre: "🥌", id: "boton-tierra" },
  { nombre: "🥌", id: "boton-tierra" },
  { nombre: "🥌", id: "boton-tierra" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "🔥", id: "boton-fuego" }
);

ratigueya.attack.push(
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "🥌", id: "boton-tierra" }
);

mokepones.push(hipodoge, capipepo, ratigueya);

/* push inyecta los valores en mokepones */
/* mokepones.push(hipodoge, capipepo, ratigueya) */

function iniciarJuego() {
  sectionSelectAtack.style.display = "none";
  /* Hacer algo por cada uno de los elementos del arreglo */
  mokepones.forEach((mokepon) => {
    /* templates literarios */
    opcionDeMokepones = `   <input  type="radio"  name="mascota" id=${mokepon.name} >
        <label class="tarjeta-de-mokepon" for=${mokepon.name}>
          
        <p>${mokepon.name}</p>  
        <img src=${mokepon.photo} alt=${mokepon.name}>
        </label>`;

    contenedorTarjetas.innerHTML += opcionDeMokepones;
    inputHipodoge = document.getElementById("Hipodoge");
     inputcapipepo = document.getElementById("Capipepo");
     inputratigueya = document.getElementById("Ratigueya");
  });
  sectionRestart.style.display = "none";
  botonMascotaJugador.addEventListener("click", SeleccionarMascotaJugador);

  let botonFuego = document.getElementById("boton-fuego");
  botonFuego.addEventListener("click", ataqueFuego);

  let botonAgua = document.getElementById("boton-agua");
  botonAgua.addEventListener("click", ataqueAgua);

  botonTierra.addEventListener("click", ataqueTierra);

  buttonRestart.addEventListener("click", restartGame);
}
function SeleccionarMascotaJugador() {
  sectionSelectPet.style.display = "none";

  sectionSelectAtack.style.display = "flex";

  //Spam botonMascotaJugador

  if (inputHipodoge.checked) {
    spanMascotaJugador.innerHTML = "Hipodoge";
  } else if (inputcapipepo.checked) {
    spanMascotaJugador.innerHTML = "Capipepo";
  } else if (inputratigueya.checked) {
    spanMascotaJugador.innerHTML = "Ratigueya";
  } else {
    alert("You shoul select one option");
  }
  seleccionarMascotaEnemigo();
}

function seleccionarMascotaEnemigo() {
  let mascotaAleatoria = aleatorio(1, 3);

  if (mascotaAleatoria == 1) {
    spanMascotaEnemigo.innerHTML = "Hipodoge";
  } else if (mascotaAleatoria == 2) {
    spanMascotaEnemigo.innerHTML = "Capipepo";
  } else {
    spanMascotaEnemigo.innerHTML = "Ratigueya";
  }
}

function ataqueFuego() {
  ataqueJugador = "FUEGO";
  seleccionarAtaqueEnemigo();
}
function ataqueAgua() {
  ataqueJugador = "AGUA";

  seleccionarAtaqueEnemigo();
}
function ataqueTierra() {
  ataqueJugador = "TIERRA";

  seleccionarAtaqueEnemigo();
}

function seleccionarAtaqueEnemigo() {
  let ataqueAleatorio = aleatorio(1, 3);

  if (ataqueAleatorio == 1) {
    ataqueEnemigo = "FUEGO";
  } else if (ataqueAleatorio == 2) {
    ataqueEnemigo = "AGUA";
  } else {
    ataqueEnemigo = "TIERRA";
  }

  combate();
}

function combate() {
  if (ataqueEnemigo == ataqueJugador) {
    crearMensaje("EMPATE");
  } else if (ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") {
    crearMensaje("GANASTE");
    winEneny--;
    lifeEnemy.innerHTML = winEneny;
  } else if (ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") {
    crearMensaje("GANASTE");
    winEneny--;
    lifeEnemy.innerHTML = winEneny;
  } else if (ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA") {
    crearMensaje("GANASTE");
    winEneny--;
    lifeEnemy.innerHTML = winEneny;
  } else {
    crearMensaje("PERDISTE");
    winPlayer--;
    lifePlayer.innerHTML = winPlayer;
  }
  verifyLifes();
}

function verifyLifes() {
  if (winEneny == 0) {
    crearMensajeFinal("FELICITACIONES! Ganaste :)");
  } else if (winPlayer == 0) {
    crearMensajeFinal("Lo siento, perdiste :(");
  }
}
function crearMensaje(resultado) {
  let nuevoAtaqueDelJugador = document.createElement("p");
  let nuevoAtaqueDelEnemigo = document.createElement("p");

  sectionMensajes.innerHTML = resultado;
  //sectionResultado.innerHTML=resultadoPelea
  nuevoAtaqueDelJugador.innerHTML = ataqueJugador;
  nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo;

  ataquesDelJugador.appendChild(nuevoAtaqueDelJugador);
  ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);
  //parrafo.innerHTML='Tu mascota atacó con '+ataqueJugador+  ', las mascotas del enemigo ataco con '+ataqueEnemigo+' -->'+combate()
  // currentP.appendChild(parrafo);
}

function crearMensajeFinal(resultadoFinal) {
  // let parrafo=document.createElement('p')
  sectionMensaje.innerHTML = resultadoFinal;
  // sectionMensaje.appendChild(parrafo)

  botonFuego.disabled = true;

  botonAgua.disabled = true;

  botonTierra.disabled = true;

  sectionRestart.style.display = "block";
}

function restartGame() {
  location.reload();
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//primero que cargue el html y luego este js
window.addEventListener("load", iniciarJuego);
