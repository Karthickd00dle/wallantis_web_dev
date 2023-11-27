import { contactUsAPI } from "../service/apiVariables";

export const createContact =
  (body) =>
  (dispatch, getState, { apiCall, Toast }) => {
    return new Promise((resolve, reject) => {
      apiCall({
        ...contactUsAPI.createContact,
        body,
      }).then((data) => {
        resolve(data);
      });
    });
  };
