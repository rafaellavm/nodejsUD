/*function fifa(){

   console.log("Este é o jogo FIFA");
}

function callofduty(){

     console.log("Este é o jogo COD");
}

//isso dá permissão pra função ser acessada de forma externa
//modulojogo: nome do módulo
module.exports.modulojogo = fifa;
*/

/* --- aula 17 ---- */

/* outra forma de chamar a função: */

module.exports = {

   fifa: function(){
      console.log("Este é o jogo FIFA");
   },

   cod: function(){
       console.log("Este é o jogo COD");
   },
   jogoFavorito: "Corrida"
}
