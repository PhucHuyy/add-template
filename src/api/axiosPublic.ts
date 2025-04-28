import axios from 'axios';

const axiosPublic = axios.create({
  baseURL: 'http://3.112.235.50:8080/api/v1/',
  withCredentials: true,
});

export default axiosPublic;
