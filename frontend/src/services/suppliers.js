import api from "../utils/api";

export const listSuppliers = async () => {
  const response = await api.get("suppliers");
  return response.data;
};
