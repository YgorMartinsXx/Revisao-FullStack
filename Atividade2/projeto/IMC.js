function imc(){
    
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let resultado = document.getElementById("resultado");
    
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        resultado.innerText = "Por favor, insira valores válidos.";
        return;
    }

    let indice = peso/(altura*altura);
    let classificacao = "";    

    if (indice >= 40) {
        classificacao = "Obesidade grau III (obesidade mórbida)";
    } else if (indice >= 35) {
        classificacao = "Obesidade grau II";
    } else if (indice >= 30) {
        classificacao = "Obesidade grau I";
    } else if (indice >= 25) {
        classificacao = "Sobrepeso";
    } else if (indice >= 18.5) {
        classificacao = "Peso normal";
    } else if (indice >= 17) {
        classificacao = "Baixo peso";
    } else if (indice >= 16) {
        classificacao = "Baixo peso grave";
    } else {
        classificacao = "Baixo peso muito grave";
    }
        resultado.innerText = `Seu IMC é ${indice.toFixed(2)} - ${classificacao}`;
}

