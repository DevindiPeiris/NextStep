import { useEffect, useState } from "react";
import Logo from '../assets/NextStepLogo2.png'
import {
  getCounsellorProfile,
  saveCounsellorProfile,
  getMeetings,
} from "../api/counsellorApi";
import AvailabilityPicker from "../components/AvailabilityPicker"; 

const CounsellorHome = () => {
  const counsellorId = localStorage.getItem("userId");

  
  const [fullName, setFullName] = useState("");
  const [description, setDescription] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState("");
  const [meetings, setMeetings] = useState([]);

  
  useEffect(() => {
    if (counsellorId) {
      getCounsellorProfile(counsellorId)
        .then((res) => {
          setFullName(res.data.fullName || "");
          setDescription(res.data.description || "");
        })
        .catch(() => console.log("No profile yet."));

      getMeetings(counsellorId)
        .then((res) => setMeetings(res.data || []))
        .catch(() => console.log("No meetings found."));
    }
  }, [counsellorId]);

  const handleSaveProfile = async () => {
    try {
      await saveCounsellorProfile(counsellorId, { fullName, description });
      setIsEditing(false);
      setMessage("Profile saved successfully");
    } catch (err) {
      console.error("Error saving profile", err);
      setMessage("Failed to save");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-8">
      <div className="flex  justify-center">
        <img src={Logo} className="w-[25%]"/>
      </div>
      <div>
        <h1 className="text-3xl font-bold text-center mb-15">Hello {fullName} ! Welcome Back ....</h1>
      </div>
      <div className="bg-white p-6 rounded shadow ">
        <h2 className="text-xl font-bold mb-4">My Profile</h2>
        {message && <p className="mb-2 text-blue-600">{message}</p>}
        {!isEditing ? (
          <div>
            <p><strong>Name:</strong> {fullName || "Not set"}</p>
            <p><strong>Description:</strong> {description || "Not set"}</p>
            <button
              onClick={() => setIsEditing(true)}
              className="mt-3 bg-blue-600 text-white px-4 py-2 rounded"
            >
              Edit Profile
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            <input
              className="border px-3 py-2 rounded w-full"
              value={fullName}
              placeholder="Your full name"
              onChange={(e) => setFullName(e.target.value)}
            />
            <textarea
              className="border px-3 py-2 rounded w-full"
              value={description}
              placeholder="Brief description"
              onChange={(e) => setDescription(e.target.value)}
            />
            <button
              onClick={handleSaveProfile}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </div>
        )}
      </div>

      
      <AvailabilityPicker counsellorId={counsellorId} />

      
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Upcoming Meetings</h2>
        {meetings.length ? (
          <ul className="space-y-3">
            {meetings
              .sort((a, b) => new Date(a.startTime) - new Date(b.startTime)) 
              .map((m) => (
              <li
                key={m.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <div>
                  <p><strong>Student ID:</strong> {m.studentId}</p>
                  <p>
                    <strong>Time:</strong>{" "}
                    {new Date(m.startTime).toLocaleString()} –{" "}
                    {new Date(m.endTime).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                  <p>
                    <strong>Status:</strong>{" "}
                    <span
                      className={
                        m.status === "SCHEDULED"
                          ? "text-blue-600"
                          : m.status === "CANCELLED"
                          ? "text-red-600"
                          : "text-gray-500"
                      }
                    >
                      {m.status}
                    </span>
                  </p>
                </div>
                <a
                  href={m.meetingUrl}  
                  target="_blank"
                  rel="noreferrer"
                  className="bg-blue-600 text-white px-3 py-1 rounded"
                >
                  Join
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No meetings booked yet.</p>
        )}
      </div>
    </div>
  );
};

export default CounsellorHome;