import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://dummy.restapiexample.com/api/v1",
});
