import * as actionTypes from 'core/actionTypes';

export const getPokemonListRequest = () => ({
  type: actionTypes.GET_POKEMON_LIST_REQUEST,
});

export const getPokemonListSuccess = payload => ({
  type: actionTypes.GET_POKEMON_LIST_SUCCESS,
  payload,
});

export const getPokemonListFailure = payload => ({
  type: actionTypes.GET_POKEMON_LIST_FAILURE,
  payload,
});
