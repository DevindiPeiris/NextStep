import axios from "axios";

const USER_API = "http://localhost:8081/api/v1"; 
const MEETING_API = "http://localhost:8084/api/v1"; 

const authConfig = () => ({
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
});

export const getCounsellorCount = () =>
  axios.get(`${USER_API}/counsellors/count`, authConfig());

export const getStudentCount = () =>
  axios.get(`${USER_API}/students/count`, authConfig());


export const getMeetingCount = () =>
  axios.get(`${MEETING_API}/meetings/count`, authConfig());