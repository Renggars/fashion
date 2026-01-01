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

export const getProductById = async (id) => {
  try {
    const response = await axiosInstance.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error);
    return null;
  }
};

export const getHotItems = async () => {
  return getProducts("?categoryId=1");
};
