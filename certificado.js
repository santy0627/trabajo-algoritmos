let notaFinal = 4
let participacion = true
let entregas = false

if(notaFinal >= 3 && participacion === true && entregas === true){
    console.log("Certificado entregado, felicidades");    
} else if(notaFinal < 3 && participacion === false && entregas === false){
    console.log("Lo sentimos, no cumples con los requisitos para obtener tu certificado");
} else {
    if(notaFinal < 3){
        console.log("Debes mejorar tus notas academicas");
    }
    
    if(participacion === false){
        console.log("Debes participar mas en los foros");
    }
    
    if(entregas === false){
        console.log("Debes entregar todos los trabajos pendientes");
        
    }
}