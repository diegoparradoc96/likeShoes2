import axios, { AxiosInstance } from "axios";

const baseURL = "https://localhost:7080/api/";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: `${baseURL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

export { axiosInstance };

// export const createAxiosInstance = (): Promise<AxiosInstance> => {
//   return new Promise((resolve) => {
//     let axiosInstance: AxiosInstance = axios.create({});

//     resolve(axiosInstance);
//   });
// };
