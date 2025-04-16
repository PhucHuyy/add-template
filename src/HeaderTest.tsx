import React from 'react'

import './Footer.css'

export default function HeaderTest() {
  return (
    <>
    <div>
  <nav className="navbar navbar-default navbar-fixed navbar-transparent white bootsnav">
    <div className="container">
      <button
        className="navbar-toggle"
        data-target="#navbar-menu"
        data-toggle="collapse"
        type="button">
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
          data-out="fadeOutUp">
          <li>
            <a href="login.html">
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
              href="javascript:void(0)">
              Sign In Now
            </a>
          </li>
        </ul>
        <ul
          className="nav navbar-nav navbar-right"
          data-in="fadeInDown"
          data-out="fadeOutUp">
          <li className="dropdown megamenu-fw">
            <a className="dropdown-toggle" data-toggle="dropdown" href="#">
              Brows
            </a>
            <ul className="dropdown-menu megamenu-content" role="menu">
              <li>
                <div className="row">
                  <div className="col-menu col-md-3">
                    <h6 className="title">Main Pages</h6>
                    <div className="content">
                      <ul className="menu-col">
                        <li>
                          <a href="index-2.html">Home Page 1</a>
                        </li>
                        <li>
                          <a href="index-3.html">Home Page 2</a>
                        </li>
                        <li>
                          <a href="index-4.html">Home Page 3</a>
                        </li>
                        <li>
                          <a href="index-5.html">Home Page 4</a>
                        </li>
                        <li>
                          <a href="index-6.html">Home Page 5</a>
                        </li>
                        <li>
                          <a href="freelancing.html">Freelancing</a>
                        </li>
                        <li>
                          <a href="signin-signup.html">Sign In / Sign Up</a>
                        </li>
                        <li>
                          <a href="search-job.html">Search Job</a>
                        </li>
                        <li>
                          <a href="accordion.html">Accordion</a>
                        </li>
                        <li>
                          <a href="tab.html">Tab Style</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-menu col-md-3">
                    <h6 className="title">For Candidate</h6>
                    <div className="content">
                      <ul className="menu-col">
                        <li>
                          <a href="browse-jobs.html">Browse Jobs</a>
                        </li>
                        <li>
                          <a href="browse-company.html">Browse Companies</a>
                        </li>
                        <li>
                          <a href="create-resume.html">Create Resume</a>
                        </li>
                        <li>
                          <a href="resume-detail.html">Resume Detail</a>
                        </li>
                        <li>
                          <a href="#">Manage Jobs</a>
                        </li>
                        <li>
                          <a href="job-detail.html">Job Detail</a>
                        </li>
                        <li>
                          <a href="browse-jobs-grid.html">Job In Grid</a>
                        </li>
                        <li>
                          <a href="candidate-profile.html">Candidate Profile</a>
                        </li>
                        <li>
                          <a href="manage-resume-2.html">Manage Resume 2</a>
                        </li>
                        <li>
                          <a href="company-detail.html">Company Detail</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-menu col-md-3">
                    <h6 className="title">For Employer</h6>
                    <div className="content">
                      <ul className="menu-col">
                        <li>
                          <a href="create-job.html">Create Job</a>
                        </li>
                        <li>
                          <a href="create-company.html">Create Company</a>
                        </li>
                        <li>
                          <a href="manage-company.html">Manage Company</a>
                        </li>
                        <li>
                          <a href="manage-candidate.html">Manage Candidate</a>
                        </li>
                        <li>
                          <a href="manage-employee.html">Manage Employee</a>
                        </li>
                        <li>
                          <a href="browse-resume.html">Browse Resume</a>
                        </li>
                        <li>
                          <a href="search-new.html">New Search Job</a>
                        </li>
                        <li>
                          <a href="employer-profile.html">Employer Profile</a>
                        </li>
                        <li>
                          <a href="manage-resume.html">Manage Resume</a>
                        </li>
                        <li>
                          <a href="new-job-detail.html">New Job Detail</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-menu col-md-3">
                    <h6 className="title">
                      Extra Pages <span className="new-offer">New</span>
                    </h6>
                    <div className="content">
                      <ul className="menu-col">
                        <li>
                          <a href="freelancer-detail.html">Freelancer detail</a>
                        </li>
                        <li>
                          <a href="job-apply-detail.html">New Apply Job</a>
                        </li>
                        <li>
                          <a href="payment-methode.html">Payment Methode</a>
                        </li>
                        <li>
                          <a href="new-login-signup.html">New LogIn / SignUp</a>
                        </li>
                        <li>
                          <a href="freelancing-jobs.html">Freelancing Jobs</a>
                        </li>
                        <li>
                          <a href="freelancers.html">Freelancers</a>
                        </li>
                        <li>
                          <a href="freelancers-2.html">Freelancers 2</a>
                        </li>
                        <li>
                          <a href="premium-candidate.html">Premium Candidate</a>
                        </li>
                        <li>
                          <a href="premium-candidate-detail.html">
                            Premium Candidate Detail
                          </a>
                        </li>
                        <li>
                          <a href="blog-detail.html">Blog detail</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li>
            <a href="blog.html">Blog</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div className="clearfix" />
  <div
    className="banner"
    style={{
      backgroundImage: "url(assets/img/banner-9.jpg)",
    }}>
    <div className="container">
      <div className="banner-caption">
        <div className="col-md-12 col-sm-12 banner-text">
          <h1>7,000+ Browse Jobs</h1>
          <form className="form-horizontal">
            <div className="col-md-4 no-padd">
              <div className="input-group">
                <input
                  className="form-control right-bor"
                  id="joblist"
                  placeholder="Skills, Designations, Companies"
                  type="text"
                />
              </div>
            </div>
            <div className="col-md-3 no-padd">
              <div className="input-group">
                <input
                  className="form-control right-bor"
                  id="location"
                  placeholder="Search By Location.."
                  type="text"
                />
              </div>
            </div>
            <div className="col-md-3 no-padd">
              <div className="input-group">
                <select className="form-control" id="choose-city">
                  <option>Choose City</option>
                  <option>Chandigarh</option>
                  <option>London</option>
                  <option>England</option>
                  <option>Pratapcity</option>
                  <option>Ukrain</option>
                  <option>Wilangana</option>
                </select>
              </div>
            </div>
            <div className="col-md-2 no-padd">
              <div className="input-group">
                <button className="btn btn-primary" type="submit">
                  Search Job
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div className="company-brand">
      <div className="container">
        <div className="owl-carousel" id="company-brands">
          <div className="brand-img">
            <img
              alt=""
              className="img-responsive"
              src="assets/img/microsoft-home.png"
            />
          </div>
          <div className="brand-img">
            <img
              alt=""
              className="img-responsive"
              src="assets/img/img-home.png"
            />
          </div>
          <div className="brand-img">
            <img
              alt=""
              className="img-responsive"
              src="assets/img/mothercare-home.png"
            />
          </div>
          <div className="brand-img">
            <img
              alt=""
              className="img-responsive"
              src="assets/img/paypal-home.png"
            />
          </div>
          <div className="brand-img">
            <img
              alt=""
              className="img-responsive"
              src="assets/img/serv-home.png"
            />
          </div>
          <div className="brand-img">
            <img
              alt=""
              className="img-responsive"
              src="assets/img/xerox-home.png"
            />
          </div>
          <div className="brand-img">
            <img
              alt=""
              className="img-responsive"
              src="assets/img/yahoo-home.png"
            />
          </div>
          <div className="brand-img">
            <img
              alt=""
              className="img-responsive"
              src="assets/img/mothercare-home.png"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="clearfix" />
  <section>
    <div className="container">
      <div className="row">
        <div className="main-heading">
          <p>200 New Jobs</p>
          <h2>
            New & Random <span>Jobs</span>
          </h2>
        </div>
      </div>
      <div className="row extra-mrg">
        <div className="col-md-3 col-sm-6">
          <div className="grid-view brows-job-list">
            <div className="brows-job-company-img">
              <img
                alt=""
                className="img-responsive"
                src="assets/img/com-1.jpg"
              />
            </div>
            <div className="brows-job-position">
              <h3>
                <a href="job-detail.html">Web Developer</a>
              </h3>
              <p>
                <span>Google</span>
              </p>
            </div>
            <div className="job-position">
              <span className="job-num">5 Position</span>
            </div>
            <div className="brows-job-type">
              <span className="part-time">Part Time</span>
            </div>
            <ul className="grid-view-caption">
              <li>
                <div className="brows-job-location">
                  <p>
                    <i className="fa fa-map-marker" />
                    QBL Park, C40
                  </p>
                </div>
              </li>
              <li>
                <p>
                  <span className="brows-job-sallery">
                    <i className="fa fa-money" />
                    $110 - 200
                  </span>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="grid-view brows-job-list">
            <div className="brows-job-company-img">
              <img
                alt=""
                className="img-responsive"
                src="assets/img/com-2.jpg"
              />
            </div>
            <div className="brows-job-position">
              <h3>
                <a href="job-detail.html">Web Developer</a>
              </h3>
              <p>
                <span>Google</span>
              </p>
            </div>
            <div className="job-position">
              <span className="job-num">5 Position</span>
            </div>
            <div className="brows-job-type">
              <span className="freelanc">Freelancer</span>
            </div>
            <ul className="grid-view-caption">
              <li>
                <div className="brows-job-location">
                  <p>
                    <i className="fa fa-map-marker" />
                    QBL Park, C40
                  </p>
                </div>
              </li>
              <li>
                <p>
                  <span className="brows-job-sallery">
                    <i className="fa fa-money" />
                    $110 - 200
                  </span>
                </p>
              </li>
            </ul>
            <span className="tg-themetag tg-featuretag">Premium</span>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="grid-view brows-job-list">
            <div className="brows-job-company-img">
              <img
                alt=""
                className="img-responsive"
                src="assets/img/com-3.jpg"
              />
            </div>
            <div className="brows-job-position">
              <h3>
                <a href="job-detail.html">Web Developer</a>
              </h3>
              <p>
                <span>Google</span>
              </p>
            </div>
            <div className="job-position">
              <span className="job-num">5 Position</span>
            </div>
            <div className="brows-job-type">
              <span className="enternship">Enternship</span>
            </div>
            <ul className="grid-view-caption">
              <li>
                <div className="brows-job-location">
                  <p>
                    <i className="fa fa-map-marker" />
                    QBL Park, C40
                  </p>
                </div>
              </li>
              <li>
                <p>
                  <span className="brows-job-sallery">
                    <i className="fa fa-money" />
                    $110 - 200
                  </span>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="grid-view brows-job-list">
            <div className="brows-job-company-img">
              <img
                alt=""
                className="img-responsive"
                src="assets/img/com-4.jpg"
              />
            </div>
            <div className="brows-job-position">
              <h3>
                <a href="job-detail.html">Web Developer</a>
              </h3>
              <p>
                <span>Google</span>
              </p>
            </div>
            <div className="job-position">
              <span className="job-num">5 Position</span>
            </div>
            <div className="brows-job-type">
              <span className="full-time">Full Time</span>
            </div>
            <ul className="grid-view-caption">
              <li>
                <div className="brows-job-location">
                  <p>
                    <i className="fa fa-map-marker" />
                    QBL Park, C40
                  </p>
                </div>
              </li>
              <li>
                <p>
                  <span className="brows-job-sallery">
                    <i className="fa fa-money" />
                    $110 - 200
                  </span>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="grid-view brows-job-list">
            <div className="brows-job-company-img">
              <img
                alt=""
                className="img-responsive"
                src="assets/img/com-5.jpg"
              />
            </div>
            <div className="brows-job-position">
              <h3>
                <a href="job-detail.html">Web Developer</a>
              </h3>
              <p>
                <span>Google</span>
              </p>
            </div>
            <div className="job-position">
              <span className="job-num">5 Position</span>
            </div>
            <div className="brows-job-type">
              <span className="part-time">Part Time</span>
            </div>
            <ul className="grid-view-caption">
              <li>
                <div className="brows-job-location">
                  <p>
                    <i className="fa fa-map-marker" />
                    QBL Park, C40
                  </p>
                </div>
              </li>
              <li>
                <p>
                  <span className="brows-job-sallery">
                    <i className="fa fa-money" />
                    $110 - 200
                  </span>
                </p>
              </li>
            </ul>
            <span className="tg-themetag tg-featuretag">Premium</span>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="grid-view brows-job-list">
            <div className="brows-job-company-img">
              <img
                alt=""
                className="img-responsive"
                src="assets/img/com-6.jpg"
              />
            </div>
            <div className="brows-job-position">
              <h3>
                <a href="job-detail.html">Web Developer</a>
              </h3>
              <p>
                <span>Google</span>
              </p>
            </div>
            <div className="job-position">
              <span className="job-num">5 Position</span>
            </div>
            <div className="brows-job-type">
              <span className="full-time">Full Time</span>
            </div>
            <ul className="grid-view-caption">
              <li>
                <div className="brows-job-location">
                  <p>
                    <i className="fa fa-map-marker" />
                    QBL Park, C40
                  </p>
                </div>
              </li>
              <li>
                <p>
                  <span className="brows-job-sallery">
                    <i className="fa fa-money" />
                    $110 - 200
                  </span>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="grid-view brows-job-list">
            <div className="brows-job-company-img">
              <img
                alt=""
                className="img-responsive"
                src="assets/img/com-7.jpg"
              />
            </div>
            <div className="brows-job-position">
              <h3>
                <a href="job-detail.html">Web Developer</a>
              </h3>
              <p>
                <span>Google</span>
              </p>
            </div>
            <div className="job-position">
              <span className="job-num">5 Position</span>
            </div>
            <div className="brows-job-type">
              <span className="freelanc">Freelancer</span>
            </div>
            <ul className="grid-view-caption">
              <li>
                <div className="brows-job-location">
                  <p>
                    <i className="fa fa-map-marker" />
                    QBL Park, C40
                  </p>
                </div>
              </li>
              <li>
                <p>
                  <span className="brows-job-sallery">
                    <i className="fa fa-money" />
                    $110 - 200
                  </span>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="grid-view brows-job-list">
            <div className="brows-job-company-img">
              <img
                alt=""
                className="img-responsive"
                src="assets/img/com-1.jpg"
              />
            </div>
            <div className="brows-job-position">
              <h3>
                <a href="job-detail.html">Web Developer</a>
              </h3>
              <p>
                <span>Google</span>
              </p>
            </div>
            <div className="job-position">
              <span className="job-num">5 Position</span>
            </div>
            <div className="brows-job-type">
              <span className="enternship">Enternship</span>
            </div>
            <ul className="grid-view-caption">
              <li>
                <div className="brows-job-location">
                  <p>
                    <i className="fa fa-map-marker" />
                    QBL Park, C40
                  </p>
                </div>
              </li>
              <li>
                <p>
                  <span className="brows-job-sallery">
                    <i className="fa fa-money" />
                    $110 - 200
                  </span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div className="clearfix" />
  <section
    className="video-sec dark"
    id="video"
    style={{
      backgroundImage: "url(assets/img/banner-10.jpg)",
    }}>
    <div className="container">
      <div className="row">
        <div className="main-heading">
          <p>Best For Your Projects</p>
          <h2>
            Watch Our <span>video</span>
          </h2>
        </div>
      </div>
      <div className="video-part">
        <a
          className="video-btn"
          data-target="#my-video"
          data-toggle="modal"
          href="#">
          <i className="fa fa-play" />
        </a>
      </div>
    </div>
  </section>
  <div className="clearfix" />
  <section className="how-it-works">
    <div className="container">
      <div className="row" data-aos="fade-up">
        <div className="col-md-12">
          <div className="main-heading">
            <p>Working Process</p>
            <h2>
              How It <span>Works</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-sm-4">
          <div className="working-process">
            <span className="process-img">
              <img
                alt=""
                className="img-responsive"
                src="assets/img/step-1.png"
              />
              <span className="process-num">01</span>
            </span>
            <h4>Create An Account</h4>
            <p>
              Post a job to tell us about your project. We'll quickly match you
              with the right freelancers find place best.
            </p>
          </div>
        </div>
        <div className="col-md-4 col-sm-4">
          <div className="working-process">
            <span className="process-img">
              <img
                alt=""
                className="img-responsive"
                src="assets/img/step-2.png"
              />
              <span className="process-num">02</span>
            </span>
            <h4>Search Jobs</h4>
            <p>
              Post a job to tell us about your project. We'll quickly match you
              with the right freelancers find place best.
            </p>
          </div>
        </div>
        <div className="col-md-4 col-sm-4">
          <div className="working-process">
            <span className="process-img">
              <img
                alt=""
                className="img-responsive"
                src="assets/img/step-3.png"
              />
              <span className="process-num">03</span>
            </span>
            <h4>Save & Apply</h4>
            <p>
              Post a job to tell us about your project. We'll quickly match you
              with the right freelancers find place best.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div className="clearfix" />
  <section className="testimonial" id="testimonial">
    <div className="container">
      <div className="row">
        <div className="main-heading">
          <p>What Say Our Client</p>
          <h2>
            Our Success <span>Stories</span>
          </h2>
        </div>
      </div>
      <div className="row">
        <div className="owl-carousel" id="client-testimonial-slider">
          <div className="client-testimonial">
            <div className="pic">
              <img alt="" src="assets/img/client-1.jpg" />
            </div>
            <p className="client-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor et dolore magna aliqua.
            </p>
            <h3 className="client-testimonial-title">Lacky Mole</h3>
            <ul className="client-testimonial-rating">
              <li className="fa fa-star-o" />
              <li className="fa fa-star-o" />
              <li className="fa fa-star" />
            </ul>
          </div>
          <div className="client-testimonial">
            <div className="pic">
              <img alt="" src="assets/img/client-2.jpg" />
            </div>
            <p className="client-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor et dolore magna aliqua.
            </p>
            <h3 className="client-testimonial-title">Karan Wessi</h3>
            <ul className="client-testimonial-rating">
              <li className="fa fa-star-o" />
              <li className="fa fa-star" />
              <li className="fa fa-star" />
            </ul>
          </div>
          <div className="client-testimonial">
            <div className="pic">
              <img alt="" src="assets/img/client-3.jpg" />
            </div>
            <p className="client-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor et dolore magna aliqua.
            </p>
            <h3 className="client-testimonial-title">Roul Pinchai</h3>
            <ul className="client-testimonial-rating">
              <li className="fa fa-star-o" />
              <li className="fa fa-star-o" />
              <li className="fa fa-star" />
            </ul>
          </div>
          <div className="client-testimonial">
            <div className="pic">
              <img alt="" src="assets/img/client-1.jpg" />
            </div>
            <p className="client-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor et dolore magna aliqua.
            </p>
            <h3 className="client-testimonial-title">Adam Jinna</h3>
            <ul className="client-testimonial-rating">
              <li className="fa fa-star-o" />
              <li className="fa fa-star-o" />
              <li className="fa fa-star" />
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="pricing">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="main-heading">
            <p>Top Freelancer</p>
            <h2>
              Hire Expert <span>Freelancer</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-sm-6">
          <div className="freelance-container style-2">
            <div className="freelance-box">
              <span className="freelance-status">Available</span>
              <h4 className="flc-rate">$17/hr</h4>
              <div className="freelance-inner-box">
                <div className="freelance-box-thumb">
                  <img
                    alt=""
                    className="img-responsive img-circle"
                    src="assets/img/can-5.jpg"
                  />
                </div>
                <div className="freelance-box-detail">
                  <h4>Agustin L. Smith</h4>
                  <span className="location">Australia</span>
                </div>
                <div className="rattings">
                  <i className="fa fa-star fill" />
                  <i className="fa fa-star fill" />
                  <i className="fa fa-star fill" />
                  <i className="fa fa-star-half fill" />
                  <i className="fa fa-star" />
                </div>
              </div>
              <div className="freelance-box-extra">
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus
                  qui.
                </p>
                <ul>
                  <li>Php</li>
                  <li>Android</li>
                  <li>Html</li>
                  <li className="more-skill bg-primary">+3</li>
                </ul>
              </div>
              <a
                className="btn btn-freelance-two bg-default"
                href="freelancer-detail.html">
                View Detail
              </a>
              <a
                className="btn btn-freelance-two bg-info"
                href="freelancer-detail.html">
                View Detail
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="freelance-container style-2">
            <div className="freelance-box">
              <span className="freelance-status bg-warning">At Work</span>
              <h4 className="flc-rate">$22/hr</h4>
              <div className="freelance-inner-box">
                <div className="freelance-box-thumb">
                  <img
                    alt=""
                    className="img-responsive img-circle"
                    src="assets/img/can-5.jpg"
                  />
                </div>
                <div className="freelance-box-detail">
                  <h4>Delores R. Williams</h4>
                  <span className="location">United States</span>
                </div>
                <div className="rattings">
                  <i className="fa fa-star fill" />
                  <i className="fa fa-star fill" />
                  <i className="fa fa-star fill" />
                  <i className="fa fa-star-half fill" />
                  <i className="fa fa-star" />
                </div>
              </div>
              <div className="freelance-box-extra">
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus
                  qui.
                </p>
                <ul>
                  <li>Php</li>
                  <li>Android</li>
                  <li>Html</li>
                  <li className="more-skill bg-primary">+3</li>
                </ul>
              </div>
              <a
                className="btn btn-freelance-two bg-default"
                href="freelancer-detail.html">
                View Detail
              </a>
              <a
                className="btn btn-freelance-two bg-info"
                href="freelancer-detail.html">
                View Detail
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="freelance-container style-2">
            <div className="freelance-box">
              <span className="freelance-status">Available</span>
              <h4 className="flc-rate">$19/hr</h4>
              <div className="freelance-inner-box">
                <div className="freelance-box-thumb">
                  <img
                    alt=""
                    className="img-responsive img-circle"
                    src="assets/img/can-5.jpg"
                  />
                </div>
                <div className="freelance-box-detail">
                  <h4>Daniel Disroyer</h4>
                  <span className="location">Bangladesh</span>
                </div>
                <div className="rattings">
                  <i className="fa fa-star fill" />
                  <i className="fa fa-star fill" />
                  <i className="fa fa-star fill" />
                  <i className="fa fa-star-half fill" />
                  <i className="fa fa-star" />
                </div>
              </div>
              <div className="freelance-box-extra">
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus
                  qui.
                </p>
                <ul>
                  <li>Php</li>
                  <li>Android</li>
                  <li>Html</li>
                  <li className="more-skill bg-primary">+3</li>
                </ul>
              </div>
              <a
                className="btn btn-freelance-two bg-default"
                href="freelancer-detail.html">
                View Detail
              </a>
              <a
                className="btn btn-freelance-two bg-info"
                href="freelancer-detail.html">
                View Detail
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <div className="text-center">
            <a className="btn btn-primary" href="freelancers-2.html">
              Load More
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section
    className="download-app"
    style={{
      backgroundImage: "url(assets/img/banner-7.jpg)",
    }}>
    <div className="container">
      <div className="col-md-5 col-sm-5 hidden-xs">
        <img
          alt="iphone"
          className="img-responsive"
          src="assets/img/iphone.png"
        />
      </div>
      <div className="col-md-7 col-sm-7">
        <div className="app-content">
          <h2>Download Our Best Apps</h2>
          <h4>Best oppertunity in your hand</h4>
          <p>
            Aliquam vestibulum cursus felis. In iaculis iaculis sapien ac
            condimentum. Vestibulum congue posuere lacus, id tincidunt nisi
            porta sit amet. Suspendisse et sapien varius, pellentesque dui non,
            semper orci. Curabitur blandit, diam ut ornare ultricies.
          </p>
          <a className="btn call-btn" href="#">
            <i className="fa fa-apple" />
            Download
          </a>
          <a className="btn call-btn" href="#">
            <i className="fa fa-android" />
            Download
          </a>
        </div>
      </div>
    </div>
  </section>
  <div className="clearfix" />
  <footer className="footer">
    <div className="row lg-menu">
      <div className="container">
        <div className="col-md-4 col-sm-4">
          <img
            alt=""
            className="img-responsive"
            src="assets/img/footer-logo.png"
          />
        </div>
        <div className="col-md-8 co-sm-8 pull-right">
          <ul>
            <li>
              <a href="index-2.html" title="">
                Home
              </a>
            </li>
            <li>
              <a href="blog.html" title="">
                Blog
              </a>
            </li>
            <li>
              <a href="404.html" title="">
                404
              </a>
            </li>
            <li>
              <a href="faq.html" title="">
                FAQ
              </a>
            </li>
            <li>
              <a href="contact.html" title="">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="row no-padding">
      <div className="container">
        <div className="col-md-3 col-sm-12">
          <div className="footer-widget">
            <h3 className="widgettitle widget-title">About Job Stock</h3>
            <div className="textwidget">
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
              </p>
              <p>
                7860 North Park Place
                <br />
                San Francisco, CA 94120
              </p>
              <p>
                <strong>Email:</strong> Support@careerdesk
              </p>
              <p>
                <strong>Call:</strong>{" "}
                <a href="tel:+15555555555">555-555-1234</a>
              </p>
              <ul className="footer-social">
                <li>
                  <a href="#">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-google-plus" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-4">
          <div className="footer-widget">
            <h3 className="widgettitle widget-title">All Navigation</h3>
            <div className="textwidget">
              <div className="textwidget">
                <ul className="footer-navigation custom-hover-style">
                  <li>
                    <a href="manage-company.html" title="">
                      Front-end Design
                    </a>
                  </li>
                  <li>
                    <a href="manage-company.html" title="">
                      Android Developer
                    </a>
                  </li>
                  <li>
                    <a href="manage-company.html" title="">
                      CMS Development
                    </a>
                  </li>
                  <li>
                    <a href="manage-company.html" title="">
                      PHP Development
                    </a>
                  </li>
                  <li>
                    <a href="manage-company.html" title="">
                      IOS Developer
                    </a>
                  </li>
                  <li>
                    <a href="manage-company.html" title="">
                      Iphone Developer
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-4">
          <div className="footer-widget">
            <h3 className="widgettitle widget-title">All Categories</h3>
            <div className="textwidget">
              <ul className="footer-navigation">
                <li>
                  <a href="manage-company.html" title="">
                    Front-end Design
                  </a>
                </li>
                <li>
                  <a href="manage-company.html" title="">
                    Android Developer
                  </a>
                </li>
                <li>
                  <a href="manage-company.html" title="">
                    CMS Development
                  </a>
                </li>
                <li>
                  <a href="manage-company.html" title="">
                    PHP Development
                  </a>
                </li>
                <li>
                  <a href="manage-company.html" title="">
                    IOS Developer
                  </a>
                </li>
                <li>
                  <a href="manage-company.html" title="">
                    Iphone Developer
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-4">
          <div className="footer-widget">
            <h3 className="widgettitle widget-title">Connect Us</h3>
            <div className="textwidget">
              <form className="footer-form">
                <input
                  className="form-control"
                  placeholder="Your Name"
                  type="text"
                />
                <input
                  className="form-control"
                  placeholder="Email"
                  type="text"
                />
                <textarea className="form-control" placeholder="Message" />
                <button className="btn btn-primary" type="submit">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </footer>
  <div className="clearfix" />
  <div
    aria-hidden="true"
    aria-labelledby="myModalLabel2"
    className="modal fade"
    id="signup"
    role="dialog"
    tabIndex={-1}>
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-body">
          <div className="tab" role="tabpanel">
            <ul className="nav nav-tabs" role="tablist">
              <li className="active" role="presentation">
                <a data-toggle="tab" href="#login" role="tab">
                  Sign In
                </a>
              </li>
              <li role="presentation">
                <a data-toggle="tab" href="#register" role="tab">
                  Sign Up
                </a>
              </li>
            </ul>
            <div className="tab-content" id="myModalLabel2">
              <div
                className="tab-pane fade in active"
                id="login"
                role="tabpanel">
                <img
                  alt=""
                  className="img-responsive"
                  src="assets/img/logo.png"
                />
                <div className="subscribe wow fadeInUp">
                  <form className="form-inline" method="post">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          name="email"
                          placeholder="Username"
                          required
                          type="email"
                        />
                        <input
                          className="form-control"
                          name="password"
                          placeholder="Password"
                          required
                          type="password"
                        />
                        <div className="center">
                          <button
                            className="submit-btn"
                            id="login-btn"
                            type="submit">
                            {" "}
                            Login
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="tab-pane fade" id="register" role="tabpanel">
                <img
                  alt=""
                  className="img-responsive"
                  src="assets/img/logo.png"
                />
                <form className="form-inline" method="post">
                  <div className="col-sm-12">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="email"
                        placeholder="Your Name"
                        required
                        type="text"
                      />
                      <input
                        className="form-control"
                        name="email"
                        placeholder="Your Email"
                        required
                        type="email"
                      />
                      <input
                        className="form-control"
                        name="email"
                        placeholder="Username"
                        required
                        type="email"
                      />
                      <input
                        className="form-control"
                        name="password"
                        placeholder="Password"
                        required
                        type="password"
                      />
                      <div className="center">
                        <button
                          className="submit-btn"
                          id="subscribe"
                          type="submit">
                          {" "}
                          Create Account
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


    </>
  )
}
