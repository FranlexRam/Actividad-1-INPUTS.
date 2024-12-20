document.querySelector(".boton").addEventListener("click", leer);
document.querySelector("#nombre").addEventListener("keydown", teclado);
const INPUT = document.querySelector("#nombre");


function teclado(e) {
    (e.key==="Enter") && leer();
}

function leer() {
    const nombre = INPUT.value.trim();
    (nombre) && escribir(capitalizarPrimeraLetra(nombre));

    // (nombre) && (document.querySelector(".resultado").innerHTML+=`
    // <select>
    //     <option>${nombre}</option>
    // </select>`)
     
    limpiar();
}

function limpiar() {
    INPUT.value="";
    INPUT.focus();
}

function capitalizarPrimeraLetra(valor) {
    let nombreCorrecto = `${valor.substring(0,1).toUpperCase()}${valor.substring(1).toLowerCase()}`;
    return nombreCorrecto;
}

function escribir(NOMBRE) {
    
}