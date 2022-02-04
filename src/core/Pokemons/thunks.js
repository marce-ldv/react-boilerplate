import * as service from './services';
import * as actions from './actions';

export const getPokemonList = () => async dispatch => {
  dispatch(actions.getPokemonListRequest());
  try {
    const { data } = await service.getPokemons();
    dispatch(actions.getPokemonListSuccess(data.results));
  } catch (err) {
    dispatch(actions.getPokemonListFailure(err?.error?.message));
  }
};
