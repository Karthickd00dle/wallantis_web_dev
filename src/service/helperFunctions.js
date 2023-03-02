import React from "react";
import jwt_decode from "jwt-decode";
import { history } from "service/helpers";
import moment from "moment";
import { productListingFilter } from "config";

//add Query
export const addQuery = (dataObject, apiObject) => {
  if (!dataObject) {
    return "";
  }

  const keys = [
    "page",
    "limit",
    "pageNo",
    "size",
    "search",
    "pageLimit",
    "sort",
    "id",
    "status",
    "enable",
  ];

  keys.forEach((key) => {
    if (dataObject.hasOwnProperty(key) && typeof dataObject[key] != "object") {
      if (apiObject.query.hasOwnProperty(key)) {
        apiObject.addQuery = { key, payload: dataObject[key] };
      }
    } else {
      dataObject[key] &&
        Object.keys(dataObject[key]).map((keyName) => {
          if (apiObject.query.hasOwnProperty(keyName)) {
            apiObject.addQuery = {
              key: keyName,
              payload: dataObject[key][keyName],
            };
          }
          return null;
        });
    }
    return null;
  });
};

//generate Query
export const generateQuery = (query) => {
  let url = "";

  if (query.hasOwnProperty("url_id")) {
    url = `/${query.url_id}`;
  }

  let emptyData = [];
  return (
    url +
    Object.keys(query).reduce((accumulator, key, index) => {
      if (
        query[key] !== "" &&
        query[key] !== null &&
        query[key] !== undefined
      ) {
        emptyData.push(key);
      }
      if (
        query[key] === "" ||
        query[key] == null ||
        key === "url_id" ||
        (query[key] !== null && query[key].toString().trim() === "")
      ) {
        return accumulator;
      } else {
        return (
          accumulator +
          `${index !== 0 && emptyData.length > 1 ? "&" : "?"}${key}=${
            query[key]
          }`
        );
      }
    }, "")
  );
};

export const routerAuthTokenGuard = () => {
  if (localStorage.getItem("authToken")) {
    history.push(`/home/home`);
    localStorage.removeItem("authToken");
  }
};

export const ternaryCondition = (val1, val2 = "", defaultValue = "") => {
  return val1 ? val2 : defaultValue;
};

export const conditionalLoad = (val, valToShow) => {
  return val && valToShow;
};

export const getUserDetailsBasedToken = () => {
  const token = localStorage.getItem("authToken");
  let decoded = {};
  decoded = token !== null && jwt_decode(token);
  return decoded;
};

export const getAuthToken = () => {
  return localStorage.getItem("authToken");
};

export const customMomentFormat = (date, formatType) => {
  return moment(date).format(formatType);
};

export const errorMessageToDisplay = (
  validator,
  errorName,
  errorValue,
  validationMethod
) => {
  return (
    <div className="error_msg_text">
      {validator.message(errorName, errorValue, validationMethod)}
    </div>
  );
};

export const toCamelCase = (str) => {
  return (" " + str)
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, function (match, chr) {
      return chr.toUpperCase();
    });
};

export const productfilter = (location) => {
  if (
    location === "wallpaper" ||
    location === "sticker wallpaper" ||
    location === "wall murals"
  ) {
    return productListingFilter.wallpaper.filter(
      (data) => data.itemheader !== "Categories"
    );
  } else if (location === "all wallpaper") {
    return productListingFilter.wallpaper;
  } else if (location === "wooden flooring" || location === "lvp plank") {
    return productListingFilter.flooring.filter(
      (data) => data.itemheader !== "Categories"
    );
  } else if (location === "all flooring") {
    return productListingFilter.flooring;
  } else if (
    location === "vertical blinds" ||
    location === "roller blinds" ||
    location === "zebra blinds" ||
    location === "chick blinds" ||
    location === "wooden blinds" ||
    location === "customized blinds"
  ) {
    return productListingFilter.blinds.filter(
      (data) => data.itemheader !== "Categories"
    );
  } else if (location === "all blinds") {
    return productListingFilter.blinds;
  } else if (
    location === "vertical gardens" ||
    location === "hanging flowers" ||
    location === "artificial grass"
  ) {
    return productListingFilter.artificial_grass.filter(
      (data) => data.itemheader !== "Categories"
    );
  } else if (location === "all artificial grass") {
    return productListingFilter.artificial_grass;
  } else if (
    location === "gym tiles square" ||
    location === "gym tiles interlock" ||
    location === "gym tiles hexagonal" ||
    location === "gym rolls" ||
    location === "sports flooring" ||
    location === "yoga mat"
  ) {
    return productListingFilter.gym_flooring.filter(
      (data) => data.itemheader !== "Categories"
    );
  } else if (location === "all gym flooring") {
    return productListingFilter.gym_flooring;
  }
};
