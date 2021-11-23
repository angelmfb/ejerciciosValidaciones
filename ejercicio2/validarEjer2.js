/**
    validarEjer2.js
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
    let exp1 = new RegExp([A-Z]{2}\d{4}[A-Z]{1,2})|([A-Z]{1}\d{5})
    if(document.getElementById('matricula').value.match(exp1)){
        
    }else{
        alert('matricula incorrecta')
    }
}