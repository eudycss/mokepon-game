const sectionSelectAtack = document.getElementById("seleccionar-ataque");
const sectionRestart = document.getElementById("reiniciar");
const botonMascotaJugador = document.getElementById("boton-mascota");

const buttonRestart = document.getElementById("boton-reiniciar")
sectionRestart.style.display="none";
const sectionSelectPet = document.getElementById("seleccionar-mascota");


const spanMascotaJugador = document.getElementById("mascota-jugador");

const spanMascotaEnemigo = document.getElementById("mascota-enemigo");

const lifePlayer = document.getElementById("lifes-player");
const lifeEnemy = document.getElementById("lifes-enemy");

const sectionMensajes = document.getElementById("resultado");
//const sectionResultado = document.getElementById('mensajes');
const ataquesDelJugador = document.getElementById("ataque-del-jugador");
const ataquesDelEnemigo = document.getElementById("ataque-del-enemigo");

const contenedorTarjetas = document.getElementById('contenedorTarjetas');
/* const sectionMensaje = document.getElementById("resultado"); */
const attacksContent=document.getElementById("attacksContent")
/* Arrays */
let mokepones = [];
let buttons=[]
let playerAttack=[]
let ataqueEnemigo=[]
let ataqueJugador;


let opcionDeMokepones;
let inputHipodoge;
let inputcapipepo;
let inputratigueya;
let playerPet
let mokeponAttacks

let botonFuego 
let botonAgua 
let botonTierra
let resultadoPelea;
let lifesgame;
let winPlayer = 3;
let winEneny = 3;


let enemyMokeponAttack
let indexEnemyAttack
let indexPlayerAttack
let playerVitories=0
let enemyVictories=0
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
  { nombre: "🥌", id: "boton-tierra" },
);

capipepo.attack.push(
  { nombre: "🥌", id: "boton-tierra" },
  { nombre: "🥌", id: "boton-tierra" },
  { nombre: "🥌", id: "boton-tierra" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "🔥", id: "boton-fuego" },
);

ratigueya.attack.push(
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "🥌", id: "boton-tierra" },
);

mokepones.push(hipodoge, capipepo, ratigueya);

/* push inyecta los valores en mokepones */
/* mokepones.push(hipodoge, capipepo, ratigueya) */
/* Iniciar Juego */
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
  
  botonMascotaJugador.addEventListener("click", SeleccionarMascotaJugador);
  buttonRestart.addEventListener("click", restartGame);
}

/*----------- Seleccionar mascota Jugador------------------ */
function SeleccionarMascotaJugador() {
  sectionSelectPet.style.display = "none";

  sectionSelectAtack.style.display = "flex";

  //Spam botonMascotaJugador
  if (inputHipodoge.checked) {
    spanMascotaJugador.innerHTML = inputHipodoge.id
    playerPet=inputHipodoge.id
  } else if (inputcapipepo.checked) {
    spanMascotaJugador.innerHTML = inputcapipepo.id
    playerPet=inputcapipepo.id
  } else if (inputratigueya.checked) {
    spanMascotaJugador.innerHTML =inputratigueya.id
    playerPet=inputratigueya.id
  } else {
    alert("You should select one option");
  }

  extractAttacks(playerPet)
  seleccionarMascotaEnemigo()
}


/* Extract attacks */
function extractAttacks(playerPet){
let attacks 
for (let i = 0; i < mokepones.length; i++) {
    if(playerPet === mokepones[i].name){
        attacks=mokepones[i].attack
    }
} 
/* console.log(attacks) */

showAttacks(attacks);
}


/* show Attacks */
function showAttacks(ataques){
  ataques.forEach((ataque)=>{
    
    mokeponAttacks= `
    <button id=${ataque.id} class="boton-de-ataque BAttack">${ataque.nombre}</button>`
    attacksContent.innerHTML+=mokeponAttacks
   })
  botonFuego = document.getElementById("boton-fuego");
  botonAgua = document.getElementById("boton-agua");
  botonTierra = document.getElementById("boton-tierra");
  buttons=document.querySelectorAll('.BAttack')
  
}


/* Attack sequence 
e=sginifca el evento mismo
*/
function attackSequence(){
  buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
      if(e.target.textContent ==='🔥'){
        playerAttack.push('FUEGO')
        console.log(playerAttack);
        button.style.background='#112f58'
      } else if(e.target.textContent ==='💧'){
        playerAttack.push('AGUA')
        console.log(playerAttack);
        button.style.background='#112f58'
      } else {
        playerAttack.push('TIERRA')
        console.log(playerAttack);
        button.style.background='#112f58'
      }
      ataqueAleatorioEnemigo()
    })
  })
  
}


/* Seleccionar Mascota enemigo */
function seleccionarMascotaEnemigo() {
  let mascotaAleatoria = aleatorio(0, mokepones.length-1);

  spanMascotaEnemigo.innerHTML=mokepones[mascotaAleatoria].name
  enemyMokeponAttack=mokepones[mascotaAleatoria].attack
  attackSequence()
}

function ataqueAleatorioEnemigo() {
  let ataqueAleatorio = aleatorio(0, enemyMokeponAttack.length-1 );

  if (ataqueAleatorio == 0 || ataqueAleatorio==1) {
    ataqueEnemigo.push('FUEGO')
  } else if (ataqueAleatorio == 3 ||ataqueAleatorio == 4) {
    ataqueEnemigo.push('AGUA')
  } else {
    ataqueEnemigo.push('TIERRA')
  }
  console.log(ataqueEnemigo);

  startFight()
}


/* start Fight */
function startFight(){
if(playerAttack.length ===5){
  combate()
}
}



/* index Both Fighters */
function indexBothFighters(player, enemy){
  indexPlayerAttack=playerAttack[player]
  indexEnemyAttack=ataqueEnemigo[enemy]
}


/* Combater */
function combate() {
  for(let i = 0; i <playerAttack.length; i++){
    if(playerAttack[i]===ataqueEnemigo[i]){
      indexBothFighters(i,i)
      crearMensaje("EMPATE");
      playerVitories++
      lifePlayer.innerHTML = playerVitories;
      
    } else if(playerAttack[i]==='FUEGO' && ataqueEnemigo[i]==='TIERRA'){
      indexBothFighters(i,i)
      crearMensaje("Ganaste");
      playerVitories++
      lifePlayer.innerHTML = playerVitories;
    } else if(playerAttack[i]==='AGUA' && ataqueEnemigo[i]==='FUEGO' ){
      indexBothFighters(i,i)
      crearMensaje("Ganaste");
      playerVitories++
      lifePlayer.innerHTML = playerVitories;
    } else if(playerAttack[i]==='TIERRA' && ataqueEnemigo[i]==='AGUA'){
      indexBothFighters(i,i)
      crearMensaje("Ganaste");
      playerVitories++
      lifePlayer.innerHTML = playerVitories;
    } else{
      indexBothFighters(i,i)
      crearMensaje("Perdiste");
      enemyVictories++
      lifeEnemy.innerHTML = enemyVictories;
    }

  }
  verifyLifes();
 /*  if (ataqueEnemigo == ataqueJugador) {
    
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
  } */
 
}

function verifyLifes() {
  if (playerVitories ===enemyVictories) {
    crearMensajeFinal("Esto fue un empate :)");
  } else if (playerVitories > enemyVictories) {
    crearMensajeFinal("FELICITACIONES! Ganaste :)");
  } else {
    crearMensajeFinal("Lo siento, perdiste :(");
  }
}


function crearMensaje(resultado) {
  let nuevoAtaqueDelJugador = document.createElement("p");
  let nuevoAtaqueDelEnemigo = document.createElement("p");

  sectionMensajes.innerHTML = resultado;
  //sectionResultado.innerHTML=resultadoPelea
  nuevoAtaqueDelJugador.innerHTML = indexPlayerAttack ;
  nuevoAtaqueDelEnemigo.innerHTML = indexEnemyAttack;

  ataquesDelJugador.appendChild(nuevoAtaqueDelJugador);
  ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);
  //parrafo.innerHTML='Tu mascota atacó con '+ataqueJugador+  ', las mascotas del enemigo ataco con '+ataqueEnemigo+' -->'+combate()
  // currentP.appendChild(parrafo);
}

function crearMensajeFinal(resultadoFinal) {
  // let parrafo=document.createElement('p')
  sectionMensajes.innerHTML = resultadoFinal;
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
