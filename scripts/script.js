
var btnEncriptar = document.getElementById("encriptar")
var btnDesencriptar = document.getElementById("desencriptar")
var btnCopiar = document.getElementById("copiar")
var input = document.getElementById("ingresar");

function encriptar() {

    let textoEncriptado = "";
    let texto = texto.toLowerCase() = input.value;

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            texto[i] = "jsdkhf";
        }
        console.log(texto[i]);
        texto += texto[i];
    }
}

function desencriptar() {
    alert("Desencriptar " + input.value);
}

function copiar() {
    alert("Copiar " + input.value);
}



btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiar;


/*
var input = document.querySelector("input");
    
function mostrarTexto() {

    alert(input.value);
}

var button = document.querySelector("button");
button.onclick = mostrarTexto;
*/