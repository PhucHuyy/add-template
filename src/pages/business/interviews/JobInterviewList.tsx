import React from 'react';
import './JobInterviewList.css';

export default function JobInterviewList() {
  return (
    <>
      {/* Title Header Start */}
      <section
        className="inner-header-title"
        style={{ backgroundImage: 'url(/assets/img/banner-10.jpg)' }}
      >
        <div className="container">
          <h1>Browse Resume</h1>
        </div>
      </section>
      <div className="clearfix" />
      {/* Title Header End */}

      {/* Browse Resume List Start */}
      <section className="manage-company">
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

          <a href="resume-detail.html" className="item-click">
            <article>
              <div className="brows-resume">
                <div className="row no-mrg align-items-center">
                  {/* Avatar */}
                  <div className="col-md-2 col-sm-2">
                    <div className="brows-resume-pic">
                      <img
                        src="/assets/img/can-2.png"
                        className="img-responsive resume-avatar"
                        alt="{interview.studentName}"
                      />
                    </div>
                  </div>

                  {/* University + name */}
                  <div className="col-md-3 col-sm-4">
                    <div className="brows-resume-name">
                      <h4>University</h4>
                      <span className="brows-resume-designation">
                        University Name
                      </span>
                    </div>
                  </div>

                  {/* Job Title */}
                  <div className="col-md-3 col-sm-4">
                    <div className="brows-resume-location">
                      <p>
                        <i className="fa fa-briefcase"></i> Job Title
                      </p>
                    </div>
                  </div>

                  {/* Schedule */}
                  <div className="col-md-2 col-sm-4">
                    <div className="brows-resume-location">
                      <p>
                        <i className="fa-solid fa-calendar"></i> 2023-10-12
                        {/* {new Date(interview.scheduledAt).toLocaleString()} */}
                      </p>
                    </div>
                  </div>

                  {/* Status */}
                  <div className="col-md-2 col-sm-4">
                    <div className="browse-resume-rate">
                      <span
                      // className={`status-label status-${interview.interviewStatus.toLowerCase()}`}
                      >
                        {/* {interview.interviewStatus} */}
                      </span>
                    </div>
                  </div>
                </div>

                {/* View CV */}
                <div className="row extra-mrg row-skill">
                  <div className="browse-resume-skills">
                    <div className="col-md-3 col-sm-4">
                      <div className="browse-resume-exp">
                        <button
                          className="resume-exp"
                          //   onClick={() => viewCV(interview.cvId)}
                        >
                          View CV
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </a>

          <a href="resume-detail.html" className="item-click">
            <article>
              <div className="brows-resume">
                <div className="row no-mrg">
                  <div className="col-md-2 col-sm-2">
                    <div className="brows-resume-pic">
                      <img
                        src="/assets/img/can-2.png"
                        className="img-responsive"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4">
                    <div className="brows-resume-name">
                      <h4>Taylah Axon</h4>
                      <span className="brows-resume-designation">
                        University
                      </span>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4">
                    <div className="brows-resume-location">
                      <p>
                        <i className="fa-solid fa-calendar" /> 2023-10-12 10:00
                      </p>
                    </div>
                  </div>
                  <div className="col-md-2 col-sm-2">
                    <div className="browse-resume-rate">
                      <span>
                        <i className="fa fa-money" />
                        interview status
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row extra-mrg row-skill">
                  <div className="browse-resume-skills">
                    <div className="col-md-3 col-sm-4">
                      <div className="browse-resume-exp">
                        <span className="resume-exp">Exp. 4.5 Year</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </a>
          <a href="resume-detail.html" className="item-click">
            <article>
              <div className="brows-resume">
                <div className="row no-mrg">
                  <div className="col-md-2 col-sm-2">
                    <div className="brows-resume-pic">
                      <img
                        src="/assets/img/can-3.png"
                        className="img-responsive"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4">
                    <div className="brows-resume-name">
                      <h4>Adam Gillwist</h4>
                      <span className="brows-resume-designation">
                        University
                      </span>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4">
                    <div className="brows-resume-location">
                      <p>
                        <i className="fa-solid fa-calendar" /> 2023-10-12 10:00
                      </p>
                    </div>
                  </div>
                  <div className="col-md-2 col-sm-2">
                    <div className="browse-resume-rate">
                      <span>
                        <i className="fa fa-money" />
                        interview status
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row extra-mrg row-skill">
                  <div className="browse-resume-skills">
                    <div className="col-md-3 col-sm-4">
                      <div className="browse-resume-exp">
                        <span className="resume-exp">Exp. 3 Year</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </a>
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
      {/* Browse Resume List End */}
    </>
  );
}
