class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar(ataque){
        console.log(`O ${this.tipo} atacou usando ${ataque}.`)
    }
}

let protagonista = new heroi("Zero", 32, "guerreiro");

switch (protagonista.tipo){
    case "mago":
        protagonista.atacar("magia");
        break;
    case "guerreiro":
        protagonista.atacar("espada");
        break;
    case "monge":
        protagonista.atacar("artes marciais");
        break;
    case "ninja":
        protagonista.atacar("shuriken");
        break;
    default:
        protagonista.atacar("punhos");
        break;
}