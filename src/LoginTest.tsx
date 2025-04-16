import React, { useEffect } from 'react';
import $ from 'jquery';

// Gọi plugin JS jQuery sau khi DOM đã load
import '../public/assets/js/jQuery.style.switcher.js';
import '../public/assets/js/custom.js';

// Các JS plugin khác nếu cần sau:
// import '../public/assets/plugins/js/bootstrap.min.js';
// import '../public/assets/plugins/js/viewportchecker.js';
// import ... (tùy bạn có dùng không)

// Nếu styleSwitcher là plugin gắn vào jQuery mà không có types
// Có thể định nghĩa kiểu tạm hoặc dùng ép kiểu như bên dưới

const Login: React.FC = () => {
    useEffect(() => {
        const timeout = setTimeout(() => {
          const styleOptions = $('#styleOptions') as JQuery & { styleSwitcher?: () => void };
      
          if (typeof styleOptions.styleSwitcher === 'function') {
            styleOptions.styleSwitcher();
          } else {
            console.warn('styleSwitcher plugin not available yet.');
          }
        }, 3000); // Delay nhẹ giúp DOM và JS plugin load xong
      
        return () => clearTimeout(timeout); // Dọn dẹp khi unmount
      }, []);
      
      const openRightMenu = () => {
        document.getElementById('rightMenu')?.style.setProperty('display', 'block');
        console.log('Right menu opened');
        
      };
      
      const closeRightMenu = () => {
        document.getElementById('rightMenu')?.style.setProperty('display', 'none');
        console.log('Right menu closed');
      };
      

  return (
    <div
      className="simple-bg-screen"
      style={{ backgroundImage: 'url(assets/img/banner-10.jpg)' }}
    >
      <div className="Loader"></div>
      <div className="wrapper">
        <section className="login-screen-sec">
          <div className="container">
            <div className="login-screen">
              <a href="index-2.html">
                <img src="assets/img/logo.png" className="img-responsive" alt="Logo" />
              </a>
              <form>
                <input type="text" className="form-control" placeholder="Username" />
                <input type="password" className="form-control" placeholder="Password" />
                <button className="btn btn-login" type="submit">
                  Login
                </button>
                <span>
                  You Have No Account? <a href="signup.html"> Create An Account</a>
                </span>
                <span>
                  <a href="lost-password.html"> Forget Password</a>
                </span>
              </form>
            </div>
          </div>
        </section>

        <button className="w3-button w3-teal w3-xlarge w3-right" onClick={openRightMenu}>
          <i className="spin fa fa-cog" aria-hidden="true"></i>
        </button>

        <div
          className="w3-sidebar w3-bar-block w3-card-2 w3-animate-right"
          style={{ display: 'none', right: 0 }}
          id="rightMenu"
        >
          <button onClick={closeRightMenu} className="w3-bar-item w3-button w3-large">
            Close &times;
          </button>
          <ul id="styleOptions" title="switch styling">
            {[
              'blue',
              'red',
              'purple',
              'green',
              'dark-red',
              'orange',
              'sea-blue',
              'pink',
            ].map((color) => (
              <li key={color}>
                <a
                  href="javascript: void(0)"
                  className={`cl-box ${color}`}
                  data-theme={`colors/${color}-style`}
                ></a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Login;
