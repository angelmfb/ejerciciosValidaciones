/**
    validarEjer6.js
    @author angel correo
    @license GPL v3 2021
**/

'use strict'
window.onload = iniciar

function iniciar(){
    document.getElementById('correo').onblur = comprobar
}

function comprobar(){
    console.log("Comprobar...")
    let exp1 = new RegExp(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/)
    if(document.getElementById('correo').value.match(exp1)){
        
    }else{
        alert('correo incorrecto')
    }
}