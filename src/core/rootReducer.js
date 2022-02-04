import { combineReducers } from 'redux';
import { pokemonReducer } from './Pokemons/reducers';

export default combineReducers({
  pokemon: pokemonReducer,
});
