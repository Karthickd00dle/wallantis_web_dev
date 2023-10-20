import { categoryAPI } from "../service/apiVariables";
import { addQuery } from "../service/helperFunctions";

export const getAllCategory =
  (query) =>
  (dispatch, getState, { apiCall, Toast }) => {
    return new Promise((resolve, reject) => {
      apiCall({
        ...categoryAPI.getAllProductCategory,
      }).then(({ response }) => {
        resolve(response);
      });
    });
  };

export const getSubCategoryBasedCategory =
  (query) =>
  (dispatch, getState, { apiCall, Toast }) => {
    return new Promise((resolve, reject) => {
      addQuery(query, categoryAPI.getProductSubCategoryBasedCategory);
      apiCall({
        ...categoryAPI.getProductSubCategoryBasedCategory,
      }).then(({ response }) => {
        resolve(response);
      });
    });
  };
