let btnEncriptar = document.getElementById("encriptar");
let btnDesencriptar = document.getElementById("desencriptar");
let btnCopiar = document.getElementById("copiar");
let input = document.getElementById("ingresar");
let inputResultado = document.getElementById("resultado");
let encriptlist = ["mcbvnbc", "zvcxbczx", "qwtyqw", "ñlñlñl", "kfgjfgkhj"];

function encriptar() {

    let textoEncriptado = "";
    let texto = input.value;
    texto = texto.toLowerCase();
    console.log(texto);
    console.log(texto.length);

    for (let i = 0; i < texto.length; i++) {
        if (texto.charAt(i) == "a") {
            textoEncriptado += encriptlist[0];
        } else if (texto.charAt(i) == "e") {
            textoEncriptado += encriptlist[1];
        } else if (texto.charAt(i) == "i") {
            textoEncriptado += encriptlist[2];
        } else if (texto.charAt(i) == "o") {
            textoEncriptado += encriptlist[3];
        } else if (texto.charAt(i) == "u") {
            textoEncriptado += encriptlist[4];
        } else {
            textoEncriptado += texto.charAt(i);
        }

        console.log(texto.charAt(i));

    }

    console.log(texto);
    resultadoMostrar(textoEncriptado);

}

function desencriptar() {

    let texto = input.value;
    let textoDesencriptado = "";
    texto = texto.toLowerCase();

    console.log("Desencriptar " + input.value);

    // recorre todos los items de encriptlist
    // por cada caracter ingresado en input.value
    for (let i = 0; i < texto.length; i++) {
        for (let i2 = 0; i2 < encriptlist.length; i2++) {
            for (let i3 = 0; i3 < encriptlist[i2].length; i3++) {
                console.log(encriptlist[i2].charAt(i3));
                /*
                if (texto.charAt(i) == encriptlist[i2].charAt(i3)) {
                    console.log("prueba")
                    console.log(texto.charAt(i))
                    console.log(encriptlist[i2].charAt(i3))
                }
                */
            }

        }
    }

    resultadoMostrar(textoDesencriptado);

}

function copiar() {
    /*  inputResultado.select(); inputResultado.setSelectionRange(0, 99999); */

    navigator.clipboard.writeText(inputResultado.value);
    console.log(inputResultado.value);

}

function resultadoMostrar(txt) {
    inputResultado.value = txt;
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