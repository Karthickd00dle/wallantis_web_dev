import { contactUsAPI } from "../service/apiVariables";

export const createContact =
  () =>
  (dispatch, getState, { apiCall, Toast }) => {
    return new Promise((resolve, reject) => {
      apiCall({
        ...contactUsAPI.createContact,
      }).then((data) => {
        resolve(data);
      });
    });
  };
