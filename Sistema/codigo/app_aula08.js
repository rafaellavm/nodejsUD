/**
 * Created by smm on 23/11/2016.
 */

// criação de uma função do tipo callback, executei-a dentro de uma outra função (organizar)
// o meu callback que é a entrega, seria a rotina na qual ele executa a função organizar
function organizar(numero){

    console.log('Ordem do cliente:', numero);

    entrega(function(){
        console.log("Ordem de entrega: ", numero);
    });
}

//dentro do método organizar, depois de 5 segundos ele chama essa função:
function entrega(callback){
    setTimeout(callback,5000);
}

//passando os parâmetros pro método organizar:

organizar(1);
organizar(2);
organizar(3);
organizar(4);
organizar(5);