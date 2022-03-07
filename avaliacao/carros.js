const carros = [];
const tabela = document.getElementById("tabela");
let id = 1;

function adicionar() {

    const modelo = document.getElementById("modelo").value;
    const ano = document.getElementById("ano").value;
    const cor = document.getElementById("cor").value;
    const situacao = document.getElementById("situacao").value;

    const carro = {
        id: id++,
        modelo: modelo,
        ano: ano,
        cor: cor,
        situacao: situacao
    };
    if (document.getElementById("preco").value == 0) { carro.preco = "R$ 0"}
    else {carro.preco = "R$ " + document.getElementById("preco").value};
    
    carros.push(carro);
    mostra_tabela();
    atualiza_pagina();
}

function mostra_tabela() {
    tabela.innerHTML = carros.map(
        function(carro) {
            dados =
                `<tbody align="center">
                    <td>${carro.id}</td>
                    <td>${carro.modelo}</td>
                    <td>${carro.ano}</td>
                    <td>${carro.cor}</td>
                    <td>${carro.situacao}</td>
                    <td>${carro.preco}</td>
                </tbody>`;
            return dados;
        }
    ).join("");
}

function atualiza_pagina() {
    document.getElementById("modelo").value = "";
    document.getElementById("ano").value = "";
    document.getElementById("preco").value = "";
    document.getElementById("cor").value = "#000000";
    document.getElementById("situacao").value = "novo";
    document.getElementById("modelo").focus();
}

//  Adiciona pontuação no campo preço. ex: 123,456.78
document.getElementById("preco").onblur = function () {    
    this.value = parseFloat(this.value.replace(/,/g, "."))
                    .toFixed(2)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById("preco").value = this.value;
}

/*  TODO Avaliação

    [X] copiar exercicio da loja de carros
    [X] add uma coluna com um id (ao lado esquerdo do modelo)
    [X] add no input um campo para receber o preço
    [X] exibir uma coluna com o preço
    [] exibir o valor total de todos os veículos cadastrados ( usar reduce)

*/