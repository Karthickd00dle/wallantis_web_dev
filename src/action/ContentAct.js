import { contentAPI } from "service/apiVariables";
import { addQuery } from "../service/helperFunctions";

export const createNewContent =
  (query) =>
  (dispatch, getState, { apiCall, Toast }) => {
    return new Promise((resolve, reject) => {
      apiCall({
        ...contentAPI.createNewContent,
      }).then((data) => {
        resolve(data);
      });
    });
  };
