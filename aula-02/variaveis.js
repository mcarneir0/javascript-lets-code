console.log("=== VARIAVEIS ===");

// Especificação do JavaScript -> EcmaScript
// Jun/2015 - ES5 -> var
// Jul/2015 - ES6 -> let / const


// Tipos de Dados / Tipos de Variáveis
// JavaScript -> Tipagem Dinâmica
// Tipos Primitivos -> string, number, boolean, null, undefined

var nome = "Matheus"; // string
console.log("Nome:", nome, " Tipo:", typeof nome);

let idade = 23; // number
console.log("Idade:", idade, " Tipo:", typeof idade);

let altura = 1.73; // 
console.log("Altura:", altura, " Tipo:", typeof altura);

const magro = true; // boolean
console.log("Magro?", magro, " Tipo:", typeof magro);

var nula = null; // nulo
console.log("Nulo:", nula, " Tipo:", typeof nula);

var indefinida; // undefined
console.log("Indefinido:", indefinida, " Tipo:", typeof indefinida);



// Diferenças entre var, let e const
console.log("=== Diferenças entre var, let e const ===");

console.log("=== VAR ===")
// var -> redeclaração da variável (permite)
var nome = 1;
console.log("Nome:", nome, " Tipo:", typeof nome);

// var -> reatribuição de valor (permite)
nome = false;
console.log("Nome:", nome, " Tipo:", typeof nome);

console.log("=== LET ===");
// let -> redeclaração da variável (não permite)
// let idade = 25; // SyntaxError

// let -> reatribuição de de valor (permite)
idade = 25;
console.log("Idade:", idade, " Tipo:", typeof idade);

console.log("=== CONST ===");
// const -> redeclaração da variável (não permite)
// const magro = true; // SyntaxError

// const -> reatribuição de de valor (não permite)
// magro = false; // TypeError