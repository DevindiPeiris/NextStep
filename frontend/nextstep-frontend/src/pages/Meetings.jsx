import Navbar from '../components/Navbar';
import ServiceCard from '../components/ServiceCard';
import { FaCalendarPlus, FaCalendarCheck } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Meetings = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-2xl mx-auto px-4 py-20">
        <h1 className="text-3xl font-bold text-center mb-15">Manage Your Meetings</h1>

        <div className="flex flex-col space-y-12">
          <div onClick={() => navigate('/book-meeting')} className="cursor-pointer">
            <ServiceCard
              icon={<FaCalendarPlus />}
              title="Book a New Meeting"
              description="Schedule a video call with a career mentor or professional."
            />
          </div>

          <div onClick={() => navigate('/my-meetings')} className="cursor-pointer">
            <ServiceCard
              icon={<FaCalendarCheck />}
              title="View Booked Meetings"
              description="See details of meetings you’ve scheduled previously."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meetings;
