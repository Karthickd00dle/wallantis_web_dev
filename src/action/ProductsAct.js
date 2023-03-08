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
