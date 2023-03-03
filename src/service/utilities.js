import axios from "axios";

import { history } from "../service/helpers";

//axios Instance
export const axiosInstance = axios.create({
  headers: {},
});

//logout
export const logout = () => {
  localStorage.removeItem("authToken");
  history.push("/auth/login");
};
