import axios from "axios";

const BACKEND_URL = "http://localhost:5000";
const API_URL = `${BACKEND_URL}/api/users/`;

// REGISTER USER || METHOD POST
const register = async (userData) => {
  const response = await axios.post(API_URL + "register", userData, {
    withCredentials: true,
  });
  return response.data;
};

// LOGIN USER || METHOD POST
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);
  return response.data;
};

// LOGOUT USER || METHOD GET
const logout = async () => {
  const response = await axios.get(API_URL + "logout");
  return response.data.message;
};

// GET STATUS USER || METHOD GET
const getLoginStatus = async () => {
  const response = await axios.get(API_URL + "get-login-status");
  return response.data;
};

// GET USER || METHOD GET
const getUser = async () => {
  const response = await axios.get(API_URL + "get-user");
  return response.data;
};

// UPDATE USER || METHOD PATCH
const updateUser = async (userData) => {
  const response = await axios.patch(API_URL + "update-user", userData);
  return response.data;
};

// UPDATE PHOTO || METHOD PATCH
const updatePhoto = async (userData) => {
  const response = await axios.patch(API_URL + "update-photo", userData);
  return response.data;
};

const authService = {
  register,
  login,
  logout,
  getLoginStatus,
  getUser,
  updateUser,
  updatePhoto,
};

export default authService;
