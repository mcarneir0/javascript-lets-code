/*  Solicite ao usuário um número
    E imprima a quantidade de asteriscos na tela
    Referente ao número informado
*/

const num = prompt("Digite a quantidade de asteriscos desejada:");
document.write(num, " asteriscos:<br>");
for (let i = 0; i < num; i++) {
    document.write("* ");
}

// Imprima 5 linhas com 10 asteriscos cada
document.write("<hr>5 linhas com 10 asteriscos cada:<br>");
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 10; j++) {
        document.write("* ");
    }
    document.write("<br>");
}