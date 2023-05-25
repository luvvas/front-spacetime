import axios from "axios";

export const api = axios.create({
  baseURL: `http://${process.env.NEXT_PUBLIC_IP_ADDRESS}:3333`,
});
