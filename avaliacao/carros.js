const carros = [];
const tabela = document.getElementById("tabela");

function adicionar() {
    const carro = {
        modelo: document.getElementById("modelo").value,
        ano: document.getElementById("ano").value,
        cor: document.getElementById("cor").value,
        situacao: document.getElementById("situacao").value,
    }
    carros.push(carro);
    mostra_tabela();
    atualiza_pagina();
}

function mostra_tabela() {
    tabela.innerHTML = carros.map(
        function(carro) {
            dados =
                `<tbody align="center">
                    <td>${carro.modelo}</td>
                    <td>${carro.ano}</td>
                    <td>${carro.cor}</td>
                    <td>${carro.situacao}</td>
                </tbody>`;
            return dados;
        }
    ).join("");
}

function atualiza_pagina() {
    document.getElementById("modelo").value = "";
    document.getElementById("ano").value = "";
    document.getElementById("cor").value = "#000000";
    document.getElementById("situacao").value = "novo";
    document.getElementById("modelo").focus();
}

/*  TODO Avaliação

    [X] copiar exercicio da loja de carros
    [] add uma coluna com um id (ao lado esquerdo do modelo)
    [] add no input um campo para receber o preço
    [] exibir uma coluna com o preço
    [] exibir o valor total de todos os veículos cadastrados ( usar reduce)

*/