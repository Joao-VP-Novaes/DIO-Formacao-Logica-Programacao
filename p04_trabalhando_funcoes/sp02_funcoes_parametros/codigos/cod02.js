torrar();
torrar("pão francês", "Matilda")

// definindo valor padrão que será usado quando o parâmetro não for passado na chamada.
function torrar(pao = "pão bolachão", nome){
    console.log(nome + " fez uma torrada usando " + pao);
}
