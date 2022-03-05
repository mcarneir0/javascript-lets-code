console.log("=== FUNÇÕES ===");

// Declaração de Função Nomeada

function soma(num1=0, num2=0) { // =0 -> default parameter
    return num1 + num2;
}

console.log(soma); // Referência à função
console.log(soma()); // 0
console.log(soma(5)); // 5
console.log(soma(5, 10)); // 15


// Declaração de Função Não Nomeada (Anônima)
const sum = function (a=0, b=0) { // =0 -> default parameter
    return a + b;
}

console.log(sum); // Referência à função
console.log(sum()); // 0
console.log(sum(5)); // 5
console.log(sum(5, 10)); // 15


// Arrow Function
console.log("=== ARROW FUNCTION ===");

let numbers = [1, 2, 3];

// DE: function(valor1) { return valor2 }
// PARA: (valor1) => { return valor2 }

// numbers.filter(function(valor) {
numbers = numbers.filter( (valor) => {
    return valor < 3;
});

// DE: function(valor1) { return valor2 }
// PARA: valor1 => valor2;
numbers = numbers.filter(valor => valor < 3);

console.log(numbers);