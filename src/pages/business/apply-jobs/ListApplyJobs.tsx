import React from 'react';

export default function ListApplyJobs() {
  return (
    <>
      <>
        <div className="clearfix" />
        {/* Title Header Start */}
        <section
          className="inner-header-title"
          style={{ backgroundImage: 'url(/assets/img/banner-10.jpg)' }}
        >
          <div className="container">
            <h1>Manage Apply Of Student</h1>
          </div>
        </section>
        <div className="clearfix" />

        <section className="member-card gray">
          <div className="container">
            {/* search filter */}
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <div className="search-filter">
                  <div className="col-md-4 col-sm-5"></div>
                  <div className="col-md-8 col-sm-7">
                    <div className="short-by pull-right">
                      Short By
                      <div className="dropdown">
                        <a
                          href="#"
                          className="dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Dropdown{' '}
                          <i className="fa fa-angle-down" aria-hidden="true" />
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a href="#">Short By Date</a>
                          </li>
                          <li>
                            <a href="#">Short By Views</a>
                          </li>
                          <li>
                            <a href="#">Short By Popular</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* search filter End */}
            <div className="row">
              <div className="col-md-4 col-sm-4">
                <div className="manage-cndt">
                  <div className="cndt-status pending">Pending</div>
                  <div className="cndt-caption">
                    <div className="cndt-pic">
                      <img
                        src="/assets/img/client-1.jpg"
                        className="img-responsive"
                        alt=""
                      />
                    </div>
                    <h4>Charles Hopman</h4>
                    <span>Web designer</span>
                    <p>
                      Our analysis team at Megriosft use end to end innovation
                      proces
                    </p>
                  </div>
                  <a href="#" title="" className="cndt-profile-btn">
                    View Detail Apply
                  </a>
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="manage-cndt">
                  <div className="cndt-status available">Accepted</div>
                  <div className="cndt-caption">
                    <div className="cndt-pic">
                      <img
                        src="/assets/img/client-2.jpg"
                        className="img-responsive"
                        alt=""
                      />
                    </div>
                    <h4>Ethan Marion</h4>
                    <span>IOS designer</span>
                    <p>
                      Our analysis team at Megriosft use end to end innovation
                      proces
                    </p>
                  </div>
                  <a href="#" title="" className="cndt-profile-btn">
                    View Detail Apply
                  </a>
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="manage-cndt">
                  <div className="cndt-status pending">Pending</div>
                  <div className="cndt-caption">
                    <div className="cndt-pic">
                      <img
                        src="/assets/img/client-3.jpg"
                        className="img-responsive"
                        alt=""
                      />
                    </div>
                    <h4>Zara Clow</h4>
                    <span>UI/UX designer</span>
                    <p>
                      Our analysis team at Megriosft use end to end innovation
                      proces
                    </p>
                  </div>
                  <a href="#" title="" className="cndt-profile-btn">
                    View Detail Apply
                  </a>
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="manage-cndt">
                  <div className="cndt-status pending">Pending</div>
                  <div className="cndt-caption">
                    <div className="cndt-pic">
                      <img
                        src="/assets/img/client-4.jpg"
                        className="img-responsive"
                        alt=""
                      />
                    </div>
                    <h4>Henry Crooks</h4>
                    <span>PHP Developer</span>
                    <p>
                      Our analysis team at Megriosft use end to end innovation
                      proces
                    </p>
                  </div>
                  <a href="#" title="" className="cndt-profile-btn">
                    View Detail Apply
                  </a>
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="manage-cndt">
                  <div className="cndt-status available">Accepted</div>
                  <div className="cndt-caption">
                    <div className="cndt-pic">
                      <img
                        src="/assets/img/client-5.jpg"
                        className="img-responsive"
                        alt=""
                      />
                    </div>
                    <h4>Joseph Macfarlan</h4>
                    <span>App Developer</span>
                    <p>
                      Our analysis team at Megriosft use end to end innovation
                      proces
                    </p>
                  </div>
                  <a href="#" title="" className="cndt-profile-btn">
                    View Detail Apply
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <ul className="pagination">
                <li>
                  <a href="#">«</a>
                </li>
                <li className="active">
                  <a href="#">1</a>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">4</a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-ellipsis-h" />
                  </a>
                </li>
                <li>
                  <a href="#">»</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </>
    </>
  );
}
