function analisar() {
    idade = parseInt(document.getElementById("idade").value);
    document.getElementById("faixa").value

    if (idade <= 12) {
        document.getElementById("faixa").value = "Você é Criança";
    }
    else if (idade <= 17) {
        document.getElementById("faixa").value = "Você é Adolescente";
    }
    else if (idade <= 64) {
        document.getElementById("faixa").value = "Você é Adulto";
    }
    else {
        document.getElementById("faixa").value = "Você é Idoso";
    }
}