import api from "../utils/api";

export const listAnswers = async () => {
  const response = await api.get("answers");
  return response.data;
};

export const getAnswer = async (answerId) => {
  const response = await api.get(`answer/${answerId}`);
  return response.data;
};

export const createAnswer = async (messageId, payload) => {
  const response = await api.post(`questions/${messageId}`, payload);
  return response.data;
};

export const editAnswer = async (answerId, payload) => {
  const response = await api.put(`answers/${answerId}`, payload);
  return response.data;
};
