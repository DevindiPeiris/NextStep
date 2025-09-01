import { FaCalendarAlt, FaClock } from "react-icons/fa";


const formatDate = (isoString) => {
  const date = new Date(isoString);
  return date.toLocaleDateString(); 
};

const formatTime = (isoString) => {
  const date = new Date(isoString);
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
};

const MeetingCard = ({ counsellorId, studentId, startTime, endTime, link, status }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <h2 className="text-xl font-semibold text-gray-800">
        Meeting {status === "SCHEDULED" ? "Scheduled" : status}
      </h2>
      <div className="text-gray-600 mt-2 flex items-center gap-2">
        <FaCalendarAlt className="text-black-500" />
        <span>{formatDate(startTime)}</span>
      </div>
      <div className="text-gray-600 mt-1 flex items-center gap-2">
        <FaClock className="text-black-500" />
        <span>
          {formatTime(startTime)} - {formatTime(endTime)}
        </span>
      </div>

      <div className="mt-2 text-gray-600 text-sm">
        <p>
          <span className="font-semibold">Counsellor ID:</span> {counsellorId}
        </p>
        <p>
          <span className="font-semibold">Student ID:</span> {studentId}
        </p>
      </div>

      <div className="mt-4">
        {status === "SCHEDULED" ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Join Meeting
          </a>
        ) : (
          <span className="inline-block bg-gray-400 text-white px-4 py-2 rounded">
            {status}
          </span>
        )}
      </div>
    </div>
  );
};

export default MeetingCard;