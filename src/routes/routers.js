const routers = [
  {
    path: "/",
    exact: true,
    redirect: "/",
  },
  {
    component: "HomeLayout",
    path: "/",
    auth: false,
    exact: true,
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
    component: "ProfileLayout",
    path: "/profile",
    auth: false,
    exact: false,
    childrens: [
      {
        component: "ProfilePage",
        path: "/profile-page",
        componentPath: "pages/ProfilePage",
        name: "ProfilePage",
        auth: false,
        exact: true,
      },
      {
        component: "OrderDetailsPage",
        path: "/order-details",
        componentPath: "pages/Profile/OrderDetailsPage",
        name: "OrderDetailsPage",
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
