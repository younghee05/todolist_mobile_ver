import axios from "axios";

// instance or api 로 씀 
export const instance = axios.create({
    baseURL: "http://localhost:8080/api/v1",
    withCredentials: true
});