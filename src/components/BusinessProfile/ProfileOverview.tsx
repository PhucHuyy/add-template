import '../../pages/identity/user/business/BusinessProfile.css';

export default function ProfileOverview({ user, isApproved }) {
  return (
    <>
      <section className="detail-desc advance-detail-pr gray-bg">
        <div className="container white-shadow profile-box-centered text-center">
          {user ? (
            <>
              <div className="profile-header">
                <div className="avatar-wrapper">
                  <img
                    src={user.picture || '/assets/img/can-1.png'}
                    className="avatar-img"
                    alt="Avatar"
                  />
                  <a href="#" className="edit-avatar" title="edit">
                    <i className="fa fa-pencil"></i>
                  </a>
                </div>
                {isApproved ? (
                  <span className="badge-active">Active Now</span>
                ) : (
                  <span className="badge-inactive">Pending</span>
                )}
                {/* <span className="badge-active">Active Now</span> */}
              </div>

              <h4 className="username">{user.username}</h4>
              <span className="designation">{user.email}</span>

              <div className="profile-stats row">
                <div className="col-md-4">
                  <div className="stat-box">
                    <strong className="stat-number stat-red">85</strong>
                    <div className="stat-label">New Post</div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="stat-box">
                    <strong className="stat-number stat-blue">110</strong>
                    <div className="stat-label">Job Applied</div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="stat-box">
                    <strong className="stat-number stat-green">120</strong>
                    <div className="stat-label">Invitation</div>
                  </div>
                </div>
              </div>

              <div className="detail-footer-social">
                <div>
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </div>
                <div>
                  <a href="#">
                    <i className="fa fa-google-plus"></i>
                  </a>
                </div>
                <div>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </div>
                <div>
                  <a href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </div>
                <div>
                  <a href="#">
                    <i className="fa fa-instagram"></i>
                  </a>
                </div>
              </div>

              <div className="button-group">
                {isApproved ? (
                  <>
                    <button className="footer-btn grn-btn">Edit Now</button>
                    <button className="footer-btn blu-btn">Save Draft</button>
                  </>
                ) : (
                  <button className="footer-btn grn-btn" disabled>
                    Edit Now (Disabled)
                  </button>
                )}
                {/* <a href="#" className="footer-btn grn-btn">
                  Edit Now
                </a> */}
                {/* <button className="footer-btn blu-btn">Save Draft</button> */}
              </div>
            </>
          ) : (
            <div className="text-center py-5">
              <p className="text-danger">User information not found.</p>
              <a href="/login" className="btn btn-primary mt-3">
                Log back in
              </a>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
