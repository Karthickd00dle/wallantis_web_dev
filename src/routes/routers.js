const routers = [
  {
    path: "/",
    exact: true,
    redirect: "/auth/login",
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
        component: "RegistrationPage",
        path: "/registration",
        componentPath: "pages/Admin/RegistrationPage/RegistrationPage",
        name: "ForgotPassword",
        auth: false,
        exact: true,
      },
    ],
  },
];

export default routers;
