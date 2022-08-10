
function iniciarJuego(){
    let botonMascotaJugador=document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener('click',SeleccionarMascotaJugador)
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
            
        
        
        
    
        
    
}


//primero que cargue el html y luego este js
window.addEventListener('load',iniciarJuego)
