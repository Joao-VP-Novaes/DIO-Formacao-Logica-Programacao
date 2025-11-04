let resultado

let celularMae = "Apple"
let meuCelular = "Nokia"
resultado = meuCelular == celularMae

console.log("Meu celular é da mesma marca do da minha mãe?: " + resultado);

let numero = 5
let string = "5"

console.log(numero == string) // true
console.log(numero === string) //false

let convidado1 = "222.222.222-22"
let premium = "222.222.222-22"
let convidado2 = "333.222.222-23"
let banido = "333.222.222-23"

console.log("O convidado 1 é um premium?: " + (convidado1 === premium));
console.log("O convidado 2 pode entrar?: " + (banido != convidado2));