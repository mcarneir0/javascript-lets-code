/*  Solicite ao usuário um número
    E imprima a quantidade de asteriscos na tela
    Referente ao número informado de forma progressiva
*/

const num = prompt("Digite um número:");

for (let i = 0; i < num; i++) {
    for (let j = -1; j < i; j++) {
        document.write("* ");
    }
    document.write("<br>");
}
