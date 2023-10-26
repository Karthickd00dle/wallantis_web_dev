const routers = [
  {
    path: "/",
    exact: true,
    redirect: "/home/",
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
        component: "AddNewAddressPage",
        path: "/add-new-address",
        componentPath: "pages/AddNewAddressPage",
        name: "AddNewAddressPage",
        auth: false,
        exact: true,
      },
      {
        component: "AddNewAddressPage",
        path: "/change-address/:id",
        componentPath: "pages/AddNewAddressPage",
        name: "AddNewAddressPage",
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
        component: "AboutUsPage",
        path: "/about-us",
        componentPath: "pages/Profile/AboutUsPage",
        name: "AboutUsPage",
        auth: false,
        exact: true,
      },
      {
        component: "ContactusPage",
        path: "/contact-us",
        componentPath: "pages/ContactusPage",
        name: "ContactusPage",
        auth: false,
        exact: true,
      },
      {
        component: "CataloguePage",
        path: "/catalogue",
        componentPath: "pages/Profile/CataloguePage",
        name: "CataloguePage",
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
        component: "CareerPage",
        path: "/careers",
        componentPath: "pages/Profile/CareerPage",
        name: "CareerPage",
      },
      {
        component: "CareerDetailsPage",
        path: "/career-detail/:id",
        componentPath: "pages/CareerDetailsPage",
        name: "CareerDetailsPage",
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
        component: "ForgotPasswordPage",
        path: "/forgot-password",
        componentPath: "pages/Auth/ForgotPassword",
        name: "ForgotPasswordPage",
        auth: false,
        exact: true,
      },
      {
        component: "RegisterPage",
        path: "/register",
        componentPath: "pages/Auth/RegisterPage",
        name: "RegisterPage",
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
    component: "AdminAuthLayout",
    path: "/admin-auth",
    auth: false,
    exact: false,
    childrens: [
      {
        component: "AdminLoginPage",
        path: "/login",
        componentPath: "pages/Admin/Auth/AdminLoginPage",
        name: "AdminLoginPage",
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
        path: "//",
        componentPath: "pages/HomePage",
        name: "HomePage",
        auth: false,
        exact: true,
      },
      {
        component: "ProductListSubCategoryPage",
        path: "/product-listing/subCategory=:subCategoryId&category=:categoryId",
        componentPath: "pages/ProductListSubCategoryPage",
        name: "ProductListSubCategoryPage",
        auth: false,
        exact: true,
      },
      {
        component: "ProductListCategoryPage",
        path: "/product-listing/category=:categoryId",
        componentPath: "pages/ProductListCategoryPage",
        name: "ProductListCategoryPage",
        auth: false,
        exact: true,
      },
      {
        component: "ProductDetailPageUser",
        path: "/product-details/:id",
        componentPath: "pages/ProductDetailPageUser",
        name: "ProductDetailPageUser",
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
        component: "PaymentPage",
        path: "/payment-page",
        componentPath: "pages/PaymentPage",
        name: "PaymentPage",
        auth: false,
        exact: true,
      },
    ],
  },
  {
    component: "AdminLayout",
    path: "/admin",
    auth: false,
    exact: false,
    childrens: [
      {
        component: "DashboardPage",
        path: "/dashboard",
        componentPath: "pages/DashboardPage",
        name: "DashboardPage",
        auth: false,
        exact: true,
      },

      {
        component: "ReportPage",
        path: "/report-management",
        componentPath: "pages/Admin/ReportPage",
        name: "ReportPage",
        auth: false,
        exact: false,
      },
      {
        component: "NewOrderPage",
        path: "/new-order",
        componentPath: "pages/Admin/Report/NewOrder",
        name: "NewOrderPage",
        auth: false,
        exact: false,
      },
      {
        component: "SettingsPage",
        path: "/settings",
        componentPath: "pages/Admin/SettingsPage",
        name: "SettingsPage",
        auth: false,
        exact: false,
      },
      {
        component: "CustomerPage",
        path: "/customer",
        componentPath: "pages/Admin/CustomerPage",
        name: "CustomerPage",
        auth: false,
        exact: false,
      },
      {
        component: "CustomerDetailPage",
        path: "/customerDetailPage",
        componentPath: "pages/Admin/CustomerDetailPage",
        name: "CustomerDetailPage",
        auth: false,
        exact: false,
      },
      {
        component: "EditOrderDetailPage",
        path: "/edit-order-detail/:id",
        componentPath: "pages/Admin/EditOrderDetailPage",
        name: "EditOrderDetailPage",
        auth: false,
        exact: false,
      },
      {
        component: "ProductDetailPage",
        path: "/productDetailPage",
        componentPath: "pages/Admin/ProductDetailPage",
        name: "ProductDetailPage",
        auth: false,
        exact: false,
      },
      {
        component: "BlogDetailPage",
        path: "/blogDetailPage",
        componentPath: "pages/Admin/BlogDetailPage",
        name: "BlogDetailPage",
        auth: false,
        exact: false,
      },
      {
        component: "CouponDetailPage",
        path: "/couponDetailPage",
        componentPath: "pages/Admin/CouponDetailPage",
        name: "CouponDetailPage",
        auth: false,
        exact: false,
      },
      {
        component: "StaffDetailPage",
        path: "/staffDetailPage",
        componentPath: "pages/Admin/StaffDetailPage",
        name: "StaffDetailPage",
        auth: false,
        exact: false,
      },
      {
        component: "AddNewStaffPage",
        path: "/add-staff",
        componentPath: "pages/Admin/AddNewStaff",
        name: "AddNewStaffPage",
        auth: false,
        exact: false,
      },

      {
        component: "AddNewCouponPage",
        path: "/add-coupon",
        componentPath: "pages/Admin/AddNewCoupon",
        name: "AddNewCouponPage",
        auth: false,
        exact: false,
      },
      {
        component: "AddEditCataloguePage",
        path: "/add-edit-catalogue",
        componentPath: "pages/Admin/AddEditCataloguePage",
        name: "AddEditCataloguePage",
        auth: false,
        exact: false,
      },
      {
        component: "CareerDetailPage",
        path: "/careerDetailPage",
        componentPath: "pages/Admin/CareerDetailPage",
        name: "CareerDetailPage",
        auth: false,
        exact: false,
      },
      {
        component: "OrderManagementPage",
        path: "/order-management",
        componentPath: "pages/Admin/OrderManagementPage",
        name: "OrderManagementPage",
        auth: false,
        exact: false,
      },
      {
        component: "ProductManagementPage",
        path: "/product-management",
        componentPath: "pages/Admin/ProductManagementPage",
        name: "ProductManagementPage",
        auth: false,
        exact: false,
      },
      {
        component: "AddEditProductPage",
        path: "/add-edit-product",
        componentPath: "pages/Admin/AddEditProductPage",
        name: "AddEditProductPage",
        auth: false,
        exact: false,
      },
      {
        component: "CouponManagementPage",
        path: "/coupon",
        componentPath: "pages/Admin/CouponManagementPage",
        name: "CouponManagementPage",
        auth: false,
        exact: false,
      },
      {
        component: "InventoryManagementPage",
        path: "/inventory-management",
        componentPath: "pages/Admin/InventoryManagementPage",
        name: "InventoryManagementPage",
        auth: false,
        exact: false,
      },
      {
        component: "AddEditInstallerPage",
        path: "/add-edit-installer",
        componentPath: "pages/Admin/AddEditInstallerPage",
        name: " AddEditInstallerPage",
        auth: false,
        exact: false,
      },
      {
        component: "LeadManagementPage",
        path: "/lead-management",
        componentPath: "pages/Admin/LeadManagementPage",
        name: "LeadManagementPage",
        auth: false,
        exact: false,
      },
      {
        component: "BlogManagementPage",
        path: "/blog-management",
        componentPath: "pages/Admin/BlogManagementPage",
        name: "BlogManagementPage",
        auth: false,
        exact: false,
      },
      {
        component: "AddEditBlogPage",
        path: "/add-edit-blog",
        componentPath: "pages/Admin/AddEditBlogPage",
        name: "AddEditBlogPage",
        auth: false,
        exact: false,
      },
      {
        component: "StaffManagementPage",
        path: "/staff-management",
        componentPath: "pages/Admin/StaffManagementPage",
        name: "StaffManagementPage",
        auth: false,
        exact: false,
      },
      {
        component: "ContentManagementPage",
        path: "/content-management",
        componentPath: "pages/Admin/ContentManagementPage",
        name: "ContentManagementPage",
        auth: false,
        exact: false,
      },
      {
        component: "CareerManagementPage",
        path: "/career-management",
        componentPath: "pages/Admin/CareerManagementPage",
        name: "CareerManagementPage",
        auth: false,
        exact: false,
      },
      {
        component: "CatalogueManagementPage",
        path: "/catalogue-management",
        componentPath: "pages/Admin/CatalogueManagementPage",
        name: "CatalogueManagementPage",
        auth: false,
        exact: false,
      },
    ],
  },
];

export default routers;
