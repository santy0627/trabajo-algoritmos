let promedio = 3;
let materiasApro = 4;
let tieneSanciones = false;


if (tieneSanciones === false) {
  if(promedio >= 4 && materiasApro >= 6){
    console.log("Beca completa otorgada, felicidades!");  
  } else if (promedio < 4 && promedio >= 3 && materiasApro < 6 && materiasApro > 3) {
    console.log("Beca parcial otorgada, felicidades!");  
  } else {
    console.log("Tu beca ha sido rechazada, lo sentimos");
  }
} else if(promedio >= 3 && materiasApro >= 3){
  console.log("Beca parcial otorgada, felicidades!")
} else {
  console.log("Tu beca ha sido rechazada, lo sentimos");
}