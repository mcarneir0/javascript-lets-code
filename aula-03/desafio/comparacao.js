function comparar() {
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);

    switch (document.getElementById("comparacao").value) {
        case ">":
            return mostrar_na_tela(num1 > num2); 
            break;

        case "<":
            return mostrar_na_tela(num1 < num2); 
            break;

        case ">=":
            return mostrar_na_tela(num1 >= num2); 
            break;

        case "<=":
            return mostrar_na_tela(num1 <= num2); 
            break;

        case "==":
            return mostrar_na_tela(num1 == num2); 
            break;

        case "!=":
            return mostrar_na_tela(num1 != num2); 
            break;

        default:
            break;
    }
}

function mostrar_na_tela(resultado) {
    input = document.getElementById("resultado");
    input.style.color = "#FFFFFF";
    
    if (resultado) {
        input.value = true;
        input.style.backgroundColor = "#1C7009";
    }
    else {
        input.value = false;
        input.style.backgroundColor = "#BD0D00";
    }
}