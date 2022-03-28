import api from "../utils/api";

export const listMessages = async () => {
  const response = await api.get("questions");
  return response.data;
};

export const getMessage = async (messageId) => {
  const response = await api.get(`questions/${messageId}`);
  return response.data;
};

export const createMessage = async (payload) => {
  const response = await api.post("questions", payload);
  return response.data;
};

export const editMessage = async (messageId, payload) => {
  const response = await api.put(`questions/${messageId}`, payload);
  return response.data;
};
