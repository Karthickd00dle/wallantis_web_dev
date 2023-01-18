const routers = [
  {
    path: "/",
    exact: true,
    redirect: "/",
  },
  // {
  //   component: "HomeLayout",
  //   path: "/home",
  //   auth: false,
  //   exact: false,
  //   childrens: [
  //     {
  //       component: "HomePage",
  //       path: "/home",
  //       componentPath: "pages/HomePage",
  //       name: "HomePage",
  //       auth: false,
  //       exact: true,
  //     },
  //     {
  //       component: "ProductListingPage",
  //       path: "/productlisting",
  //       componentPath: "pages/ProductListingPage",
  //       name: "ProductListingPage",
  //       auth: false,
  //       exact: true,
  //     },
  //   ],
  //   redirect: "/home/home",
  // },
  {
    component: "RoomLayout",
    path: "/room-layout",
    auth: false,
    exact: false,
    childrens: [
      {
        component: "RoomVisualizerPage",
        path: "/room-visualizer",
        componentPath: "pages/Rooms/RoomVisualizer",
        name: "RoomVisualizerPage",
        auth: false,
        exact: true,
      },
      {
        component: "CustomizedWallpaperPage",
        path: "/custom-wallpaper",
        componentPath: "pages/Rooms/CustomizedWallpaper",
        name: "CustomizedWallpaperPage",
        auth: false,
        exact: true,
      },
      {
        component: "RotationWallpaperPage",
        path: "/rotate-view",
        componentPath: "pages/Rooms/RotationWallpaper",
        name: "RotationWallpaperPage",
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
      {
        component: "ReturnOrderPage",
        path: "/return-order",
        componentPath: "pages/Profile/ReturnOrderPage",
        name: "ReturnOrderPage",
        auth: false,
        exact: true,
      },
      {
        component: "ReviewPage",
        path: "/review-order",
        componentPath: "pages/Profile/ReviewPage",
        name: "ReviewPage",
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
  {
    component: "AuthLayout",
    path: "/admin",
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
      {
        component: "OrderSuccessPage",
        path: "/success-page",
        componentPath: "pages/OrderSuccessPage",
        name: "OrderSuccessPage",
        auth: false,
        exact: true,
      },
      {
        component: "ProductDetailsPage",
        path: "/product-details",
        componentPath: "pages/ProductDetailsPage",
        name: "ProductDetailsPage",
        auth: false,
        exact: true,
      },
      {
        component: "PaymentPage",
        path: "/product-details/payment-page",
        componentPath: "pages/PaymentPage",
        name: "PaymentPage",
        auth: false,
        exact: true,
      },
      {
        component: "ProductDetail",
        path: "/product-details/details",
        componentPath: "pages/ProductDetail",
        name: "ProductDetail",
        auth: false,
        exact: true,
      },
    ],
  },
];

export default routers;
