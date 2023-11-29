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
  resendOTP: {
    api: "resendMobileOtp",
    method: "post",
    baseURL: "auth",
  },
  resendOTPVerify: {
    api: "resendOtpVerify",
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
    api: "address",
    method: "get",
    baseURL: "base",
  },
  createAddress: {
    api: "address",
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
    api: "cart",
    method: "post",
    baseURL: "base",
  },
  cartList: {
    api: "cart",
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
    url: "cart",
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

export const orderApi = {
  createOrder: {
    api: "orders",
    method: "post",
    baseURL: "base",
  },
  verifyOrder: {
    api: "orders/verify",
    method: "post",
    baseURL: "base",
  },
  getOrderList: {
    url: "orders",
    method: "get",
    baseURL: "base",
    query: {
      search: "",
      range: "",
    },
    get api() {
      return this.url + generateQuery(this.query);
    },
    set addQuery({ key, payload }) {
      this.query[key] = payload;
    },
  },
  getOrderDetails: {
    url: "orders/details",
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
  getProductOrderDetails: {
    url: "orders/productDetails",
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
  updateOrder: {
    url: "orders",
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
    url: "products",
    method: "get",
    baseURL: "base",
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
    url: "listAll",
    method: "get",
    baseURL: "products",
    query: {
      categoryId: "",
    },
    get api() {
      return this.url + generateQuery(this.query);
    },
    set addQuery({ key, payload }) {
      this.query[key] = payload;
    },
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

export const wishlistApi = {
  getWishList: {
    api: "wishlist",
    method: "get",
    baseURL: "base",
  },

  addToWishlist: {
    api: "wishlist",
    method: "post",
    baseURL: "base",
  },

  removeFromWishlist: {
    url: "wishlist",
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

export const newArrivalAPI = {
  createArrivals: {
    api: "products/arrival",
    method: "get",
    baseURL: "base",
  },
};

export const BestsellerApi = {
  getBestSeller: {
    api: "products/bestSeller",
    method: "get",
    baseURL: "base",
  },
};

export const customerApi = {
  getCustomerList: {
    api: "users",
    method: "get",
    baseURL: "base",
  },
};
