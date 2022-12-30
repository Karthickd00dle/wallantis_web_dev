const routers = [
  {
    path: "/",
    exact: true,
    redirect: "/home/home",
  },
  {
    component: "AuthLayout",
    path: "/auth",
    auth: false,
    exact: false,
    childrens: [
      {
        component: "LoginPage",
        path: "/login",
        componentPath: "pages/Auth/LoginPage",
        name: "LoginPage",
        auth: false,
        exact: true,
      },
      {
        component: "ForgotPass",
        path: "/forgotpassword",
        componentPath: "pages/Auth/ForgotPassword",
        name: "ForgotPass",
        auth: false,
        exact: true,
      },
      {
        component: "RegisterMobilePass",
        path: "/register",
        componentPath: "pages/Auth/RegisterMobile",
        name: "RegisterMobilePass",
        auth: false,
        exact: true,
      },
      {
        component: "RegisterAgainPass",
        path: "/registeragain",
        componentPath: "pages/Auth/RegisterAgain",
        name: "RegisterAgainPass",
        auth: false,
        exact: true,
      },
    ],
  },
  {
    component: "HomeLayout",
    path: "/home",
    auth: false,
    exact: false,
    childrens: [
      {
        component: "HomePage",
        path: "/home",
        componentPath: "pages/HomePage",
        name: "HomePage",
        auth: false,
        exact: true,
      },
      {
        component: "ProductListingPage",
        path: "/productlisting",
        componentPath: "pages/ProductListingPage",
        name: "ProductListingPage",
        auth: false,
        exact: true,
      },
      {
        component: "CartSummaryPage",
        path: "/cart-summary",
        componentPath: "pages/CartSummaryPage",
        name: "CartSummaryPage",
        auth: false,
        exact: true,
      },
    ],
  },
];

export default routers;
