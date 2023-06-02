let textoInput=document.querySelector(".textarea-input");
let textoOutput=document.querySelector(".textarea-output");

let textoMensaje=document.querySelector(".seccion-output__mensaje");
let btnCopiar=document.querySelector(".btn-copiar");


/* 
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

function validarTexto(){
    let textoEscrito = textoInput.value;
    let validador = textoEscrito.match(/^[a-z\s.,;!¡]*$/);
    if(!validador || validador === 0) {
        mensajeValidador('Solo son permitidas letras minúsculas y sin acentos');
        return true;
    }
    if(textoEscrito==""){
        mensajeValidador('¡Ingresa algun texto!');
        return true;
    }
}

function btnEncriptar(){
    if(!validarTexto()){
        const textoEncriptado=encriptar(textoInput.value);
        textoOutput.value = textoEncriptado;
        textoInput.value="";
        textoOutput.style.backgroundImage = "none";
        textoMensaje.style.display="none";
        btnCopiar.style.display="block";
    }
}

function btnDesencriptar(){
    if(!validarTexto()){
        //declaramos la variable que almacene el valor generado por la funcion descencriptar
        const textoDesencriptado=desencriptar(textoInput.value);
        //luego le asignamos el valor de la variable al valor del textarea con clase textOutput
        textoOutput.value=textoDesencriptado;
        //limpiamos el valor del texto input
        textoInput.value="";
        //borramos la imagen del text area output
        textoOutput.style.backgroundImage="none";

        textoMensaje.style.display="none";
        btnCopiar.style.display="block";
    }
}

function encriptar(stringEncriptar){
    let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptar=stringEncriptar.toLowerCase();

    for(let i=0;i<matrizCodigo.length;i++){
        if(stringEncriptar.includes(matrizCodigo[i][0])){
            stringEncriptar=stringEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return stringEncriptar;
}

function desencriptar(stringDesencriptado){
    let matrizcodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i=0; i<matrizcodigo.length;i++){
        if(stringDesencriptado.includes(matrizcodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizcodigo[i][1],matrizcodigo[i][0]);
        }
    }

    return stringDesencriptado;
}

function botonCopiar(){
    const textoCopiado=navigator.clipboard.writeText(textoOutput.value);
    confirmaCopiado();
}

function mayus(e){
    e.value=e.value.toLowerCase();
}