import './Login.css';
import { useState } from 'react';
import axios from '../../../Utils/axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [data, setData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const changeFunction = (e, key) => {
    setData({ ...data, [key]: e.target.value });
  };
  const loginFunction = async e => {
    try {
      e.preventDefault();
      const response = await axios.post('/admin/login', data);
      localStorage.setItem('TOKEN', response.data.token);
      localStorage.setItem('ROLE', response.data.role);
      localStorage.setItem('ID', response.data.id);
      navigate('/admin/dashboard');
    } catch (error) {
      setError(
        error.response?.data?.message ||
          'Something went wrong. Please try again.'
      );
    }
  };
  return (
    <>
      <div className="login-container">
        <div className="login-box">
          <div className="login-box-one">
            <i className="fa-solid fa-users"></i>
            <h1>Employee Management System</h1>
            <h4>Manage your employees efficiently and effectively.</h4>
          </div>
          <div className="login-box-two">
            <div className="box2-start">
              <h1>Welcome Back!</h1>
              <p>Sign in to your account to continue</p>
            </div>
            <div className="box2-center">
              <form onSubmit={loginFunction} className="login-form">
                <label htmlFor="email">Email</label>
                <input
                  value={data.email}
                  onChange={e => {
                    changeFunction(e, 'email');
                  }}
                  className="login-input-group"
                  placeholder="Enter your email"
                  type="email"
                  id="email"
                />
                <label htmlFor="password">Password</label>
                <input
                  value={data.password}
                  onChange={e => {
                    changeFunction(e, 'password');
                  }}
                  className="login-input-group"
                  placeholder="Enter your password"
                  type="password"
                  id="password"
                />
                {error && <p className="login-error">{error}</p>}
                <button type="submit" className="login-button">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
