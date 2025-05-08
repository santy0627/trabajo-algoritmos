let temperatura = 5
let nivelRio =  4.2
let humedadSuelo = 50

let puntosNaranja = 0
let puntosAmarillo = 0

if (nivelRio >= 5){
    console.log("Alerta roja");
} else { //aqui verificamos los requisitos para una alerta naranja

    if(nivelRio>=4){
        puntosNaranja++
    }

    if(temperatura > 35 || temperatura < 10){
        puntosNaranja++
    }

    if(humedadSuelo < 20 || humedadSuelo > 70){
        puntosNaranja++
    }

    if(puntosNaranja > 1){
        console.log("Alerta naranja");
    } else {
    
        if(nivelRio > 3 && nivelRio < 4){
            puntosAmarillo++
        }

        if(temperatura >= 30 && temperatura <= 35 || temperatura <= 15 && temperatura >= 10){
            puntosAmarillo++
        }

        if(humedadSuelo <= 30 && humedadSuelo >= 20 || humedadSuelo <= 70 && humedadSuelo >= 60){
            puntosAmarillo++
        }
        
        if(puntosAmarillo > 1){
            console.log("Alerta amarilla");
        } else {
            console.log("Alerta verde");
        }
    }
} 

