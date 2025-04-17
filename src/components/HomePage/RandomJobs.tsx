import { jobList } from '../../data/jobList';

export default function RandomJobs() {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="main-heading">
              <p>200 New Jobs</p>
              <h2>
                New & Random <span>Jobs</span>
              </h2>
            </div>
          </div>
          <div className="row extra-mrg">
            {jobList.map((job, index) => (
              <div className="col-md-3 col-sm-6" key={index}>
                <div className="grid-view brows-job-list">
                  <div className="brows-job-company-img">
                    <img alt="" className="img-responsive" src={job.image} />
                  </div>
                  <div className="brows-job-position">
                    <h3>
                      <a href="job-detail.html">{job.title}</a>
                    </h3>
                    <p>
                      <span>{job.company}</span>
                    </p>
                  </div>
                  <div className="job-position">
                    <span className="job-num">5 Position</span>
                  </div>
                  <div className="brows-job-type">
                    <span className={job.type.toLowerCase().replace(' ', '-')}>
                      {job.type}
                    </span>
                  </div>
                  <ul className="grid-view-caption">
                    <li>
                      <div className="brows-job-location">
                        <p>
                          <i className="fa fa-map-marker" /> {job.location}
                        </p>
                      </div>
                    </li>
                    <li>
                      <p>
                        <span className="brows-job-sallery">
                          <i className="fa fa-money" /> {job.salary}
                        </span>
                      </p>
                    </li>
                  </ul>
                  {job.tag && (
                    <span className="tg-themetag tg-featuretag">{job.tag}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="clearfix" />
    </>
  );
}
