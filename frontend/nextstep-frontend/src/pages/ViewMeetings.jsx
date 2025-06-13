import Navbar from '../components/Navbar';
import MeetingCard from '../components/MeetingCard';

const mockMeetings = [
  {
    id: 1,
    title: "Career Guidance with Mr. Silva",
    date: "2025-06-15",
    time: "10:00 AM",
    link: "https://meet.google.com/xyz-abc-def"
  },
  {
    id: 2,
    title: "Resume Review with Jane",
    date: "2025-06-18",
    time: "2:30 PM",
    link: "https://zoom.us/j/1234567890"
  }
];

const ViewMeetings = () => {
  return (
    <div className="min-h-screen bg-gray-100 mr-25 ml-25">
      <Navbar />
      <div className="max-w-3xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Your Scheduled Meetings</h1>

        {mockMeetings.map(meeting => (
          <MeetingCard
            key={meeting.id}
            title={meeting.title}
            date={meeting.date}
            time={meeting.time}
            link={meeting.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ViewMeetings;
