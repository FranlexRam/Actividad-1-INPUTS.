let dcto = parseInt(document.querySelector("select").value);
document.querySelector("#precio").addEventListener("keyup", leer);

function leer() {
    let cantidad = Number(document.querySelector("#precio").value);
    let descuento = cantidad*(dcto/100);
    let total = `${cantidad} - ${descuento} = ${cantidad - descuento}`;
    document.querySelector("#descuento").value=descuento;
    document.querySelector("#total").value=total;
}