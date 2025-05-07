import api from "./axios";

export const getRentalById = async (id) => {
  try {
    const response = await api.get(`/rental/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const getRentalPageById = async (id) => {
  try {
    const response = await api.get(`/rental/page/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
