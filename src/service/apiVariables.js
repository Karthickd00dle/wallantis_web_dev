import { generateQuery } from "../service/helperFunctions";

//auth Api
export const authApi = {
  loginApi: {
    api: "users/login",
    method: "post",
    baseURL: "auth",
  },
  registationApi: {
    api: "users/register",
    method: "post",
    baseURL: "auth",
  },
  loginApiUrl: {
    api: "login",
    method: "post",
    baseURL: "auth",
  },
  verifyOTP: {
    api: "users/verifyOTP",
    method: "post",
    baseURL: "auth",
  },
};

export const profileApi = {
  updateProfile: {
    api: "users/profileUpdate",
    method: "put",
    baseURL: "auth",
  },
  getCurrentProfile: {
    api: "users/ProfileData",
    method: "get",
    baseURL: "auth",
  },
  changePassword: {
    api: "users/changePassword",
    method: "put",
    baseURL: "auth",
  },
};

export const cartApi = {
  createCart: {
    api: "cart/create",
    method: "post",
    baseURL: "auth",
  },
  cartList: {
    api: "cart/cartList",
    method: "get",
    baseURL: "auth",
  },
  deleteCart: {
    api: "cart/",
    method: "delete",
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
    url: "products/product/list",
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
