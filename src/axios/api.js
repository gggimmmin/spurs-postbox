import axios from "axios";

const api = axios.create({
  baseURL: "https://moneyfulpublicpolicy.co.kr",
});

api.interceptors.request.use(
  function (config) {
    console.log("요청 성공!");
    return config;
  },
  function (error) {
    console.log("요청 오류!");
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (response) {
    console.log("응답 성공!");
    return response;
  },
  function (error) {
    console.log("응답 실패!");
    return Promise.reject(error);
  }
);

export default api;
