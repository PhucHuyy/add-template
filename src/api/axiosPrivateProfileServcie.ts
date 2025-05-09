import axios from 'axios';
import { RefreshResponse } from '../features/auth/authType';

const axiosPrivateProfileServcie = axios.create({
    baseURL: 'http://localhost:8888/api',
});

axiosPrivateProfileServcie.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('accessToken');
      if (token) {
        config.headers = config.headers || {};
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );
  
  axiosPrivateProfileServcie.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;
  
      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
  
        try {
          const refreshResponse = await axios.post<RefreshResponse>(
            'http://localhost:8080/api/v1/auth/refresh',
            {},
            { withCredentials: true }
          );
  
          const newToken = refreshResponse.data.data.token;
          localStorage.setItem('accessToken', newToken);
          //console.log("newToken: "+newToken);
          originalRequest.headers.Authorization = `Bearer ${newToken}`;
          return axiosPrivateProfileServcie(originalRequest);
        } catch (refreshError) {
          localStorage.removeItem('accessToken');
          window.location.href = '/login'; 
          return Promise.reject(refreshError);
        }
      }
  
      return Promise.reject(error);
    }
  );
  
  export default axiosPrivateProfileServcie;

