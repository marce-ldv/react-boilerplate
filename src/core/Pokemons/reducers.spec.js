import { pokemonReducer as reducer } from './reducers';
import * as actionTypes from '../actionTypes';

describe('Simulations reducer', () => {
  const initialState = {
    pokemons: [],
    isLoadingPokemons: false,
    errorPokemons: null,
  };

  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  test('should handle GET_POKEMON_LIST_REQUEST', () => {
    expect(
      reducer([], {
        type: actionTypes.GET_POKEMON_LIST_REQUEST,
        isLoadingPokemons: true,
      }),
    ).toEqual({
      isLoadingPokemons: true,
    });
  });

  test('should handle GET_POKEMON_LIST_SUCCESS', () => {
    expect(
      reducer([], {
        type: actionTypes.GET_POKEMON_LIST_SUCCESS,
        isLoadingPokemons: false,
        error: undefined,
      }),
    ).toEqual({
      isLoadingPokemons: false,
      error: undefined,
    });
  });

  test('should handle GET_POKEMON_LIST_FAILURE', () => {
    expect(
      reducer([], {
        type: actionTypes.GET_POKEMON_LIST_FAILURE,
        isLoadingPokemons: false,
      }),
    ).toEqual({
      isLoadingPokemons: false,
    });
  });
});
