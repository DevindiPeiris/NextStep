import axios from "axios";

const USER_API = "http://localhost:8081/api/v1"; 
const MEETING_API = "http://localhost:8084/api/v1"; 

const authConfig = () => ({
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
});


export const getAvailability = (counsellorId) =>
  axios.get(`${MEETING_API}/availability/${counsellorId}`, authConfig());


export const generateAvailability = (payload) =>
  axios.post(`${MEETING_API}/availability/generate`, payload, authConfig());


export const bookMeeting = (payload) =>
  axios.post(`${MEETING_API}/meetings/book`, payload, authConfig());

export const getMeetings = (counsellorId) =>
  axios.get(`${MEETING_API}/meetings/counsellor/${counsellorId}`, authConfig());

export const cancelMeeting = (meetingId) =>
  axios.delete(`${MEETING_API}/meetings/${meetingId}`, authConfig());


export const getCounsellors = () =>
  axios.get(`${USER_API}/counsellors`, authConfig());


export const getCounsellorProfile = (counsellorId) =>
  axios.get(`${MEETING_API}/profile/${counsellorId}`, authConfig());

export const saveCounsellorProfile = (counsellorId, profile) =>
  axios.post(`${MEETING_API}/profile/${counsellorId}`, profile, authConfig());

export const getCounsellorMeetings = (counsellorId) =>
  axios.get(`${MEETING_API}/meetings/counsellor/${counsellorId}`, authConfig());