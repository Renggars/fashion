import axiosInstance from "../lib/axios";

export const getProducts = async (params = "") => {
  try {
    const response = await axiosInstance.get(`/products${params}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const getHotItems = async () => {
  // Spesifik mengambil category 1
  return getProducts("?categoryId=1");
};
