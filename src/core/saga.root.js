import { all, takeEvery } from 'redux-saga/effects';
import * as actions from './actionTypes';
import * as saga from './Pokemons/saga';

function* rootSagas() {
  yield all([takeEvery(actions.GET_POKEMON_LIST_REQUEST, saga.getPokemonListSaga)]);
}

export default rootSagas;
