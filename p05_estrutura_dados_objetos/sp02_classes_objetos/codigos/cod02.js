class pokemon{
    constructor(nome, tipo, lvl, hp, attack, defense, isWild){
        this.nome = nome;
        this.tipo = tipo;
        this.lvl = lvl;
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.isWild = isWild;
    }

    atacar(ataque){
        console.log(`O ${this.nome} usou ${ataque}.`);
    }
}

// instâncias da classe
let pikachu = new pokemon("Pikachu", "elétrico", 18, 420, 122, 54, true)

console.log(pikachu)

pikachu.atacar("choque do trovão");