import axios from '../axios.instance';

export const getPokemonsApi = () => axios.get('http://pokeapi.co/api/v1/pokemon/');
