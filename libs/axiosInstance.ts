import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://dummy.restapiexample.com/api/v1",
});
//  export const axiosInstanceWithRetry = axios.create({
//   baseURL: "https://dummy.restapiexample.com/api/v1",
// });
axiosInstance.interceptors.response.use(undefined, async (error) => {
  if (error.response && error.response.status === 429) {
    const retryAfter = error.response.headers["retry-after"] || 5; // Default to 5 seconds if header is not present
    await new Promise((resolve) => setTimeout(resolve, retryAfter * 1000));
    return axiosInstance(error.config);
  }
  return Promise.reject(error);
});