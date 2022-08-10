
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

       if(inputHipodoge.checked) {
        alert("Elegiste hidoge ")
       } else if(inputcapipepo.checked){
        alert("Elegiste capipepo")
       }
        else if(inputratigueya.checked){
        alert("Elegiste ratigueya")
       
       } else if(inputlangostelvis.checked){
        alert("Elegiste langostelvis")
       
       } else if(inputtucapalma.checked){
        alert("Elegiste tucapalma")
       } else {
        alert("You shoul select one option")
       }
            
        
        
        
    
        
    
}


//primero que cargue el html y luego este js
window.addEventListener('load',iniciarJuego)
