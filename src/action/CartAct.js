import { addQuery } from "service/helperFunctions";
import { cartApi } from "../service/apiVariables";

export const createCartApi =
  (body) =>
  (dispatch, getState, { apiCall, Toast }) => {
    return new Promise((resolve, reject) => {
      apiCall({
        ...cartApi.createCart,
        body,
      })
        .then((data) => {
          resolve(data);
        })
        .catch(({ message }) => {
          reject(Toast({ type: "error", message }));
        });
    });
  };

export const getCartListing =
  () =>
  (dispatch, getState, { apiCall, Toast }) => {
    return new Promise((resolve, reject) => {
      apiCall({
        ...cartApi.cartList,
      }).then((data) => {
        resolve(data);
      });
    });
  };

export const deleteCart =
  (query) =>
  (dispatch, getState, { apiCall, Toast }) => {
    return new Promise((resolve, reject) => {
      addQuery(query, cartApi.deleteCart);
      apiCall({
        ...cartApi.deleteCart,
      }).then((data) => {
        resolve(data);
      });
    });
  };

export const updateCart =
  (query, body) =>
  (dispatch, getState, { apiCall, Toast }) => {
    return new Promise((resolve, reject) => {
      addQuery(query, cartApi.updateCart);
      apiCall({
        ...cartApi.updateCart,
        body,
      }).then((data) => {
        resolve(data);
      });
    });
  };
