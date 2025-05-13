import React from 'react';

export default function StudentInterviewList() {
  return (
    <>
      <div className="clearfix" />
      {/* Title Header Start */}
      <section
        className="inner-header-title"
        style={{ backgroundImage: 'url(/assets/img/banner-10.jpg)' }}
      >
        <div className="container">
          <h1>Schedule Interview List</h1>
        </div>
      </section>
      <div className="clearfix" />

      <section className="browse-company">
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
                  <button type="submit" className="btn btn-success full-width">
                    Filter
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* Company Searrch Filter End */}

          {/* Single Browse Company */}
          <div className="item-click">
            <article>
              <div className="brows-company">
                <div className="col-md-2 col-sm-2">
                  <div className="brows-company-pic">
                    <a href="company-detail.html">
                      <img
                        src="/assets/img/com-2.jpg"
                        className="img-responsive"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4">
                  <div className="brows-company-name">
                    <a href="company-detail.html">
                      <h4>Virtue</h4>
                    </a>
                    <span className="brows-company-tagline">
                      Software Company
                    </span>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4">
                  <div className="brows-company-location">
                    <p>
                      <i className="fa-solid fa-calendar" /> 2023-10-10 10:00
                    </p>
                  </div>
                </div>
                <div className="col-md-2 col-sm-2">
                  <div
                    className="brows-company-position"
                    style={{
                      display: 'flex',
                      gap: '8px',
                      justifyContent: 'center',
                    }}
                  >
                    <button
                      style={{
                        padding: '6px 12px',
                        backgroundColor: '#22c55e',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                      }}
                    >
                      Accept
                    </button>
                    <button
                      style={{
                        padding: '6px 12px',
                        backgroundColor: '#ef4444',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                      }}
                    >
                      Reject
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>
          {/* Single Browse Company */}
          <div className="item-click">
            <article>
              <div className="brows-company">
                <div className="col-md-2 col-sm-2">
                  <div className="brows-company-pic">
                    <a href="company-detail.html">
                      <img
                        src="/assets/img/com-6.jpg"
                        className="img-responsive"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4">
                  <div className="brows-company-name">
                    <a href="company-detail.html">
                      <h4>Twitter</h4>
                    </a>
                    <span className="brows-company-tagline">
                      Software Company
                    </span>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4">
                  <div className="brows-company-location">
                    <p>
                      <i className="fa-solid fa-calendar" /> 2023-10-11 10:00
                    </p>
                  </div>
                </div>
                <div className="col-md-2 col-sm-2">
                  <div
                    className="brows-company-position"
                    style={{
                      display: 'flex',
                      gap: '8px',
                      justifyContent: 'center',
                    }}
                  >
                    <button
                      style={{
                        padding: '6px 12px',
                        backgroundColor: '#22c55e',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                      }}
                    >
                      Accept
                    </button>
                    <button
                      style={{
                        padding: '6px 12px',
                        backgroundColor: '#ef4444',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                      }}
                    >
                      Reject
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>
          {/* Single Browse Company */}
          <div className="item-click">
            <article>
              <div className="brows-company">
                <div className="col-md-2 col-sm-2">
                  <div className="brows-company-pic">
                    <a href="company-detail.html">
                      <img
                        src="/assets/img/com-7.jpg"
                        className="img-responsive"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4">
                  <div className="brows-company-name">
                    <a href="company-detail.html">
                      <h4>Autodesk</h4>
                    </a>
                    <span className="brows-company-tagline">
                      Software Company
                    </span>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4">
                  <div className="brows-company-location">
                    <p>
                      <i className="fa-solid fa-calendar" /> 2023-10-12 10:00
                    </p>
                  </div>
                </div>
                <div className="col-md-2 col-sm-2">
                  <div
                    className="brows-company-position"
                    style={{
                      display: 'flex',
                      gap: '8px',
                      justifyContent: 'center',
                    }}
                  >
                    <button
                      style={{
                        padding: '6px 12px',
                        backgroundColor: '#22c55e',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                      }}
                    >
                      Accept
                    </button>
                    <button
                      style={{
                        padding: '6px 12px',
                        backgroundColor: '#ef4444',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                      }}
                    >
                      Reject
                    </button>
                  </div>
                </div>
              </div>
            </article>
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
  );
}
