import { SET_POKEMON_LIST } from '../constants';

const initialState = {
  pokemons: [],
};

export const pokemonReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case SET_POKEMON_LIST:
      return {
        ...state,
        pokemons: payload,
      };

    default:
      return state;
  }
};
