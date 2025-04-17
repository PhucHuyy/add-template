import React from 'react';
// import '../public/assets/css/style.css';
// import '../public/assets/css/colors/green-style.css';

const Login: React.FC = () => {
  return (
    <div
      className="simple-bg-screen"
      style={{
        backgroundImage: 'url(/assets/img/banner-10.jpg)',
        height: '100vh',
      }}
    >
      <div className="Loader" style={{ transition: 'opacity 0.5s' }} />
      <div className="wrapper">
        <section className="login-screen-sec">
          <div className="container">
            <div className="login-screen">
              <a href="/">
                <img
                  src="/assets/img/logo.png"
                  className="img-responsive"
                  alt="Logo"
                />
              </a>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  console.log('Form submitted');
                }}
              >
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  required
                />
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  required
                />
                <button className="btn btn-login" type="submit">
                  Login
                </button>
                <span>
                  You Have No Account? <a href="/signup">Create An Account</a>
                </span>
                <span>
                  <a href="/lost-password">Forget Password</a>
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
