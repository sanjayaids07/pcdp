import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/Login.css'; 
import portalLogo from '../assets/images/pcdp.png'; 

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
   
    navigate('/mycourse');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        

        <div className="login-header">
  <img src={portalLogo} alt="PCDP Logo" className="login-logo" />
    <h2>PCDP Portal</h2>

</div>
        <p className="welcome-text">Hi, Welcome Back!</p>
<form onSubmit={handleLogin}>
  <label htmlFor="username">Username</label>
  <input
    id="username"
    type="text"
    placeholder="Enter your username"
    value={username}
    onChange={(e) => setUsername(e.target.value)}
    required
  />

  <label htmlFor="password">Password</label>
  <input
    id="password"
    type="password"
    placeholder="Enter your password"
    value={password }
    onChange={(e) => setPassword(e.target.value)}
    required
  />

  <button type="submit">Login</button>
</form>

      </div>
    </div>
  );
}

export default Login;

