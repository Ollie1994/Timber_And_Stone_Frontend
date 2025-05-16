import api from "./axios";

export const getUserProfileById = async (id) => {
    try {
      const response = await api.get(`/user/profile/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };
  