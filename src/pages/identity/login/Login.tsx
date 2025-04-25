// src/features/auth/Login.tsx
import React from 'react';
import { useLoginForm } from './useLoginForm';
import backgroundImage from '/assets/img/banner-10.jpg';
import logoImage from '/assets/img/logo.png';

const Login: React.FC = () => {
  const { email, setEmail, password, setPassword, formError, handleSubmit, loading, serverError } =
    useLoginForm();

  return (
    <div
      className="simple-bg-screen"
      style={{ backgroundImage: `url(${backgroundImage})`, height: '100vh' }}
    >
      <div className="wrapper">
        <section className="login-screen-sec">
          <div className="container">
            <div className="login-screen">
              <a href="/">
                <img src={logoImage} className="img-responsive" alt="Logo" />
              </a>
              <form onSubmit={handleSubmit}>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-required="true"
                />
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  aria-required="true"
                />
                <button
                  className="btn btn-login"
                  type="submit"
                  disabled={loading}
                  aria-busy={loading}
                  >
                  {loading ? 'Logging in...' : 'Login'}
                </button>
                {formError && <p style={{ color: 'red', marginTop: 10 }}>{formError}</p>}
                {serverError && <p style={{ color: 'red', marginTop: 10 }}>{serverError}</p>}
                <span>
                  You Have No Account? <a href="/signup">Create An Account</a>
                </span>
                <span>
                  <a href="/forget-password">Forget Password</a>
                </span>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;