import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import './Form.css';
import AuthContext from '../context/AuthContext';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/auth/register', { username, password });
      login(response.data.token);
      setUsername('');
      setPassword('');
    } catch (error) {
      setError(error.response.data.message);
      console.error('Registration failed');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="form-input"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="form-input"
        />
        <button type="submit" className="form-button">Register</button>{
          error && <p className="text-red-500">{error}</p>
        }
      </form>
      <div className="mt-4">
        <Link to="/login" className="text-blue-500">Login</Link>
      </div>
    </div>
  );
};

export default RegisterPage;
