import { addQuery } from "service/helperFunctions";
import { wishlistApi } from "../service/apiVariables";

export const addToWishlistApi =
  (body) =>
  (dispatch, getState, { apiCall, Toast }) => {
    return new Promise((resolve, reject) => {
      apiCall({
        ...wishlistApi.addToWishlist,
        body,
      }).then((data) => {
        resolve(data);
      });
    });
  };

export const getWishListApi =
  () =>
  (dispatch, getState, { apiCall, Toast }) => {
    return new Promise((resolve, reject) => {
      apiCall({
        ...wishlistApi.getWishList,
      }).then((data) => {
        resolve(data);
      });
    });
  };

export const removeFromWishlistApi =
  (query) =>
  (dispatch, getState, { apiCall, Toast }) => {
    return new Promise((resolve, reject) => {
      addQuery(query, wishlistApi.removeFromWishlist);
      apiCall({
        ...wishlistApi.removeFromWishlist,
      }).then((data) => {
        resolve(data);
      });
    });
  };
