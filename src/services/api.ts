import axios from "axios";

export const baseURL = process.env.EXPO_PUBLIC_API_URL;
const api = axios.create({
  baseURL: baseURL,
});

export { api };
