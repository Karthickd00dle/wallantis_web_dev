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
  (query) =>
  (dispatch, getState, { apiCall, Toast }) => {
    return new Promise((resolve, reject) => {
      addQuery(query, productAPI.getProductFilter);
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

export const getFilteredProductApi =
  (body) =>
  (dispatch, getState, { apiCall, Toast }) => {
    return new Promise((resolve, reject) => {
      apiCall({
        ...productAPI.getFilteredProducts,
        body,
      }).then((data) => {
        resolve(data);
      });
    });
  };

  export const getNewArraivalApi =
  (query) =>
  (dispatch, getState, { apiCall, Toast }) => {
    return new Promise((resolve, reject) => {
      addQuery(query, productAPI.getNewArrival);
      apiCall({
        ...productAPI.getNewArrival,
      }).then((data) => {
        resolve(data);
      });
    });
  };
  export const getRecentViewApi =
  (query) =>
  (dispatch, getState, { apiCall, Toast }) => {
    return new Promise((resolve, reject) => {
      addQuery(query, productAPI.getRecentView);
      apiCall({
        ...productAPI.getRecentView,
      }).then((data) => {
        resolve(data);
      });
    });
  };
  export const getBestSellerViewApi =
  (query) =>
  (dispatch, getState, { apiCall, Toast }) => {
    return new Promise((resolve, reject) => {
      addQuery(query, productAPI.getBestSellerView);
      apiCall({
        ...productAPI.getBestSellerView,
      }).then((data) => {
        resolve(data);
      });
    });
  };
