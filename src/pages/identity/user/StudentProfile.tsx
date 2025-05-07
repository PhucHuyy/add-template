import React, { useEffect, useState } from "react";
import "./UserProfile.css";
import { StudentProfileService } from "../../../services/user/StudentProfile/StudentProfileService";
import { StudentProfile as StudentProfileModel } from "../../../services/user/StudentProfile/StudentProfile";
import { RequestStudents } from '../../../services/user/StudentProfile/StudentProfileService';
import { StudentVerifycationService } from "../../../services/user/StudentVerifycation/StudentVerifycationService";
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import { StudentCard } from "../../../services/user/StudentProfile/StudentCard";
export default function StudentProfile() {
  const navigate = useNavigate();

  const [profile, setProfile] = useState<StudentProfileModel | null>(null);
  const [request, setRequest] = useState<RequestStudents | null>(null);
  const [selectedImages, setSelectedImages] = useState<{ url: string }[]>([]);
  const [selectedImage, setSelectedImage] = useState(String);

  useEffect(() => {

    //localStorage.clear();

    const fetchProfile = async () => {
      try {
        const service = new StudentProfileService();
        const data = await service.getStudentProfile();
        console.log("newToken: " + localStorage.getItem('accessToken'));
        console.log(data);
        setSelectedImages(
          data?.getStudentCardDTOS()?.map((item: StudentCard) => ({
            url: item.getStudentCardUrl()
          })) || []
        );


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

              <div className="col-md-12 col-sm-12" >
                <div className="detail-pannel-footer-btn pull-right">
                  {(request?.getStatus() === "reject" || !request) ? (<a onClick={handleEditProfile} className="footer-btn grn-btn">Edit Now</a>) : ("")}
                </div>
                <div className="detail-pannel-footer-btn pull-left">
                  {(request?.getStatus() === "reject" || !request) ? (<a onClick={handleSendRequest} className="footer-btn blu-btn">Send Request</a>) : ("")}
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
                <li style={{ fontSize: '20px' }}><div className="col-md-12 col-sm-12" style={{ paddingLeft: '0px' }}>
                  <label style={{ textAlign: 'start', fontSize: '20px' }}  >Image Stduent Card :</label>
                  <div className="image-upload-container" style={{
                    display: 'flex',
                    flexDirection: 'row', // đảm bảo các items nằm ngang
                    alignItems: 'center',
                    gap: '10px', // khoảng cách giữa các ảnh
                    flexWrap: 'nowrap', // ngăn không cho wrap xuống dòng
                    overflowX: 'auto', // cho phép scroll ngang nếu nhiều ảnh
                    padding: '10px 0'
                  }}>
                    {selectedImages.map((image, index) => (
                      <div key={index} className="image-preview" style={{
                        position: 'relative',
                        minWidth: '100px', // đảm bảo kích thước tối thiểu
                        height: '100px',
                        flexShrink: 0 // ngăn không cho ảnh co lại
                      }}>
                        <img
                          src={image.url}
                          alt={`Preview ${index}`}
                          onClick={() => setSelectedImage(image.url)}
                          style={{
                            width: '100px',
                            height: '100px',
                            objectFit: 'cover',
                            borderRadius: '4px'
                          }}
                        />
                      </div>
                    ))}

                  </div>
                </div></li>

              </ul>
            </div>
          </div>
        </div>
        {selectedImage !== "" && (
          <div
            onClick={() => setSelectedImage("")}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1000,
            }}
          >
            <img
              src={selectedImage}
              alt="Full View"
              style={{
                maxHeight: '90%',
                maxWidth: '90%',
                objectFit: 'contain',
                borderRadius: '0px',
              }}
            />
          </div>
        )}

      </section>
    </div>
  );
}