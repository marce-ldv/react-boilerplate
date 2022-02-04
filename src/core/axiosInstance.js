import axios from 'axios';

const headers = {};
const baseURL = `${process.env.REACT_APP_API_URL}`;

const instance = axios.create({
  baseURL,
  headers,
});

export default instance;
