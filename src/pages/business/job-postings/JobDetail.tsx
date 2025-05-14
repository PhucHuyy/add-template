import React, { useEffect, useState } from 'react';
import JobApplicationForm from '../apply-jobs/JobApplicationForm';
import { useNavigate, useParams } from 'react-router-dom';
import {
  acceptJob,
  bannedJob,
  getDetailJob,
  rejectJob,
  sendDraftJob,
} from '../../../service/business/jobpostings/JobPostingsService';
import { getBusinessById } from '../../../service/business/MyBusinessService';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';

const renderStatus = (status: number) => {
  switch (status) {
    case 0:
      return 'Pending';
    case 1:
      return 'Accepted';
    case 2:
      return 'Rejected';
    case 3:
      return 'Hidden';
    case -1:
      return 'Draft';
    default:
      return 'Unknown';
  }
};

export default function JobDetail() {
  const [showModal, setShowModal] = useState(false);
  const user = useSelector((state: RootState) => state.auth.user);
  const [nameRole, setNameRole] = useState<string>('');
  const role = user?.roleNames?.join(', ') || '-';
  const trimmedRole = role.trim();
  const navigate = useNavigate();

  useEffect(() => {
    if (trimmedRole.includes('STUDENT')) {
      setNameRole('STUDENT');
    } else if (trimmedRole.includes('BUSINESS')) {
      setNameRole('BUSINESS');
    } else if (trimmedRole.includes('STAFF_ADMIN')) {
      setNameRole('STAFF_ADMIN');
    } else {
      setNameRole('-');
    }
  }, [trimmedRole]);

  const { jobId } = useParams();

  const [salary, setSalary] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [numberOfPositions, setNumberOfPositions] = useState(0);
  const [status, setStatus] = useState(null);
  const [isDeleted, setIsDeleted] = useState(false);
  const [expirationDate, setExpirationDate] = useState('');

  const [businessInfo, setBusinessInfo] = useState({
    companyName: '',
    industry: '',
    companyInfo: '',
    websiteUrl: '',
    phoneNumber: '',
    email: '',
    address: '',
  });

  useEffect(() => {
    const fetchBusinessInfo = async () => {
      try {
        const informationJobResponse = await getDetailJob(jobId);
        setSalary(informationJobResponse?.data?.salary);
        setAvatarUrl(informationJobResponse?.data?.avatarUrl);
        setJobTitle(informationJobResponse?.data?.title);
        setJobDescription(informationJobResponse?.data?.description);
        setNumberOfPositions(informationJobResponse?.data?.numberEmployees);
        setStatus(informationJobResponse?.data?.status);
        setIsDeleted(informationJobResponse?.data?.deleted);
        setExpirationDate(informationJobResponse?.data?.expirationDate);

        const businessId = informationJobResponse?.data?.businessId;

        const businessInfoResponse = await getBusinessById(businessId);
        setBusinessInfo({
          companyName: businessInfoResponse?.data?.companyName,
          industry: businessInfoResponse?.data?.industry,
          companyInfo: businessInfoResponse?.data?.companyInfo,
          websiteUrl: businessInfoResponse?.data?.websiteUrl,
          phoneNumber: businessInfoResponse?.data?.phoneNumber,
          email: businessInfoResponse?.data?.email,
          address: businessInfoResponse?.data?.address,
        });
      } catch (error: any) {
        console.error('Error fetching job details:', error);
        throw new Error(
          error?.response?.data?.message || 'Something went wrong',
        );
      }
    };

    fetchBusinessInfo();
  }, [jobId]);

  const handlePreAccept = async (jobId: string) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to accept this job posting',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#07b107',
      cancelButtonColor: '#e74c3c',
      confirmButtonText: 'Agree',
      cancelButtonText: 'Cancel',
      background: '#ffffff',
      color: '#333333',
    }).then((result) => {
      if (result.isConfirmed) {
        handleAccept(jobId);
      }
    });
  };

  const handleAccept = async (jobId: string) => {
    try {
      const response = await acceptJob(jobId);
      console.log(response.data, 'response.data');

      Swal.fire({
        title: 'Job accepted successfully!',
        text: 'Your job has been accepted successfully.',
        icon: 'success',
        background: '#ffffff',
        color: '#333333',
        confirmButtonColor: '#07b107',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        willClose: () => {
          window.location.reload();
        },
      });
    } catch (error) {
      console.error('Error accepting job:', error);
      throw new Error(error?.response?.data?.message || 'Something went wrong');
    }
  };

  const handlePreReject = async (jobId: string) => {
    // Bước 1: Nhập lý do
    const { value: reason } = await Swal.fire({
      title: 'Enter reason to reject this job',
      input: 'textarea',
      inputLabel: 'Reason',
      inputPlaceholder: 'Type your reason here...',
      inputAttributes: {
        'aria-label': 'Type your reason here',
      },
      showCancelButton: true,
      confirmButtonText: 'Next',
      cancelButtonText: 'Cancel',
      background: '#ffffff',
      color: '#333333',
      inputValidator: (value) => {
        if (!value) {
          return 'Reason is required!';
        }
        return null;
      },
    });

    // Nếu người dùng không nhập hoặc cancel thì dừng lại
    if (!reason) return;

    // Bước 2: Xác nhận lại
    const confirm = await Swal.fire({
      title: 'Are you sure?',
      text: `You are about to reject this job.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Reject Job',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#e74c3c',
      background: '#ffffff',
      color: '#333333',
    });

    if (confirm.isConfirmed) {
      handleReject(jobId, reason);
    }
  };

  const handleReject = async (jobId: string, reason: string) => {
    try {
      const response = await rejectJob(jobId, reason);
      console.log(response.data, 'response.data');

      Swal.fire({
        title: 'Job rejected successfully!',
        text: 'Your job has been rejected successfully.',
        icon: 'success',
        background: '#ffffff',
        color: '#333333',
        confirmButtonColor: '#07b107',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        willClose: () => {
          window.location.reload();
        },
      });
    } catch (error: any) {
      console.error('Error rejecting job:', error);
      Swal.fire({
        title: 'Error',
        text: error?.message || 'Something went wrong',
        icon: 'error',
      });
    }
  };

  const handlePreBanned = async (jobId: string) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to ban this job posting',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#e74c3c',
      cancelButtonColor: '#07b107',
      confirmButtonText: 'Agree',
      cancelButtonText: 'Cancel',
      background: '#ffffff',
      color: '#333333',
    }).then((result) => {
      if (result.isConfirmed) {
        handleBanned(jobId);
      }
    });
  };

  const handleBanned = async (jobId: string) => {
    try {
      const response = await bannedJob(jobId);
      console.log(response.data, 'response.data');

      Swal.fire({
        title: 'Job banned successfully!',
        text: 'Your job has been banned successfully.',
        icon: 'success',
        background: '#ffffff',
        color: '#333333',
        confirmButtonColor: '#07b107',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        willClose: () => {
          window.location.reload();
        },
      });
    } catch (error) {
      console.error('Error banning job:', error);
      throw new Error(error?.response?.data?.message || 'Something went wrong');
    }
  };

  const handlePreSendDraft = (jobId: string) => {
    Swal.fire({
      title: 'Confirm send draft?',
      text: 'Are you sure you want to submit this job draft request?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#07b107',
      cancelButtonColor: '#e74c3c',
      confirmButtonText: 'Agree',
      cancelButtonText: 'Cancel',
      background: '#ffffff',
      color: '#333333',
    }).then((result) => {
      if (result.isConfirmed) {
        handleSendDraft(jobId);
      }
    });
  };

  const handleSendDraft = async (jobId: string) => {
    try {
      const response = await sendDraftJob(jobId);
      console.log(response.data, 'response.data');

      Swal.fire({
        title: 'Draft sent successfully!',
        text: 'Your job draft has been sent successfully.',
        icon: 'success',
        background: '#ffffff',
        color: '#333333',
        confirmButtonColor: '#07b107',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        willClose: () => {
          window.location.reload();
        },
      });
    } catch (error) {
      console.error('Error sending draft:', error);
      throw new Error(error.response?.data?.message || 'Something went wrong');
    }
  };

  console.log(status, 'status');

  return (
    <>
      <div className="clearfix" />
      {/* Title Header Start */}
      <section
        className="inner-header-title"
        style={{ backgroundImage: 'url(/assets/img/banner-10.jpg)' }}
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
              <img src={avatarUrl} className="img" alt="image" />
            </div>
            <div className="detail-status">
              {isDeleted ? (
                <span style={{ backgroundColor: 'red', color: '#fff' }}>
                  Banned
                </span>
              ) : (
                <span>{renderStatus(status)}</span>
              )}
            </div>
          </div>
          <div className="row bottom-mrg">
            <div className="col-md-8 col-sm-8">
              <div className="detail-desc-caption">
                <h4>{businessInfo.companyName}</h4>
                <span className="designation">{businessInfo.industry}</span>
                <p>{businessInfo.companyInfo}</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="get-touch">
                <h4>Get in Touch</h4>
                <ul>
                  <li>
                    <i className="fa fa-map-marker" />
                    <span>{businessInfo.address}</span>
                  </li>
                  <li>
                    <i className="fa fa-envelope" />
                    <span>{businessInfo.email}</span>
                  </li>
                  <li>
                    <i className="fa fa-globe" />
                    <span>{businessInfo.websiteUrl}</span>
                  </li>
                  <li>
                    <i className="fa fa-phone" />
                    <span>{businessInfo.phoneNumber}</span>
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
                  {nameRole === 'STUDENT' && (
                    <>
                      <a
                        href="#"
                        className="footer-btn grn-btn"
                        onClick={(e) => {
                          e.preventDefault();
                          setShowModal(true);
                        }}
                      >
                        Quick Apply
                      </a>
                      <a href="#" className="footer-btn blu-btn">
                        Add favorite
                      </a>
                    </>
                  )}

                  {nameRole === 'BUSINESS' && (
                    <>
                      {(status === -1 || status === 2) && (
                        <>
                          <div
                            onClick={() =>
                              navigate(`/business/update-job/${jobId}`)
                            }
                            className="footer-btn blu-btn"
                          >
                            Update
                          </div>

                          {status === -1 && (
                            <div
                              onClick={() => handlePreSendDraft(jobId)}
                              className="footer-btn blu-btn"
                            >
                              Send Draft
                            </div>
                          )}
                        </>
                      )}
                    </>
                  )}

                  {nameRole === 'STAFF_ADMIN' && (
                    <>
                      {status === 0 && (
                        <>
                          <button
                            className="footer-btn grn-btn"
                            onClick={() => handlePreAccept(jobId)}
                          >
                            Accept
                          </button>
                          <button
                            className="footer-btn"
                            style={{ backgroundColor: 'red', color: '#fff' }}
                            onClick={() => handlePreReject(jobId)}
                          >
                            Reject
                          </button>
                        </>
                      )}
                      {status === 1 && isDeleted !== true && (
                        <>
                          <button
                            href="#"
                            style={{
                              fontWeight: 'bold',
                              width: '126px',
                              height: '48px',
                              backgroundColor: 'red',
                              textAlign: 'center',
                              padding: '10px 0',
                              alignItems: 'center',
                              color: '#fff',
                            }}
                            className="footer-btn red-btn"
                            onClick={() => handlePreBanned(jobId)}
                          >
                            Ban
                          </button>
                        </>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="full-detail-description full-detail">
        <div className="container">
          <div className="row row-bottom">
            <h2 className="detail-title">Job Description</h2>
            <p>{jobTitle}</p>
            <ul className="detail-list">
              <li>{jobDescription}</li>
              <li>
                Salary: <span>{salary}</span>
              </li>
              <li>
                Number of positions: <span>{numberOfPositions} Positions</span>
              </li>
              <li>
                Expiration Date:{' '}
                <span>
                  {new Date(expirationDate).toLocaleDateString('en-GB', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                  })}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {showModal && <JobApplicationForm onClose={() => setShowModal(false)} />}
    </>
  );
}
