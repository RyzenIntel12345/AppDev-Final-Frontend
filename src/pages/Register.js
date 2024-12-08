import React, { useState } from 'react';
import '../Styles/LoginRegister.css';
import axios from '../api/axios';

function Register({ toggleForm }) {

  const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact_number: '',
        password: '',
        password_confirmation: '', // Added password_confirmation field
    });

  const [errors, setErrors] = useState({});

  // Handle input change and update form data
  const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous errors
    setErrors({});
    
    // Check if passwords match
    if (formData.password !== formData.password_confirmation) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password_confirmation: 'Passwords do not match'
      }));
      return;
    }

    try {
      const response = await axios.post('/register', formData);
      console.log('Registration successful:', response.data);
      setFormData({
        name: '',
        email: '',
        contact_number: '',
        password: '',
        password_confirmation: '',
      });
    } catch (error) {
      if (error.response && error.response.data.errors) {
        setErrors(error.response.data.errors); // Set validation errors from backend
      } else {
        console.error('Unexpected error:', error.message);
      }
    }
  };

  return (
    <div className=" d-flex justify-content-center  mt-5">
    <div className="form-content">
      <h3 className="logreg-title">Create Account</h3>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="logreg-label" htmlFor="name">Name</label>
          <input
            className="logreg-input"
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p className="error-text">{errors.name}</p>}
        </div>
        
        <div className="form-group">
          <label className="logreg-label" htmlFor="email">Email</label>
          <input
            className="logreg-input"
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label className='logreg-label' htmlFor="contact_number">Contact Number</label>
          <input
            className="logreg-input"
            type="text"
            id="contact_number"
            name="contact_number"
            placeholder="Enter your contact number"
            value={formData.contact_number}
            onChange={handleChange}
            required
          />
          {errors.contact_number && <p className="error-text">{errors.contact_number}</p>}
        </div>

        <div className="form-group">
          <label className="logreg-label" htmlFor="password">Password</label>
          <input
            className="logreg-input"
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && <p className="error-text">{errors.password}</p>}
        </div>

        <div className="form-group">
          <label className="logreg-label" htmlFor="password_confirmation">Confirm Password</label>
          <input
            className="logreg-input"
            type="password"
            id="password_confirmation"
            name="password_confirmation"
            placeholder="Confirm your password"
            value={formData.password_confirmation}
            onChange={handleChange}
            required
          />
          {errors.password_confirmation && <p className="error-text">{errors.password_confirmation}</p>}
        </div>

        <button className="logreg-button" type="submit">Create Account</button>
      </form>

      <p className="mt-3">
        Already have an account?{' '}
        <span className="switch-link" onClick={toggleForm}>
          Sign in
        </span>
      </p>
    </div>

    </div>
   
  );
}

export default Register;
