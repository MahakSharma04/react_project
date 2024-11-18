import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate=useNavigate();

  const validateForm = () => {
    setUsernameError('');
    setPasswordError('');

    if (!username.trim()) {
      setUsernameError('Username cannot be empty');
      return false;
    }

    if (!password.trim()) {
      setPasswordError('Password cannot be empty');
      return false;
    }
    navigate("/");
  };

  return (
    <div className="container login text-center" style={{ maxWidth: '500px' }}>
      <h1>Welcome to <span style={{ color: '#CC3333' }}>RestrO</span></h1>

      <form onSubmit={(e) => { e.preventDefault(); validateForm(); }}>
        <h5 style={{ paddingBottom: '15px' }}>Login</h5>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <p style={{ color: 'red' }}>{usernameError}</p>
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <p style={{ color: 'red' }}>{passwordError}</p>
        </div>
        <button type="submit" className="custom-btn">Login</button>
      </form>
      <Link to="/signin">
      <p className="form-switch" id="switch-to-signup">Don't have an account? Sign up here</p>
    </Link>
    </div>
  );
};

export default Login;
