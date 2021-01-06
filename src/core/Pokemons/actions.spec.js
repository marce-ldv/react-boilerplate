import * as actionTypes from '../actionTypes';
import * as actions from './actions';

describe('Pokemons actions', () => {
  test('should start get pokemons loading', () => {
    const result = actions.getPokemonListRequest(true);
    expect(result).toEqual({
      type: actionTypes.GET_POKEMON_LIST_REQUEST,
    });
  });

  test('should get pokemons success', () => {
    const result = actions.getPokemonListSuccess(true);
    expect(result).toEqual({
      type: actionTypes.GET_POKEMON_LIST_SUCCESS,
      payload: true,
    });
  });

  test('should get pokemons failure', () => {
    const result = actions.getPokemonListFailure(true);
    expect(result).toEqual({
      type: actionTypes.GET_POKEMON_LIST_FAILURE,
      payload: true,
    });
  });
});
