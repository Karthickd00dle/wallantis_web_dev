import React from "react";
import jwt_decode from "jwt-decode";
import { history } from "service/helpers";
import moment from "moment";

//add Query
export const addQuery = (dataObject, apiObject) => {
  // if (!dataObject) {
  //   return "";
  // }
  if (!dataObject || typeof dataObject !== "object") {
    return "";
  }

  const keys = [
    "page",
    "limit",
    "pageNo",
    "size",
    "wallPaperType",
    "categoryId",
    "search",
    "range",
    "pageLimit",
    "pageCount",
    "nextPage",
    "pageSize",
    "total",
    "sort",
    "id",
    "url_id",
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
// export const generateQuery = (query) => {
//   console.log("Original query:", query);
//   let url = "";

//   // if (query.hasOwnProperty("url_id")) {
//   //   url = `/${query.url_id}`;
//   // }
//   if (query && query.hasOwnProperty("url_id")) {
//     url = `/${query.url_id}`;
//   }

//   let emptyData = [];
//   return (
//     url +
//     Object.keys(query).reduce((accumulator, key, index) => {
//       if (
//         query[key] !== "" &&
//         query[key] !== null &&
//         query[key] !== undefined
//       ) {
//         emptyData.push(key);
//       }
//       if (
//         query[key] === "" ||
//         query[key] == null ||
//         key === "url_id" ||
//         (query[key] !== null && query[key].toString().trim() === "")
//       ) {
//         return accumulator;
//       } else {
//         return (
//           accumulator +
//           `${index !== 0 && emptyData.length > 1 ? "&" : "?"}${key}=${
//             query[key]
//           }`
//         );
//       }
//     }, "")
//   );
// };
export const generateQuery = (query) => {
  let url = "";

  if (!query) {
    return ""; // Add this line
  }

  if (query.hasOwnProperty("url_id")) {
    url = `/${query.url_id}`;
  }

  let emptyData = [];
  const queryString = Object.keys(query).reduce((accumulator, key, index) => {
    if (query[key] !== "" && query[key] !== null && query[key] !== undefined) {
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
        `${index !== 0 && emptyData.length > 1 ? "&" : "?"}${key}=${query[key]}`
      );
    }
  }, "");

  return url + queryString;
};

export const routerAuthTokenGuard = () => {
  if (
    localStorage.getItem("authToken") ||
    sessionStorage.getItem("authToken")
  ) {
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("authToken");
    history.push(`/home/`);
  }
};

export const ternaryCondition = (val1, val2 = "", defaultValue = "") => {
  return val1 ? val2 : defaultValue;
};

export const conditionalLoad = (val, valToShow) => {
  return val && valToShow;
};

export const getUserDetailsBasedToken = () => {
  const token = sessionStorage.getItem("authToken");
  let decoded = {};
  decoded = token !== null && jwt_decode(token);
  return decoded;
};

export const getAuthToken = () => {
  return sessionStorage.getItem("authToken");
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

export const separateAndCapitalize = (input) => {
  const nameStartIndex = input
    .split("")
    .findIndex((char) => char.toLowerCase() !== char);
  const string1 = input.substring(0, nameStartIndex);
  const string2 = input.substring(nameStartIndex);

  // Capitalize the first letter
  const capitalizedString1 = string1.charAt(0).toUpperCase() + string1.slice(1);
  const capitalizedString2 = string2.charAt(0).toUpperCase() + string2.slice(1);

  return capitalizedString1 + " " + capitalizedString2;
};

export function findMaxPrice(data) {
  if (data.length === 0) {
    return null;
  }

  return data.reduce(
    (max, item) => (item.price > max ? item.price : max),
    data[0].price
  );
}
