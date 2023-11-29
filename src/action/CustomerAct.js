import { customerApi } from "../service/apiVariables";

export const getCustomerListing =
  () =>
  (dispatch, getState, { apiCall, Toast }) => {
    return new Promise((resolve, reject) => {
      apiCall({
        ...customerApi.getCustomerList,
      }).then((data) => {
        resolve(data);
      });
    });
  };
