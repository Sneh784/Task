import axios from "axios";
import { loginUser } from "../services/authService";

const API_URL = "http://localhost:5000/api";

export const loginUser = async (userData) => {
  const response = await axios.post(
    `${API_URL}/login`,
    userData
  );

  return response.data;
};

export const registerUser = async (userData) => {
  const response = await axios.post(
    `${API_URL}/register`,
    userData
  );

  return response.data;
};