import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance, { setAuthHeaders } from '../axiosConfig';

const Register = ({ setAuthData }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post('/auth/register', {
        email,
        password,
      });
      setAuthHeaders(email, password); // Set auth headers
      setAuthData({ email, password }); // Store auth data in the app state
      navigate('/books');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h1>Online Book Store 📚</h1>
        <h2>Create an Account</h2>
        <form onSubmit={handleRegister}>
          <div className="input-group">
            <input
              type="text"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="register-button">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
