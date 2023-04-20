import { axiosInstance, logout } from "./utilities";

//api
export let apiCall = async function ({
  method = "get",
  api,
  body,
  status = false,
  isForgotPassword = false,
  baseURL = "normal",
}) {
  return new Promise((resolve, reject) => {
    // setting token
    if (localStorage.getItem("authToken") && !isForgotPassword) {
      axiosInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${localStorage.getItem("authToken")}`;
    }
    axiosInstance.defaults.headers["Access-Control-Allow-Origin"] = "*";
    axiosInstance[method](`${getServiceUrl(baseURL)}${api}`, body ? body : "")
      .then((data) => {
        resolve(statusHelper(status, data));
      })
      .catch((error) => {
        try {
          if (error.response) {
            reject(statusHelper(status, error.response));
          } else {
            reject(error);
          }
        } catch (err) {
          reject(err);
        }
      });
  });
};

//status Helper
let statusHelper = (status, data) => {
  if (data.status === 401 || data.status === 403) {
    logout();
  }
  if (status) {
    return {
      status: data.status,
      ...data.data,
    };
  } else {
    return data.data;
  }
};

//get Service Url
let getServiceUrl = (baseURL) => {
  let finalURL = "";
  const {
    REACT_APP_API_BASE_URL,
    REACT_APP_AUTH_API,
    REACT_APP_USERS_API,
    REACT_APP_PRODUCTS_API,
    REACT_APP_CATALOGUE_API,
  } = process.env;
  switch (baseURL) {
    case "base":
      finalURL = REACT_APP_API_BASE_URL;
      break;
    case "auth":
      finalURL = REACT_APP_AUTH_API;
      break;
    case "user":
      finalURL = REACT_APP_USERS_API;
      break;
    case "products":
      finalURL = REACT_APP_PRODUCTS_API;
      break;
    case "catalogue":
      finalURL = REACT_APP_CATALOGUE_API;
      break;
    case "content":
      finalURL = REACT_APP_CATALOGUE_API;
      break;
    default:
      finalURL = REACT_APP_API_BASE_URL;
      break;
  }
  return finalURL;
};
