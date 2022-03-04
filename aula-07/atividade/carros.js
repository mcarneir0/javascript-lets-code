/*  regras
    1 - Armazenar dados em objetos
    2 - Criar um array com os dados
    3 - Exibir tudo o que for cadastrado dentro do console.table
*/

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
