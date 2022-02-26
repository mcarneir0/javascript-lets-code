console.log("=== FILTER & MAP ===");

const numeros = [2, 3, 4, 32, 21, 25, 17, 1];


//  Filter percorre todo o array
//  E retorna um novo array
//  De acordo com uma expressão lógica
//  Sem alterar o array original
console.log( numeros.filter( function(numero) {
    document.write(numero, "<br>");
    return numero < 25;
}));


//  Map percorre todo o array
//  E retorna um novo array
//  E realiza uma transformação em cada item do array
//  Sem alterar o array original
console.log( numeros.map( function(numero) {
    document.write(numero, "<br>");
    return numero * 5;
}));