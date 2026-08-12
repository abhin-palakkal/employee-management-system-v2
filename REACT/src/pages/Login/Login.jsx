import './Login.css';

const Login = () => {
  return (
    <>
      <div className="login-container">
        <div className="login-box">
          <div className="login-box-one">
            <i class="fa-solid fa-users"></i>
            <h1>Employee Management System</h1>
            <h4>Manage your employees efficiently and effectively.</h4>
          </div>
          <div className="login-box-two">
            <div className="box2-start">
              <h1>Welcome Back!</h1>
              <p>Sign in to your account to continue</p>
            </div>
            <div className="box2-center">
              <form className="login-form">
                <label htmlFor="email">Email</label>
                <input
                  className="login-input-group"
                  placeholder="Enter your email"
                  type="email"
                  id="email"
                />
                <label htmlFor="password">Password</label>
                <input
                  className="login-input-group"
                  placeholder="Enter your password"
                  type="password"
                  id="password"
                />
                <button className="login-button">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
