import { useState, useEffect } from "react";
import { getAvailability, generateAvailability } from "../api/counsellorApi";

const AvailabilityPicker = ({ counsellorId }) => {
  const [availability, setAvailability] = useState([]);
  const [date, setDate] = useState("");
  const [start, setStart] = useState("09:00");
  const [end, setEnd] = useState("17:00");
  const [sessionLength, setSessionLength] = useState(60);


  useEffect(() => {
    getAvailability(counsellorId).then(res => setAvailability(res.data || []));
  }, [counsellorId]);

  const handleGenerate = () => {
    if (!date || !start || !end) return;

    const payload = {
      counsellorId,
      date,               
      start,              
      end,                
      sessionLengthMinutes: sessionLength
    };

    generateAvailability(payload)
      .then(res => setAvailability(prev => [...prev, ...res.data]))
      .catch(err => console.error("Error generating slots", err));
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Set Weekly Availability</h2>

    
      <div className="flex gap-2 mb-4">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border px-2 py-1 rounded"
        />
        <input
          type="time"
          value={start}
          onChange={(e) => setStart(e.target.value)}
          className="border px-2 py-1 rounded"
        />
        <span>to</span>
        <input
          type="time"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
          className="border px-2 py-1 rounded"
        />
        <select
          value={sessionLength}
          onChange={(e) => setSessionLength(Number(e.target.value))}
          className="border px-2 py-1 rounded"
        >
          <option value={60}>1 hour</option>
        </select>
        <button
          onClick={handleGenerate}
          className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
        >
          Generate
        </button>
      </div>

      
      {availability.length ? (
        <ul className="space-y-2">
          {availability.map((slot) => (
            <li key={slot.id} className="flex justify-between border-b pb-2">
              <span>
                {new Date(slot.startTime).toLocaleString()} –{" "}
                {new Date(slot.endTime).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </span>
              {slot.booked ? (
                <span className="text-red-500">Booked</span>
              ) : (
                <span className="text-blue-600">Available</span>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No availability set yet.</p>
      )}
    </div>
  );
};

export default AvailabilityPicker;