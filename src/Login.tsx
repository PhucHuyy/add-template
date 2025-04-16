import React from 'react'

export default function Login() {
  return (
    <>
    <body
  className="simple-bg-screen"
  style={{
    backgroundImage: "url(assets/img/banner-10.jpg)",
  }}>
  <div className="Loader" />
  <div className="wrapper">
    <section className="login-screen-sec">
      <div className="container">
        <div className="login-screen">
          <a href="index-2.html">
            <img alt="" className="img-responsive" src="assets/img/logo.png" />
          </a>
          <form>
            <input
              className="form-control"
              placeholder="Useraname"
              type="text"
            />
            <input
              className="form-control"
              placeholder="Password"
              type="password"
            />
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
    <button
      className="w3-button w3-teal w3-xlarge w3-right"
      >
      <i aria-hidden="true" className="spin fa fa-cog" />
    </button>
    <div
      className="w3-sidebar w3-bar-block w3-card-2 w3-animate-right"
      id="rightMenu"
      style={{
        display: "none",
        right: "0",
      }}>
      <button
        className="w3-bar-item w3-button w3-large"
       >
        Close ×
      </button>
      <ul id="styleOptions" title="switch styling">
        <li>
          <a
            className="cl-box blue"
            data-theme="colors/blue-style"
            href="javascript: void(0)"
          />
        </li>
        <li>
          <a
            className="cl-box red"
            data-theme="colors/red-style"
            href="javascript: void(0)"
          />
        </li>
        <li>
          <a
            className="cl-box purple"
            data-theme="colors/purple-style"
            href="javascript: void(0)"
          />
        </li>
        <li>
          <a
            className="cl-box green"
            data-theme="colors/green-style"
            href="javascript: void(0)"
          />
        </li>
        <li>
          <a
            className="cl-box dark-red"
            data-theme="colors/dark-red-style"
            href="javascript: void(0)"
          />
        </li>
        <li>
          <a
            className="cl-box orange"
            data-theme="colors/orange-style"
            href="javascript: void(0)"
          />
        </li>
        <li>
          <a
            className="cl-box sea-blue"
            data-theme="colors/sea-blue-style "
            href="javascript: void(0)"
          />
        </li>
        <li>
          <a
            className="cl-box pink"
            data-theme="colors/pink-style"
            href="javascript: void(0)"
          />
        </li>
      </ul>
    </div>
    <script src="assets/plugins/js/jquery.min.js" type="text/javascript" />
    <script src="assets/plugins/js/viewportchecker.js" type="text/javascript" />
    <script src="assets/plugins/js/bootstrap.min.js" type="text/javascript" />
    <script src="assets/plugins/js/bootsnav.js" type="text/javascript" />
    <script src="assets/plugins/js/select2.min.js" type="text/javascript" />
    <script src="assets/plugins/js/wysihtml5-0.3.0.js" type="text/javascript" />
    <script
      src="assets/plugins/js/bootstrap-wysihtml5.js"
      type="text/javascript"
    />
    <script src="assets/plugins/js/datedropper.min.js" type="text/javascript" />
    <script src="assets/plugins/js/dropzone.js" type="text/javascript" />
    <script src="assets/plugins/js/loader.js" type="text/javascript" />
    <script
      src="assets/plugins/js/owl.carousel.min.js"
      type="text/javascript"
    />
    <script src="assets/plugins/js/slick.min.js" type="text/javascript" />
    <script src="assets/plugins/js/gmap3.min.js" type="text/javascript" />
    <script
      src="assets/plugins/js/jquery.easy-autocomplete.min.js"
      type="text/javascript"
    />
    <script src="assets/js/custom.js" />
    <script src="assets/js/jQuery.style.switcher.js" />
    <script
      dangerouslySetInnerHTML={{
        __html:
          "        $(document).ready(function() {          $('#styleOptions').styleSwitcher();        });      ",
      }}
      type="text/javascript"
    />
    <script
      dangerouslySetInnerHTML={{
        __html:
          '        function openRightMenu() {          document.getElementById("rightMenu").style.display = "block";        }        function closeRightMenu() {          document.getElementById("rightMenu").style.display = "none";        }      ',
      }}
    />
  </div>
</body>;


    </>
  )
}
