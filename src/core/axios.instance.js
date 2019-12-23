import axios from 'axios';

const headers = {};

const instance = axios.create({
  baseURL: `http://pokeapi.co/api/v1/pokemon/`,
});

export default instance;
