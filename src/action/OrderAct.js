import { addQuery } from "service/helperFunctions";
import { orderApi } from "../service/apiVariables";

export const createOrderApi =
  (body) =>
  (dispatch, getState, { apiCall, Toast }) => {
    return new Promise((resolve, reject) => {
      apiCall({
        ...orderApi.createOrder,
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

export const getOrderListing =
  (query) =>
  (dispatch, getState, { apiCall, Toast }) => {
    return new Promise((resolve, reject) => {
      addQuery(query, orderApi.getOrderList);
      apiCall({
        ...orderApi.getOrderList,
      }).then((data) => {
        resolve(data);
      });
    });
  };

export const getOrderDetail =
  (query) =>
  (dispatch, getState, { apiCall, Toast }) => {
    return new Promise((resolve, reject) => {
      addQuery(query, orderApi.getOrderDetails);
      apiCall({
        ...orderApi.getOrderDetails,
      }).then((data) => {
        resolve(data);
      });
    });
  };

export const getProductOrderDetail =
  (query) =>
  (dispatch, getState, { apiCall, Toast }) => {
    return new Promise((resolve, reject) => {
      addQuery(query, orderApi.getProductOrderDetails);
      apiCall({
        ...orderApi.getProductOrderDetails,
      }).then((data) => {
        resolve(data);
      });
    });
  };

export const verifyOrder =
  (body) =>
  (dispatch, getState, { apiCall, Toast }) => {
    return new Promise((resolve, reject) => {
      apiCall({
        ...orderApi.verifyOrder,
        body,
      }).then((data) => {
        resolve(data);
      });
    });
  };

export const updateOrder =
  (query, body) =>
  (dispatch, getState, { apiCall, Toast }) => {
    return new Promise((resolve, reject) => {
      addQuery(query, orderApi.updateOrder);
      apiCall({
        ...orderApi.updateOrder,
        body,
      }).then((data) => {
        resolve(data);
      });
    });
  };
