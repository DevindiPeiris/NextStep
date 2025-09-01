import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import CourseCard from "../components/CourseCard";
import { getCourses } from "../api/courseApi";

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses()
      .then((res) => setCourses(res.data))
      .catch((err) => console.error("Error fetching courses:", err));
  }, []);

  const filteredCourses = courses.filter((course) =>
    [course.title, course.university, course.field]
      .some((val) => val.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-100  ">
      <Navbar />
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Explore Courses
        </h1>

        
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search by University, Course, or Field"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        
        <div className="flex flex-col gap-6">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                title={course.title}
                university={course.university}
                field={course.field}
                type={course.type}
                requirements={Array.isArray(course.requirements)
                  ? course.requirements
                  : course.requirements.split(", ")}
              />
            ))
          ) : (
            <p className="text-center text-gray-500">No matching courses found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Courses;
