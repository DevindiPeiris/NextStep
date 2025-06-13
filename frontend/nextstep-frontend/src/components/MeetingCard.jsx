import { FaCalendarAlt, FaClock} from 'react-icons/fa';

const MeetingCard = ({ title, date, time, platform, link }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      <div className="text-gray-600 mt-2 flex items-center gap-2">
        <FaCalendarAlt className="text-black-500" />
        <span>{date}</span>
      </div>
      <div className="text-gray-600 mt-1 flex items-center gap-2">
        <FaClock className="text-black-500" />
        <span>{time}</span>
      </div>
      <div className="mt-4">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Join Meeting
        </a>
      </div>
    </div>
  );
};

export default MeetingCard;
