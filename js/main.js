function start(){
var inputWeight = document.querySelector('#input-weight');
var inputHeight = document.querySelector('#input-height');
inputHeight.addEventListener('input', geralActive);
inputWeight.addEventListener('input', geralActive);
var classifictaionIMC = document.querySelector('#imc-type');
classifictaionIMC.addEventListener('text', typeImc);
typeImc();
geralActive();
}

function calculateImc(weight, height){
return weight / (height * height);
}

function typeImc(total){
    var classifictaionIMC = document.querySelector('#imc-type');
    var type = "";
    if(total > 40.00){
        type = "Obesidade Grave!";
    } else if(total >= 30.00 && total < 40.00){
        type = "Obesidade!";
    } else if(total >= 25.00 && total < 30.00){
        type = "Sobrepeso!";
    } else if(total > 18.50 && total < 25.00){
        type = "Normal!";
    } else if(total < 18.50) {
        type = "Magreza!";
    } else {
        type = "error";
    }
    return classifictaionIMC.textContent = type;
}

function geralActive() {
var inputWeight = document.querySelector('#input-weight');
var inputHeight = document.querySelector('#input-height');
var imcResult = document.querySelector('#imc-result');
var weight = Number(inputWeight.value);
var height = Number(inputHeight.value);
var imc = calculateImc(weight,height);
var formattedImc = imc.toFixed(2);
typeImc(formattedImc);
return imcResult.textContent = formattedImc;
}

start();