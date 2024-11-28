import axios from "axios";

const API_BASE_URL = "https://api.mockexchange.com"; // Replace with actual API or mock URL

// Fetch token metadata
export const fetchTokenMetadata = async (tokenSymbol) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/tokens/${tokenSymbol}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching token metadata:", error);
    throw error;
  }
};

// Fetch current order book data
export const fetchOrderBook = async (pair) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/orderbook`, {
      params: { pair },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching order book:", error);
    throw error;
  }
};

// Fetch token prices
export const fetchTokenPrice = async (pair) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/price`, {
      params: { pair },
    });
    return response.data.price;
  } catch (error) {
    console.error("Error fetching token price:", error);
    throw error;
  }
};
