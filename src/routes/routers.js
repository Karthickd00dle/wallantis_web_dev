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
        path: "/home",
        componentPath: "pages/HomePage",
        name: "HomePage",
        auth: false,
        exact: false,
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
        component: "AboutUsPage",
        path: "/about-us",
        componentPath: "pages/AboutUsPage",
        name: "AboutUsPage",
        auth: false,
        exact: true,
      },
      {
        component: "AboutWallanticsPage",
        path: "/about-wallantics",
        componentPath: "pages/AboutWallanticsPage",
        name: "AboutWallanticsPage",
        auth: false,
        exact: true,
      },
      {
        component: "Contactuseg",
        path: "/contactus",
        componentPath: "/Contactus",
        name: "Contactuseg",
      },
      {
        component: "Catalogueg",
        path: "/catalogue",
        componentPath: "/Catalogue",
        name: "Catalogueg",
      },
      {
        component: "Latestblogseg",
        path: "/latestblogs",
        componentPath: "/LatestBlogs",
        name: "Latestblogseg",
      },
      {
        component: "Blogdetailseg",
        path: "/blogdetails",
        componentPath: "/blogdetails",
        name: "Blogdetailseg",
      },
      {
        component: "FAQeg",
        path: "/faq",
        componentPath: "/faq",
        name: "FAQeg",
      },
      {
        component: "Dealershipeg",
        path: "/dealership",
        componentPath: "/dealership",
        name: "Dealershipeg",
      },
      {
        component: "Careerseg",
        path: "/careers",
        componentPath: "/careers",
        name: "Careerseg",
      },
      {
        component: "Genaralmanagereg",
        path: "/generalmanager",
        componentPath: "/genaralmanager",
        name: "Genaralmanagereg",
      },
      {
        component: "Returnpolicyeg",
        path: "/returnpolicy",
        componentPath: "/returnpolicy",
        name: "Returnpolicyeg",
      },
      {
        component: "Privacypolicyeg",
        path: "/privacypolicy",
        componentPath: "/privacypolicy",
        name: "Privacypolicyeg",
      },
      {
        component: "Termsconditionseg",
        path: "/termsconditions",
        componentPath: "/termsconditions",
        name: "Termsconditionseg",
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
