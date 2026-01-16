import axios from 'axios';

const API_BASE_URL = 'http://localhost:3002/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle different error status codes
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // Handle unauthorized access
          localStorage.removeItem('user');
          window.location.href = '/login';
          break;
        case 403:
          // Handle forbidden access
          break;
        case 500:
          // Handle server errors
          break;
        default:
          break;
      }
    }
    return Promise.reject(error);
  }
);

export default apiClient;