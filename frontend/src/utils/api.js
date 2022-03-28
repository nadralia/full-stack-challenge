import axios from "axios";
import { apiRoot } from "../config";

const api = axios.create({
  baseURL: apiRoot,
});

export default api;
