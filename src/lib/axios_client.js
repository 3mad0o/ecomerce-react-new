import axios from 'axios';


const apiClient = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL ,
    withCredentials: true,
});

// Add request interceptor to inject the token
apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});


// Response interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
    }

        if (error.response && error.response.status === 500) {
      console.log('server error');
      ;
    }
    return Promise.reject(error);
  }
);




export default apiClient;