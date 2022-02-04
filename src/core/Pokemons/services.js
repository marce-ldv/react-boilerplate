import axios from '../axiosInstance';

export const getPokemons = () => axios.get('pokemon?offset=20&limit=20');
