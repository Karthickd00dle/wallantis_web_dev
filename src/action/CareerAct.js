import { careerAPI } from "service/apiVariables";
import { addQuery } from "service/helperFunctions";

export const getAllCareer =
  (query) =>
  (dispatch, getState, { apiCall, Toast }) => {
    return new Promise((resolve, reject) => {
      addQuery(query, careerAPI.getAllCareer);
      apiCall({
        ...careerAPI.getAllCareer,
      }).then((data) => {
        resolve(data);
      });
    });
  };