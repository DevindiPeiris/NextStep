import { NavLink } from "react-router-dom";
import { FaTachometerAlt, FaUsers, FaBook } from "react-icons/fa";

const AdminNavbar = () => {
  return (
    <div className="h-screen w-64 bg-gray-900 text-white flex flex-col p-4">
      {/* Adjusted bottom margin for alignment */}
      <h1 className="text-2xl font-bold mb-20 mt-5 text-center">NextStep</h1>

      <nav className="flex flex-col gap-2">
        <NavLink
          to="/admindashboard"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-lg transition ${
              isActive ? "bg-gray-700" : "hover:bg-gray-800"
            }`
          }
        >
          <FaTachometerAlt />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/admin/users"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-lg transition ${
              isActive ? "bg-gray-700" : "hover:bg-gray-800"
            }`
          }
        >
          <FaUsers />
          <span>User Management</span>
        </NavLink>

        <NavLink
          to="/admincourse"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-lg transition ${
              isActive ? "bg-gray-700" : "hover:bg-gray-800"
            }`
          }
        >
          <FaBook />
          <span>Course Management</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default AdminNavbar;
