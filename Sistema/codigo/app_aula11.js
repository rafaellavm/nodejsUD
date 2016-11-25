//COMPARAÇÃO DE VALORES

/* console.log(5 == '5'); //true
console.log(5 === '5'); // false, porque o segundo 5 deveria ser chamado antes pra haver comparação
    */

var Rafaela ={
    nome: function(){
        console.log('Esse é meu nome');

        //this: variável nome. 'Essa variável realmente pertence a variável Hugo?' Sim, então é true
        console.log(this == Rafaela); //true
    }
}

Rafaela.nome();