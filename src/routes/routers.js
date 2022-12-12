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
        component: "Login",
        path: "/login",
        componentPath: "pages/Auth/Login",
        name: "Login",
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
        path: "/registermobile",
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
