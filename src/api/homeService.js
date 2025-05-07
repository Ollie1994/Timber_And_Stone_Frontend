import api from "./axios";

export const getAllRentalPages = async () => {
    try {
        const response = await api.get(`/rental/page/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

