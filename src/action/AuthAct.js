import { authApi } from "../service/apiVariables";

export const RegistationApi =
  (body) =>
  (dispatch, getState, { apiCall, Toast }) => {
    return new Promise((resolve, reject) => {
      apiCall({
        ...authApi.registationApi,
        body,
      })
        .then(({ data }) => {
          resolve(data);
        })
        .catch(({ message }) => {
          reject(Toast({ type: "error", message }));
        });
    });
  };

export const loginApi =
  (body) =>
  (dispatch, getState, { apiCall, Toast }) => {
    return new Promise((resolve, reject) => {
      apiCall({
        ...authApi.loginApi,
        body,
      })
        .then(({ data }) => {
          localStorage.setItem("authToken", data);
          resolve(data);
        })
        .catch(({ message }) => {
          reject(Toast({ type: "error", message }));
        });
    });
  };

export const productListingApi = (body) => (dispatch, getState) => {
  return console.log(dispatch, getState, "diss get statee");
};
