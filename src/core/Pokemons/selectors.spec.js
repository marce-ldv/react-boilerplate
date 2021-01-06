import * as selectos from './selectors';
import { type } from 'ramda';

describe('Pokemons selectors', () => {
  test('should validate getPokemons to be array', () => {
    const mockParameters = {
      pokemons: [],
    };

    const res = selectos.getPokemonsSelector.resultFunc(mockParameters);
    expect(type(res)).toEqual('Array');
    expect(res).toEqual([]);
  });
});
