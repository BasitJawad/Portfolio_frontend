import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout, fetchUserDetails } from "../Redux/Slicers/loginSlice";
import { useNavigate } from "react-router-dom";
import Editor from "../Components/Editor";

const AdminPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userName, profilePic, isLoggedIn } = useSelector((state) => state.Login);

  useEffect(() => {
    if (isLoggedIn) {
      const userId = sessionStorage.getItem("userId");
      if (userId) {
        dispatch(fetchUserDetails(userId));
      }
    }
  }, [isLoggedIn]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/Login");
  };

  return (
    <>
      {isLoggedIn && (
        <div className="min-h-screen bg-[#111827] flex flex-col items-center p-6 md:p-10 space-y-8">

          {/* Welcome and Profile Section */}
          <div className="w-full flex flex-col md:flex-row items-center justify-between bg-white rounded-3xl shadow-xl p-6 md:p-10">
            <div className="text-center md:text-left space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-teal-600">Welcome, {userName || "Guest"}!</h2>
              <p className="text-gray-500 text-sm md:text-base">Here’s your admin dashboard.</p>
            </div>

            <div className="mt-6 md:mt-0">
              {profilePic && (
                <img
                  src={profilePic}
                  alt="Profile"
                  className="w-40 h-40 md:w-60 md:h-60 object-cover rounded-full border-4 border-teal-300 shadow-md"
                />
              )}

            </div>
          </div>

          {/* Editor Section */}
          <div className="w-full bg-white rounded-3xl shadow-xl p-6 md:p-10">
            <Editor />
          </div>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3 rounded-full shadow-md transition duration-300"
          >
            Logout
          </button>
        </div>
      )}
    </>
  );
};

export default AdminPage;
