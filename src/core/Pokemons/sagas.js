import { call, put } from 'redux-saga/effects';
import { getPokemonsApi } from './services';
import { setPokemonList } from './actions';

export function* getPokemonListSagas() {
  try {
    const data = yield call(getPokemonsApi);
    yield put(setPokemonList(data));
  } catch (e) {
    console.error(e);
  }
}
