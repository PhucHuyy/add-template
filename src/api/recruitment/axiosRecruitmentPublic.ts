import axios from 'axios';

const axiosRecruitmentPublic = axios.create({
  baseURL: 'http://localhost:8090/api/v1',

  withCredentials: true,
});

export default axiosRecruitmentPublic;
