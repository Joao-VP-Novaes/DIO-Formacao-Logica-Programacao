conectarBD("Jacob", "12Abc>", "MySQL");

function conectarBD(nomeUser, senha, nomeBD){
    // interpolação de strings
    console.log(`${nomeUser} está se conectando no ${nomeBD} com a senha ${senha}.`);
}