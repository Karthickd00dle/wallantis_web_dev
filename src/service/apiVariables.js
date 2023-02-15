import { generateQuery } from "../service/helperFunctions";

//auth Api
export const authApi = {
  loginApi: {
    api: "users/login",
    method: "post",
    baseURL: "auth",
  },
  registationApi: {
    api: "createUser",
    method: "post",
    baseURL: "user",
  },
  loginApiUrl: {
    api: "login",
    method: "post",
    baseURL: "auth",
  },
};

// Admin Privilage
export const adminPrivilageVariables = {
  addedMembersUrl: {
    url: "getAllUsers",
    method: "get",
    baseURL: "user",
    query: {
      page: 1,
      size: 10,
      search: "",
    },
    get api() {
      return this.url + generateQuery(this.query);
    },
    set addQuery({ key, payload }) {
      this.query[key] = payload;
    },
  },
};

export const productAPI = {
  getAllProducts: {
    url: "products/AllProductCategory",
    method: "get",
    baseURL: "products",
    query: {
      page: null,
      pageCount: null,
      nextPage: null,
      pageSize: null,
      total: null,
    },
    get api() {
      return this.url + generateQuery(this.query);
    },
    set addQuery({ key, payload }) {
      this.query[key] = payload;
    },
  },
};
