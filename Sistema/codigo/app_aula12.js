//COMPARAÇÃO DE VALORES

function semValor(){

    console.log("Não tem valor");

    // como se perguntasse: 'essa (this) função é do tipo global?'
    // true: pois é uma função pública
    // === verifica função, se ela está sendo chamada, se está sendo executada, se ela existe...
    console.log(this === global);
}

semValor();
