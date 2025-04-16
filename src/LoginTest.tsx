import React, { useState } from 'react';
import '../public/assets/css/style.css'; // Đảm bảo CSS được import đúng

const LoginTest: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('blue'); // Theme mặc định

  // Danh sách theme
  const themes = ['blue', 'red', 'purple', 'green'];

  // Hàm áp dụng theme
  const applyTheme = (selectedTheme: string) => {
    setTheme(selectedTheme);
    // Áp dụng theme bằng cách thay đổi class trên body hoặc một container
    document.body.className = `theme-${selectedTheme}`;
  };

  // Hàm mở/đóng menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`simple-bg-screen theme-${theme}`}
      style={{ backgroundImage: 'url(/assets/img/banner-10.jpg)' }}
    >
      <div className="wrapper">
        <section className="login-screen-sec">
          <div className="container">
            <div className="login-screen">
              <a href="/">
                <img src="/assets/img/logo.png" className="img-responsive" alt="Logo" />
              </a>
              <form>
                <input type="text" className="form-control" placeholder="Username" />
                <input type="password" className="form-control" placeholder="Password" />
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

        <button
          className="w3-button w3-teal w3-xlarge w3-right"
          onClick={toggleMenu}
        >
          <i className="spin fa fa-cog" aria-hidden="true"></i>
        </button>

        {/* <div
          className={`w3-sidebar w3-bar-block w3-card-2 w3-animate-right ${
            isMenuOpen ? 'w3-show' : 'w3-hide'
          }`}
          style={{ right: 0 }}
          id="rightMenu"
        >
          <button onClick={toggleMenu} className="w3-bar-item w3-button w3-large">
            Close ×
          </button>
          <ul id="styleOptions" title="switch styling">
            {themes.map((color) => (
              <li key={color}>
                <a
                  href="#"
                  className={`cl-box ${color}`}
                  onClick={(e) => {
                    e.preventDefault();
                    applyTheme(color);
                  }}
                ></a>
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default LoginTest;