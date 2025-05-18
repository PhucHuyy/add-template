import { useEffect, useState } from "react";
import "./AppliedJobsList.css";
import {
  ApplyJobDTO,
  getMyApplyJobs,
} from "../../../services/user/Job/JobService";
import { useNavigate } from "react-router-dom";
import { getDetailJob } from "../../../service/business/jobpostings/JobPostingsService";

const AppliedJobsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [appliedJobs, setAppliedJobs] = useState<ApplyJobDTO[]>([]);
  const [status, setStatus] = useState<string>("");
  const [cursor, setCursor] = useState<string | undefined>();
  const [hasMore, setHasMore] = useState<boolean>(true);
  const navigate = useNavigate();
  const handleViewJobDetail = async (jobId: string) => {
    try {
      const data = await getDetailJob(jobId); 
      navigate(`/detail-job/${jobId}`);
    } catch (error) {
      console.error("Không thể xem chi tiết công việc", error);
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
      console.error("Failed to fetch applied jobs", error);
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
      title: "Kỹ Sư Phần Mềm/ Backend Developer/ Lập Trình Viên",
      company: "CÔNG TY CỔ PHẦN QUANTUM",
      logo: "/assets/img/banner-10.jpg",
      salary: "15 - 20 triệu",
      location: "Hà Nội",
    },
    {
      id: 2,
      title: ".NET Backend Engineer (Senior), StoreFront",
      company: "Crossian",
      logo: "/assets/img/banner-10.jpg",
      salary: "Tới 55,000 USD",
      location: "Hà Nội",
    },
    {
      id: 3,
      title: "Blockchain Backend Developer",
      company: "CÔNG TY TNHH BULL LABS",
      logo: "/assets/img/banner-10.jpg",
      salary: "1,500 - 2,500 USD",
      location: "Hà Nội",
    },
    {
      id: 4,
      title: "Full-Stack Developer With Backend Focused",
      company: "CÔNG TY TNHH MIWA TECH",
      logo: "/assets/img/banner-10.jpg",
      salary: "Thoả thuận",
      location: "Hồ Chí Minh",
    },
  ];

  return (
    <>
      <section
        className="inner-header-title"
        style={{ backgroundImage: "url(/assets/img/banner-10.jpg)" }}
      >
        <div className="container">
          <h1>Job Detail</h1>
        </div>
      </section>

      <div className="applied-jobs-container">
        <div className="applied-jobs-content">
          <div className="applied-jobs-main">
            <div className="applied-jobs-header">
              <h1 className="title">Việc làm đã ứng tuyển</h1>
              <div className="status-dropdown">
                <select
                  className="status-dropdown-select"
                  style={{
                    width: "130px",
                    height: "40px",
                    borderRadius: "5px",
                  }}
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="">Tất cả</option>
                  <option value="pending">Chờ duyệt</option>
                  <option value="viewed">Đã xem</option>
                  <option value="accepted">Được nhận</option>
                  <option value="rejected">Từ chối</option>
                </select>
              </div>
            </div>

            <div className="jobs-list">
              {appliedJobs.map((job) => (
                <div
                  className="job-item"
                  key={job.applyId}
                  onClick={() => handleViewJobDetail(job.jobId)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="company-logo">
                    <img
                      src={job.studentAvatarUrl || "/assets/img/banner-10.jpg"}
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
                        Thời gian ứng tuyển: {job.applyDate}
                      </div>
                      <div className="cv-info">
                        <span>CV đã ứng tuyển: </span>
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
                  <i className="fas fa-chevron-down"></i> Tải thêm
                </button>
              </div>
            )}
          </div>

          <div className="sidebar">
            <div className="recommended-jobs" style={{ paddingTop: "0" }}>
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
