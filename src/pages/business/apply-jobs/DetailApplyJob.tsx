import React, { useState } from 'react';
import ScheduleInterviewModal from './ScheduleInterviewModal';

export default function DetailApplyJob() {
  const [showScheduleModal, setShowScheduleModal] = useState(false);

  const handleConfirmSchedule = (schedule) => {
    console.log('Scheduled interview at:', schedule);
    setShowScheduleModal(false);
  };

  return (
    <>
      <div className="clearfix" />
      {/* Title Header Start */}
      <section
        className="inner-header-title"
        style={{ backgroundImage: 'url(/assets/img/banner-10.jpg)' }}
      >
        <div className="container">
          <h1>Resume Detail</h1>
        </div>
      </section>
      <div className="clearfix" />

      <section className="detail-desc">
        <div className="container white-shadow">
          <div className="row mrg-0">
            <div className="detail-pic">
              <img src="/assets/img/client-1.jpg" className="img" alt="" />
            </div>
            <div className="detail-status">
              <span>7 Hour Days Ago</span>
            </div>
          </div>
          <div className="row bottom-mrg mrg-0">
            <div className="col-md-8 col-sm-8">
              <div className="detail-desc-caption">
                <h4>Daniel Dax</h4>
                <span className="designation">Major</span>
                <p>University Name</p>
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
                    <i className="fa fa-phone" />
                    <span>0 123 456 7859</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row no-padd mrg-0">
            <div className="detail pannel-footer">
              <div
                className=""
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div
                  className="detail-pannel-footer-btn pull-right"
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    marginTop: '20px',
                    height: '50px',
                  }}
                >
                  <button
                    href="#"
                    className="footer-btn grn-btn"
                    title=""
                    onClick={() => setShowScheduleModal(true)}
                  >
                    Accept
                  </button>
                  <button
                    href="#"
                    className="footer-btn blu-btn"
                    title=""
                    style={{ background: 'red' }}
                  >
                    Reject
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="full-detail-description full-detail">
        <div className="container">
          <div className="row row-bottom mrg-0">
            <h2 className="detail-title">About Resume</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </section>

      {showScheduleModal && (
        <ScheduleInterviewModal
          onClose={() => setShowScheduleModal(false)}
          onConfirm={handleConfirmSchedule}
        />
      )}
    </>
  );
}
