import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import MeetingCard from "../components/MeetingCard";
import { getStudentMeetings, getCounsellorMeetings } from "../api/meetingAPI";

const ViewMeetings = () => {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    const role = localStorage.getItem("role");
    const userId = localStorage.getItem("userId"); 

    if (role === "STUDENT") {
      getStudentMeetings(userId)
        .then((res) => setMeetings(res.data))
        .catch((err) => console.error("Error fetching student meetings:", err));
    } else if (role === "COUNSELLOR") {
      getCounsellorMeetings(userId)
        .then((res) => setMeetings(res.data))
        .catch((err) => console.error("Error fetching counsellor meetings:", err));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-3xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Your Scheduled Meetings</h1>

        {meetings.length > 0 ? (
          meetings.map((meeting) => (
            <MeetingCard
              key={meeting.id}
              counsellorId={meeting.counsellorId}
              studentId={meeting.studentId}
              startTime={meeting.startTime}
              endTime={meeting.endTime}
              link={meeting.meetingUrl}
              status={meeting.status}
            />
          ))
        ) : (
          <p className="text-center text-gray-600">No meetings scheduled.</p>
        )}
      </div>
    </div>
  );
};

export default ViewMeetings;