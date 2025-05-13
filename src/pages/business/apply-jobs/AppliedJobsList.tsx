import { useState } from 'react';
import './AppliedJobsList.css';

const AppliedJobsList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const appliedJobs = [
    {
      id: 1,
      title: 'Thực Tập Sinh Java Backend',
      company:
        'Công ty Cổ phần đầu tư phát triển công nghệ ứng dụng Toàn Cầu (Hyperlogy)',
      logo: '/assets/img/banner-10.jpg',
      applicationDate: '26-06-2024 23:12',
      status: 'Thoả thuận',
      cv: 'CV TopCV',
    },
    {
      id: 2,
      title: 'Thực Tập Sinh Java',
      company: 'CÔNG TY CỔ PHẦN TECHASIANS',
      logo: '/assets/img/banner-10.jpg',
      applicationDate: '06-06-2024 22:30',
      status: 'Tới 3 triệu',
      cv: 'CV TopCV',
    },
    {
      id: 3,
      title: 'Thực Tập Sinh Java',
      company: 'CÔNG TY TNHH MONSTARLAB VIỆT NAM',
      logo: '/assets/img/banner-10.jpg',
      applicationDate: '06-06-2024 22:30',
      status: '1.5 - 5 triệu',
      cv: 'CV TopCV',
    },
    {
      id: 4,
      title: 'Thực Tập Sinh Java Developers',
      company: 'Công ty Cổ phần Atomi Digital',
      logo: '/assets/img/banner-10.jpg',
      applicationDate: '13-04-2024 12:25',
      status: 'Thoả thuận',
      cv: 'CV TopCV',
      viewedByRecruiter: true,
    },
  ];

  const recommendedJobs = [
    {
      id: 1,
      title: 'Kỹ Sư Phần Mềm/ Backend Developer/ Lập Trình Viên',
      company: 'CÔNG TY CỔ PHẦN QUANTUM',
      logo: '/assets/img/banner-10.jpg',
      salary: '15 - 20 triệu',
      location: 'Hà Nội',
    },
    {
      id: 2,
      title: '.NET Backend Engineer (Senior), StoreFront',
      company: 'Crossian',
      logo: '/assets/img/banner-10.jpg',
      salary: 'Tới 55,000 USD',
      location: 'Hà Nội',
    },
    {
      id: 3,
      title: 'Blockchain Backend Developer',
      company: 'CÔNG TY TNHH BULL LABS',
      logo: '/assets/img/banner-10.jpg',
      salary: '1,500 - 2,500 USD',
      location: 'Hà Nội',
    },
    {
      id: 4,
      title: 'Full-Stack Developer With Backend Focused',
      company: 'CÔNG TY TNHH MIWA TECH',
      logo: '/assets/img/banner-10.jpg',
      salary: 'Thoả thuận',
      location: 'Hồ Chí Minh',
    },
  ];

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

      <div className="applied-jobs-container">
        <div className="applied-jobs-content">
          <div className="applied-jobs-main">
            <div className="applied-jobs-header">
              <h1 className="title">Việc làm đã ứng tuyển</h1>
              <div className="status-dropdown">
                <select
                  className="status-dropdown-select"
                  style={{
                    width: '130px',
                    height: '40px',
                    borderRadius: '5px',
                  }}
                >
                  <option value="">Trạng thái</option>
                  <option value="applied">Đã ứng tuyển</option>
                  <option value="interview">Phỏng vấn</option>
                  <option value="offer">Được nhận</option>
                  <option value="rejected">Từ chối</option>
                </select>
              </div>
            </div>

            <div className="jobs-list">
              {appliedJobs.map((job) => (
                <div className="job-item" key={job.id}>
                  <div className="company-logo">
                    <img src={`${job.logo}`} alt={job.company} />
                  </div>
                  <div className="job-details">
                    <div className="job-header">
                      <h2 className="job-title">{job.title}</h2>
                      {job.status && (
                        <span
                          className={`job-status ${
                            job.status === 'Thoả thuận' ? 'negotiable' : ''
                          }`}
                        >
                          {job.status === 'Thoả thuận' ? (
                            <i className="fas fa-dollar-sign"></i>
                          ) : null}
                          {job.status}
                        </span>
                      )}
                    </div>
                    <div className="company-name">{job.company}</div>
                    <div className="application-info">
                      <div className="timestamp">
                        Thời gian ứng tuyển: {job.applicationDate}
                      </div>
                      <div className="cv-info">
                        <span>CV đã ứng tuyển: </span>
                        <a href="#" className="cv-link">
                          {job.cv}
                        </a>
                      </div>
                    </div>

                    <div className="job-actions">
                      {job.viewedByRecruiter ? (
                        <div className="recruiter-viewed">
                          <span className="viewed-status">
                            NTD đã xem hồ sơ
                          </span>
                        </div>
                      ) : (
                        <div className="application-date">
                          <span className="applied-status">
                            Đã ứng tuyển ({job.applicationDate})
                          </span>
                        </div>
                      )}
                      <div className="action-buttons">
                        <button className="view-cv-button">
                          <i className="fas fa-eye"></i>
                          <span>Xem CV</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pagination">
              <button className="pagination-prev">
                <i className="fas fa-chevron-left"></i>
              </button>
              <button
                className={`pagination-number ${
                  currentPage === 1 ? 'active' : ''
                }`}
              >
                1
              </button>
              <button
                className={`pagination-number ${
                  currentPage === 2 ? 'active' : ''
                }`}
              >
                2
              </button>
              <button className="pagination-next">
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>

          <div className="sidebar">
            <div className="recommended-jobs" style={{ paddingTop: '0' }}>
              <h2 className="sidebar-title">Gợi ý việc làm phù hợp</h2>

              <div className="recommended-jobs-list">
                {recommendedJobs.map((job) => (
                  <div className="recommended-job-item" key={job.id}>
                    <div className="company-logo">
                      <img src={`${job.logo}`} alt={job.company} />
                    </div>
                    <div className="recommended-job-main">
                      <div className="recommended-job-details">
                        <h3 className="recommended-job-title">{job.title}</h3>
                        <p className="recommended-company-name">
                          {job.company}
                        </p>
                        <div className="job-meta">
                          <span className="salary">{job.salary}</span>
                          <span className="location">{job.location}</span>
                        </div>
                      </div>
                      <button className="save-job-button">
                        <i className="far fa-heart"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppliedJobsList;
