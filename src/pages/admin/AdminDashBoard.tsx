import "./admindashboard.css";
import {
  countTotalPendingBusinessRequests,
  countTotalPendingJobsRequests,
  countTotalPendingRequests,
  countTotalPendingStudentRequests,
  fetchUserStats,
} from "../../features/admin/adminSlice";
import { useEffect } from "react";
import { RootState } from "../../app/store";
import { useAppDispatch } from "../../app/hook";
import { useSelector } from "react-redux";

export default function AdminDashboard() {
  const dispatch = useAppDispatch();
  const {
    userStats,
    loading,
    pendingRequestCount,
    pendingStudentCount,
    pendingBusinessCount,
    pendingJobCount,
  } = useSelector((state: RootState) => state.admin);
  useEffect(() => {
    dispatch(fetchUserStats());
    dispatch(countTotalPendingRequests());
    dispatch(countTotalPendingStudentRequests());
    dispatch(countTotalPendingBusinessRequests());
    dispatch(countTotalPendingJobsRequests(0));
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="spinner"></div>
      </div>
    );
  }

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
              {/* <p className="overview-title">User Summary</p> */}
              <p className="overview-value">
                User total: {userStats?.total ?? "..."}
              </p>
              <p className="over-view-subvalue">
                Active: {userStats?.active ?? "..."} | Inactive:{" "}
                {userStats?.inactive ?? "..."} | Banned:{" "}
                {userStats?.banned ?? "..."}
              </p>
            </div>
          </div>
          <div className="overview-box">
            <i className="fa fa-briefcase overview-icon"></i>
            <div>
              <p className="overview-value">Pending Jobs: {pendingJobCount ?? "..."}</p>
            </div>
          </div>
          <div className="overview-box">
            <i className="fa fa-tasks overview-icon"></i>
            <div>
              <p className="overview-value">
                Pending Profiles: {pendingRequestCount ?? "..."}
              </p>
              <p className="over-view-subvalue">
                Students: {pendingStudentCount ?? "..."} | Businesses:{" "}
                {pendingBusinessCount ?? "..."}
              </p>
            </div>
          </div>
        </div>

        {/* === Quick Actions & User Registrations === */}
        <div className="dashboard-row">
          {/* Quick Actions */}
          {/* <div className="dashboard-card">
            <h3 className="card-title">Quick Actions</h3>
            <button className="quick-btn">View Students</button>
            <button className="quick-btn">View Businesses</button>
            <button className="quick-btn">View Staff Admin</button>
          </div> */}

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
                  <td>
                    <a href="#" className="view-link">
                      View Details
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Sarah Lee</td>
                  <td>
                    <a href="#" className="view-link">
                      View Details
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
