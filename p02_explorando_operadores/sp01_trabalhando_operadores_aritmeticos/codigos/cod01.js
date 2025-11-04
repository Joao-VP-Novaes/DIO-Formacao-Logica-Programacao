// sinal de + usado para concatenar string
let nome = "Maria"
let idade = 45

console.log(nome + " tem " + idade + " anos.");

// '+' realizando somas
let anos = 24

console.log("Gilberto tem " + anos + " anos. O aniversário dele é amanhã, então ele vai completar " + (anos + 1) 
+ " anos.");

// '-' realizando subtrações
let pokemon= ["chikorita", "vulpix", "snivy"]

console.log("O treinador tem 6 pokémon. 3 estão fora de combate, portanto agora ele tem " +
    (6 - pokemon.length) + " pokémon" );

// '*' realizando multiplicações
let kids = 4
let doces = 20
let total = kids * doces

console.log("Eu comprei " + doces + " para cada uma das " + kids + " crianças. No total, comprei " + 
    total + " doces.");

// '/' realizando divisões
let trabalhadores = 12
let coffee = 48
let resultado = coffee / trabalhadores

console.log("Ontem foram tomadas " + coffee + " xícaras de café. Como temos " + trabalhadores +
    " trabalhadores, em média, cada um tomou " + resultado + " xícaras de café.");

// '%' pegando o resto de uma divisão
let dogs = 5
let kilos = 27
let resto = kilos % dogs

console.log("Cada cachorro come em média 5 quilos por semana. Mas o vendedor se confundiu e mandou " +
resto + " quilos a mais.");
