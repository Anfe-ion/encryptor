var buttonForEncrypt = document.querySelector(".encryptButton");
var buttonForDecrypt = document.querySelector(".decryptButton");
var buttonForCopy = document.querySelector(".buttonCopy");
var dogeJS = document.querySelector(".doge");
var noMenssagesJS = document.querySelector(".noMenssages");
var enterTheTextJS = document.querySelector(".enterTheText");
var resultTextJS = document.querySelector(".resultText");

buttonForEncrypt.onclick = encryptText;
buttonForDecrypt.onclick = decryptText;
buttonForCopy.onclick = copyText;

function decryptText(){
    ghost();
    resultTextJS.textContent = decryptSecret(takeText());
}

function encryptText(){
    ghost();
    resultTextJS.textContent = encryptSecret(takeText());
}
/*Recupera el texto del area*/
function takeText(){
    var area = document.querySelector(".leftArea")
    return area.value;
}
/*Oculta el perrito y el texto*/
function ghost(){
    dogeJS.classList.add("deleteImage");
    noMenssagesJS.classList.add("deleteImage");
    enterTheTextJS.classList.add("deleteImage");
}
/*Función para encriptar*/
function encryptSecret(menssage){
    menssage = menssage.toLowerCase();
    var text = menssage;
    var finalText = "";

    for(i= 0; i < text.length; i++){
        if(text[i] == "a"){
            finalText = finalText + "ai"
        }
        else if(text[i] == "e"){
            finalText = finalText + "enter"
        }
        else if(text[i] == "i"){
            finalText = finalText + "imes"
        }
        else if(text[i] == "o"){
            finalText = finalText + "ober"
        }
        else if(text[i] == "u"){
            finalText = finalText + "ufat"
        }
        else{
            finalText = finalText + text[i];
        }
    }
    return finalText;
}
/*Función para desencriptar*/
function decryptSecret(menssage){
    menssage = menssage.toLowerCase();
    var text = menssage;
    var finalText = "";

    for(i= 0; i < text.length; i++){
        if(text[i] == "a"){
            finalText = finalText + "a"
            i = i+1;
        }
        else if(text[i] == "e"){
            finalText = finalText + "e"
            i = i+4;
        }
        else if(text[i] == "i"){
            finalText = finalText + "i"
            i = i+3;
        }
        else if(text[i] == "o"){
            finalText = finalText + "o"
            i = i+3;
        }
        else if(text[i] == "u"){
            finalText = finalText + "u"
            i = i+3;
        }
        else{
            finalText = finalText + text[i];
        }
    }
    return finalText;
}
/*Función copiar*/
function copyText(){
    let copied = document.getElementById('resultTextJS');
    copied.select();
    copied.setSelectionRange(0, 99999);
    document.execCommand('copy')
    alert("Copy");
}
