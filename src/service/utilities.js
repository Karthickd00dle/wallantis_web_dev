import axios from "axios";

import { history } from "../service/helpers";

//axios Instance
export const axiosInstance = axios.create({
  headers: {},
});

//logout
export const logout = () => {
  sessionStorage.removeItem("authToken");

  if (window.location.href.includes("profile-page")) {
    history.push("/home/");
  }
};
