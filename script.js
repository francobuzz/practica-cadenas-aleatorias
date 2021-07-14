// refrescarPagina() = {
//     window.location.reload();
// }

let $input = document.querySelector("#texto");
const rango = 5;
let $respuesta = document.querySelector("#respuesta");
let $contador = document.querySelector("#resultado");
let puntos = 0;
const $botonValidacion = document.querySelector("#botonv");
let cadena = "";

function validacion(){
    if ($input.value == cadena){
        $respuesta.textContent = "Respuesta correcta"
        $respuesta.style.backgroundColor = "green";
        puntos += 1;
    } else {
        $respuesta.textContent = "Respuesta incorrecta"
        $respuesta.style.backgroundColor = "red";
    }
    $contador.innerHTML = "Llevás <b>"+puntos+"</b> punto";
    if (puntos!=1){
        $contador.textContent += "s";
    }
}

function reset(){
    cadena="";
    $input.value="";
    $input.focus();
}

function generarCadena(rango){
    let nuevoCaracter = 0;
    for (let i=0; i<rango; i++) {
        nuevoCaracter = (Math.floor(Math.random()*10)).toString();
        cadena = cadena + nuevoCaracter;
    }
    return cadena;
}

function mostrarCadena(){
    let $textoCadena = document.querySelector("#textoCadena");
    $textoCadena.textContent = "Debés teclear la cadena: "+cadena;
}

$botonValidacion.onclick = function() {
    validacion();
    reset();
    generarCadena(rango);
    mostrarCadena();
};

$input.onkeypress = function(event) {
    if (event.keyCode === 13){
    $botonValidacion.click();      
    event.preventDefault();
    return false;
    }
};

generarCadena(rango);
mostrarCadena();
$input.focus();