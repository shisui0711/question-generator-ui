import { useAuthorization } from "@/providers/AuthorizationProvider";
import axios from "axios";

export const useApiClient = () => {
  const {token} = useAuthorization()
  const client = axios.create({
        baseURL: process.env.BASE_API_URL || "http://localhost:8000",
        headers: {
            "Authorization": "Bearer " + token,
            "Content-Type" : "application/json"
        }
    })
  return client;
}