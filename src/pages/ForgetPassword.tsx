export default function ForgetPassword() {
  return (
    <>
      <div
        className="simple-bg-screen"
        style={{
          backgroundImage: 'url(/assets/img/banner-10.jpg)',
          height: '100vh',
        }}
      >
        <div className="Loader" />
        <div className="wrapper">
          <section className="lost-ps-screen-sec">
            <div className="container">
              <div className="lost-ps-screen">
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
                    placeholder="Enter your Email"
                    type="email"
                  />
                  <button className="btn btn-login" type="submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
