console.log("=== REDUCE ===");

const numeros = [2, 3, 4, 32, 21, 25, 17, 1];

//  Reduce
console.log(numeros);

// numeros.reduce(callback, valorInicial)
console.log( numeros.reduce(
    function(previous, current, index, array) {
        console.log("previous:", previous, "current:", current);
        return previous + current;
    })
);
