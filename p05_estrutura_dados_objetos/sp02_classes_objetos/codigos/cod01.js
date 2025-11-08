class formaDeBolo{
    constructor(saborDaMassa, saborDoRecheio){
        this.saborDaMassa = saborDaMassa;
        this.saborDoRecheio = saborDoRecheio;
    }

    escrever(){
        console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborDoRecheio}.`)
    }
}

// instâncias da classe
let boloFesta = new formaDeBolo("chocolate", "nutella");
let boloPremium = new formaDeBolo("baunilha", "morango");

console.log(boloFesta);

boloFesta.escrever();

console.log(boloPremium.escrever());