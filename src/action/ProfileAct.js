import { profileApi } from "../service/apiVariables";

export const updateProfile =
  (body) =>
  (dispatch, getState, { apiCall, Toast }) => {
    return new Promise((resolve, reject) => {
      apiCall({
        ...profileApi.updateProfile,
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
