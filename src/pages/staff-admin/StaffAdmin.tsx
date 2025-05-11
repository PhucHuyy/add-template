import "./staffadmin.css";
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

export default function StaffAdmin() {
  const dispatch = useAppDispatch();
  const {
    loading,
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
            <h1 className="text-5xl font-extrabold">View Staff Admins</h1>
            <p className="mt-4 text-lg">
             
            </p>
          </div>
        </section>
      </div>

      {/* Chỉ giữ lại phần container đổi tên thành View Staff Admins */}
      <div className="container white-shadow">
        <h2 className="card-title px-4 py-6 text-2xl font-bold">View Staff Admins</h2>
        {/* Bạn có thể chèn nội dung hiển thị staff admin tại đây sau */}
      </div>
    </div>
  );
}
