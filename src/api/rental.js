import api from "./axios";

export const getRentalById = async (id) => {
    try {
      const response = await api.get(`/products/category/${category}`);
      return response.data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };