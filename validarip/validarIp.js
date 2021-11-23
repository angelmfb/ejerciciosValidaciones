/**
    validarIp.js
    @author angel correo
    @license GPL v3 2021
**/

'use strict'
window.onload = iniciar

function iniciar(){
    document.getElementById('IP').onblur = comprobar
}

function comprobar(){
    console.log("Comprobar...")
    let exp1 = new RegExp(/^(\d{1,3}\.){3}\d{1,3}/)
    if(document.getElementById('IP').value.match(exp1)){
        
    }else{
        alert('ip incorrecta')
    }
}