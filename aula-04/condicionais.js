console.log("\n=== CONDICIONAIS ===");

// Entrada
const aluno = prompt("Digite o nome do aluno:");
const nota = prompt("Digite a note (0-10):");
console.log(aluno, nota);

// Processamento
let resposta = null;

// Exemplo 1 - if

/*
if (nota >= 6) {
    resposta = "Aprovado!";
}

if (nota < 6 && nota >= 4) {
    resposta = "Recuperação!";
}

if (nota < 4) {
    resposta = "Reprovado!";
}
*/

// Exemplo 2 - if encadeado

/*
if (nota >= 6) {
    resposta = "Aprovado!";
}
else {
    if (nota >= 4) {
        resposta = "Recuperação!";
    }
    else {
        resposta = "Reprovado!";
    }
}
*/

// Exemplo 3 - else if

/*
if (nota >= 6) {
    resposta = "Aprovado!";
}
else if (nota >= 4) {
        resposta = "Recuperação!";
}
else {
    resposta = "Reprovado!";
}
*/

// Exemplo 4 - switch case

/*
switch (nota) {
    case 0:
    case 1:
    case 2:
    case 3:
        resposta = "Reprovado!";     
        break;

    default:
        resposta = "Nada consta!";
        break;
}
*/

// Saída
document.write(`
    Aluno: ${aluno}<br>
    Nota: ${nota}<br>
    Situação: ${resposta}`
);
