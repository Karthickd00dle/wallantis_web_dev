const routers = [
  {
    path: "/",
    exact: true,
    redirect: "/home",
  },
  {
    component: "HomeLayout",
    path: "/home",
    auth: false,
    exact: false,
    childrens: [
      {
        component: "HomePage",
        path: "/",
        componentPath: "pages/HomePage",
        name: "HomePage",
        auth: false,
        exact: false,
        childrens: [
          {
            component: "ProductListingPage",
            path: "/productlisting",
            componentPath: "pages/ProductListingPage",
            name: "ProductListingPage",
            auth: false,
            exact: true,
          },
        ],
      },
      {
        component: "AboutUsPage",
        path: "/about-us",
        componentPath: "pages/AboutUsPage",
        name: "AboutUsPage",
        auth: false,
        exact: true,
      },
    ],
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
];

export default routers;
