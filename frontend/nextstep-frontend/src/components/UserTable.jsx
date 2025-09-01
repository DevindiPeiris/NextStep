import { FaEdit, FaTrash } from "react-icons/fa";

const UserTable = ({ users, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 mt-6">
      <table className="w-full table-auto text-sm">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-3">UserID</th>
            <th className="p-3">Username</th>
            <th className="p-3">Email</th>
            <th className="p-3">Role</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-t hover:bg-gray-100">
              <td className="p-3">{user.id}</td>
              <td className="p-3">{user.username}</td>
              <td className="p-3">{user.email}</td>
              <td className="p-3">{user.role}</td>
              <td className="p-3 flex gap-3">
                <button onClick={() => onEdit(user)}>
                  <FaEdit className="text-blue-600" />
                </button>
                <button onClick={() => onDelete(user.id)}>
                  <FaTrash className="text-red-600" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;