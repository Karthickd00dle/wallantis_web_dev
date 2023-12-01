import { blogAPI } from "service/apiVariables";
import { addQuery } from "../service/helperFunctions";

export const getAllBlogApi =
  (query) =>
  (dispatch, getState, { apiCall, Toast }) => {
    return new Promise((resolve, reject) => {
      addQuery(query, blogAPI.getAllBlog);
      apiCall({
        ...blogAPI.getAllBlog,
      }).then((data) => {
        resolve(data);
      });
    });
  };

