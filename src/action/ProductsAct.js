import { productAPI } from "../service/apiVariables";
import { addQuery } from "../service/helperFunctions";

export const getAllProducts =
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

export const getProductFilter =
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
