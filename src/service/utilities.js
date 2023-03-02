import axios from "axios";

import { history } from "../service/helpers";

//axios Instance
export const axiosInstance = axios.create({
  headers: {},
});

//logout
export const logout = () => {
  axiosInstance.defaults.headers.common["Authorization"] = "";
  localStorage.clear();
  history.push("/");
};
