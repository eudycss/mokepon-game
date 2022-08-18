
let ataqueJugador
let ataqueEnemigo
let resultadoPelea
let lifesgame
let winPlayer=3
let winEneny=3  

function iniciarJuego(){

    let sectionSelectAtack=document.getElementById('seleccionar-ataque')
    sectionSelectAtack.style.display='none'

    let sectionRestart=document.getElementById('reiniciar')
    sectionRestart.style.display='none'

    let botonMascotaJugador=document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener('click',SeleccionarMascotaJugador)

    
    let botonFuego=document.getElementById("boton-fuego")
    botonFuego.addEventListener('click',ataqueFuego)
    
    let botonAgua=document.getElementById("boton-agua")
    botonAgua.addEventListener('click',ataqueAgua)
    
    let botonTierra=document.getElementById("boton-tierra")
    botonTierra.addEventListener('click',ataqueTierra)

    let buttonRestart=document.getElementById("boton-reiniciar")
    buttonRestart.addEventListener('click',restartGame)


}
function SeleccionarMascotaJugador(){
    
    let sectionSelectPet=document.getElementById('seleccionar-mascota')
    sectionSelectPet.style.display='none'

    let sectionSelectAtack=document.getElementById('seleccionar-ataque')
    sectionSelectAtack.style.display='flex'

    let inputHipodoge=document.getElementById('hipodoge')
    let inputcapipepo=document.getElementById('capipepo')
    let inputratigueya=document.getElementById('ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    
    //Spam botonMascotaJugador
    

       if(inputHipodoge.checked) {
        spanMascotaJugador.innerHTML='Hipodoge'
       } else if(inputcapipepo.checked){
        spanMascotaJugador.innerHTML='Capipepo'
       }
        else if(inputratigueya.checked){
            spanMascotaJugador.innerHTML='Ratigueya'
       
       }  else {
        alert("You shoul select one option")
       }
     seleccionarMascotaEnemigo()
    
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatoria = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (mascotaAleatoria == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (mascotaAleatoria == 2) {
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    } else {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }
}


function ataqueFuego(){
    ataqueJugador='FUEGO' 
    seleccionarAtaqueEnemigo() 
}
function ataqueAgua(){
    ataqueJugador='AGUA'
    
    seleccionarAtaqueEnemigo()
    
}
function ataqueTierra(){
    ataqueJugador='TIERRA'
    
    seleccionarAtaqueEnemigo()
}

function seleccionarAtaqueEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)
    
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'TIERRA'
    }
    
    combate()
}



function combate(){
    let lifePlayer=document.getElementById('lifes-player')
    let lifeEnemy=document.getElementById('lifes-enemy')

    if(ataqueEnemigo==ataqueJugador){
        crearMensaje("EMPATE")
    } 
    else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        crearMensaje("GANASTE")
        winEneny--
        lifeEnemy.innerHTML = winEneny
    } else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        crearMensaje("GANASTE")
        winEneny--
        lifeEnemy.innerHTML = winEneny
    } else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        crearMensaje("GANASTE")
        winEneny--
        lifeEnemy.innerHTML = winEneny
    } else {
        crearMensaje("PERDISTE")
        winPlayer--
        lifePlayer.innerHTML = winPlayer

    }
    verifyLifes()
}

 


function verifyLifes(){
    if (winEneny == 0) {
        crearMensajeFinal("FELICITACIONES! Ganaste :)")
    } else if (winPlayer == 0) {
        crearMensajeFinal('Lo siento, perdiste :(')
    }
}
function crearMensaje(resultado){
    
    let sectionMensajes = document.getElementById('resultado');
    //let sectionResultado = document.getElementById('mensajes');
    let ataquesDelJugador = document.getElementById("ataque-del-jugador");
    let ataquesDelEnemigo = document.getElementById("ataque-del-enemigo");

    
    let nuevoAtaqueDelJugador =document.createElement('p')
    let nuevoAtaqueDelEnemigo =document.createElement('p')


    sectionMensajes.innerHTML=resultado
    //sectionResultado.innerHTML=resultadoPelea
    nuevoAtaqueDelJugador.innerHTML=ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML=ataqueEnemigo

    
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
        //parrafo.innerHTML='Tu mascota atacó con '+ataqueJugador+  ', las mascotas del enemigo ataco con '+ataqueEnemigo+' -->'+combate()
       // currentP.appendChild(parrafo);
    
    
}

function crearMensajeFinal(resultadoFinal){
    let sectionMensaje=document.getElementById('resultado');
   // let parrafo=document.createElement('p')
   sectionMensaje.innerHTML=resultadoFinal
   // sectionMensaje.appendChild(parrafo)

    let botonFuego=document.getElementById("boton-fuego")
    botonFuego.disabled=true
    
    let botonAgua=document.getElementById("boton-agua")
    botonAgua.disabled=true
    
    let botonTierra=document.getElementById("boton-tierra")
    botonTierra.disabled=true

    let sectionRestart=document.getElementById('reiniciar')
    sectionRestart.style.display='block'
}

function restartGame(){
    location.reload()
}

function aleatorio(min,max){
    return Math.floor(Math.random() * (max - min+1)+min)
}


//primero que cargue el html y luego este js
window.addEventListener('load',iniciarJuego)

