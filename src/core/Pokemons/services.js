import axios from '../axios.instance';

export const getPokemonsApi = () => axios.get('pokemon?offset=20&limit=20');
