let resultado;

let nomeLimpo = true;
let dinheiroAVista = 10000;
resultado = (nomeLimpo === true) || (dinheiroAVista >= 11000);

console.log("Vou conseguir comprar o produto?: " + resultado);

nomeLimpo = false;
dinheiroAVista = 12000;
resultado = (nomeLimpo === true) || (dinheiroAVista >= 11000);

console.log("Vou conseguir comprar o produto agora?: " + resultado);

nomeLimpo = false;
dinheiroAVista = 800;
resultado = (nomeLimpo === true) || (dinheiroAVista >= 11000);

console.log("Conseguirei comprar o produto agora?: " + resultado);