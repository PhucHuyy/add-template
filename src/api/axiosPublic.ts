import axios from 'axios';

const axiosPublic = axios.create({
  baseURL: 'http://18.140.1.2:8080/api/v1 ',
  withCredentials: true,
});

export default axiosPublic;
