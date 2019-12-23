import axios from 'axios';

export const getPokemonsApi = async () => await axios.get('https://pokeapi.co/api/v2/pokemon?offset=20&limit=20');
