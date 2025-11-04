// Definindo uma matriz (lista de vetores).
let timePokemon = [
  ["pikachu", "M", 17],
  ["Chamander", "F", 30],
  ["Aurorus", 'F', 15]
]

console.log(" O pokemon " + timePokemon[2][0] + " é do sexo " +  timePokemon[2][1] + 
" e está no nível " + timePokemon[2][2]);

// Atribuindo o tamanho do vetor à variável.
let pokedex = timePokemon.length

console.log("O tamanho da sua equipe é: " + pokedex);