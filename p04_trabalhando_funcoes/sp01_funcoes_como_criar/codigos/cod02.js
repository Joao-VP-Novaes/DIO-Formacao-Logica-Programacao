// função que chama todas as outras.
main();

function main(){
    getData();
    checkData();
    saveData(); 
}

function getData(){
    console.log("Coletando dados.");
}

function checkData(){
    if (1 < 3){
        console.log("Verificando os dados.");
    }
}

function saveData(){
    console.log("Dados salvos.");
}