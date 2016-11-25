//DAR REFERÊNCIAS E TROCAR PARÂMETROS

//aqui declaramos um objeto
var rafaela = {
    comidafav: 'Pizza',
    esportefav: 'Futebol',
    filmefav: 'Um sonho de liberdade'
}

var nome = rafaela;

nome.comidafav = "Feijoada";
nome.esportefav = "Vôlei";

console.log(rafaela.comidafav);
console.log(rafaela.esportefav);