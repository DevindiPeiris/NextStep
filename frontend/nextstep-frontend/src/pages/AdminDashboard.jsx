import AdminNavbar from "../components/AdminNavbar";
import { FaUserCircle } from "react-icons/fa";

const AdminDashboard = () => {
  return (
    <div className="flex">
      <AdminNavbar />

      <div className="flex-1 bg-gray-100 p-8">
        {/* Profile section */}
        <div className="flex items-center gap-4 mb-8">
          <FaUserCircle className="text-5xl text-gray-600" />
          <div>
            <p className="text-xl font-semibold">Hi, Admin</p>
            <p className="text-sm text-gray-500">Welcome back to the dashboard</p>
          </div>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          {/* Students */}
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center">
            <h3 className="text-lg font-semibold mb-2 text-gray-700">Current Students</h3>
            <p className="text-3xl font-bold text-blue-600">120</p>
          </div>

          {/* Meetings */}
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center">
            <h3 className="text-lg font-semibold mb-2 text-gray-700">Current Meetings</h3>
            <p className="text-3xl font-bold text-green-600">35</p>
          </div>

          {/* Counselors */}
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center">
            <h3 className="text-lg font-semibold mb-2 text-gray-700">Counselors</h3>
            <p className="text-3xl font-bold text-purple-600">8</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
