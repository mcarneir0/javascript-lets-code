console.log("=== OBJETOS ===");

// const carro1 = ["Gol", 2010, "vermelho", "usado"];
// const carro2 = ["Fox", 2015, "preto", "novo"];
// const carro3 = ["Uno", 2000, "verde", "usado"];

//  Objeto Literal
const carro1 = {
    modelo: "Gol",
    ano: 2015,
    cor: "vermelho",
    situacao: "usado"
};

const carro2 = {
    modelo: "Fox",
    ano: 2010,
    cor: "preto",
    situacao: "novo"
};

const carro3 = {
    modelo: "Uno",
    ano: 2000,
    cor: "verde",
    situacao: "usado"
};


//  Propriedade de um objeto
console.log(carro1);
console.log(carro1.modelo);
console.log(carro1.ano);


const carros = [carro1, carro2, carro3];
carros.forEach(function(carro) {
    console.log(carro)
});

console.log("=== Carros Usados ===");
console.table(
    carros.filter( function(carro) {
        return carro.situacao == "usado";
}));