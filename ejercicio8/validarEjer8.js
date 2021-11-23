/**
    validarEjer8.js
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
    let exp1 = new RegExp((\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8})
    if(document.getElementById('numero').value.match(exp1)){
        
    }else{
        alert('numero incorrecto')
    }
}