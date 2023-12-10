import axios from 'axios';
import { getAccessToken } from 'utils/storage';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URI,
});

// Add a request interceptor
instance.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    const accessToken = getAccessToken();
    if (accessToken) {
      config.headers = { authorization: `Bearer ${accessToken}` };
      return config;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// Add a response interceptor
instance.interceptors.response.use(
  (response) => response.data,
  (error) => error.response.data,
);

export default instance;
