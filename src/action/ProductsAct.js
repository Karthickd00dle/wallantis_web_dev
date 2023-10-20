import { productAPI } from "../service/apiVariables";
import { addQuery } from "../service/helperFunctions";

export const getAllProductsApi =
  (query) =>
  (dispatch, getState, { apiCall, Toast }) => {
    return new Promise((resolve, reject) => {
      addQuery(query, productAPI.getAllProducts);
      apiCall({
        ...productAPI.getAllProducts,
      }).then((data) => {
        resolve(data);
      });
    });
  };

export const getProductFilterApi =
  () =>
  (dispatch, getState, { apiCall, Toast }) => {
    return new Promise((resolve, reject) => {
      apiCall({
        ...productAPI.getProductFilter,
      }).then((data) => {
        resolve(data);
      });
    });
  };

export const getProductDetailApi =
  (query) =>
  (dispatch, getState, { apiCall, Toast }) => {
    return new Promise((resolve, reject) => {
      addQuery(query, productAPI.getProductDetail);
      apiCall({
        ...productAPI.getProductDetail,
      }).then((data) => {
        resolve(data);
      });
    });
  };
