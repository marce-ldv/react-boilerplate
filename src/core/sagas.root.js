import { all, takeEvery } from 'redux-saga/effects';
import { GET_POKEMON_LIST } from './constants';
import { getPokemonListSagas } from './Pokemons/sagas';

function* rootSagas() {
  yield all([takeEvery(GET_POKEMON_LIST, getPokemonListSagas)]);
}

export default rootSagas;
