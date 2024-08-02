import React, { useState } from 'react';
import api from '../services/api';
import './Form.css';

const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/auth/register', { username, password });
            setUsername('');
            setPassword('');
        } catch (error) {
            console.error('Registration failed');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <h2>Register</h2>
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
            <button type="submit" className="form-button">Register</button>
        </form>
    );
};

export default RegisterForm;
