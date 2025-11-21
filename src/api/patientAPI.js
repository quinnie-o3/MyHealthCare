// src/api/patientAPI.js
import apiClient from "./authAPI"; // reuse axios client with token

export const getMyProfile = async () => {
  const response = await apiClient.get("/api/v1/patients/me/");
  return response.data;
};

export const updateMyProfile = async (profileData) => {
  const response = await apiClient.put("/api/v1/patients/me/", profileData);
  return response.data;
};
