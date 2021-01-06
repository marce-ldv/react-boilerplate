import { call, put } from 'redux-saga/effects';
import * as service from './services';
import * as actions from './actions';

export function* getPokemonListSaga() {
  try {
    const { data } = yield call(service.getPokemons);
    yield put(actions.getPokemonListSuccess(data.results));
  } catch (err) {
    yield put(actions.getPokemonListFailure(err?.error?.message));
  }
}
