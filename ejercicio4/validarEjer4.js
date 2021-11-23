/**
    validarEjer4.js
    @author angel correo
    @license GPL v3 2021
**/

'use strict'
window.onload = iniciar

function iniciar(){
    document.getElementById('fecha').onblur = comprobar
}

function comprobar(){
    console.log("Comprobar...")
    let exp1 = new RegExp(^(0?[1-9]|[12][0-9]|3[01])[/](0?[1-9]|1[012])[/\/](19|20)\d{2}$)
    if(document.getElementById('fecha').value.match(exp1)){
        
    }else{
        alert('fecha incorrecta')
    }
}