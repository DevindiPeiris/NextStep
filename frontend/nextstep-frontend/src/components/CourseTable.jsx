import { FaEdit, FaTrash } from "react-icons/fa";

const CourseTable = ({ courses, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 mt-6">
      <table className="w-full table-auto text-sm">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-3">CourseID</th>
            <th className="p-3">Title</th>
            <th className="p-3">University</th>
            <th className="p-3">Field</th>
            <th className="p-3">Type</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id} className="border-t hover:bg-gray-100">
              <td className="p-3">{course.courseId}</td>
              <td className="p-3">{course.title}</td>
              <td className="p-3">{course.university}</td>
              <td className="p-3">{course.field}</td>
              <td className="p-3">{course.type}</td>
              <td className="p-3 flex gap-3">
                <button onClick={() => onEdit(course)}>
                  <FaEdit className="text-blue-600" />
                </button>
                <button onClick={() => onDelete(course.id)}>
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

export default CourseTable;
