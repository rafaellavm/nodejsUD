//INCREMENTO DE VALORES

function usuario(){

    this.nome = '';
    this.vida = 100;
    this.darVida = function darVida(jogadores){

        jogadores.vida +=  1;
    }
}

var Rafaela = new usuario();
var Ricardo = new usuario();

Rafaela.nome = "Rafaela";
Ricardo.nome = "Ricardo";

Rafaela.darVida(Ricardo);

console.log("Rafaela " + Rafaela.vida);
console.log("Ricardo " + Ricardo.vida);
