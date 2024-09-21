import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import api from '../../api';

const Login = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form is being submitted');
    try {
      const response = await api.post('/api/login', { firstName, lastName });
      console.log('Server response:', response);
      setMessage(response.data.message);

      if (response.status === 200) {
        console.log("Redirecting to onboarding...");
        localStorage.setItem('user_id', response.data.user_id);
        navigate('/onboarding'); // Redirect to onboarding page
      }

    } catch (error) {
      console.error('Error during login:', error);
      if (error.response && error.response.data) {
        setMessage(error.response.data.message);
      } else if (error.message) {
        setMessage(error.message);
      } else {
        setMessage('An unexpected error occurred');
      }
    }
  };

  return (
    <div className="registerUser">
      <h3>Login</h3>
      <form className="registerUserForm" onSubmit={handleSubmit}>
        <div className="inputGroup">
          <label htmlFor="firstName">First Name:</label>
          <input 
            type="text"
            id="firstName"
            autoComplete='off'
            placeholder="Enter your First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <label htmlFor="lastName">Last Name:</label>
          <input 
            type="text"
            id="lastName"
            autoComplete='off'
            placeholder="Enter your Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-success">
            Login
          </button>
          {message && <p className="mt-3 text-center">{message}</p>}
        </div>
      </form>
    </div>
  );
};

export default Login;