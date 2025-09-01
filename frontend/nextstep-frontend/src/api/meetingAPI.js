import axios from "axios";

const MEETING_API = "http://localhost:8084/api/v1/meetings";

const authConfig = () => ({
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
});

export const getStudentMeetings = (studentId) =>
  axios.get(`${MEETING_API}/student/${studentId}`, authConfig());

export const getCounsellorMeetings = (counsellorId) =>
  axios.get(`${MEETING_API}/counsellor/${counsellorId}`, authConfig());