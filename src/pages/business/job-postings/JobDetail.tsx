import React, { useState } from 'react';
import JobApplicationForm from '../apply-jobs/JobApplicationForm';

export default function JobDetail() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="clearfix" />
      {/* Title Header Start */}
      <section
        className="inner-header-title"
        style={{ backgroundImage: 'url(assets/img/banner-10.jpg)' }}
      >
        <div className="container">
          <h1>Job Detail</h1>
        </div>
      </section>
      <div className="clearfix" />

      <section className="detail-desc">
        <div className="container white-shadow">
          <div className="row">
            <div className="detail-pic">
              <img src="assets/img/com-2.jpg" className="img" alt="" />
              <a href="#" className="detail-edit" title="edit">
                <i className="fa fa-pencil" />
              </a>
            </div>
            <div className="detail-status">
              <span>2 Days Ago</span>
            </div>
          </div>
          <div className="row bottom-mrg">
            <div className="col-md-8 col-sm-8">
              <div className="detail-desc-caption">
                <h4>Google</h4>
                <span className="designation">
                  Software Development Company
                </span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <ul>
                  <li>
                    <i className="fa fa-briefcase" />
                    <span>Full time</span>
                  </li>
                  <li>
                    <i className="fa fa-flask" />
                    <span>3 Year Experience</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="get-touch">
                <h4>Get in Touch</h4>
                <ul>
                  <li>
                    <i className="fa fa-map-marker" />
                    <span>Menlo Park, CA</span>
                  </li>
                  <li>
                    <i className="fa fa-envelope" />
                    <span>danieldax704@gmail.com</span>
                  </li>
                  <li>
                    <i className="fa fa-globe" />
                    <span>microft.com</span>
                  </li>
                  <li>
                    <i className="fa fa-phone" />
                    <span>0 123 456 7859</span>
                  </li>
                  <li>
                    <i className="fa fa-money" />
                    <span>$1000 -$1200/Month</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row no-padd">
            <div className="detail pannel-footer">
              <div className="">
                <div
                  className="detail-pannel-footer-btn"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '15px',
                  }}
                >
                  <a
                    href="#"
                    className="footer-btn grn-btn"
                    title=""
                    onClick={(e) => {
                      e.preventDefault();
                      setShowModal(true);
                    }}
                  >
                    Quick Apply
                  </a>
                  <a href="#" className="footer-btn blu-btn" title="">
                    Save Draft
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="full-detail-description full-detail">
        <div className="container">
          <div className="row row-bottom">
            <h2 className="detail-title">Job Responsibilities</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="row row-bottom">
            <h2 className="detail-title">Skill Requirement</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul className="detail-list">
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </li>
            </ul>
          </div>
          <div className="row row-bottom">
            <h2 className="detail-title">Qualification</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul className="detail-list">
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </li>
            </ul>
          </div>
        </div>
      </section>
      {showModal && <JobApplicationForm onClose={() => setShowModal(false)} />}
    </>
  );
}
