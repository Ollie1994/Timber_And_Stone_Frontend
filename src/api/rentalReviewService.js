import api from "./axios";

export const getRentalReviewByRentalId = async (id) => {
    try {
      const response = await api.get(`/rentalreviews/rental/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching reviews:", error);
      throw error;
    }
  };