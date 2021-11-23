/**
    validarEjer5.js
    @author angel correo
    @license GPL v3 2021
**/

'use strict'
window.onload = iniciar

function iniciar(){
    document.getElementById('cp').onblur = comprobar
}

function comprobar(){
    console.log("Comprobar...")
    let exp1 = new RegExp(^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$)
    if(document.getElementById('cp').value.match(exp1)){
        
    }else{
        alert('cp incorrecto')
    }
}