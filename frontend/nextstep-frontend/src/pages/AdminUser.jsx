import { useState, useEffect } from "react";
import { getUsers, addUser, updateUser, deleteUser } from "../api/userApi";
import AdminNavbar from "../components/AdminNavbar";
import UserTable from "../components/UserTable";
import { FaPlus } from "react-icons/fa";

const AdminUser = () => {
  const [users, setUsers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
    role: "COUNSELLOR", 
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    getUsers()
      .then((res) => setUsers(res.data))
      .catch((err) => console.error("Error fetching users:", err));
  };

  const handleSubmitUser = (e) => {
    e.preventDefault();

    const action = editMode
      ? () => updateUser(selectedUserId, newUser, newUser.role)
      : () => addUser(newUser, newUser.role);

    action()
      .then(() => {
        fetchUsers();
        setNewUser({ username: "", email: "", password: "", role: "COUNSELLOR" });
        setEditMode(false);
        setSelectedUserId(null);
        setShowForm(false);
      })
      .catch((err) =>
        console.error(`${editMode ? "Update" : "Add"} user error:`, err)
      );
  };

  const handleDelete = (id) => {
    deleteUser(id)
      .then(() => fetchUsers())
      .catch((err) => console.error("Error deleting user:", err));
  };

  const handleEdit = (user) => {
    setNewUser({
      username: user.username,
      email: user.email,
      password: "", // leave blank for edit
      role: user.role,
    });
    setSelectedUserId(user.id);
    setEditMode(true);
    setShowForm(true);
  };

  return (
    <div className="flex">
      <AdminNavbar />

      <div className="flex-1 bg-gray-100 p-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">User Management</h2>
          <button
            onClick={() => {
              setShowForm(!showForm);
              setNewUser({ username: "", email: "", password: "", role: "COUNSELLOR" });
              setEditMode(false);
              setSelectedUserId(null);
            }}
            className="flex items-center gap-2 px-4 py-2 bg-[#2560E0] text-white rounded hover:bg-gray-700"
          >
            <FaPlus />
            {editMode ? "Cancel Edit" : "Add New User"}
          </button>
        </div>

        {showForm && (
          <form
            onSubmit={handleSubmitUser}
            className="bg-white rounded-lg shadow p-6 mb-6 space-y-4"
          >
            <input
              type="text"
              placeholder="Username"
              className="w-full p-2 border rounded"
              value={newUser.username}
              onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded"
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              required
            />
            {!editMode && (
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 border rounded"
                value={newUser.password}
                onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                required
              />
            )}
            <select
              className="w-full p-2 border rounded"
              value={newUser.role}
              onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
            >
              <option value="COUNSELLOR">Counsellor</option>
              <option value="ADMIN">Admin</option>
            </select>

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
            >
              {editMode ? "Update User" : "Submit"}
            </button>
          </form>
        )}

        <UserTable users={users} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
    </div>
  );
};

export default AdminUser;