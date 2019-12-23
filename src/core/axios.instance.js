import axios from 'axios';

const headers = {};

const instance = axios.create({
  baseURL: `https://pokeapi.co/api/v2/`,
  headers,
});

export default instance;
