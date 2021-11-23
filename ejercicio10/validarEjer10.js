/**
    validarEjer10.js
    @author angel correo
    @license GPL v3 2021
**/

'use strict'
window.onload = iniciar

function iniciar(){
    document.getElementById('numero').onblur = comprobar
}

function comprobar(){
    console.log("Comprobar...")
    let exp1 = new RegExp(/^\d+$/)
    if(document.getElementById('numero').value.match(exp1)){
        
    }else{
        alert('numero incorrecto')
    }
}