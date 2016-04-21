var Store = require ('flux/utils').Store,
    AppDispatcher = require ('../dispatcher/dispatcher.js'),
    PokemonStore = new Store(AppDispatcher),
    PokemonConstants = require('../constants/pokemonConstants.js');

var _pokemons = {};

var resetPokemons = function(pokemons){
  _pokemons = {};

  pokemons.forEach(function(pokemon){
    _pokemons[pokemon.id] = pokemon;
  });

  PokemonStore.__emitChange();
};

PokemonStore.all = function(){
  var pokemons = [];
  var ids = Object.keys(_pokemons);

  for (var i = 0; i < ids.length; i++) {
    pokemons.push(_pokemons[i]);
  }

  return pokemons;
};

PokemonStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case PokemonConstants.POKEMONS_RECEIVED:
      resetPokemons(payload.pokemons);
      break;
    default:

  }
};

module.exports = PokemonStore;
