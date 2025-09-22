import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b4c2e3853af24f519738abf44050b7d6",
  },
});

export default apiClient;
