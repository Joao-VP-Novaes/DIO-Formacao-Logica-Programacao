let idadeMinima = 18
let idadeUsuario1 = 17
let idadeUsuario2 = 47

console.log("O usuádio 1 pode acessar o site de venda de cervejas?: " + (idadeUsuario1 >= idadeMinima));
console.log("O usuádio 2 pode acessar o site de venda de cervejas?: " + (idadeUsuario2 >= idadeMinima));

let aposentadoria = 60
idadeUsuario1 = 80
idadeUsuario2 = 60

console.log("O usuário 1 pode se aposentar?: " + (aposentadoria < idadeUsuario1));
console.log("O usuário 2 pode se aposentar?: " + (aposentadoria < idadeUsuario2));