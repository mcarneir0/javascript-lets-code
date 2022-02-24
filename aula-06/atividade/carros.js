/*  regras
    1 - ao cadastrar um carro, incrementar a quantidade
    2 - limpar o campo para o próximo cadastro
    3 - ao alcançar 10 carros, exibi-los na tela
    4 - utilize array
*/

const carros = [];

function adicionar() {
    const nome_do_carro = document.getElementById("nome_do_carro").value;
    carros.push(nome_do_carro);
    atualiza_pagina();
    if (carros.length >= 10) { listar_carros()}
}

function atualiza_pagina() {
    document.getElementById("nome_do_carro").value = "";
    document.getElementById("nome_do_carro").focus();
    document.getElementById("qtde_de_carros").textContent = carros.length;
}

function listar_carros() {
    const lista = document.getElementById("lista");
    
    //  Limpa a lista antes de exibí-la
    lista.textContent = null;

    //  Preenche a lista com os carros
    carros.forEach(function(nome) {
        let li = document.createElement("li");
        lista.appendChild(li);
        li.innerHTML += nome;
    });
}
