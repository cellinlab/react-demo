import axios from 'axios';

const endPoints = {
  test: 'https://jsonplaceholder.typicode.com',
  dev: 'https://dev.api.com',
  prod: 'https://prod.api.com',
  staging: 'https://staging.api.com',
};

const instance = axios.create({
  baseURL: endPoints.test,
  timeout: 30000,
  headers: {
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  },
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    if (error.response.status === 403) {
      window.location.href = '/forbidden';
    }
    return Promise.reject(error);
  }
);

export default instance;
