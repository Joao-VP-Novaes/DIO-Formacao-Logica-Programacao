// estrutura de decisão
// switch / case / break / default

let fruta = "morango"

switch (fruta){
    case "pera":
    case "kiwi":
    case "melão":
        console.log("Salada de frutas.");
        break;

    case "maçã":
        console.log("Torta de maçã.");
        break;

    case "morango":
        console.log("Bolo de morango.");
        console.log("Uma delícia.");
        break;

    case "laranja":
        console.log("Suco de laranja");
        break;

    default:
        console.log("Nada de novo.");
}