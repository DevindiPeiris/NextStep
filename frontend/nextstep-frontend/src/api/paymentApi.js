import axios from "axios";

const API_URL = "http://localhost:8084/api/v1"; 

export const createCheckoutSession = (meetingRequest) => {
  return axios.post(`${API_URL}/payments/create-checkout-session`, meetingRequest);
};