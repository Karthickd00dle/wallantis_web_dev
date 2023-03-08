import { catalogueAPI } from "service/apiVariables";
import { addQuery } from "../service/helperFunctions";

export const getAllCatalogue =
  (query) =>
  (dispatch, getState, { apiCall, Toast }) => {
    return new Promise((resolve, reject) => {
      addQuery(query, catalogueAPI.getAllCatalogue);
      apiCall({
        ...catalogueAPI.getAllCatalogue,
      }).then((data) => {
        resolve(data);
      });
    });
  };
