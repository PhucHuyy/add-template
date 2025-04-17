import '../../config/scriptConfig';
import MegaMenu from './MegaMenu';

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-default navbar-fixed navbar-transparent white bootsnav">
        <div className="container">
          <button
            className="navbar-toggle"
            data-target="#navbar-menu"
            data-toggle="collapse"
            type="button"
          >
            <i className="fa fa-bars" />
          </button>
          <div className="navbar-header">
            <a className="navbar-brand" href="index-2.html">
              <img
                alt=""
                className="logo logo-display"
                src="assets/img/logo-white.png"
              />
              <img
                alt=""
                className="logo logo-scrolled"
                src="assets/img/logo-white.png"
              />
            </a>
          </div>
          <div className="collapse navbar-collapse" id="navbar-menu">
            <ul
              className="nav navbar-nav navbar-right"
              data-in="fadeInDown"
              data-out="fadeOutUp"
            >
              <li>
                <a href="/login">
                  <i aria-hidden="true" className="fa fa-pencil" />
                  SignUp
                </a>
              </li>
              <li>
                <a href="pricing.html">
                  <i aria-hidden="true" className="fa fa-sign-in" />
                  Pricing
                </a>
              </li>
              <li className="left-br">
                <a
                  className="signin"
                  data-target="#signup"
                  data-toggle="modal"
                  href="javascript:void(0)"
                >
                  Sign In Now
                </a>
              </li>
            </ul>
            <ul
              className="nav navbar-nav navbar-right"
              data-in="fadeInDown"
              data-out="fadeOutUp"
            >
              <MegaMenu />
              <li>
                <a href="blog.html">Blog</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="clearfix" />
    </>
  );
}
