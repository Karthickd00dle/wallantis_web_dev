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
        ...authApi.loginApiUrl,
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
