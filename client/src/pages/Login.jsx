import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../store/authStore';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const { login } = useAuthStore();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', form);
      login(res.data.user, res.data.token);
      alert('Login successful!');
      navigate('/dashboard');
    } catch (err) {
      alert(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="container py-5 text-center">
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="mt-3 w-50 d-flex flex-column mx-auto">
        <input
          name="email"
          onChange={handleChange}
          value={form.email}
          type="email"
          className="form-control mb-2"
          placeholder="Email"
        />
        <input
          name="password"
          onChange={handleChange}
          value={form.password}
          type="password"
          className="form-control mb-2"
          placeholder="Password"
        />
        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
