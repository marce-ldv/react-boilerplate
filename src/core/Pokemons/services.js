import axios from '../axios.instance';

export const getPokemons = () => axios.get('pokemon?offset=20&limit=20');
