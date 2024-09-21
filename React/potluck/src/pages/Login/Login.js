import React from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Handle login logic here
    navigate('/home'); // Redirect to home page after login (adjust route as needed)
  };

  const handleRegister = () => {
    navigate('/register'); // Redirect to registration page
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4" style={{ width: '300px' }}>
        <h3 className="text-center mb-4">Login</h3>
        <form>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input type="text" className="form-control" id="username" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" id="password" />
          </div>
          <button type="button" className="btn btn-primary w-100" onClick={handleLogin}>
            Login
          </button>
        </form>
        <div className="mt-3 text-center">
          <button type="button" className="btn btn-link" onClick={handleRegister}>
            Create a new account
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;