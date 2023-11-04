import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
//const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Mzc2MTc0MjI4NmY1NmQ2N2VhZmYyMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5ODQ2MDgwMCwiZXhwIjoxNjk4NzIwMDAwfQ.OGBoAOEEA-BRg52iNr0EI4FLj4C296bJR-4ylEyx07U"
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const usersRequest = axios.create({
  baseURL: BASE_URL,
  headers: {token: `Bearer ${TOKEN}`},
});