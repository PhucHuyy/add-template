import axios from 'axios';

const axiosPublic = axios.create({

<<<<<<< Updated upstream
  baseURL: 'http://18.140.1.2:8080/api/v1/',

=======
  baseURL: "http://localhost:8080/api/v1",
>>>>>>> Stashed changes
  withCredentials: true,
});

export default axiosPublic;
