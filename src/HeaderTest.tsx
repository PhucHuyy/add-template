import './Footer.css';
import '../src/config/scriptConfig';
export default function HeaderTest() {
  // useEffect (()=>{loadScript(“assets/js/‘main.js”},[])
  // function reload(script: string) {
  //   const jqueryScript = document.createElement('script');
  //   jqueryScript.src = script;
  //   jqueryScript.async = true;
  //   document.body.appendChild(jqueryScript);
  // }

  // useEffect(() => {
  //   const loadScripts = async () => {
  //     const scripts = [
  //       '/assets/plugins/js/jquery.min.js',
  //       '/assets/js/custom.js',
  //       '/assets/plugins/js/bootsnav.js',
  //       '/assets/plugins/js/loader.js',
  //     ];

  //     for (const script of scripts) {
  //       await loadScript(script);
  //     }
  //   };
  //   loadScripts();
  // }, []);

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
                              <a href="candidate-profile.html">
                                Candidate Profile
                              </a>
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
                              <a href="manage-candidate.html">
                                Manage Candidate
                              </a>
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
                              <a href="employer-profile.html">
                                Employer Profile
                              </a>
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
                              <a href="freelancer-detail.html">
                                Freelancer detail
                              </a>
                            </li>
                            <li>
                              <a href="job-apply-detail.html">New Apply Job</a>
                            </li>
                            <li>
                              <a href="payment-methode.html">Payment Methode</a>
                            </li>
                            <li>
                              <a href="new-login-signup.html">
                                New LogIn / SignUp
                              </a>
                            </li>
                            <li>
                              <a href="freelancing-jobs.html">
                                Freelancing Jobs
                              </a>
                            </li>
                            <li>
                              <a href="freelancers.html">Freelancers</a>
                            </li>
                            <li>
                              <a href="freelancers-2.html">Freelancers 2</a>
                            </li>
                            <li>
                              <a href="premium-candidate.html">
                                Premium Candidate
                              </a>
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
    </>
  );
}
