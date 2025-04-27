import React, { useEffect, useState } from "react";
import "./UserProfile.css";
import { StudentProfileService } from "../../../services/user/StudentProfileService";
import { StudentProfile as StudentProfileModel } from "../../../services/user/StudentProfile"; 
import {RequestStudents} from '../../../services/user/StudentProfileService';

export default function StudentProfile() {

  const [profile, setProfile] = useState<StudentProfileModel | null>(null);
  const [request, setRequest] = useState<RequestStudents| null>(null);
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const service = new StudentProfileService();
        const data = await service.getStudentProfile();
        setProfile(data);
      } catch (error) {
        console.error("Failed to fetch student profile:", error);
      }
    };

    const fetchSendRequest = async () => {
      try {
        const resquest = new StudentProfileService();
        const data = await resquest.getRequestStudent();
        setRequest(data);
      } catch (error) {
        console.error("Failed to fetch student profile:", error);
      }
    };
    fetchSendRequest();
    fetchProfile();
  }, []);

  return (
    <div className="user-profile">
      {/* Title Header */}
      <section className="inner-header-title" style={{ backgroundImage: 'url(/assets/img/banner-10.jpg)' }}>
        <div className="container">
          <h1>Profile Student</h1>
        </div>
      </section>

      {/* Profile Section */}
      <section className="detail-desc advance-detail-pr gray-bg">
        <div className="container white-shadow">
          <div className="row">
            <div className="detail-pic" style={{width: '240px', height: '240px'}}>
              <img style={{width: '220px', height: '220px'}} src="/assets/img/can-1.png" alt="Candidate" />
            </div>
            <div className="detail-status">
              <span>Active Now</span>
            </div>
          </div>

          <div className="row bottom-mrg">
            <div className="col-md-12 col-sm-12">
              <div className="advance-detail detail-desc-caption">
                <h4>Nguyễn Thanh Sang</h4>
              </div>
            </div>
          </div>

          <div className="row no-padd">
            <div className="detail pannel-footer">
              <div className="col-md-5 col-sm-5">
                <ul className="detail-footer-social">
                </ul>
              </div>
              <div className="col-md-7 col-sm-7">
                <div className="detail-pannel-footer-btn pull-right">
                  <a href="#" className="footer-btn grn-btn">Edit Now</a>
                </div>
                <div className="detail-pannel-footer-btn pull-right">
                  <a style={{backgroundColor:'orangered'}}  href="#" className="footer-btn grn-btn">Manager CV</a>
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
            <div>
									<ul className="job-detail-des">
										<li style={{fontSize: '20px'}}><span>Date Of Birth:</span>SCO 210, Neez Plaza</li>
										<li style={{fontSize: '20px'}}><span>Address:</span>Mohali</li>
										<li style={{fontSize: '20px'}}><span>University:</span>Punjab</li>
                    <li style={{fontSize: '20px'}}><span>major:</span>Punjab</li>
                    <li style={{fontSize: '20px'}}><span>Phone Number:</span>Punjab</li>
										<li style={{fontSize: '20px'}}><span>academicYearStart:</span>India</li>
										<li style={{fontSize: '20px'}}><span>academicYearEnd:</span>520 548</li>
									</ul>
								</div>
          </div>
        </div>
      </section>
    </div>
  );
}