console.log("=== ARRAY ===");

// Array Literal

const carros = ["Gol", "Fox", "Polo"];

carros.push("Jetta");   // Add item no final do array
carros.unshift("Amarok");   // Add item no início do array
carros.splice(1, 1);    // Remove item na posição 1
carros.splice(0, 1, "Golf");    // Substitui item na posição 0
carros.splice(2, 0, "Fusca");   // Add item na posição 2
carros.pop();   // Remove item no final do array
carros.shift(); // Remove item no início do array
carros.sort();  // Ordena o array (ordem alfabética)
carros.reverse();   // Inverte a posição dos itens
console.log(carros);

/*
    forEach() - Executa uma determinada função  
    passando como parâmetro cada item no array
    junto ao seu índice.

    Exemplo:
        carros.forEach(pega_carro);
        > pega_carro(carros[0], 0);
        > pega_carro(carros[2], 1);
        > pega_carro(carros[3], 2);
*/

//  Implementação 1 - Função Nomeada
//  função pode ser reutilizada

function pega_carro(carro, indice) {
    document.write("- ", carro, " ", indice, "<br>");
}
carros.forEach(pega_carro);


//  Implementação 2 - Função Anônima
//  função de uso único

carros.forEach(function(carro, indice) {
    document.write("- ", carro, " ", indice, "<br>");
});