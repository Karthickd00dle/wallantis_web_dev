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
  getAddressList: {
    api: "address/addressList",
    method: "get",
    baseURL: "base",
  },
  createAddress: {
    api: "address/create",
    method: "post",
    baseURL: "base",
  },
  getAddress: {
    url: "address",
    method: "get",
    baseURL: "base",
    query: {
      url_id: "",
    },
    get api() {
      return this.url + generateQuery(this.query);
    },
    set addQuery({ key, payload }) {
      this.query[key] = payload;
    },
  },
  deleteAddress: {
    url: "address/remove",
    method: "delete",
    baseURL: "base",
    query: {
      url_id: "",
    },
    get api() {
      return this.url + generateQuery(this.query);
    },
    set addQuery({ key, payload }) {
      this.query[key] = payload;
    },
  },
  updateAddress: {
    url: "address/update",
    method: "put",
    baseURL: "base",
    query: {
      url_id: "",
    },
    get api() {
      return this.url + generateQuery(this.query);
    },
    set addQuery({ key, payload }) {
      this.query[key] = payload;
    },
  },
};

export const cartApi = {
  createCart: {
    api: "cart/create",
    method: "post",
    baseURL: "base",
  },
  cartList: {
    api: "cart/cartList",
    method: "get",
    baseURL: "base",
  },
  deleteCart: {
    url: "cart",
    method: "delete",
    baseURL: "base",
    query: {
      url_id: "",
    },
    get api() {
      return this.url + generateQuery(this.query);
    },
    set addQuery({ key, payload }) {
      this.query[key] = payload;
    },
  },
  updateCart: {
    url: "cart/updateCart",
    method: "put",
    baseURL: "base",
    query: {
      url_id: "",
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
    url: "list",
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
  getProductFilter: {
    api: "listAll",
    method: "get",
    baseURL: "products",
  },
  getFilteredProducts: {
    api: "filterList",
    method: "post",
    baseURL: "products",
  },
  getProductDetail: {
    url: "details",
    method: "get",
    baseURL: "products",
    query: {
      url_id: "",
    },
    get api() {
      return this.url + generateQuery(this.query);
    },
    set addQuery({ key, payload }) {
      this.query[key] = payload;
    },
  },
};

export const categoryAPI = {
  getAllProductCategory: {
    api: "category",
    method: "get",
    baseURL: "base",
  },
  getAllProductSubCategory: {
    api: "AllProductSubCategory/list",
    method: "get",
    baseURL: "products",
  },
  getProductSubCategoryBasedCategory: {
    url: "subcategory/category",
    method: "get",
    baseURL: "base",
    query: {
      url_id: "",
    },
    get api() {
      return this.url + generateQuery(this.query);
    },
    set addQuery({ key, payload }) {
      this.query[key] = payload;
    },
  },
  getProductCategory: {
    url: "category",
    method: "get",
    baseURL: "base",
    query: {
      url_id: "",
    },
    get api() {
      return this.url + generateQuery(this.query);
    },
    set addQuery({ key, payload }) {
      this.query[key] = payload;
    },
  },
  getProductSubCategory: {
    url: "subcategory",
    method: "get",
    baseURL: "base",
    query: {
      url_id: "",
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
export const careerAPI = {
  getAllCareer: {
    url: "career",
    method: "get",
    baseURL: "base",
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
    baseURL: "create",
  },
  getCareerDetails: {
    url: "career",
    method: "get",
    baseURL: "base",
    query: {
      url_id: "",
    },
    get api() {
      return this.url + generateQuery(this.query);
    },
    set addQuery({ key, payload }) {
      this.query[key] = payload;
    },
  },
};
