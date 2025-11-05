function calculaRank(numWin, numLose){
    let ratio = numWin - numLose;
    return ratio;
}

let saldoVitorias = calculaRank(109, 22)
let rankPlayer

if (saldoVitorias < 10){
    rankPlayer = "Ferro"
} else if ((saldoVitorias >= 10) && (20 > saldoVitorias)){
    rankPlayer = "Bronze"
} else if ((saldoVitorias >= 20) && (50 > saldoVitorias)){
    rankPlayer = "Prata"
} else if ((saldoVitorias >= 50) && (80 > saldoVitorias)){
    rankPlayer = "Ouro"
} else if ((saldoVitorias >= 80) && (90 > saldoVitorias)){
    rankPlayer = "Diamante"
} else if ((saldoVitorias >= 90) && (100 > saldoVitorias)){
    rankPlayer = "Lendário"
} else{
    rankPlayer = "Imortal"
}

console.log(`O herói tem de saldo ${saldoVitorias} e portanto está no rank ${rankPlayer}.`)