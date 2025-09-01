import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { getAvailability, bookMeeting } from "../api/counsellorApi";
import { createCheckoutSession } from "../api/paymentApi";


const CounselorModal = ({ counselor, isOpen, onClose }) => {
  const [tab, setTab] = useState("about");
  const [slots, setSlots] = useState([]);
  const [visibleCount, setVisibleCount] = useState(5); // 👈 show only 5 at once

  useEffect(() => {
    if (tab === "availability" && counselor) {
      getAvailability(counselor.id)
        .then((res) => setSlots(res.data))
        .catch((err) => console.error("Error fetching availability:", err));
    }
  }, [tab, counselor]);

  if (!isOpen || !counselor) return null;

  const handleBook = async (slot) => {
  const studentId = localStorage.getItem("userId");
  const payload = {
    studentId,
    counsellorId: counselor.id,
    slotId: slot.id   // ✅ crucial!
  };

  try {
    const res = await createCheckoutSession(payload);
    const { url } = res.data;
    window.location.href = url;
  } catch (err) {
    console.error("Error creating checkout session:", err);
    alert("Failed to start payment.");
  }
};

  
  const formatSlot = (slot) => {
    const start = new Date(slot.startTime);
    const end = new Date(slot.endTime);

    const date = start.toISOString().split("T")[0]; 
    const startTime = start.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const endTime = end.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    return `${date}  -   ${startTime} - ${endTime}`;
  };

  
  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.target;
    if (scrollTop + clientHeight >= scrollHeight - 20) {
      setVisibleCount((prev) => Math.min(prev + 5, slots.length));
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center px-4">
      <div className="bg-white rounded-xl w-full max-w-2xl p-6 relative">
        <button
          className="absolute top-4 right-4 text-gray-500 text-2xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>

        <h2 className="text-2xl font-semibold mb-4">{counselor.username}</h2>

        
        <div className="flex border-b mb-4">
          <button
            onClick={() => setTab("about")}
            className={`px-4 py-2 font-medium ${
              tab === "about"
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-600"
            }`}
          >
            View Details
          </button>
          <button
            onClick={() => setTab("availability")}
            className={`px-4 py-2 font-medium ${
              tab === "availability"
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-600"
            }`}
          >
            Check Availability
          </button>
        </div>

       
        {tab === "about" ? (
          <div>
            <p className="text-gray-700">
              {counselor.description || "No description set yet."}
            </p>
          </div>
        ) : (
          <div>
            <p className="font-medium text-lg mb-2">
              Available Appointment Slots
            </p>
            <div
              className="space-y-4 max-h-80 overflow-y-auto" 
              onScroll={handleScroll}
            >
              {slots.length > 0 ? (
                slots
                  .slice(0, visibleCount) 
                  .map((slot) => (
                    <div
                      key={slot.id}
                      className="flex justify-between items-center bg-gray-100 p-3 rounded-md"
                    >
                      <span>{formatSlot(slot)}</span>
                      <button
                        onClick={() => handleBook(slot)}
                        className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                      >
                        Book
                      </button>
                    </div>
                  ))
              ) : (
                <p>No availability set by this counsellor.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CounselorModal;