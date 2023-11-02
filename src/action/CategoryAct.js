import { categoryAPI } from "../service/apiVariables";
import { addQuery } from "../service/helperFunctions";

export const getAllCategory =
  () =>
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

export const getCategory =
  (query) =>
  (dispatch, getState, { apiCall, Toast }) => {
    return new Promise((resolve, reject) => {
      addQuery(query, categoryAPI.getProductCategory);
      apiCall({
        ...categoryAPI.getProductCategory,
      }).then(({ response }) => {
        resolve(response);
      });
    });
  };

export const getSubCategory =
  (query) =>
  (dispatch, getState, { apiCall, Toast }) => {
    return new Promise((resolve, reject) => {
      addQuery(query, categoryAPI.getProductSubCategory);
      apiCall({
        ...categoryAPI.getProductSubCategory,
      }).then(({ response }) => {
        resolve(response);
      });
    });
  };
