var ServerActions = require('../actions/serverActions');

module.exports = {
  fetchAllPokemons: function(){
    $.ajax({
      url: "api/pokemon",
      method: "GET",
      success: function(pokemons){
        ServerActions.receiveAllPokemons(pokemons);
      }
    });
  }
};
