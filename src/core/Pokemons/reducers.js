import * as actionTypes from '../actionTypes';

const initialState = {
  pokemons: [],
  isLoadingPokemons: false,
  errorPokemons: null,
};

export const pokemonReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case actionTypes.GET_POKEMON_LIST_REQUEST:
      return {
        ...state,
        isLoadingPokemons: true,
      };

    case actionTypes.GET_POKEMON_LIST_SUCCESS:
      return {
        ...state,
        pokemons: payload,
        isLoadingPokemons: false,
      };

    case actionTypes.GET_POKEMON_LIST_FAILURE:
      return {
        ...state,
        isLoadingPokemons: false,
        error: payload,
      };

    default:
      return state;
  }
};
