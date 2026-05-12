
import React, { useState } from 'react';
import { User, Mail, Lock } from 'lucide-react';

const Login = ({ onLogin }) => {
  const [isActive, setIsActive] = useState(false);
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [registerData, setRegisterData] = useState({ username: '', email: '', password: '' });

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("studentUser"));

    if (!storedUser || loginData.username !== storedUser.username || loginData.password !== storedUser.password) {
      alert("Invalid username or password. Please register if you haven't.");
      return;
    }

    alert("Login successful!");
    onLogin(storedUser);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (!registerData.username || !registerData.email || !registerData.password) {
      alert("Please fill all fields");
      return;
    }
    localStorage.setItem("studentUser", JSON.stringify(registerData));
    alert("Registration successful! Please login.");
    setIsActive(false);
  };

  return (
    <div className="auth-wrapper">
      <div className={`auth-container ${isActive ? 'active' : ''}`}>
        <div className="form-box login">
          <form onSubmit={handleLoginSubmit}>
            <h1>Login</h1>
            <div className="input-box">
              <input 
                type="text" 
                placeholder="Username" 
                required 
                value={loginData.username}
                onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
              />
              <User size={18} className="icon" />
            </div>
            <div className="input-box">
              <input 
                type="password" 
                placeholder="Password" 
                required 
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
              />
              <Lock size={18} className="icon" />
            </div>
            <div className="forgot-link">
              <a href="#">Forgot Password?</a>
            </div>
            <button type="submit" className="btn">Login</button>
            <p>or continue with...</p>
            <div className="social-icons">
               {/* Icons placeholder */}
               <div className="social-icon">G</div>
               <div className="social-icon">F</div>
               <div className="social-icon">GitHub</div>
            </div>
          </form>
        </div>

        <div className="form-box register">
          <form onSubmit={handleRegisterSubmit}>
            <h1>Registration</h1>
            <div className="input-box">
              <input 
                type="text" 
                placeholder="Username" 
                required 
                value={registerData.username}
                onChange={(e) => setRegisterData({ ...registerData, username: e.target.value })}
              />
              <User size={18} className="icon" />
            </div>
            <div className="input-box">
              <input 
                type="email" 
                placeholder="Email" 
                required 
                value={registerData.email}
                onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
              />
              <Mail size={18} className="icon" />
            </div>
            <div className="input-box">
              <input 
                type="password" 
                placeholder="Password" 
                required 
                value={registerData.password}
                onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
              />
              <Lock size={18} className="icon" />
            </div>
            <button type="submit" className="btn">Register</button>
            <p>or register with...</p>
            <div className="social-icons">
               <div className="social-icon">G</div>
               <div className="social-icon">F</div>
            </div>
          </form>
        </div>

        <div className="toggle-box">
          <div className="toggle-panel toggle-left">
            <h1>Hello, Welcome</h1>
            <p>Don't have an account?</p>
            <button className="btn register_btn" onClick={() => setIsActive(true)}>Register</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Welcome Back!</h1>
            <p>Already have an account?</p>
            <button className="btn login_btn" onClick={() => setIsActive(false)}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
