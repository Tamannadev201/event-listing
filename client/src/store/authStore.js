import { create } from 'zustand';

const useAuthStore = create((set) => ({
  user: JSON.parse(localStorage.getItem('user')) || null,
  token: localStorage.getItem('token') || null,
  login: (userData, token) => {
    set({ user: userData, token });
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('token', token);
  },
  logout: () => {
    set({ user: null, token: null });
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  },
}));

export default useAuthStore;
