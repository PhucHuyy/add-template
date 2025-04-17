import React, { useEffect, useState } from 'react';
import '../public/assets/css/style.css';
import '../public/assets/css/colors/green-style.css';

const LoginTest: React.FC = () => {
  // console.log(window.$);
  

  const [theme, setTheme] = useState<string>('green');

  const applyTheme = (selectedTheme: string): void => {
    setTheme(selectedTheme);
    const existingLink = document.querySelector('#theme-style') as HTMLLinkElement | null;
    if (existingLink) {
      existingLink.href = `/assets/css/colors/${selectedTheme}-style.css`;
    } else {
      const link = document.createElement('link');
      link.id = 'theme-style';
      link.rel = 'stylesheet';
      link.href = `/assets/css/colors/${selectedTheme}-style.css`;
      document.head.appendChild(link);
    }
  };

  useEffect(() => {
    const loader = document.querySelector('.Loader');
    if (loader) {
      setTimeout(() => {
        loader.setAttribute('style', 'display: none;');
      }, 500);
    }
    applyTheme(theme);
  }, []);

  return (
    <div
      className="simple-bg-screen"
      style={{ backgroundImage: 'url(/assets/img/banner-10.jpg)' }}
    >
      <div className="Loader"></div>
      <div className="wrapper">
        <section className="login-screen-sec">
          <div className="container">
            <div className="login-screen">
              <a href="/">
                <img src="/assets/img/logo.png" className="img-responsive" alt="Logo" />
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

export default LoginTest;
