function iniciarJuego() {

    let botonMascotaJugador = document.getElementById("boton-mascota");
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);

}

function seleccionarMascotaJugador() {
    
    let mascotaJugador = document.getElementById("mascota-jugador");
   // alert("Seleccionaste tu mascota ")

    if(document.getElementById("carlos").checked){
        mascotaJugador.innerHTML = "Carlos"
    }  
     else if(document.getElementById("juan").checked){               
        mascotaJugador.innerHTML = "Juan"
    } 
      else if(document.getElementById("luis").checked){
        mascotaJugador.innerHTML = "Luis"
    }
        else {
            alert("Selecciona una mascota")
    }

}
window.addEventListener('load', iniciarJuego);
