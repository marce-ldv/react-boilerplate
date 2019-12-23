import { combineReducers } from 'redux';
import { pokemonReducer } from './Pokemons/reducers';

export default function rootReducer() {
  return combineReducers({
    pokemon: pokemonReducer,
  });
}
