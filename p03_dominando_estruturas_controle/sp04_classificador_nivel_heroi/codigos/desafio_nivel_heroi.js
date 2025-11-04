let nomeHeroi = "Marquinhos"
let exp = 767

let rank;

if (exp < 1000){
    rank = "Ferro"
} else if ((1000 <= exp) && (exp < 2000)){
    rank = "Bronze"
} else if ((2000 <= exp) && (exp < 5000)){
    rank = "Prata"
} else if ((5000 <= exp) && (exp < 6000)){
    rank = "Ouro"
} else if ((6000 <= exp) && (exp < 7000)){
    rank = "Platina"
} else if ((7000 <= exp) && (exp < 8000)){
    rank = "Ascendente"
} else if ((8000 <= exp) && (exp < 9000)){
    rank = "Imortal"
} else{
    rank = "Radiante"
}

console.log("O herói de nome " + nomeHeroi + " está no nível de " + rank);