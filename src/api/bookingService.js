import api from "./axios";

export const getBookingsForProfileByUserId = async (id) => {
    try {
      const response = await api.get(`/booking/user/profile/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };
  