import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080',
  withCredentials: true
});

export const setAuthHeaders = (email, password) => {
  const token = `Basic ${btoa(`${email}:${password}`)}`;
  axiosInstance.defaults.headers.common['Authorization'] = token;
  console.log("header auth",token)
};

export default axiosInstance;
