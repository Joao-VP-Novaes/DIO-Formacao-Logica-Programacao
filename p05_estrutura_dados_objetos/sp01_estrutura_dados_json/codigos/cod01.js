// JSON -JavaScript Object Notation
// chave e valor com o objetivo de transferir dados

let name = "Felipe"
let age = 32
let products = ["mouse 2kx0", "teclado mecânico", "luminária pokebola", "monitor"]
let productsValues = [45.99, 127.50, 220.00, 566.99]

generateInvoice(clientName, products, productsValues, age)

function generateInvoice(clientName, products, productsValues, age){
    console.log("O comprador é", name);
    console.log("Sua idade é " + age);
    console.log("-----------");
    console.log(`O produto é ${products[0]}`);
    console.log(`O valor do produto é ${productsValues[0]}`);
}
