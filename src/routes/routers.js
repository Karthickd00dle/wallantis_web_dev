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
    ],
  },
];

export default routers;
