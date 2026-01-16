import apiClient from './apiConfig';

export const authService = {
  login: async (credentials) => {
    const response = await apiClient.post('/login', credentials);
    // Store user data instead of token since backend doesn't use JWT
    if (response.data.user) {
      localStorage.setItem('user', JSON.stringify(response.data.user));
    }
    return response.data;
  },

  signup: async (userData) => {
    const response = await apiClient.post('/signup', userData);
    return response.data;
  },

  logout: () => {
    localStorage.removeItem('user');
  },

  getCurrentUser: () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },

  isAuthenticated: () => {
    return !!localStorage.getItem('user');
  }
};