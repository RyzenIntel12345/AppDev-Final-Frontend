import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';
import '../Styles/LoginRegister.css';

function Login({ toggleForm }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    try {
      const response = await axios.post('/login', { email, password });
      const token = response.data.token;
      localStorage.setItem('token', token);

      const role = response.data.role;
      setEmail('');
      setPassword('');
      setIsLoading(false);

      if (role === 'admin') {
        navigate('/dashboard', { replace: true });
      } else if (role === 'user') {
        navigate('/frontstore', { replace: true });
      }
    } catch (error) {
      setIsLoading(false);

      if (error.response) {
        switch (error.response.status) {
          case 401:
            setErrorMessage('You do not have an account. Please sign up.');
            break;
          case 500:
            setErrorMessage('Internal server error. Please try again later.');
            break;
          default:
            setErrorMessage('An error occurred. Please try again.');
        }
      } else if (error.request) {
        setErrorMessage('Network error. Please check your internet connection.');
      } else {
        setErrorMessage('An unexpected error occurred.');
      }
    }
  };

  return (
    <div className='form-wrapper d-flex justify-content-center mt-5'>

      <form className="form-content " id="signInForm" onSubmit={handleLogin}>
      <h3 className="logreg-title">Login</h3>
      <div className="form-group">
        <label className="logreg-label" htmlFor="email">Email</label>
        <input
          className="logreg-input"
          type="email"
          id="email"
          placeholder="Enter your email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setErrorMessage('');
          }}
        />
      </div>

      <div className="form-group">
        <label className="logreg-label" htmlFor="password">Password</label>
        <input
          className="logreg-input"
          type="password"
          id="password"
          placeholder="Enter your password"
          required
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setErrorMessage('');
          }}
        />
      </div>

      <button className="logreg-button" type="submit" disabled={isLoading}>
        {isLoading ? 'Logging in...' : 'Sign In'}
      </button>
      {errorMessage && <p className="text-danger mt-3">{errorMessage}</p>}

      <p className="switch-container mt-3">
        Don't have an account?{' '}
        <span className="switch-link" onClick={toggleForm}>
          Create one
        </span>
      </p>
    </form>
    </div>
   
  );
}

export default Login;
