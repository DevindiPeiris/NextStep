import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import CounselorCard from '../components/CounselorCard';
import CounselorModal from '../components/CounselorModal';

const counselors = [
  {
    name: 'Dr. Sarah Johnson',
    description: 'Dr. Sarah Johnson is a licensed clinical psychologist with over 10 years of experience helping students navigate academic and personal challenges.',
    image: 'https://source.unsplash.com/featured/?counselor,female',
  },
  {
    name: 'Michael Chen, LMFT',
    description: 'Michael Chen is a Licensed Marriage and Family Therapist specializing in helping students navigate relationship challenges.',
    image: 'https://source.unsplash.com/featured/?therapy,office',
  },
  {
    name: 'Dr. James Wilson',
    description: 'Dr. Wilson specializes in academic performance and learning strategies. With a Ph.D. in Educational Psychology, he helps students thrive.',
    image: 'https://source.unsplash.com/featured/?psychology,teamwork',
  },
];

const BookMeeting = () => {
  const [search, setSearch] = useState('');
  const [selectedCounselor, setSelectedCounselor] = useState(null);

  const filtered = counselors.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  // Prevent scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = selectedCounselor ? 'hidden' : 'auto';
  }, [selectedCounselor]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Find Your Counsellor</h1>
        <p className="text-gray-600 mb-6">Connect with professional counsellors who can help you navigate your challenges.</p>

        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full p-3 mb-10 border border-gray-300 rounded-lg shadow-sm"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((counselor, index) => (
            <CounselorCard
              key={index}
              name={counselor.name}
              image={counselor.image}
              description={counselor.description}
              onViewDetails={() => setSelectedCounselor(counselor)}
            />
          ))}
        </div>
      </div>

      <CounselorModal
        counselor={selectedCounselor}
        isOpen={!!selectedCounselor}
        onClose={() => setSelectedCounselor(null)}
      />
    </div>
  );
};

export default BookMeeting;
