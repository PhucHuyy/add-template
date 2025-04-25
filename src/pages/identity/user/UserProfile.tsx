import React from "react";
import "./UserProfile.css";

export default function UserProfile() {
  return (
    <div className="user-profile">
      {/* Title Header */}
      <section className="inner-header-title" style={{ backgroundImage: 'url(/assets/img/banner-10.jpg)' }}>
        <div className="container">
          <h1>User Profile</h1>
        </div>
      </section>

      {/* Profile Section */}
      <section className="detail-desc advance-detail-pr gray-bg">
        <div className="container white-shadow">
          <div className="row">
            <div className="detail-pic">
              <img src="/assets/img/can-1.png" alt="Candidate" />
              <a href="#" className="detail-edit" title="edit">
                <i className="fa fa-pencil"></i>
              </a>
            </div>
            <div className="detail-status">
              <span>Active Now</span>
            </div>
          </div>

          <div className="row bottom-mrg">
            <div className="col-md-12 col-sm-12">
              <div className="advance-detail detail-desc-caption">
                <h4>{/* User Name */}</h4>
                <span className="designation">{/* Job Title */}</span>
                <ul>
                  <li>
                    <strong className="j-view">{/* Views */}</strong>New Post
                  </li>
                  <li>
                    <strong className="j-applied">{/* Applications */}</strong>Job Applied
                  </li>
                  <li>
                    <strong className="j-shared">{/* Invitations */}</strong>Invitation
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row no-padd">
            <div className="detail pannel-footer">
              <div className="col-md-5 col-sm-5">
                <ul className="detail-footer-social">
                  {/* Social Links */}
                </ul>
              </div>
              <div className="col-md-7 col-sm-7">
                <div className="detail-pannel-footer-btn pull-right">
                  <a href="#" className="footer-btn grn-btn">Edit Now</a>
                  <a href="#" className="footer-btn blu-btn">Save Draft</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="full-detail-description full-detail gray-bg">
        <div className="container">
          <div className="deatil-tab-employ tool-tab">
            <ul className="nav simple nav-tabs">
              <li className="active"><a href="#">About</a></li>
              <li><a href="#">Address</a></li>
              <li><a href="#">Matches Job</a></li>
              <li><a href="#">Friends</a></li>
              <li><a href="#">Messages <span className="info-bar">6</span></a></li>
              <li><a href="#">Settings</a></li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane active">
                <h3>About</h3>
                <p>{/* User Bio Placeholder */}</p>
              </div>
              {/* Additional tabs like Address, Matches Job, etc. can be implemented here with backend data */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}