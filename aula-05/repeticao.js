console.log("=== REPETIÇÃO ===");

// Números de 1 a 10

document.write("Números de 1 a 10:<br>");
let inicial = 1;
let final = 10;
while (inicial <= final) {
    document.write(inicial++, " ");
}

// Números de 50 a 1

document.write("<br><br>Números de 50 a 1:<br>")
inicial = 50;
final = 1;
while (inicial >= final) {
    document.write(inicial--, " ");
}

// Números pares de 0 a 100

document.write("<br><br>Números pares de 0 a 100:<br>");
inicial = 0;
final = 100;
while (inicial <= final) {
    document.write(inicial, " ");
    inicial += 2;
}

// Números ímpares de 99 a 1

document.write("<br><br>Números ímpares de 99 a 1:<br>")
inicial = 99;
final = 1;
while (inicial >= final) {
    if (inicial == 1) {
        document.write(inicial);
        break;
    }
    else {
        document.write(inicial, " - ");
        inicial -= 2;
    }
}

/*  Criar um programa que receba números
    Usando o prompt()
    Rodar o programa infinitamente
    Recebendo e mostrando os números digitados na tela
    Encerrar o programa quando o número inserido
    for zero (0)
*/

document.write("<br><br>Números digitados:<br>")
let num = null;
while (num != 0) {
    num = prompt("Digite um número:");
    document.write(num, " ");
}
document.write("<br>Você digitou zero");