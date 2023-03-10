import { generateQuery } from "../service/helperFunctions";

//auth Api
export const authApi = {
  loginApi: {
    api: "login",
    method: "post",
    baseURL: "auth",
  },
  registationApi: {
    api: "register",
    method: "post",
    baseURL: "auth",
  },
  loginApiUrl: {
    api: "login",
    method: "post",
    baseURL: "auth",
  },
  verifyOTP: {
    api: "verifyOTP",
    method: "post",
    baseURL: "auth",
  },
};

export const profileApi = {
  updateProfile: {
    api: "profileUpdate",
    method: "put",
    baseURL: "auth",
  },
  getCurrentProfile: {
    api: "ProfileData",
    method: "get",
    baseURL: "auth",
  },
  changePassword: {
    api: "changePassword",
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

export const productAPI = {
  getAllProducts: {
    url: "product/list",
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

export const catalogueAPI = {
  getAllCatalogue: {
    url: "AllCatalogue",
    method: "get",
    baseURL: "catalogue",
    query: {
      page: null,
      pageCount: null,
      nextPage: null,
      pageSize: null,
      total: null,
      wallPaperType: null,
    },
    get api() {
      return this.url + generateQuery(this.query);
    },
    set addQuery({ key, payload }) {
      this.query[key] = payload;
    },
  },
  createCatalogue: {
    api: "create",
    method: "post",
    baseURL: "catalogue",
  },
};

export const contentAPI = {
  createNewContent: {
    api: "content/contentCreation",
    method: "post",
    baseURL: "base",
  },
};

export const contactUsAPI = {
  createContact: {
    api: "lead/create",
    method: "post",
    baseURL: "base",
  },
};
