import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user ||!user.username||!user.password) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="p-6 bg-white rounded-2xl shadow-lg text-center">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Please Login or Enter details correcrlt
          </h2>
          <p className="text-gray-500">You need to log in to view your profile.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="p-8 bg-white rounded-2xl shadow-xl text-center w-80">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome 👋</h2>
        <p className="text-xl text-indigo-600 font-medium">{user.username}</p>
      </div>
    </div>
  );
}

export default Profile;