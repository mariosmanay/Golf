

let golpes = prompt (Number("En cuantos golpes hizo el hoyo?"));
let par = prompt (Number("Cual es el par?"));

function puntajeDeGolf () {
    
    let respuesta;
    
        if (golpes == 1) {
        respuesta = "Hole in One";
    } else if (golpes <= par - 2) {
        respuesta = "Eagle";
    } else if (golpes == par - 1) {
        respuesta = "Birdie";
    } else if (golpes == par) {
        respuesta = "Par";
    } else if (golpes == par + 1) {
        respuesta = "Bogey";
    } else if (golpes == par + 2) {
        respuesta = "Doble Bogey";
    } else if (golpes >= par + 3) {
        respuesta = "Go Home";
    }

    return respuesta;
}

alert (puntajeDeGolf());
