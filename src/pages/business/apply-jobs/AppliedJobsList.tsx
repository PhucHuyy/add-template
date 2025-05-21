import { useEffect, useState } from 'react';
import './AppliedJobsList.css';
import {
  ApplyJobDTO,
  getMyApplyJobs,
} from '../../../services/user/Job/JobService';
import { useNavigate } from 'react-router-dom';
import { getDetailJob } from '../../../service/business/jobpostings/JobPostingsService';

const AppliedJobsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [appliedJobs, setAppliedJobs] = useState<ApplyJobDTO[]>([]);
  const [status, setStatus] = useState<string>('');
  const [cursor, setCursor] = useState<string | undefined>();
  const [hasMore, setHasMore] = useState<boolean>(true);
  const navigate = useNavigate();
  const handleViewJobDetail = async (jobId: string) => {
    try {
      const data = await getDetailJob(jobId);
      navigate(`/detail-job/${jobId}`);
    } catch (error) {
      console.error('Cannot view job details', error);
    }
  };
  const fetchJobs = async () => {
    try {
      const response = await getMyApplyJobs(status, cursor, 10);
      const newJobs = response.data.myApplyJobs;
      setAppliedJobs((prev) => [...prev, ...newJobs]);
      setCursor(response.data.nextCursor || undefined);
      if (newJobs.length < 10) setHasMore(false);
    } catch (error) {
      console.error('Failed to fetch applied jobs', error);
    }
  };

  useEffect(() => {
    setAppliedJobs([]);
    setCursor(undefined);
    setHasMore(true);
    fetchJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  const recommendedJobs = [
    {
      id: 1,
      title: 'Software Engineer/ Backend Developer/ Programmer',
      company: 'QUANTUM JOINT STOCK COMPANY',
      logo: '/assets/img/banner-10.jpg',
      salary: '15 - 20 million',
      location: 'Hanoi',
    },
    {
      id: 2,
      title: '.NET Backend Engineer (Senior), StoreFront',
      company: 'Crossian',
      logo: '/assets/img/banner-10.jpg',
      salary: 'Up to 55,000 USD',
      location: 'Hanoi',
    },
    {
      id: 3,
      title: 'Blockchain Backend Developer',
      company: 'BULL LABS LLC',
      logo: '/assets/img/banner-10.jpg',
      salary: '1,500 - 2,500 USD',
      location: 'Hanoi',
    },
    {
      id: 4,
      title: 'Full-Stack Developer With Backend Focused',
      company: 'MIWA TECH COMPANY LIMITED',
      logo: '/assets/img/banner-10.jpg',
      salary: 'Negotiable',
      location: 'Ho Chi Minh',
    },
  ];

  return (
    <>
      <section
        className="inner-header-title"
        style={{ backgroundImage: 'url(/assets/img/banner-10.jpg)' }}
      >
        <div className="container">
          <h1>Job Details</h1>
        </div>
      </section>

      <div className="applied-jobs-container">
        <div className="applied-jobs-content">
          <div className="applied-jobs-main">
            <div className="applied-jobs-header">
              <h1 className="title">Jobs applied for</h1>
              <div className="status-dropdown">
                <select
                  className="status-dropdown-select"
                  style={{
                    width: '130px',
                    height: '40px',
                    borderRadius: '5px',
                  }}
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="">All</option>
                  <option value="pending">Waiting for approval</option>
                  <option value="viewed">Viewed</option>
                  <option value="accepted">Accepted</option>
                  <option value="rejected">Reject</option>
                </select>
              </div>
            </div>

            <div className="jobs-list">
              {appliedJobs.map((job) => (
                <div
                  className="job-item"
                  key={job.applyId}
                  onClick={() => handleViewJobDetail(job.jobId)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="company-logo">
                    <img
                      src={job.studentAvatarUrl || '/assets/img/banner-10.jpg'}
                      alt={job.companyName}
                    />
                  </div>
                  <div className="job-details">
                    <div className="job-header">
                      <h2 className="job-title">{job.jobTitle}</h2>
                      <span className={`job-status ${job.applyStatus}`}>
                        {job.applyStatus}
                      </span>
                    </div>
                    <div className="company-name">{job.companyName}</div>
                    <div className="application-info">
                      <div className="timestamp">
                        Application period: {job.applyDate}
                      </div>
                      <div className="cv-info">
                        <span>Applied CV: </span>
                        <span>{job.cvId}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {hasMore && (
              <div className="pagination">
                <button className="pagination-next" onClick={fetchJobs}>
                  <i className="fas fa-chevron-down"></i> Load more
                </button>
              </div>
            )}
          </div>

          <div className="sidebar">
            <div className="recommended-jobs" style={{ paddingTop: '0' }}>
              <h2 className="sidebar-title">Suggested suitable jobs</h2>

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
