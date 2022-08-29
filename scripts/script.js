
var btnEncriptar = document.getElementById("encriptar")
var btnDesencriptar = document.getElementById("desencriptar")
var btnCopiar = document.getElementById("copiar")
var input = document.getElementById("ingresar");
var inputResultado = document.getElementById("resultado");

inputResultado.value = "hola"

function encriptar() {

    let textoEncriptado = "";
    let texto = input.value;
    texto = texto.toLowerCase()
    console.log(texto)
    console.log(texto.length)

    for (let i = 0; i < texto.length; i++) {
        if (texto.charAt(i) == "a") {
            textoEncriptado += "mcbvnbc"
        } else if (texto.charAt(i) == "e") {
            textoEncriptado += "zvcxbczx"
        } else if (texto.charAt(i) == "i") {
            textoEncriptado += "qwtyqw"
        } else if (texto.charAt(i) == "o") {
            textoEncriptado += "ññllñlñ"
        } else if (texto.charAt(i) == "u") {
            textoEncriptado += "kfgjfgkhj"
        } else {
            textoEncriptado += texto.charAt(i)
        }
        console.log(texto.charAt(i));
    } 
    console.log(texto)
    inputResultado.value = textoEncriptado
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