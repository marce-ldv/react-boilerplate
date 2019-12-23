import axios from 'axios';

const headers = {};

const instance = axios.create({
  baseURL: `https://pokeapi.co/api/v2/`,
});

export default instance;
