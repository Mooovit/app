import Config from "react-native-config";
import axios from "axios";

Config.API_URL = "https://mooovit-api.staging.matthieutirelli.fr";
const axiosInstance = axios.create({
  baseURL: Config.API_URL,
  timeout: 5000,
});

axiosInstance.setToken = (token) => {
  axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return axiosInstance;
};

axiosInstance.setBaseURL = (url) => {
  axiosInstance.defaults.baseURL = url;
  return axiosInstance;
};

export default axiosInstance;
