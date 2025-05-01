import React, { useEffect, useState } from "react";
import "./UserProfile.css";
import { StudentProfileService } from "../../../services/user/StudentProfile/StudentProfileService";
import { StudentProfile as StudentProfileModel } from "../../../services/user/StudentProfile/StudentProfile";
import { RequestStudents } from '../../../services/user/StudentProfile/StudentProfileService';
import { StudentVerifycationService } from "../../../services/user/StudentVerifycation/StudentVerifycationService";
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
export default function StudentProfile() {
  const navigate = useNavigate();

  const [profile, setProfile] = useState<StudentProfileModel | null>(null);
  const [request, setRequest] = useState<RequestStudents | null>(null);



  useEffect(() => {

    //localStorage.clear();

    const fetchProfile = async () => {
      try {
        const service = new StudentProfileService();
        const data = await service.getStudentProfile();
        console.log("newToken: " + localStorage.getItem('accessToken'));
        console.log(data);
        if (!data) {
          handleNotifycation();
          return;
        }
        setProfile(data);
      } catch (error) {
        console.error("Failed to fetch student profile:", error);
      }
    };

    const fetchSendRequest = async () => {
      try {
        const resquest = new StudentProfileService();
        const data = await resquest.getRequestStudent();
        console.log("sang" + data);
        setRequest(data);
      } catch (error) {
        console.error("Failed to fetch student profile:", error);
      }
    };
    fetchSendRequest();
    fetchProfile();
  }, []);

  const handleNotifycation = () => {
    Swal.fire({
      text: "Since you don't have a profile yet, you have to create.",
      icon: 'warning',
      confirmButtonColor: '#28a745',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Create it!',
      allowOutsideClick: false,
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/studentverifycation')
      }
    });
  };

  const handleEditProfile = () => {
    navigate('/updateprofile');
  }


  const handleSendRequest = () => {
    Swal.fire({
      text: "Are you send request student profile",
      icon: 'question',
      confirmButtonColor: '#28a745',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Send it!',
      allowOutsideClick: false,
    }).then(async (result) => {
      if (result.isConfirmed) {
        const service = new StudentVerifycationService();
        try {
          const check = await service.sendStudentRequest();
          if (check) {
            Swal.fire({
              title: 'Success!',
              text: 'Student request has been sent successfully.',
              icon: 'success',
              confirmButtonColor: '#28a745',
            }).then(() => {
              window.location.reload(); // Reload sau khi người dùng đóng thông báo
            });
          } else {
            Swal.fire({
              title: 'Failed!',
              text: 'Student request could not be sent.',
              icon: 'error',
              confirmButtonColor: '#d33',
            });
          }
        } catch (error) {
          Swal.fire({
            title: 'Error!',
            text: 'Something went wrong while sending the request.',
            icon: 'error',
            confirmButtonColor: '#d33',
          });
        }
      }
    });
  };


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
            <div className="detail-pic" style={{ width: '240px', height: '240px' }}>
              <img style={{ width: '220px', height: '220px' }} src={profile?.getAvatarUrl()} alt="Candidate" />
            </div>
            <div className="detail-status">
              <span>{(request) ? (request?.getStatus()) : ("not send")}</span>
            </div>
          </div>

          <div className="row bottom-mrg">
            <div className="col-md-12 col-sm-12">
              <div className="advance-detail detail-desc-caption">
                <h4>{profile?.getFullName()}</h4>
              </div>
            </div>
          </div>

          <div className="row no-padd">
            <div className="detail pannel-footer">
              <div className="col-md-5 col-sm-5">
                <ul className="detail-footer-social">
                </ul>
              </div>

              <div className="col-md-12 col-sm-12">
                <div className="detail-pannel-footer-btn pull-right">
                  {(request?.getStatus() === "reject" || !request) ? (<a href="#" onClick={handleEditProfile} className="footer-btn grn-btn">Edit Now</a>) : ("")}
                </div>
                <div className="detail-pannel-footer-btn pull-right">
                  {(request?.getStatus() === "reject") ? (<a href="#" onClick={handleSendRequest} className="footer-btn grn-btn">Send Request</a>) : ("")}
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
                <li style={{ fontSize: '20px' }}><span>Date Of Birth:</span>{profile?.getDateOfBirth()}</li>
                <li style={{ fontSize: '20px' }}><span>Address:</span>{profile?.getAddress()}</li>
                <li style={{ fontSize: '20px' }}><span>University:</span>{profile?.getUniversity()}</li>
                <li style={{ fontSize: '20px' }}><span>major:</span>{profile?.getMajor()}</li>
                <li style={{ fontSize: '20px' }}><span>Phone Number:</span>{profile?.getPhoneNumber()}</li>
                <li style={{ fontSize: '20px' }}><span>Academic Year Start:</span>{profile?.getAcademicYearStart()}</li>
                <li style={{ fontSize: '20px' }}>
                  <span>Academic Year End:</span>
                  {(() => {
                    const rawDate = profile?.getAcademicYearEnd();
                    const endDate = rawDate ? rawDate : null;

                    // Kiểm tra nếu là Invalid Date hoặc null thì in ra "not graduated"
                    return endDate
                      ? endDate
                      : "not graduated";
                  })()}
                </li>


              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}