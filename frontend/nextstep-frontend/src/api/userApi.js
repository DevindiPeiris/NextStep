import axios from "axios";

const API_URL = "http://localhost:8081/api/v1/admin/users"; 


const authConfig = () => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};


export const getUsers = () => axios.get(API_URL, authConfig());


export const addUser = (user, role) =>
  axios.post(`${API_URL}/add?role=${role}`, user, authConfig());


export const updateUser = (id, user, role) =>
  axios.put(`${API_URL}/${id}?role=${role}`, user, authConfig());


export const deleteUser = (id) =>
  axios.delete(`${API_URL}/${id}`, authConfig());

export const getUserById = (id) =>
  axios.get(`${USER_API}/${id}`, authConfig());