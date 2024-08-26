import axios from "axios";
import CONFIG from "../config/config.json";
import { getCookie, setCookie } from "./Cookie";

export const customAxios = axios.create({
  baseURL: `${CONFIG.serverUrl}`
});

customAxios.interceptors.request.use(async (config) => {
  const accessToken = getCookie("accessToken") ?? "";
  config.headers["Authorization"] = `Bearer ${accessToken}`;
  return config;
});

customAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error, config) => {
    const { response } = error;
    if (response.status === 401) {
      if (response.data.message === "만료된 토큰") {
        const originRequest = config;
        const refreshResponse = await axios.post(`${CONFIG.serverUrl}/auth/refresh`, {
          refreshToken: getCookie("refreshToken")
        });
        if (refreshResponse.status === 200) {
          const newAccessToken = refreshResponse.data.token;
          setCookie("accessToken", refreshResponse.data.accessToken);
          axios.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
          originRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return axios(originRequest);
        }
      }
    }
    return Promise.reject(error);
  }
);

export default customAxios;
