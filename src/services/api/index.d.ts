import axios from "axios";

const request = axios.create({
  // baseURL: 'https:/api.100imkoniyat.uz/api',
  baseURL: process.env.REACT_APP_BASE_URL,
  // baseURL: import.meta.env.REACT_APP_BASE_URL,
  headers: {
    common: {
      Authorization:
      localStorage.getItem('token')
      ? "Bearer " + localStorage.getItem("token")
      : null
    }
  },
  timeout: 30000,
  params: {
    lang: localStorage.getItem('language') || 'uz'
  }
});
request.interceptors.request.use(
  (config) => {
    const location = window.location.pathname;

    const token = (localStorage.getItem("token")
    ? "Bearer " + localStorage.getItem("token")
    : null);

    config.headers["Authorization"] = `${token}`;

    return config;
  },
  (error) => {
    if (error.response?.status === 401) {
      localStorage.clear();
      window.location.pathname = "/register";
    }
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    const location = window.location.pathname;

    if (err?.response?.status === 401 || err?.response?.status === 403) {
        
        return Promise.reject(err);
    } else {
      return Promise.reject(err);
    }
  }
);

export default request;
