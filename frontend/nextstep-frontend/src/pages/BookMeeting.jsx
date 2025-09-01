import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import CounselorCard from "../components/CounselorCard";
import CounselorModal from "../components/CounselorModal";
import { getCounsellors, getCounsellorProfile } from "../api/counsellorApi";
import CounsellorJPG from '../assets/counsellor.png'

const BookMeeting = () => {
  const [search, setSearch] = useState("");
  const [selectedCounsellor, setSelectedCounsellor] = useState(null);
  const [counsellors, setCounsellors] = useState([]);

  useEffect(() => {
    getCounsellors()
      .then(async (res) => {
        const users = res.data;
        const merged = await Promise.all(
          users.map(async (u) => {
            try {
              const profileRes = await getCounsellorProfile(u.id);
              return {
                ...u,
                fullName: profileRes.data.fullName,
                description: profileRes.data.description,
              };
            } catch {
              return {
                ...u,
                fullName: u.username, 
                description: "No profile yet",
              };
            }
          })
        );
        setCounsellors(merged);
      })
      .catch((err) => console.error("Error fetching counsellors:", err));
  }, []);

  const filtered = counsellors.filter((c) =>
    (c.fullName || c.username).toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    document.body.style.overflow = selectedCounsellor ? "hidden" : "auto";
  }, [selectedCounsellor]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Find Your Counsellor
        </h1>
        <p className="text-gray-600 mb-6">
          Connect with professional counsellors available to support you.
        </p>

        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 mb-10 border border-gray-300 rounded-lg shadow-sm"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((c) => (
            <CounselorCard
              key={c.id}
              name={c.fullName} 
              image={CounsellorJPG}
              description={c.description}
              onViewDetails={() => setSelectedCounsellor(c)}
            />
          ))}
        </div>
      </div>

      <CounselorModal
        counselor={selectedCounsellor}
        isOpen={!!selectedCounsellor}
        onClose={() => setSelectedCounsellor(null)}
      />
    </div>
  );
};

export default BookMeeting;