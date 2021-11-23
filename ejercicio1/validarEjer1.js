/**
    validarEjer1.js
    @author angel correo
    @license GPL v3 2021
**/

'use strict'
window.onload = iniciar

function iniciar(){
    document.getElementById('matricula').onblur = comprobar
}

function comprobar(){
    console.log("Comprobar...")
    let exp1 = new RegExp(\d{4}[A-Z]{3})
    if(document.getElementById('matricula').value.match(exp1)){
        
    }else{
        alert('matricula incorrecta')
    }
}