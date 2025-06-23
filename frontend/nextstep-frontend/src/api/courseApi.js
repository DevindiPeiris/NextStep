import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/v1/course';

export const getCourses = () => axios.get(`${BASE_URL}/getCourse`);
export const addCourse = (course) => axios.post(`${BASE_URL}/addCourse`, course);
export const updateCourse = (course) => axios.put(`${BASE_URL}/updateCourse`, course);
export const deleteCourse = (course) => axios.delete(`${BASE_URL}/deleteCourse`, { data: course });

