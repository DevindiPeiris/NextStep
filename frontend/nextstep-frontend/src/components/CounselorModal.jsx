import { useState } from 'react';
import TimeSlot from './TimeSlot';

const CounselorModal = ({ counselor, isOpen, onClose }) => {
  const [tab, setTab] = useState('about');

  if (!isOpen || !counselor) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center px-4">
      <div className="bg-white rounded-xl w-full max-w-2xl p-6 relative">
        <button
          className="absolute top-4 right-4 text-gray-500 text-2xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>

        <h2 className="text-2xl font-semibold mb-4">{counselor.name}</h2>

        {/* Tabs */}
        <div className="flex border-b mb-4">
          <button
            onClick={() => setTab('about')}
            className={`px-4 py-2 font-medium ${tab === 'about' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-600'}`}
          >
            View Details
          </button>
          <button
            onClick={() => setTab('availability')}
            className={`px-4 py-2 font-medium ${tab === 'availability' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-600'}`}
          >
            Check Availability
          </button>
        </div>

        {/* Content */}
        {tab === 'about' ? (
          <div>
            <img src={counselor.image} alt={counselor.name} className="w-40 rounded-lg mb-4" />
            <p className="text-gray-700">{counselor.description}</p>
          </div>
        ) : (
          <div>
            <p className="font-medium text-lg mb-2">Available Appointment Slots</p>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Monday</p>
                <div className="grid grid-cols-2 gap-4 mt-1">
                  <TimeSlot time="9:00 - 10:00 AM" />
                  <TimeSlot time="1:00 - 2:00 PM" />
                </div>
              </div>
              <div>
                <p className="font-semibold">Wednesday</p>
                <div className="grid grid-cols-2 gap-4 mt-1">
                  <TimeSlot time="11:00 - 12:00 PM" />
                  <TimeSlot time="3:00 - 4:00 PM" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CounselorModal;
