let btnEncriptar = document.getElementById("encriptar");
let btnDesencriptar = document.getElementById("desencriptar");
let btnCopiar = document.getElementById("copiar");
let input = document.getElementById("ingresar");
let inputResultado = document.getElementById("resultado");
let letrasBase = ["a", "e", "i", "o", "u"];
let encriptlist = ["ai", "enter", "imes", "ober", "ufat"];

function encriptar() {

    let textoEncriptado = "";
    let texto = input.value;
    texto = texto.toLowerCase();
    //  console.log(texto); console.log(texto.length);

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
        //  console.log(texto.charAt(i));
    }

    //  console.log(texto);
    resultadoMostrar(textoEncriptado);
    limpiarInput();
}

function desencriptar() {

    let texto = input.value;
    let textoDesencriptado = "";
    texto = texto.toLowerCase();

    /*
    console.log("Desencriptar " + input.value);
    console.log("-------------------------------")
    let letrasBase = ["a","e","i","o","u"]
    let encriptlist = ["ai", "enter", "imes", "ober", "ufat"]; 
    hola -> hoberlai
    recorrer hoberlai
    
    i = indice letra del texto a desencriptar
    ie = indice de letra de encriptlist
    Cada carecter de encriptlist encriptlist[ie].charAt(i3)
    longitud encriptlist[ie].length
    */

    for (let i = 0; i < texto.length; i++) {
        // console.log(texto[i]);
        let verif = false;
        for (let ie = 0; ie < encriptlist.length; ie++) {
            let contador = 0;
            // console.log(encriptlist[i2].charAt(0))
            if (encriptlist[ie].charAt(0) == texto[i]) {
                // console.log(encriptlist[ie].length)
                for (let i3 = 0; i3 < encriptlist[ie].length; i3++) {
                    // console.log(encriptlist[ie].charAt(i3))
                    if (encriptlist[ie].charAt(i3) == texto[i + i3]) {
                        contador++
                    }
                    if (contador == encriptlist[ie].length) {
                        textoDesencriptado += letrasBase[ie]
                        i = i + encriptlist[ie].length - 1
                        verif = true;
                    }
                }
            }
        }
        if (verif == false) {
            textoDesencriptado += texto[i]
        }
    }

    resultadoMostrar(textoDesencriptado);
    limpiarInput();

}

function copiar() {
    // inputResultado.select(); inputResultado.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(inputResultado.value);
    // console.log(inputResultado.value);
}

function resultadoMostrar(txt) {
    inputResultado.value = txt;
}

function limpiarInput() {
    input.value = "";
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
