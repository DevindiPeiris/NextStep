import axios from "axios";

const API_URL = "http://localhost:8084/api/v1/availability";

const authConfig = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const addAvailability = (payload) =>
  axios.post(API_URL, payload, authConfig());

export const getAvailability = (counsellorId) =>
  axios.get(`${API_URL}/${counsellorId}`, authConfig());