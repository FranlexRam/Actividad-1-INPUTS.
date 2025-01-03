const INPUT = document.querySelector("#nombre");
document.querySelector(".boton").addEventListener("click", leer);
INPUT.addEventListener("keydown", teclado);


function teclado(e) {
    (e.key==="Enter") && leer();
}

function leer() {
    const nombre = INPUT.value.trim();
    (nombre) && escribir(capitalizarPrimeraLetra(nombre));
     
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
    (!document.querySelector("select")) && crearSelect();
    document.querySelector("select").innerHTML+=`<option>${NOMBRE}</option>`
}

function crearSelect() {
    document.querySelector(".resultado").innerHTML+=`<select></select>`;
    document.querySelector("select").addEventListener("click", saludo);
}

function saludo() {
    INPUT.value=document.querySelector("select").value;
}