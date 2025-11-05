let userName = getFirstName("Carlos-Almeida-Juanito-Gargalo", "-")
console.log(`Seja bem-vindo(a), ${userName}.`)

userName = getFirstName("Felipe Silva Han Solo")
console.log(`Seja bem-vindo(a), ${userName}.`)

function getFirstName(name, splitChar = " "){
    let firstName = name.split(splitChar)[0]
    return firstName;
}