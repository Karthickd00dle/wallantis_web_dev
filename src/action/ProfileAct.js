import { addQuery } from "service/helperFunctions";
import { profileApi } from "../service/apiVariables";

export const updateProfile =
  (body) =>
  (dispatch, getState, { apiCall, Toast }) => {
    return new Promise((resolve, reject) => {
      apiCall({
        ...profileApi.updateProfile,
        body,
      }).then((data) => {
        resolve(data);
      });
    });
  };

export const getCurrentProfile =
  () =>
  (dispatch, getState, { apiCall, Toast }) => {
    return new Promise((resolve, reject) => {
      apiCall({
        ...profileApi.getCurrentProfile,
      }).then((data) => {
        resolve(data);
      });
    });
  };

export const changeCurrentPassword =
  (body) =>
  (dispatch, getState, { apiCall, Toast }) => {
    return new Promise((resolve, reject) => {
      apiCall({
        ...profileApi.changePassword,
        body,
      }).then((data) => {
        resolve(data);
      });
    });
  };

export const getAddressList =
  () =>
  (dispatch, getState, { apiCall, Toast }) => {
    return new Promise((resolve, reject) => {
      apiCall({
        ...profileApi.getAddressList,
      }).then((data) => {
        resolve(data);
      });
    });
  };

export const getAddress =
  (query) =>
  (dispatch, getState, { apiCall, Toast }) => {
    return new Promise((resolve, reject) => {
      addQuery(query, profileApi.getAddress);
      apiCall({
        ...profileApi.getAddress,
      }).then((data) => {
        resolve(data);
      });
    });
  };
