import { addQuery } from "service/helperFunctions";
import { colorApi } from "../service/apiVariables";

export const getAllColorApi =
  () =>
  (dispatch, getState, { apiCall, Toast }) => {
    return new Promise((resolve, reject) => {
      apiCall({
        ...colorApi.getColorList,
      }).then((data) => {
        resolve(data);
      });
    });
  };
