import api from "./axios";

export const getAllRentalPages = async () => {
    try {
        const response = await api.get(`/rental/page`);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};


export const getAllRentalPagesByPriceRange = async (minPrice, maxPrice) => {
  try {
      const response = await api.get(`/rental/page/pricepernight?minPrice=${minPrice}&maxPrice=${maxPrice}`);
  return response.data;
} catch (error) {
  console.error("Error:", error);
  throw error;
}
};