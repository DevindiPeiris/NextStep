import { useState, useEffect } from "react";
import { getCourses, addCourse, deleteCourse, updateCourse } from "../api/courseApi";
import AdminNavbar from "../components/AdminNavbar";
import CourseTable from "../components/CourseTable";
import { FaPlus } from "react-icons/fa";

const AdminCourse = () => {
  const [courses, setCourses] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState(null);
  const [newCourse, setNewCourse] = useState({
    title: "",
    university: "",
    field: "",
    type: "",
    requirements: "",
  });

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = () => {
    getCourses()
      .then((res) => setCourses(res.data))
      .catch((err) => console.error("Error fetching courses:", err));
  };

  const handleSubmitCourse = (e) => {
    e.preventDefault();

    const coursePayload = {
      ...newCourse,
      courseId: selectedCourseId,
      requirements: newCourse.requirements.replace(/\n/g, ", "),
    };

    const action = editMode ? updateCourse : addCourse;

    action(coursePayload)
      .then(() => {
        fetchCourses();
        setNewCourse({
          title: "",
          university: "",
          field: "",
          type: "",
          requirements: "",
        });
        setEditMode(false);
        setSelectedCourseId(null);
        setShowForm(false);
      })
      .catch((err) =>
        console.error(`${editMode ? "Update" : "Add"} course error:`, err)
      );
  };

  const handleDelete = (id) => {
    const courseToDelete = courses.find((c) => c.id === id);
    if (!courseToDelete) return;

    deleteCourse(courseToDelete)
      .then(() => fetchCourses())
      .catch((err) => console.error("Error deleting course:", err));
  };

  const handleEdit = (course) => {
    setNewCourse({
      title: course.title,
      university: course.university,
      field: course.field,
      type: course.type,
      requirements: course.requirements.replace(/,\s*/g, "\n"),
    });
    setSelectedCourseId(course.courseId);
    setEditMode(true);
    setShowForm(true);
  };

  return (
    <div className="flex">
      <AdminNavbar />

      <div className="flex-1 bg-gray-100 p-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Course Management</h2>
          <button
            onClick={() => {
              setShowForm(!showForm);
              setNewCourse({
                title: "",
                university: "",
                field: "",
                type: "",
                requirements: "",
              });
              setEditMode(false);
              setSelectedCourseId(null);
            }}
            className="flex items-center gap-2 px-4 py-2 bg-[#2560E0] text-white rounded hover:bg-gray-700"
          >
            <FaPlus />
            {editMode ? "Cancel Edit" : "Add New Course"}
          </button>
        </div>

        {showForm && (
          <form
            onSubmit={handleSubmitCourse}
            className="bg-white rounded-lg shadow p-6 mb-6 space-y-4"
          >
            <input
              type="text"
              placeholder="Course Title"
              className="w-full p-2 border rounded"
              value={newCourse.title}
              onChange={(e) =>
                setNewCourse({ ...newCourse, title: e.target.value })
              }
              required
            />
            <input
              type="text"
              placeholder="University"
              className="w-full p-2 border rounded"
              value={newCourse.university}
              onChange={(e) =>
                setNewCourse({ ...newCourse, university: e.target.value })
              }
              required
            />
            <input
              type="text"
              placeholder="Field"
              className="w-full p-2 border rounded"
              value={newCourse.field}
              onChange={(e) =>
                setNewCourse({ ...newCourse, field: e.target.value })
              }
              required
            />
            <input
              type="text"
              placeholder="Type (e.g., Government, Private)"
              className="w-full p-2 border rounded"
              value={newCourse.type}
              onChange={(e) =>
                setNewCourse({ ...newCourse, type: e.target.value })
              }
              required
            />
            <textarea
              placeholder="Requirements (one per line)"
              className="w-full p-2 border rounded"
              rows={4}
              value={newCourse.requirements}
              onChange={(e) =>
                setNewCourse({
                  ...newCourse,
                  requirements: e.target.value,
                })
              }
              required
            ></textarea>

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
            >
              {editMode ? "Update Course" : "Submit"}
            </button>
          </form>
        )}

        <CourseTable
          courses={courses}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      </div>
    </div>
  );
};

export default AdminCourse;
