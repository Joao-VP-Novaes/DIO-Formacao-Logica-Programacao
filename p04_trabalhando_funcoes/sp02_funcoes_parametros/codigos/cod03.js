// torrar(sobrescreve o valor padrão, faz com que o valor padrão seja usado, define o valor);
torrar("pão na chapa", undefined, "felipe");

/* uma boa prática que não está sendo usada aqui é deixar parâmetros com 
   valores pré-definidos por último na declaração da função. */
function torrar(pao = "pão com ovo", valor = 99.90, nome){
    console.log("O prato do dia é " + pao);
    console.log("O valor total é " + valor);
    console.log("O cliente se chama " + nome);
}