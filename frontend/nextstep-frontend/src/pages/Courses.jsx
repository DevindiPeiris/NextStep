import { useState } from "react";
import Navbar from "../components/Navbar";
import CourseCard from "../components/CourseCard"; 

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const courses = [
    {
      id: 1,
      title: "Bachelor of Science Honours in Information Technology & Management",
      university: "University of Moratuwa, Sri Lanka",
      field: "Information Technology",
      type: "Government",
      requirements: [
        "At least ‘C’ grades in two of the following subjects at the G.C.E. (Advanced Level) Examination. (Higher Mathematics, Combined Mathematics, Mathematics, Physics, Chemistry, Accounting, Business Statistics, Information & Communication Technology).",
        "At least Credit Pass for English and Mathematics at the G.C.E. (Ordinary Level) Examination.",
      ],
    },
    {
      id: 2,
      title: "Bachelor of Business Administration",
      university: "University of Colombo, Sri Lanka",
      field: "Business",
      type: "Government",
      requirements: [
        "At least ‘S’ grades in three subjects at the G.C.E. (Advanced Level) in Commerce stream.",
        "Credit pass in Mathematics and English at the G.C.E. (Ordinary Level).",
      ],
    },
    // Add more course objects here
  ];

  const filteredCourses = courses.filter((course) =>
    [course.title, course.university, course.field]
      .some((val) => val.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-100 mr-25 ml-25">
      <Navbar />
      <div className="max-w-6xl mx-auto p-6">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Explore Courses
        </h1>

        {/* Search bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search by University, Course, or Field"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Course Cards */}
        <div className="flex flex-col gap-6">
            {filteredCourses.length > 0 ? (
                filteredCourses.map((course) => (
                <CourseCard
                    key={course.id}
                    title={course.title}
                    university={course.university}
                    field={course.field}
                    type={course.type}
                    requirements={course.requirements}
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
