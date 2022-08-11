
let ataqueJugador
let ataqueEnemigo
let resultadoPelea
let lifesgame
function iniciarJuego(){
    let botonMascotaJugador=document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener('click',SeleccionarMascotaJugador)

    let botonFuego=document.getElementById("boton-fuego")
    botonFuego.addEventListener('click',ataqueFuego)
    
    let botonAgua=document.getElementById("boton-agua")
    botonAgua.addEventListener('click',ataqueAgua)
    
    let botonTierra=document.getElementById("boton-tierra")
    botonTierra.addEventListener('click',ataqueTierra)

}
function SeleccionarMascotaJugador(mascota){
    let inputHipodoge=document.getElementById('hipodoge')
    let inputcapipepo=document.getElementById('capipepo')
    let inputratigueya=document.getElementById('ratigueya')
    let inputlangostelvis=document.getElementById('langostelvis')
    let inputtucapalma=document.getElementById('tucapalma')

    //Spam botonMascotaJugador
    let spanMascotaJugador = document.getElementById('mascota-jugador')

       if(inputHipodoge.checked) {
        spanMascotaJugador.innerHTML='Hipodoge'
       } else if(inputcapipepo.checked){
        spanMascotaJugador.innerHTML='Capipepo'
       }
        else if(inputratigueya.checked){
            spanMascotaJugador.innerHTML='Ratigueya'
       
       } else if(inputlangostelvis.checked){
        spanMascotaJugador.innerHTML='Langostelvis'
       
       } else if(inputtucapalma.checked){
        spanMascotaJugador.innerHTML='Tucapalma'
       } else {
        alert("You shoul select one option")
       }
              seleccionarMascotaEnemigo()
    
}

function seleccionarMascotaEnemigo(){
    let ataqueAleatorio=aleatorio(0,6)
    let  spanMascotaEnemigo=document.getElementById('mascota-enemigo')
    switch(ataqueAleatorio){
        case 1:
        spanMascotaEnemigo.innerHTML="Hipodoge"
            break
        case 2:
            spanMascotaEnemigo.innerHTML="Capipepo"
            break
        case 3:
            spanMascotaEnemigo.innerHTML="Ratigueya"
             break
        case 4:
            spanMascotaEnemigo.innerHTML="Langostelvis"
             break
         case 5:
            spanMascotaEnemigo.innerHTML="Tucapalma"
            break
    }
}

function seleccionarAtaqueEnemigo() {
    let ataqueAleatorio=aleatorio(0,4)
    
    switch(ataqueAleatorio){
        case 1:
            ataqueEnemigo = 'FUEGO'
            break;
        case 2:
            ataqueEnemigo = 'AGUA'
            break;
        case 3:
            ataqueEnemigo = 'TIERRA'
            break;
    }
    
    createMensaje()
    return ataqueEnemigo
}


function combate(){

    if(ataqueEnemigo==ataqueJugador){
        resultadoPelea='Empate'
    } else if((ataqueJugador=='AGUA' && ataqueEnemigo=='FUEGO') ||(ataqueJugador=='FUEGO' && ataqueEnemigo=='TIERRA') ||(ataqueJugador=='TIERRA' && ataqueEnemigo=='AGUA')){
        resultadoPelea='Ganaste'
        
    
    } else {
        resultadoPelea='Perdiste'
        
    }

    return resultadoPelea
}

let winPlayer=3
let winEneny=3  

function lifes(){
   
    let lifePlayer=document.getElementById('lifes-player')
    let lifeEnemy=document.getElementById('lifes-enemy')

   //while(winEneny>=0 && winPlayer>=0){
  if(winEneny>0 && winPlayer>0){

        if(combate()=='Ganaste'){
            winEneny=winEneny-1
            lifeEnemy.innerHTML=winEneny
        }else if(combate()=='Perdiste'){
             winPlayer=winPlayer-1
             lifePlayer.innerHTML=winPlayer
        }
    }else if(winEneny==0){
        crearMensajeFinal('Felicitaciones! Ganaste')
    } else if(winPlayer==0){
        crearMensajeFinal('Perdiste')
    } 
        
        
    
   // }
}
function verifyLifes(){
    if(winEneny>0 && winPlayer>0){
        lifesgame=true
    }else{
        lifesgame=false
    }
}
function createMensaje(){
    if(verifyLifes){
    let parrafo =document.createElement('p')
 
    var newContent = document.createTextNode('Tu mascota atacó con '+ataqueJugador+  ', las mascotas del enemigo ataco con '+ataqueEnemigo+' -->'+combate());
    parrafo.appendChild(newContent);
    var currentP = document.getElementById("mensajes");
    document.body.insertBefore(parrafo, currentP);}
}

function crearMensajeFinal(resultadoFinal){
    let sectionMensaje=document.getElementById('mensajes')
    let parrafo=document.createElement('p')
    parrafo.innerHTML=resultadoFinal
    sectionMensaje.appendChild(parrafo)
}
function ataqueFuego(){
    ataqueJugador='FUEGO'
    
    seleccionarAtaqueEnemigo()
    lifes()
}
function ataqueAgua(){
    ataqueJugador='AGUA'
    
    seleccionarAtaqueEnemigo()
    lifes()
}
function ataqueTierra(){
    ataqueJugador='TIERRA'
    
    seleccionarAtaqueEnemigo()
    lifes()
}
function aleatorio(max,min){
    return Math.floor(Math.random() * (max - min+1)+min)
}


//primero que cargue el html y luego este js
window.addEventListener('load',iniciarJuego)

