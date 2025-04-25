import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { logout } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import "../../config/scriptConfig";
import MegaMenu from "./MegaMenu";
import "./header.css";
import { useAppDispatch } from "../../app/hook";

export default function Header() {
    console.log('[App render]');
  const { user } = useSelector((state: RootState) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await dispatch(logout());
    navigate("/login");
  };

  return (
    <>
      <nav className="navbar navbar-default navbar-fixed navbar-transparent white bootsnav">
        <div className="container">
          <button
            className="navbar-toggle"
            data-target="#navbar-menu"
            data-toggle="collapse"
            type="button"
            aria-label="Toggle navigation"
            title="Toggle navigation"
          >
            <i className="fa fa-bars" />
          </button>

          <div className="navbar-header">
            <a className="navbar-brand" href="/">
              <img
                alt=""
                className="logo logo-display"
                src="/assets/img/logo-white.png"
              />
              <img
                alt=""
                className="logo logo-scrolled"
                src="/assets/img/logo-white.png"
              />
            </a>
          </div>

          <div className="collapse navbar-collapse" id="navbar-menu">
            <ul
              className="nav navbar-nav navbar-right"
              data-in="fadeInDown"
              data-out="fadeOutUp"
            >
              <MegaMenu />
              <li>
                <a href="/blog">Blog</a>
              </li>

              {!user ? (
                <>
                  <li>
                    <a href="/signup">
                      <i className="fa fa-pencil" /> SignUp
                    </a>
                  </li>
                  <li>
                    <a href="/login">
                      <i className="fa fa-sign-in" /> Sign In
                    </a>
                  </li>
                </>
              ) : (
                <li className="dropdown user-menu">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <img
                      src={user.picture || "/assets/img/default-avatar.png"}
                      alt="avatar"
                      className="img-circle"
                      style={{
                        width: "30px",
                        height: "30px",
                        objectFit: "cover",
                        marginRight: "5px",
                      }}
                    />
                    <span>{user.email}</span> <i className="fa fa-angle-down" />
                  </a>
                  <ul
                    className="dropdown-menu"
                    style={{ minWidth: "150px", right: 0 }}
                  >
                    <li>
                      <a href="/profile">Profile</a>
                    </li>
                    <li>
                      <a href="/settings">Settings</a>
                    </li>
                    <li>
                      <a onClick={handleLogout} style={{ cursor: "pointer" }}>
                        Logout
                      </a>
                    </li>
                  </ul>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <div className="clearfix" />
    </>
  );
}
