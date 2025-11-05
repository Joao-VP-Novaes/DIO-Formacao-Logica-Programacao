torrar("pão doce", "Natália");

// variável de escopo global.
var nome = "Felipe"

torrar("pão de forma", "Joana");
torrar("pão integral", "Antônio");

function torrar(pao, cliente){
    console.log("Torrada feita com " + pao);

    // Se a função for chamada antes da atribuição da variável nome, ela não reconhece o valor atribuído posteriormente.
    console.log("Pãozinho do " + nome);
    console.log(cliente +  " achou uma delícia\n");

    nome = "Marcos";
}

console.log("Que gostosa a torrada do " + nome);