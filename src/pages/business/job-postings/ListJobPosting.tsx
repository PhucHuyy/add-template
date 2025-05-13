import React from 'react';

export default function ListJobPosting() {
  return (
    <>
      <div>
        <div className="clearfix" />
        {/* Title Header Start */}
        <section
          className="inner-header-title"
          style={{ backgroundImage: 'url(/assets/img/banner-10.jpg)' }}
        >
          <div className="container">
            <h1>List Jobs</h1>
          </div>
        </section>
        <div className="clearfix" />

        <section className="brows-job-category">
          <div className="container">
            {/* Company Searrch Filter Start */}
            <div className="row extra-mrg">
              <div className="wrap-search-filter">
                <form>
                  <div className="col-md-4 col-sm-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Keyword: Name, Tag"
                    />
                  </div>
                  <div className="col-md-3 col-sm-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Location: City, State, Zip"
                    />
                  </div>
                  <div className="col-md-3 col-sm-3">
                    <select
                      className="selectpicker form-control"
                      multiple=""
                      title="All Categories"
                    >
                      <option>Information Technology</option>
                      <option>Mechanical</option>
                      <option>Hardware</option>
                    </select>
                  </div>
                  <div className="col-md-2 col-sm-2">
                    <button type="submit" className="btn btn-primary">
                      Filter
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/* Company Searrch Filter End */}
            <div className="item-click">
              <article>
                <div className="brows-job-list">
                  <div className="col-md-1 col-sm-2 small-padding">
                    <div className="brows-job-company-img">
                      <a href="job-detail.html">
                        <img
                          src="/assets/img/com-1.jpg"
                          className="img-responsive"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-5">
                    <div className="brows-job-position">
                      <a href="job-apply-detail.html">
                        <h3>Digital Marketing Manager</h3>
                      </a>
                      <p>
                        <span>Autodesk</span>
                        <span className="brows-job-sallery">
                          <i className="fa fa-money" />
                          $750 - 800
                        </span>
                        <span className="job-type cl-success bg-trans-success">
                          Full Time
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3">
                    <div className="brows-job-location">
                      <p>
                        <i className="fa fa-map-marker" />
                        QBL Park, C40
                      </p>
                    </div>
                  </div>
                  <div className="col-md-2 col-sm-2">
                    <div className="brows-job-link">
                      <button
                        className="btn"
                        style={{
                          backgroundColor: '#f8f9fa',
                          color: '#000',
                          border: '1px solid #ccc',
                          padding: '10px 20px',
                          borderRadius: '4px',
                          transition:
                            'background-color 0.3s ease, color 0.3s ease',
                          cursor: 'pointer',
                        }}
                        onMouseOver={(e) => {
                          e.target.style.backgroundColor = '#07b107';
                          e.target.style.color = '#fff';
                        }}
                        onMouseOut={(e) => {
                          e.target.style.backgroundColor = '#f8f9fa';
                          e.target.style.color = '#000';
                        }}
                      >
                        Send Draft
                      </button>
                    </div>
                  </div>
                </div>
                <span className="tg-themetag tg-featuretag">Premium</span>
              </article>
            </div>
            <div className="item-click">
              <article>
                <div className="brows-job-list">
                  <div className="col-md-1 col-sm-2 small-padding">
                    <div className="brows-job-company-img">
                      <a href="job-detail.html">
                        <img
                          src="/assets/img/com-2.jpg"
                          className="img-responsive"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-5">
                    <div className="brows-job-position">
                      <a href="job-apply-detail.html">
                        <h3>Compensation Analyst</h3>
                      </a>
                      <p>
                        <span>Google</span>
                        <span className="brows-job-sallery">
                          <i className="fa fa-money" />
                          $810 - 900
                        </span>
                        <span className="job-type bg-trans-warning cl-warning">
                          Part Time
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3">
                    <div className="brows-job-location">
                      <p>
                        <i className="fa fa-map-marker" />
                        QBL Park, C40
                      </p>
                    </div>
                  </div>
                  <div className="col-md-2 col-sm-2">
                    <div className="brows-job-link">
                      <button
                        className="btn"
                        style={{
                          backgroundColor: '#f8f9fa',
                          color: '#000',
                          border: '1px solid #ccc',
                          padding: '10px 20px',
                          borderRadius: '4px',
                          transition:
                            'background-color 0.3s ease, color 0.3s ease',
                          cursor: 'pointer',
                        }}
                        onMouseOver={(e) => {
                          e.target.style.backgroundColor = '#07b107';
                          e.target.style.color = '#fff';
                        }}
                        onMouseOut={(e) => {
                          e.target.style.backgroundColor = '#f8f9fa';
                          e.target.style.color = '#000';
                        }}
                      >
                        Send Draft
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="item-click">
              <article>
                <div className="brows-job-list">
                  <div className="col-md-1 col-sm-2 small-padding">
                    <div className="brows-job-company-img">
                      <a href="job-detail.html">
                        <img
                          src="/assets/img/com-3.jpg"
                          className="img-responsive"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-5">
                    <div className="brows-job-position">
                      <a href="job-apply-detail.html">
                        <h3>Investment Banker</h3>
                      </a>
                      <p>
                        <span>Honda</span>
                        <span className="brows-job-sallery">
                          <i className="fa fa-money" />
                          $800 - 910
                        </span>
                        <span className="job-type bg-trans-primary cl-primary">
                          Freelancer
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3">
                    <div className="brows-job-location">
                      <p>
                        <i className="fa fa-map-marker" />
                        QBL Park, C40
                      </p>
                    </div>
                  </div>
                  <div className="col-md-2 col-sm-2">
                    <div className="brows-job-link">
                      <button
                        className="btn"
                        style={{
                          backgroundColor: '#f8f9fa',
                          color: '#000',
                          border: '1px solid #ccc',
                          padding: '10px 20px',
                          borderRadius: '4px',
                          transition:
                            'background-color 0.3s ease, color 0.3s ease',
                          cursor: 'pointer',
                        }}
                        onMouseOver={(e) => {
                          e.target.style.backgroundColor = '#07b107';
                          e.target.style.color = '#fff';
                        }}
                        onMouseOut={(e) => {
                          e.target.style.backgroundColor = '#f8f9fa';
                          e.target.style.color = '#000';
                        }}
                      >
                        Send Draft
                      </button>
                    </div>
                  </div>
                </div>
                <span className="tg-themetag tg-featuretag">Premium</span>
              </article>
            </div>

            {/*/.row*/}
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
      </div>
    </>
  );
}
