/*  regras
    1 - Armazenar dados em objetos
    2 - Criar um array com os dados
    3 - Exibir tudo o que for cadastrado dentro do console.table
*/

const carros = [];

function adicionar() {
    const carro = {
        modelo: document.getElementById("modelo").value,
        ano: document.getElementById("ano").value,
        cor: document.getElementById("cor").value,
        situacao: document.getElementById("situacao").value,
    }
    carros.push(carro);
    console.log("=== CARROS ===");
    console.table(carros);
    atualiza_pagina();
}

function atualiza_pagina() {
    document.getElementById("modelo").value = "";
    document.getElementById("ano").value = "";
    document.getElementById("cor").value = "#000000";
    document.getElementById("situacao").value = "novo";
    document.getElementById("modelo").focus();
}

// function listar_carros() {
//     const lista = document.getElementById("lista");
    
//     //  Limpa a lista antes de exibí-la
//     lista.textContent = null;

//     //  Preenche a lista com os carros
//     carros.forEach(function(nome) {
//         let li = document.createElement("li");
//         lista.appendChild(li);
//         li.innerHTML += nome;
//     });
// }
