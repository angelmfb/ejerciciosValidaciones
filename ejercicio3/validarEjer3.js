/**
    validarEjer3.js
    @author angel correo
    @license GPL v3 2021
**/

'use strict'
window.onload = iniciar

function iniciar(){
    document.getElementById('dni').onblur = comprobar
}

function comprobar(){
    console.log("Comprobar...")
    let exp1 = new RegExp(/^\d{8}[A-Z]{1}$/)
    const letras="TRWAGMYFPDXBNJZSQVHLCKE"
    let dni=document.getElementById('dni').value.substr(0,8)
    let letra = letras.charAt(calcular(dni))
    if(document.getElementById('dni').value.match(exp1)){
        console.log("dni incorrecto")
    }else{
        if(document.getElementById('dni'.value.charAt(8)!=letra)){
            console.log("su letra esta mal")
        }
    }
}

function calcular(dni) {
    let numero=Math.trunc(dni%23)
    console.log(numero)
    return numero;
}