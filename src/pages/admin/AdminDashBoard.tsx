import "./admindashboard.css";

export default function AdminDashboard() {
  return (
    <div className="flex flex-col w-full">
      {/* Banner */}
      <div className="w-full bg-gray-100 flex justify-center py-6">
        <section
          className="inner-header-title rounded-xl overflow-hidden shadow-lg w-full max-w-6xl bg-cover bg-center"
          style={{
            backgroundImage: "url(/assets/img/banner-10.jpg)",
            height: "350px",
          }}
        >
          <div className="w-full h-full flex flex-col justify-center items-center backdrop-brightness-50 text-white px-6">
            <h1 className="text-5xl font-extrabold">Admin Dashboard</h1>
            <p className="mt-4 text-lg">
              Welcome back, Admin. Here's an overview of the platform.
            </p>
          </div>
        </section>
      </div>

      {/* Nội dung chính trong khung trắng */}
      <div className="container white-shadow">
        {/* Stats */}
        <div className="overview-container">
          <div className="overview-box">
            <i className="fa fa-users overview-icon"></i>
            <div>
              <p className="overview-title">Total Users</p>
              <p className="overview-value">1,024</p>
            </div>
          </div>
          <div className="overview-box">
            <i className="fa fa-briefcase overview-icon"></i>
            <div>
              <p className="overview-title">Active Jobs</p>
              <p className="overview-value">76</p>
            </div>
          </div>
          <div className="overview-box">
            <i className="fa fa-tasks overview-icon"></i>
            <div>
              <p className="overview-title">Pending Requests</p>
              <p className="overview-value">12</p>
            </div>
          </div>
        </div>

        {/* === Quick Actions & User Registrations === */}
        <div className="dashboard-row">
          {/* Quick Actions */}
          <div className="dashboard-card">
            <h3 className="card-title">Quick Actions</h3>
            <button className="quick-btn">View Students</button>
            <button className="quick-btn">View Businesses</button>
            <button className="quick-btn">Create Staff Admin</button>
            <button className="quick-btn">Ban Student</button>
            <button className="quick-btn">View Business</button>
          </div>

          {/* Chart Placeholder */}
          <div className="dashboard-card chart-placeholder">
            <h3 className="card-title">User Registrations</h3>
            <div className="placeholder-box">[Chart Placeholder]</div>
          </div>
        </div>
        {/* === Recent Registrations & Staff Admin Overview === */}
<div className="dashboard-row">
  {/* Recent Registrations */}
  <div className="dashboard-card">
    <h3 className="card-title">Recent Registrations</h3>
    <table className="simple-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Role</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John Doe</td>
          <td>Student</td>
          <td className="status-active">Active</td>
        </tr>
        <tr>
          <td>Jane Smith</td>
          <td>Business</td>
          <td className="status-pending">Pending</td>
        </tr>
        <tr>
          <td>Alice Johns</td>
          <td>Student</td>
          <td className="status-active">Active</td>
        </tr>
      </tbody>
    </table>
  </div>

  {/* Staff Admin Overview */}
  <div className="dashboard-card">
    <h3 className="card-title">Staff Admin Overview</h3>
    <table className="simple-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Michael Brown</td>
          <td><a href="#" className="view-link">View Details</a></td>
        </tr>
        <tr>
          <td>Sarah Lee</td>
          <td><a href="#" className="view-link">View Details</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

      </div>

      
    </div>
  );
}
