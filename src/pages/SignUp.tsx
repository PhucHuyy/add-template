export default function SignUp() {
  return (
    <>
      <div
        className="simple-bg-screen"
        style={{
          backgroundImage: 'url(assets/img/banner-10.jpg)',
          height: '100vh',
        }}
      >
        <div className="Loader" style={{ transition: 'opacity 0.5s' }} />
        <div className="wrapper">
          <section className="signup-screen-sec">
            <div className="container">
              <div className="signup-screen">
                <a href="/">
                  <img
                    alt=""
                    className="img-responsive"
                    src="assets/img/logo.png"
                  />
                </a>
                <form>
                  <input
                    className="form-control"
                    placeholder="Your Name"
                    type="text"
                  />
                  <input
                    className="form-control"
                    placeholder="Your Email"
                    type="email"
                  />
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
                    Sign Up
                  </button>
                  <span>
                    Have You Account? <a href="/login"> Login</a>
                  </span>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
