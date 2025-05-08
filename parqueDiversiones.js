let edad = 12
let estatura = 1.50
let discapacidad = false
let acompanante = true

let acceso = false

let ZonaInfantil = false
let ZonaAventura = false
let ZonaAcuatica = false


if(edad >= 5 && estatura >= 1.00){
    if (discapacidad === false){
        console.log("Puedes entrar al parque")
        acceso = true
    } else if (acompanante === true) {
        console.log("Puedes entrar al parque")
        acceso = true
    } else {
        console.log("Necesitas un acompañante")
        acceso = false
    }
} else {
 console.log("No cumples con los requerimientos para entrar");
 acceso = false;
}

if(acceso === true) {

    console.log("El parque tiene Zona infantil, Zona de aventuras, Zona acuatica");
    console.log("Puedes entrar a las siguietes zonas: ");

    if(edad >= 12 && estatura >= 1.50 && discapacidad === false) {
        ZonaAventura = true
    } else if(edad < 12){
        ZonaInfantil = true
        if(edad >= 8 && estatura >= 1.20 ){
            ZonaAcuatica = true
        }
    }

    if(ZonaInfantil === true){
        console.log("Zona infantil");
    }
    
    if(ZonaAcuatica === true){
        console.log("Zona acuatica");
    }
    
    if(ZonaAventura === true){
        console.log("Zona aventura");
    }
}





