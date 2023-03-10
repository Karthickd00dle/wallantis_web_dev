import { authApi } from "../service/apiVariables";

export const registationApi =
  (body) =>
  (dispatch, getState, { apiCall, Toast }) => {
    return new Promise((resolve, reject) => {
      apiCall({
        ...authApi.registationApi,
        body,
      })
        .then((data) => {
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
      }).then((data) => {
        localStorage.setItem("authToken", data);
        resolve(data);
      });
      // .catch(({ message }) => {
      //   reject(Toast({ type: "error", message }));
      // });
    });
  };

export const verifyOTPApi =
  (body) =>
  (dispatch, getState, { apiCall, Toast }) => {
    return new Promise((resolve, reject) => {
      apiCall({
        ...authApi.verifyOTP,
        body,
      })
        .then((data) => {
          resolve(data);
          Toast({ type: "error", message: data.message });
        })
        .catch(({ message }) => {
          reject(Toast({ type: "error", message }));
        });
    });
  };
