import { ReactComponent as WallpaperIcon } from "assets/svg/HeaderBottom/Wallpaper-Icon.svg";
import { ReactComponent as FlooringIcon } from "assets/svg/HeaderBottom/Flooring-Icon.svg";
import { ReactComponent as ThreeDIcon } from "assets/svg/HeaderBottom/3D-Panel-Icon.svg";
import { ReactComponent as BlindsIcon } from "assets/svg/HeaderBottom/Blinds-Icon.svg";
import { ReactComponent as ArtificialGrassIcon } from "assets/svg/HeaderBottom/Artificial-Grass-Icon.svg";
import { ReactComponent as PVCFoamSheetIcon } from "assets/svg/HeaderBottom/PVC-Foam-Sheet-Icon.svg";
import { ReactComponent as GYMFlooringIcon } from "assets/svg/HeaderBottom/GYM-Flooring-Icon.svg";
import { ReactComponent as RoomVisualizerIcon } from "assets/svg/HeaderBottom/Room-Visualizer-Icon.svg";
import { ReactComponent as ECatalogueIcon } from "assets/svg/HeaderBottom/E-Catalouge-Icon.svg";
import WallpaperBanner from "assets/images/ProductListing/Wallpapers-Header.png";
import WallMuralBanner from "assets/images/ProductListing/WallMurals-Header.png";
import StickerWallpaperBanner from "assets/images/ProductListing/StickerWallpaper-Header.png";

import step1 from "assets/images/ProductDetails/step1.png";
import step2 from "assets/images/ProductDetails/step2.png";
import step3 from "assets/images/ProductDetails/step3.png";
import step4 from "assets/images/ProductDetails/step4.png";
import step5 from "assets/images/ProductDetails/step5.png";
import step6 from "assets/images/ProductDetails/step6.png";
import step7 from "assets/images/ProductDetails/step7.png";
import step8 from "assets/images/ProductDetails/step8.png";
import step9 from "assets/images/ProductDetails/step9.png";
import step10 from "assets/images/ProductDetails/step10.png";

export const LanguageMenuList = [
  {
    label: "EN",
    value: 1,
    icon: "https://catamphetamine.gitlab.io/country-flag-icons/3x2/GB.svg",
  },
];

export const FeaturesList = [
  {
    id: 1,
    Icon: WallpaperIcon,
    label: "Wallpaper",
    menuitems: ["Wallpaper", "Sticker Wallpaper", "Wall Mural", "View all"],
  },
  {
    id: 2,
    Icon: FlooringIcon,
    label: "Flooring",
    menuitems: ["Wooden flooring", "LVP plank (Laminated)", "View all"],
  },
  {
    id: 3,
    Icon: ThreeDIcon,
    label: "3D Panel",
  },
  {
    id: 4,
    Icon: BlindsIcon,
    label: "Blinds",
    menuitems: [
      "Vertical Blinds",
      "Roller Blinds",
      "Zebra Blinds",
      "Chick Blinds",
      "Wooden Blinds",
      "Customized Blinds",
      "View all",
    ],
  },
  {
    id: 5,
    Icon: ArtificialGrassIcon,
    label: "Artificial Grass",
    menuitems: [
      "Vertical Gardens",
      "Hanging Flowers",
      "Artificial Grass",
      "View all",
    ],
  },
  { id: 6, Icon: PVCFoamSheetIcon, label: "PVC Foam Sheet" },
  {
    id: 7,
    Icon: GYMFlooringIcon,
    label: "GYM Flooring",
    menuitems: [
      "GYM Tiles Square",
      "GYM Tiles Interlock",
      "GYM Tiles Hexagonal",
      "GYM Rolls",
      "Sports Flooring",
      "Yoga Mat",
      "View all",
    ],
  },
  { id: 8, Icon: RoomVisualizerIcon, label: "Room Visualizer" },
  { id: 9, Icon: ECatalogueIcon, label: "E-Catalouge" },
];

export const paymentMethod = [
  { id: 1, label: "UPI - Phonepe, Google Pay, Paytm" },
  { id: 2, label: "Credit Cards / Debit Cards" },
  { id: 3, label: "Net Banking" },
  { id: 4, label: "Cash on Delivery" },
];

export const historyNavigation = [
  { id: 1, label: "home", route_to: "/home/home" },
  { id: 2, label: "about-us", route_to: "/home/about-us" },
  { id: 2, label: "cart-summary", route_to: "/home/cart-summary" },
  { id: 2, label: "product-details", route_to: "/home/product-details" },
  {
    id: 2,
    label: "payment-page",
    route_to: "/home/product-details/payment-page",
  },
];

export const productListingFilter = {
  wallpaper: [
    {
      itemheader: "Categories",
      itemlist: [
        { itemlabel: "Sticker Wallpaper" },
        { itemlabel: "Wallpaper" },
        { itemlabel: "Wall Murals" },
      ],
    },
    {
      itemheader: "Sub Categories",
      itemlist: [
        { itemlabel: "Abstract" },
        { itemlabel: "Animal" },
        { itemlabel: "Botanicals" },
        { itemlabel: "Brick" },
        { itemlabel: "Classic" },
        { itemlabel: "Floral" },
        { itemlabel: "Kids" },
        { itemlabel: "Marble" },
        { itemlabel: "Modern" },
        { itemlabel: "Nature" },
        { itemlabel: "Royal" },
        { itemlabel: "Stripes" },
        { itemlabel: "Texture" },
        { itemlabel: "Wood" },
      ],
    },
  ],
  flooring: [
    {
      itemheader: "Categories",
      itemlist: [{ itemlabel: "Wooden Flooring" }, { itemlabel: "LVP Plank" }],
    },
    {
      itemheader: "Sub Categories",
      itemlist: [
        { itemlabel: "Abstract" },
        { itemlabel: "Animal" },
        { itemlabel: "Botanicals" },
      ],
    },
  ],
  blinds: [
    {
      itemheader: "Categories",
      itemlist: [
        { itemlabel: "Vertical Blinds" },
        { itemlabel: "Roller Blinds" },
        { itemlabel: "Zebra Blinds" },
        { itemlabel: "Chick Blinds" },
        { itemlabel: "Wooden Blinds" },
        { itemlabel: "Customized Blinds" },
      ],
    },
    {
      itemheader: "Sub Categories",
      itemlist: [
        { itemlabel: "Abstract" },
        { itemlabel: "Animal" },
        { itemlabel: "Botanicals" },
      ],
    },
  ],
  artificial_grass: [
    {
      itemheader: "Categories",
      itemlist: [
        { itemlabel: "Vertical Gardens" },
        { itemlabel: "Hanging Flowers" },
        { itemlabel: "Artificial Grass" },
      ],
    },
    {
      itemheader: "Sub Categories",
      itemlist: [
        { itemlabel: "Abstract" },
        { itemlabel: "Animal" },
        { itemlabel: "Botanicals" },
      ],
    },
  ],
  gym_flooring: [
    {
      itemheader: "Categories",
      itemlist: [
        { itemlabel: "GYM Tiles Square" },
        { itemlabel: "GYM Tiles Interlock" },
        { itemlabel: "GYM Tiles Hexagonal" },
        { itemlabel: "GYM Rolls" },
        { itemlabel: "Sports Flooring" },
        { itemlabel: "Yoga Mat" },
      ],
    },
    {
      itemheader: "Sub Categories",
      itemlist: [
        { itemlabel: "Abstract" },
        { itemlabel: "Animal" },
        { itemlabel: "Botanicals" },
      ],
    },
  ],
};

export const SortingMenuList = [
  {
    label: "Best Selling",
    value: 1,
  },
  {
    label: "Popularity",
    value: 2,
  },
  {
    label: "High to Low",
    value: 3,
  },
  {
    label: "Low to High",
    value: 4,
  },
];

export const CartSummaryItems = [
  {
    id: 1,
    item_picture: "assets/images/OrderSummary/custom-recipe-wallpaper.png",
    label: "Custom Wallpaper recipe, handwritten recipe",
    color: "Green",
    stock_status: "In Stock",
    delivery_date: "Fri Oct 21",
    delivery_price: "Free",
    installation_date: "Mon Oct 24",
    item_price: "₹3500",
  },
  {
    id: 1,
    label: "Brown Wallpaper",
    color: "Brown",
    stock_status: "In Stock",
    delivery_date: "Fri Oct 21",
    delivery_price: "Free",
    installation_date: "Mon Oct 24",
    item_price: "₹3500",
  },
];

export const savedAddress = [
  {
    id: "1",
    name: "John Doe",
    phoneno: "+91 56843 54862",
    address:
      "No:110, MG Road, Nungambakkam, Opp to ICICI Bank, Chennai - 600 034, Tamil Nadu.",
  },
  {
    id: "2",
    name: "John",
    phoneno: "+91 56843 54862",
    address:
      "No:110, MG Road, Nungambakkam, Opp to ICICI Bank, Chennai - 600 034, Tamil Nadu.",
  },
];

export const wallanticsProducts = [
  {
    id: 1,
    image: "https://images.olx.com.pk/thumbnails/259234973-400x300.jpeg",
    title: "Bharat, Rich Indian Wallpaper Design",
    price: 4000,
  },
  {
    id: 2,
    image:
      "https://cdn.shopify.com/s/files/1/1932/8667/files/Alleyway-Brick_living-room_420x280.jpg?v=1614333560",
    title: "Vincent Van Gough Almond Blossom Wallpaper",
    price: 4000,
  },
];

export const recentlyviewedProducts = [
  {
    id: 1,
    title: "Bharat, Rich Indian Wallpaper Design",
    image: [
      "https://cdn11.bigcommerce.com/s-8smrzb0w7f/images/stencil/original/products/63640/63400/81NYsSmzIjL._SL1500___89962.1602915878.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2022/2/XM/QA/FK/32420942/floral-wallpaper-for-home-1000x1000.jpeg",
      "https://thearchitecturedesigns.com/wp-content/webp-express/webp-images/uploads/2020/06/flower-wallpaper-1.jpg.webp",
      "https://cdn11.bigcommerce.com/s-8smrzb0w7f/images/stencil/558x558/products/62763/62669/71SucufQxxL._SL1200___88295.1602915474.jpg?c=1",
      "https://w0.peakpx.com/wallpaper/478/143/HD-wallpaper-veelike-17-7-x118-1-vintage-floral-peel-and-stick-self-adhesive-removable-pink-red-rose-floral-vinyl-decorative-leaf-floral-contact-paper-for-bedroom-walls-cabinet-nursery-shelf-red-and-white-floral.jpg",
    ],
    price: 4000,
    category: "Wallpaper",
    sub_category: "Floral",
    color: "Pink",
    collection: "Pink Themed",
    room: "Bed Room",
    size: "50cm x 45cm",
  },
  {
    id: 2,
    title: "Vincent Van Gough Almond Blossom Wallpaper",
    image: [
      "https://cdn.shopify.com/s/files/1/1932/8667/files/Alleyway-Brick_living-room_420x280.jpg?v=1614333560",
      "https://5.imimg.com/data5/SELLER/Default/2022/2/XM/QA/FK/32420942/floral-wallpaper-for-home-1000x1000.jpeg",
      "https://thearchitecturedesigns.com/wp-content/webp-express/webp-images/uploads/2020/06/flower-wallpaper-1.jpg.webp",
      "https://cdn11.bigcommerce.com/s-8smrzb0w7f/images/stencil/558x558/products/62763/62669/71SucufQxxL._SL1200___88295.1602915474.jpg?c=1",
      "https://w0.peakpx.com/wallpaper/478/143/HD-wallpaper-veelike-17-7-x118-1-vintage-floral-peel-and-stick-self-adhesive-removable-pink-red-rose-floral-vinyl-decorative-leaf-floral-contact-paper-for-bedroom-walls-cabinet-nursery-shelf-red-and-white-floral.jpg",
    ],
    price: 4000,
    category: "Wallpaper",
    sub_category: "Floral",
    color: "Pink",
    collection: "Pink Themed",
    room: "Bed Room",
    size: "50cm x 45cm",
  },
  {
    id: 3,
    title: "Banaras, Indian Carpet Design Wallpaper",
    image: [
      "https://buildingandinteriors.com/wp-content/uploads/2021/02/64d134b23490042718cca43a430e95d2.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2022/2/XM/QA/FK/32420942/floral-wallpaper-for-home-1000x1000.jpeg",
      "https://thearchitecturedesigns.com/wp-content/webp-express/webp-images/uploads/2020/06/flower-wallpaper-1.jpg.webp",
      "https://cdn11.bigcommerce.com/s-8smrzb0w7f/images/stencil/558x558/products/62763/62669/71SucufQxxL._SL1200___88295.1602915474.jpg?c=1",
      "https://w0.peakpx.com/wallpaper/478/143/HD-wallpaper-veelike-17-7-x118-1-vintage-floral-peel-and-stick-self-adhesive-removable-pink-red-rose-floral-vinyl-decorative-leaf-floral-contact-paper-for-bedroom-walls-cabinet-nursery-shelf-red-and-white-floral.jpg",
    ],
    price: 4000,
    category: "Wallpaper",
    sub_category: "Floral",
    color: "Pink",
    collection: "Pink Themed",
    room: "Bed Room",
    size: "50cm x 45cm",
  },
  {
    id: 4,
    title: "A Story by the Garden Wallpaper",
    image: [
      "https://unikneeds.com/wp-content/uploads/2018/02/3d-wallpaper-1-500x500.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2022/2/XM/QA/FK/32420942/floral-wallpaper-for-home-1000x1000.jpeg",
      "https://thearchitecturedesigns.com/wp-content/webp-express/webp-images/uploads/2020/06/flower-wallpaper-1.jpg.webp",
      "https://cdn11.bigcommerce.com/s-8smrzb0w7f/images/stencil/558x558/products/62763/62669/71SucufQxxL._SL1200___88295.1602915474.jpg?c=1",
      "https://w0.peakpx.com/wallpaper/478/143/HD-wallpaper-veelike-17-7-x118-1-vintage-floral-peel-and-stick-self-adhesive-removable-pink-red-rose-floral-vinyl-decorative-leaf-floral-contact-paper-for-bedroom-walls-cabinet-nursery-shelf-red-and-white-floral.jpg",
    ],
    price: 4000,
    category: "Wallpaper",
    sub_category: "Floral",
    color: "Pink",
    collection: "Pink Themed",
    room: "Bed Room",
    size: "50cm x 45cm",
  },
];

export const artificialgrassProducts = [
  {
    id: 1,
    image: ["https://miro.medium.com/max/620/1*3pykkuNFvOzyme5EGBPYbQ.jpeg"],
    title: "Vertical Gardens",
    price: 4000,
    category: "Artificial Grass",
    sub_category: "Grassy",
    color: "Green",
    collection: "Green Themed",
    room: "Bed Room",
    size: "50cm x 45cm",
  },
  {
    id: 2,
    image: [
      "https://thumbs.dreamstime.com/b/white-wood-textures-174109872.jpg",
    ],
    title: "Indoor Mats - Non UV",
    price: 4000,
    category: "Artificial Grass",
    sub_category: "Grassy",
    color: "Green",
    collection: "Green Themed",
    room: "Bed Room",
    size: "50cm x 45cm",
  },
  {
    id: 3,
    image: [
      "https://rukminim1.flixcart.com/image/850/850/kn6cxow0/wallpaper/j/9/1/228-40-decorative-wallpaper-wall-sticker-for-home-decor-living-original-imagfwtvzthnqyvc.jpeg?q=90",
    ],
    title: "Outdoor Mats - UV Protect",
    price: 4000,
    category: "Artificial Grass",
    sub_category: "Grassy",
    color: "Green",
    collection: "Green Themed",
    room: "Bed Room",
    size: "50cm x 45cm",
  },
];

export const bestsellerProducts = [
  {
    id: 1,
    image: [
      "https://img.staticmb.com/mbcontent/images/uploads/2021/8/botanical-prints.jpg",
    ],
    title: "Bharat, Rich Indian Wallpaper Design",
    price: 4000,
  },
  {
    id: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnGOyc9snqxURRspxuTP2nLbKMPIsDgUr0_viMx_pbIKz8BcgKe7PdasIfUXQ9Zsw9H7w&usqp=CAU",
    title: "Vincent Van Gough Almond Blossom Wallpaper",
    price: 4000,
  },
  {
    id: 3,
    image: [
      "https://i.etsystatic.com/23287991/r/il/ec1109/3890392737/il_1080xN.3890392737_khaz.jpg",
    ],
    title: "Banaras, Indian Carpet Design Wallpaper",
    price: 4000,
  },
  {
    id: 4,
    image: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0fhcrQX7bjOwI-4O-4VsGt9vJe068qAcf5g&usqp=CAU",
    ],
    title: "A Story by the Garden Wallpaper",
    price: 4000,
  },
];

export const newarrivalsProducts = [
  {
    id: 1,
    image: [
      "https://sc04.alicdn.com/kf/H22cbdb6f6f78491d96b7474ac12e059ac.jpg",
    ],
    title: "Bharat, Rich Indian Wallpaper Design",
    price: 4000,
  },
  {
    id: 2,
    image: [
      "https://walldesign.in/wp-content/uploads/2020/05/Falling-Flower-Nature-wallpaper-For-Living-Room.jpg",
    ],
    title: "Vincent Van Gough Almond Blossom Wallpaper",
    price: 4000,
  },
  {
    id: 3,
    image: [
      "https://degournay.com/uploads/favourite/original/10032022122932_0.jpg",
    ],
    title: "Banaras, Indian Carpet Design Wallpaper",
    price: 4000,
  },
  {
    id: 4,
    image: [
      "https://buildingandinteriors.com/wp-content/uploads/2021/02/f98e1563-c334-4a7a-97c5-40601e51a297.jpg",
    ],
    title: "A Story by the Garden Wallpaper",
    price: 4000,
  },
];

export const ecatalougeProducts = [
  {
    id: 1,
    image: ["https://images.olx.com.pk/thumbnails/259234973-400x300.jpeg"],
    title: "My Home. My Space",
  },
  {
    id: 2,
    image: [
      "https://degournay.com/uploads/favourite/original/10032022122932_0.jpg",
    ],
    title: "Trendy Walls",
  },
  {
    id: 3,
    image: [
      "https://degournay.com/uploads/favourite/original/10032022122932_0.jpg",
    ],
    title: "The Art of Inspiration",
  },
  {
    id: 4,
    image: [
      "https://buildingandinteriors.com/wp-content/uploads/2021/02/f98e1563-c334-4a7a-97c5-40601e51a297.jpg",
    ],
    title: "Best of Living Walls",
  },
];

export const blogProducts = [
  {
    id: 1,
    image: ["https://images.olx.com.pk/thumbnails/259234973-400x300.jpeg"],
    title: "My Home. My Space",
  },
  {
    id: 2,
    image: [
      "https://degournay.com/uploads/favourite/original/10032022122932_0.jpg",
    ],
    title: "Trendy Walls",
  },
  {
    id: 3,
    image: [
      "https://degournay.com/uploads/favourite/original/10032022122932_0.jpg",
    ],
    title: "The Art of Inspiration",
  },
];

export const productBanner = [
  {
    id: 1,
    type: "wallpaper",
    image: WallpaperBanner,
  },
  {
    id: 2,
    type: "sticker wallpaper",
    image: StickerWallpaperBanner,
  },
  {
    id: 3,
    type: "wall murals",
    image: WallMuralBanner,
  },
  {
    id: 4,
    type: "all wallpaper",
    image:
      "https://paulwaldeninteriors.com/wp-content/uploads/10-Expert-Tips-for-Choosing-the-Right-Wallpaper-for-Your-Living-Room.jpg",
  },
  {
    id: 5,
    type: "wooden flooring",
    image:
      "https://www.mikasafloors.com/sites/default/files/collectionBanner.jpg",
  },
  {
    id: 6,
    type: "lvp plank",
    image:
      "https://floorsplus.ca/wp-content/uploads/2021/08/luxury-vinyl-plank-product-banner.jpg",
  },
  {
    id: 7,
    type: "all flooring",
    image:
      "https://www.mikasafloors.com/sites/default/files/media-banner_11_1.jpg",
  },
  {
    id: 8,
    type: "vertical blinds",
    image:
      "https://www.chennaiblinds.com/wp-content/uploads/2019/02/vertical-blinds-banner-2.jpg",
  },
  {
    id: 9,
    type: "roller blinds",
    image:
      "https://i.pinimg.com/originals/c9/4c/ca/c94cca9cc3333d0931ea2d3645b93b1e.jpg",
  },
  {
    id: 10,
    type: "zebra blinds",
    image:
      "https://patternsfurnishing.com/wp-content/uploads/2021/05/1_pNr6z04GxwW6ebd9KRtLnw.jpg",
  },
  {
    id: 11,
    type: "chick blinds",
    image: "https://www.smschickmakersindia.com/image/banner-inner.jpg",
  },
  {
    id: 12,
    type: "wooden blinds",
    image:
      "https://www.eurosystems.com/hs-fs/hubfs/Residential%20-%20Interior%20-%20Wooden%20Blinds%20-%20Banner.jpg?width=1400&name=Residential%20-%20Interior%20-%20Wooden%20Blinds%20-%20Banner.jpg",
  },
  {
    id: 13,
    type: "customized blinds",
    image: "https://cpimg.tistatic.com/04960079/b/4/extra-04960079.jpg",
  },
  {
    id: 14,
    type: "all blinds",
    image:
      "https://www.shadeitall.co.uk/wp-content/uploads/2017/02/venetian-blinds-banner.jpg",
  },
  {
    id: 15,
    type: "vertical gardens",
    image:
      "https://vistafolia.b-cdn.net/wp-content/uploads/2021/05/lazylawnderbyshire_banner700-1536x560.jpg",
  },
  {
    id: 16,
    type: "hanging flowers",
    image:
      "https://thumbs.dreamstime.com/b/spring-blossom-background-vector-plum-cherry-hanging-flowers-136680525.jpg",
  },
  {
    id: 17,
    type: "artificial grass",
    image:
      "https://img.choice.com.au/-/media/3142e66df00346558f57fbef7635d095.ashx?w=660&jq=80%20660w",
  },
  {
    id: 17,
    type: "all artificial grass",
    image:
      "https://greensmile.co.in/images/products/interior/artificial-grass/artificial-grass-banner-1.jpg",
  },
  {
    id: 18,
    type: "gym tiles square",
    image:
      "https://www.ncfitnessgear.com.au/wp-content/uploads/2018/08/Gym-flooring-e1534479955243.jpg",
  },
  {
    id: 19,
    type: "gym tiles interlock",
    image:
      "https://rubberking.com/wp-content/uploads/2021/03/fitness-banner-1.jpg",
  },
  {
    id: 20,
    type: "gym tiles hexagonal",
    image:
      "https://www.ragnoworld.com/media/filer_public/04/e5/04e5eed8-756d-4cc6-89a8-e05a82f8db92/duplex_rewind1.jpg",
  },
  {
    id: 21,
    type: "gym rolls",
    image:
      "https://www.enhancemats.com/wp-content/uploads/2022/03/CHS_Install_CA_Roll_8ft_8.jpg",
  },
  {
    id: 22,
    type: "sports flooring",
    image:
      "https://www.zandscarpets.com/images/our-works/banner_imageQVZHSkJqSW1yL21heGtGN05qSVcwUT09.webp",
  },
  {
    id: 23,
    type: "yoga mat",
    image:
      "https://as2.ftcdn.net/v2/jpg/02/24/84/81/1000_F_224848114_lfXBaAMlrtDDA0od05vljEjkIsGgJumv.jpg",
  },
  {
    id: 24,
    type: "all gym flooring",
    image:
      " https://grip.international/wp-content/uploads/2019/07/SBR-Banner-3.jpg",
  },
];

export const productItems = [
  {
    id: 1,
    title: "Vincent Van Gough Almond Blossom Wallpaper",
    image: [
      "https://cdn11.bigcommerce.com/s-8smrzb0w7f/images/stencil/original/products/63640/63400/81NYsSmzIjL._SL1500___89962.1602915878.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2022/2/XM/QA/FK/32420942/floral-wallpaper-for-home-1000x1000.jpeg",
      "https://thearchitecturedesigns.com/wp-content/webp-express/webp-images/uploads/2020/06/flower-wallpaper-1.jpg.webp",
      "https://cdn11.bigcommerce.com/s-8smrzb0w7f/images/stencil/558x558/products/62763/62669/71SucufQxxL._SL1200___88295.1602915474.jpg?c=1",
      "https://w0.peakpx.com/wallpaper/478/143/HD-wallpaper-veelike-17-7-x118-1-vintage-floral-peel-and-stick-self-adhesive-removable-pink-red-rose-floral-vinyl-decorative-leaf-floral-contact-paper-for-bedroom-walls-cabinet-nursery-shelf-red-and-white-floral.jpg",
    ],
    price: 4500,
    category: "Sticker Wallpaper",
    sub_category: "Floral",
    color: "Pink",
    collection: "Pink Themed",
    room: "Bed Room",
    size: "50cm x 45cm",
    type: "wallpaper",
  },
  {
    id: 2,
    title: "Banaras, Indian Carpet Design Wallpaper",
    image: [
      "https://www.giffywalls.com/blog/wp-content/uploads/2021/03/Rosy-Pink-wallpaper-mural-scaled.jpg",
      "https://cdn.shopify.com/s/files/1/0565/7080/6458/products/1155_54a600cf-1118-42aa-ba36-da0b7432a226.jpg?v=1659076658",
      "https://www.giffywalls.com/blog/wp-content/uploads/2021/04/Navy-Flowers-wall-paper-1024x768.jpg",
      "https://www.wallsauce.com/uploads/wallsauce-com/images/thumbs/536/2563c25d7fcbc58dac7295a7572e16b249bf8c07_800__R_N_90.jpg",
      "https://cdn.shopify.com/s/files/1/0565/7080/6458/products/first-blossoms-in-deep-pool-wall-mural-living-room.jpg?v=1662022177",
    ],
    price: 3800,
    category: "Wallpaper",
    sub_category: "Floral",
    color: "Pink",
    collection: "Pink Themed",
    room: "Living Room",
    size: "70cm x 60cm",
    type: "wallpaper",
  },
  {
    id: 3,
    title: "A Story by the Garden Wallpaper",
    image: [
      "https://static.wixstatic.com/media/81d868_7502f3e3c4424fec924a82a9dd21455e~mv2.jpg/v1/fill/w_1200,h_1200,al_c,q_85/81d868_7502f3e3c4424fec924a82a9dd21455e~mv2.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1N0xIifbkGZkY4KOM1vh5zDQLymfNIdvgyw&usqp=CAU",
      "https://media.architecturaldigest.com/photos/56d0e15d614bdaed547f54d8/4:3/w_1058,h_794,c_limit/floral-wallpaper-01.jpg",
      "https://media.architecturaldigest.com/photos/6216b299643f8f6e8e605c91/16:9/w_2580,c_limit/60544285_030_b.jpeg",
      "https://www.giffywalls.com/pub/media/catalog/product/-/_/-_15_-a632-floral-seamless-pattern_-somei-yoshino-sakura-flowers.jpeg",
    ],

    price: 2500,
    category: "Sticker Wallpaper",
    sub_category: "Floral",
    color: "Pink",
    collection: "Pink Themed",
    room: "Study Room",
    size: "50cm x 45cm",
    type: "wallpaper",
  },
  {
    id: 4,
    title: "Vincent Van Gough Almond Blossom Wallpaper",
    image: [
      "https://static.wixstatic.com/media/d4050a_80b9c72c79ed46b8b0764e8ec43dc3f5~mv2.jpg/v1/fill/w_550,h_625,al_c,q_85,usm_0.66_1.00_0.01/d4050a_80b9c72c79ed46b8b0764e8ec43dc3f5~mv2.webp",
      "https://i.etsystatic.com/21916349/r/il/8445f3/3012204607/il_fullxfull.3012204607_6kdr.jpg",
      "https://cdn.shopify.com/s/files/1/0565/7080/6458/collections/Floral-Wallpaper-Purple-and-Pink-Dark-Floral-Wall-Mural.jpg?v=1632906538",
      "https://ucarecdn.com/2da49d22-08b0-4ebd-a7fd-e97ceab220cf/",
      "https://i.etsystatic.com/8591869/r/il/c53bfd/1456731054/il_570xN.1456731054_4789.jpg",
    ],

    price: 6000,
    category: "Sticker Wallpaper",
    sub_category: "Floral",
    color: "Pink",
    collection: "Pink Themed",
    room: "Bed Room",
    size: "50cm x 45cm",
    type: "wallpaper",
  },
  {
    id: 5,
    title: "Banaras, Indian Carpet Design Wallpaper",
    image: [
      "https://static.wixstatic.com/media/d4050a_80b9c72c79ed46b8b0764e8ec43dc3f5~mv2.jpg/v1/fill/w_550,h_625,al_c,q_85,usm_0.66_1.00_0.01/d4050a_80b9c72c79ed46b8b0764e8ec43dc3f5~mv2.webp",
      "https://i.etsystatic.com/21916349/r/il/8445f3/3012204607/il_fullxfull.3012204607_6kdr.jpg",
      "https://cdn.shopify.com/s/files/1/0565/7080/6458/collections/Floral-Wallpaper-Purple-and-Pink-Dark-Floral-Wall-Mural.jpg?v=1632906538",
      "https://ucarecdn.com/2da49d22-08b0-4ebd-a7fd-e97ceab220cf/",
      "https://i.etsystatic.com/8591869/r/il/c53bfd/1456731054/il_570xN.1456731054_4789.jpg",
    ],
    price: 8000,
    category: "Wallpaper",
    sub_category: "Floral",
    color: "Pink",
    collection: "Pink Themed",
    room: "Bed Room",
    size: "50cm x 45cm",
    type: "wallpaper",
  },
  {
    id: 6,
    title: "A Story by the Garden Wallpaper",
    image: [
      "https://static.wixstatic.com/media/d4050a_80b9c72c79ed46b8b0764e8ec43dc3f5~mv2.jpg/v1/fill/w_550,h_625,al_c,q_85,usm_0.66_1.00_0.01/d4050a_80b9c72c79ed46b8b0764e8ec43dc3f5~mv2.webp",
      "https://i.etsystatic.com/21916349/r/il/8445f3/3012204607/il_fullxfull.3012204607_6kdr.jpg",
      "https://cdn.shopify.com/s/files/1/0565/7080/6458/collections/Floral-Wallpaper-Purple-and-Pink-Dark-Floral-Wall-Mural.jpg?v=1632906538",
      "https://ucarecdn.com/2da49d22-08b0-4ebd-a7fd-e97ceab220cf/",
      "https://i.etsystatic.com/8591869/r/il/c53bfd/1456731054/il_570xN.1456731054_4789.jpg",
    ],
    price: 2600,
    category: "Wallpaper",
    sub_category: "Floral",
    color: "Pink",
    collection: "Pink Themed",
    room: "Bed Room",
    size: "50cm x 45cm",
    type: "wallpaper",
  },
  {
    id: 7,
    title: "Vincent Van Gough Almond Blossom Wallpaper",
    image: [
      "https://i.etsystatic.com/8591869/r/il/c53bfd/1456731054/il_570xN.1456731054_4789.jpg",
    ],
    price: 3200,
    category: "Wall Murals",
    sub_category: "Floral",
    color: "Pink",
    collection: "Pink Themed",
    room: "Bed Room",
    size: "50cm x 45cm",
    type: "wallpaper",
  },
  {
    id: 8,
    title: "Banaras, Indian Carpet Design Wallpaper",
    image: [
      "https://i.pinimg.com/736x/f1/e4/6b/f1e46b994968a67d88bb562bb2e0a6b4.jpg",
    ],
    price: 5500,
    category: "Sticker Wallpaper",
    sub_category: "Floral",
    color: "Pink",
    collection: "Pink Themed",
    room: "Bed Room",
    size: "50cm x 45cm",
    type: "sticker wallpaper",
  },
  {
    id: 9,
    title: "A Story by the Garden Wallpaper",
    image: [
      "https://i.etsystatic.com/31418760/r/il/9f2307/3762635972/il_fullxfull.3762635972_45e1.jpg",
    ],
    price: 7000,
    category: "Wall Murals",
    sub_category: "Floral",
    color: "Pink",
    collection: "Pink Themed",
    room: "Bed Room",
    size: "50cm x 45cm",
    type: "wallpaper",
  },
  {
    id: 10,
    title: "Vincent Van Gough Almond Blossom Wallpaper",
    image: ["https://m.media-amazon.com/images/I/51+3rSj93UL._AC_.jpg"],
    price: 4800,
    category: "Wall Murals",
    sub_category: "Kids",
    color: "Pink",
    collection: "Pink Themed",
    room: "Bed Room",
    size: "50cm x 45cm",
    type: "wallpaper",
  },
  {
    id: 11,
    title: "Banaras, Indian Carpet Design Wallpaper",
    image: [
      "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,w_730/cb%2F9-wallpaper-in-kids-rooms",
    ],
    price: 5600,
    category: "Wall Murals",
    sub_category: "Kids",
    color: "Pink",
    collection: "Pink Themed",
    room: "Bed Room",
    size: "50cm x 45cm",
    type: "wallpaper",
  },
  {
    id: 12,
    title: "A Story by the Garden Wallpaper",
    image: ["https://m.media-amazon.com/images/I/61bqVFhvHYL.jpg"],
    price: 6300,
    category: "Sticker Wallpaper",
    sub_category: "Kids",
    color: "Pink",
    collection: "Pink Themed",
    room: "Bed Room",
    size: "50cm x 45cm",
    type: "wallpaper",
  },
  {
    id: 13,
    title: "Wooden Flooring Design 1",
    image: [
      "https://redfloorindia.in/demo-new/wp-content/uploads/2018/05/HARVEST-IROKO-3-STRIP.jpeg",
    ],
    price: 6300,
    category: "Wooden Flooring",
    sub_category: "Kids",
    color: "Pink",
    collection: "Pink Themed",
    room: "Bed Room",
    size: "50cm x 45cm",
    type: "flooring",
  },
  {
    id: 14,
    title: "Wooden Flooring Design 2",
    image: [
      "https://cpimg.tistatic.com/05890792/b/4/Mexico-Walnut-Wooden-Flooring.jpg",
    ],
    price: 4000,
    category: "Wooden Flooring",
    sub_category: "Kids",
    color: "Pink",
    collection: "Pink Themed",
    room: "Bed Room",
    size: "50cm x 45cm",
    type: "flooring",
  },
  {
    id: 15,
    title: "Wooden Flooring Design 3",
    image: [
      "	https://images.floorforce.com/Textures/18867/Laminate/1bf868a7-dc14-40dd-957b-94784fefe75c/Images/6359ClassicWalnut--Pro6359ClassicWalnut_500x500.png?vaumkp=image_url",
    ],
    price: 4500,
    category: "Wooden Flooring",
    sub_category: "Kids",
    color: "Pink",
    collection: "Pink Themed",
    room: "Bed Room",
    size: "50cm x 45cm",
    type: "flooring",
  },
  {
    id: 16,
    title: "Wooden Flooring Design 4",
    image: [
      "https://images.jdmagicbox.com/quickquotes/images_main/wonderfloor-hitech-552407-1-30-mm-wooden-flooring-94954290-lc2cj.jpg",
    ],
    price: 6300,
    category: "Wooden Flooring",
    sub_category: "Kids",
    color: "Pink",
    collection: "Pink Themed",
    room: "Bed Room",
    size: "50cm x 45cm",
    type: "flooring",
  },
  {
    id: 17,
    title: "LVP Plank 1",
    image: [
      "	https://www.squarefoot.co.in/libraries/timthumb.php?w=350&h=350&src=https://www.squarefoot.co.in/uploads/products/walnut-plank-dark-walnut_plank_dark_thumb_2048.jpg",
    ],
    price: 3200,
    category: "LVP Plank",
    sub_category: "Kids",
    color: "Pink",
    collection: "Pink Themed",
    room: "Bed Room",
    size: "50cm x 45cm",
    type: "flooring",
  },
  {
    id: 18,
    title: "LVP Plank 2",
    image: [
      "	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMux3rQww4chh0KjsMejjaRnb3UTmBAn-0ZKj2rp4N30FMTO2VY4FcskBQMiB23T4VKEA&usqp=CAU",
    ],
    price: 4200,
    category: "LVP Plank",
    sub_category: "Kids",
    color: "Pink",
    collection: "Pink Themed",
    room: "Bed Room",
    size: "50cm x 45cm",
    type: "flooring",
  },
  {
    id: 19,
    title: "LVP Plank 3",
    image: [
      "https://specialtykitchen.com/wp-content/gallery/vinyl-tile-katavia/Burnished-Acacia.jpg",
    ],
    price: 5100,
    category: "LVP Plank",
    sub_category: "Kids",
    color: "Pink",
    collection: "Pink Themed",
    room: "Bed Room",
    size: "50cm x 45cm",
    type: "flooring",
  },
  {
    id: 20,
    title: "LVP Plank 4",
    image: [
      "https://5.imimg.com/data5/MJ/VE/MY-1850398/pvc-flooring-sheet-500x500.jpg",
    ],
    price: 5500,
    category: "LVP Plank",
    sub_category: "Kids",
    color: "Pink",
    collection: "Pink Themed",
    room: "Bed Room",
    size: "50cm x 45cm",
    type: "flooring",
  },
  {
    id: 21,
    title: "Vertical Blinds 1",
    image: ["https://images.pond5.com/vertical-blinds-3d-091482510_iconl.jpeg"],
    price: 2800,
    category: "Vertical Blinds",
    sub_category: "Kids",
    color: "Pink",
    collection: "Pink Themed",
    room: "Bed Room",
    size: "50cm x 45cm",
    type: "blinds",
  },
  {
    id: 22,
    title: "Vertical Blinds 2",
    image: [
      "https://www.blindzonline.co.uk/wp-content/uploads/2022/04/Como-Sense-RP-LP5433-LS1_TB.jpg",
    ],
    price: 2800,
    category: "Vertical Blinds",
    sub_category: "Kids",
    color: "Pink",
    collection: "Pink Themed",
    room: "Bed Room",
    size: "50cm x 45cm",
    type: "blinds",
  },
  {
    id: 23,
    title: "Roller Blinds 1",
    image: [
      "https://4.imimg.com/data4/XH/JO/MY-8965884/roller-blinds-500x500.jpg",
    ],
    price: 2800,
    category: "Roller Blinds",
    sub_category: "Kids",
    color: "Pink",
    collection: "Pink Themed",
    room: "Bed Room",
    size: "50cm x 45cm",
    type: "blinds",
  },
  {
    id: 24,
    title: "Roller Blinds 2",
    image: [
      "https://5.imimg.com/data5/AL/MC/MY-374970/roller-blinds-500x500.jpg",
    ],
    price: 2800,
    category: "Roller Blinds",
    sub_category: "Kids",
    color: "Pink",
    collection: "Pink Themed",
    room: "Bed Room",
    size: "50cm x 45cm",
    type: "blinds",
  },
  {
    id: 25,
    title: "Zebra Blinds 1",
    image: [
      "https://5.imimg.com/data5/VE/NA/YB/SELLER-6460924/zebra-blinds-500x500.jpg",
    ],
    price: 2800,
    category: "Zebra Blinds",
    sub_category: "Kids",
    color: "Pink",
    collection: "Pink Themed",
    room: "Bed Room",
    size: "50cm x 45cm",
    type: "blinds",
  },
  {
    id: 26,
    title: "Zebra Blinds 2",
    image: [
      "https://5.imimg.com/data5/SV/QG/MY-27981797/zebra-blind-500x500.jpg",
    ],
    price: 2800,
    category: "Zebra Blinds",
    sub_category: "Kids",
    color: "Pink",
    collection: "Pink Themed",
    room: "Bed Room",
    size: "50cm x 45cm",
    type: "blinds",
  },
  {
    id: 27,
    title: "Chick Blinds 1",
    image: ["https://m.media-amazon.com/images/I/71R3UWjQifL._SX679_.jpg"],
    price: 2800,
    category: "Chick Blinds",
    sub_category: "Kids",
    color: "Pink",
    collection: "Pink Themed",
    room: "Bed Room",
    size: "50cm x 45cm",
    type: "blinds",
  },
  {
    id: 28,
    title: "Chick Blinds 2",
    image: [
      "https://www.elegantndecor.com/images/bamboo-chick-blinds/bamboo-chick-blinds-delhi.jpg",
    ],
    price: 2800,
    category: "Chick Blinds",
    sub_category: "Kids",
    color: "Pink",
    collection: "Pink Themed",
    room: "Bed Room",
    size: "50cm x 45cm",
    type: "blinds",
  },
  {
    id: 29,
    title: "Wooden Blinds 1",
    image: [
      "https://www.artfulhome.in/bamboo_blinds/woodvenetian_images/AdobeStock_279437469.webp",
    ],
    price: 2800,
    category: "Wooden Blinds",
    sub_category: "Kids",
    color: "Pink",
    collection: "Pink Themed",
    room: "Bed Room",
    size: "50cm x 45cm",
    type: "blinds",
  },
  {
    id: 30,
    title: "Wooden Blinds 2",
    image: [
      "https://bocablinds.com/wp-content/uploads/2016/03/EverWood_2007_DiningRoom.jpg",
    ],
    price: 2800,
    category: "Wooden Blinds",
    sub_category: "Kids",
    color: "Pink",
    collection: "Pink Themed",
    room: "Bed Room",
    size: "50cm x 45cm",
    type: "blinds",
  },
  {
    id: 31,
    title: "Customized Blinds 1",
    image: ["https://www.blindsbasket.com/images/printed.jpg"],
    price: 2800,
    category: "Customized Blinds",
    sub_category: "Kids",
    color: "Pink",
    collection: "Pink Themed",
    room: "Bed Room",
    size: "50cm x 45cm",
    type: "blinds",
  },
  {
    id: 32,
    title: "Customized Blinds 2",
    image: [
      "https://blinckr.com/image/cache/catalog/Customized%20Natural%20Roller%20Blinds/Customized%20Natural%20Roller%20Blind_Transparent-637x637.jpeg",
    ],
    price: 2800,
    category: "Customized Blinds",
    sub_category: "Kids",
    color: "Pink",
    collection: "Pink Themed",
    room: "Bed Room",
    size: "50cm x 45cm",
    type: "blinds",
  },
  {
    id: 33,
    title: "GYM Tiles Square 1",
    image: [
      "https://5.imimg.com/data5/DG/VE/MY-11273340/gym-flooring-500x500.jpeg",
    ],
    price: 2800,
    category: "GYM Tiles Square",
    sub_category: "Kids",
    color: "Pink",
    collection: "Pink Themed",
    room: "Bed Room",
    size: "50cm x 45cm",
    type: "gym flooring",
  },
  {
    id: 34,
    title: "GYM Tiles Square 2",
    image: [
      "https://5.imimg.com/data5/JD/DC/HQ/SELLER-16569354/gym-tiles-500x500.jpg",
    ],
    price: 2800,
    category: "GYM Tiles Square",
    sub_category: "Kids",
    color: "Pink",
    collection: "Pink Themed",
    room: "Bed Room",
    size: "50cm x 45cm",
    type: "gym flooring",
  },
  {
    id: 35,
    title: "GYM Tiles Interlock 1",
    image: [
      "https://5.imimg.com/data5/LI/WC/MA/SELLER-2751211/interlocking-rubber-gym-floor-tiles-500x500.jpg",
    ],
    price: 2800,
    category: "GYM Tiles Interlock",
    sub_category: "Kids",
    color: "Pink",
    collection: "Pink Themed",
    room: "Bed Room",
    size: "50cm x 45cm",
    type: "gym flooring",
  },
  {
    id: 36,
    title: "GYM Tiles Interlock 2",
    image: ["https://m.media-amazon.com/images/I/814cVC7Nt7L._SL1500_.jpg"],
    price: 2800,
    category: "GYM Tiles Interlock",
    sub_category: "Kids",
    color: "Pink",
    collection: "Pink Themed",
    room: "Bed Room",
    size: "50cm x 45cm",
    type: "gym flooring",
  },
  {
    id: 37,
    title: "GYM Tiles Hexagonal 1",
    image: [
      "https://5.imimg.com/data5/SELLER/Default/2022/3/DW/KO/GG/9126481/rubber-flooring-tiles-500x500.jpg",
    ],
    price: 2800,
    category: "GYM Tiles Hexagonal",
    sub_category: "Kids",
    color: "Pink",
    collection: "Pink Themed",
    room: "Bed Room",
    size: "50cm x 45cm",
    type: "gym flooring",
  },
  {
    id: 38,
    title: "GYM Tiles Hexagonal 2",
    image: [
      "https://www.arizonatile.com/wp-content/uploads/2020/12/paros-navy-and-black-hex-porcelain-tile-floor.jpg",
    ],
    price: 2800,
    category: "GYM Tiles Hexagonal",
    sub_category: "Kids",
    color: "Pink",
    collection: "Pink Themed",
    room: "Bed Room",
    size: "50cm x 45cm",
    type: "gym flooring",
  },
  {
    id: 39,
    title: "GYM Rolls 1",
    image: [
      "https://www.rubberfloorings.in/img/rubber-rolls/rubber-rolls-gym-flooring-black-white-11.jpg",
    ],
    price: 2800,
    category: "GYM Rolls",
    sub_category: "Kids",
    color: "Pink",
    collection: "Pink Themed",
    room: "Bed Room",
    size: "50cm x 45cm",
    type: "gym flooring",
  },
  {
    id: 40,
    title: "GYM Rolls 2",
    image: [
      "https://www.perfectfloorsolutions.co.ke/wp-content/uploads/2022/07/gym-mats-2.jpg",
    ],
    price: 2800,
    category: "GYM Rolls",
    sub_category: "Kids",
    color: "Pink",
    collection: "Pink Themed",
    room: "Bed Room",
    size: "50cm x 45cm",
    type: "gym flooring",
  },
  {
    id: 41,
    title: "Sports Flooring 1",
    image: [
      "https://www.tvs-sportssurfaces.com/wp-content/uploads/2020/10/What-Are-The-Different-Types-of-Sports-Flooring.jpg",
    ],
    price: 2800,
    category: "Sports Flooring",
    sub_category: "Kids",
    color: "Pink",
    collection: "Pink Themed",
    room: "Bed Room",
    size: "50cm x 45cm",
    type: "gym flooring",
  },
  {
    id: 42,
    title: "Sports Flooring 2",
    image: [
      "https://www.artfulhome.in/flooring/vinyl_flooring/vinyl_images/vinyl_sports.jpg",
    ],
    price: 2800,
    category: "Sports Flooring",
    sub_category: "Kids",
    color: "Pink",
    collection: "Pink Themed",
    room: "Bed Room",
    size: "50cm x 45cm",
    type: "gym flooring",
  },
  {
    id: 43,
    title: "Yoga Mat 1",
    image: [
      "https://ii1.pepperfry.com/media/catalog/product/u/n/1100x1210/unisex-foldable-anti-skid-yoga-mat---5-x-2-feet---in-purple-by-hosta-homes-unisex-foldable-anti-skid-p4cjzh.jpg",
    ],
    price: 2800,
    category: "Yoga Mat",
    sub_category: "Kids",
    color: "Pink",
    collection: "Pink Themed",
    room: "Bed Room",
    size: "50cm x 45cm",
    type: "gym flooring",
  },
  {
    id: 44,
    title: "Yoga Mat 2",
    image: [
      "https://ii2.pepperfry.com/media/catalog/product/u/n/494x544/unisex-foldable-anti-skid-yoga-mat---5-x-2-feet---in-green-by-hosta-homes-unisex-foldable-anti-skid--18yaod.jpg",
    ],
    price: 2800,
    category: "Yoga Mat",
    sub_category: "Kids",
    color: "Pink",
    collection: "Pink Themed",
    room: "Bed Room",
    size: "50cm x 45cm",
    type: "gym flooring",
  },
  {
    id: 45,
    title: "Vertical Gardens 1",
    image: ["https://5.imimg.com/data5/BH/IB/NT/GLADMIN-9441264/-500x500.jpg"],
    price: 2800,
    category: "Vertical Gardens",
    sub_category: "Kids",
    color: "Pink",
    collection: "Pink Themed",
    room: "Bed Room",
    size: "50cm x 45cm",
    type: "artificial grass",
  },
  {
    id: 46,
    title: "Vertical Gardens 2",
    image: [
      "https://5.imimg.com/data5/SELLER/Default/2022/1/DC/BS/TN/121077030/vertical-garden-wall-500x500.jpg",
    ],
    price: 2800,
    category: "Vertical Gardens",
    sub_category: "Kids",
    color: "Pink",
    collection: "Pink Themed",
    room: "Bed Room",
    size: "50cm x 45cm",
    type: "artificial grass",
  },
  {
    id: 47,
    title: "Hanging Flowers 1",
    image: [
      "https://i.pinimg.com/736x/86/24/60/86246010bbbc921a2e8b74ff4012c266--pom-pom-flowers-fake-flowers.jpg",
    ],
    price: 2800,
    category: "Hanging Flowers",
    sub_category: "Kids",
    color: "Pink",
    collection: "Pink Themed",
    room: "Bed Room",
    size: "50cm x 45cm",
    type: "artificial grass",
  },
  {
    id: 48,
    title: "Hanging Flowers 2",
    image: [
      "https://image.made-in-china.com/155f0j00YRJUdfuFHGqk/Artificial-Wisteria-Flower-on-The-Winding-Column-for-Ceiling-Decoration.jpg",
    ],
    price: 2800,
    category: "Hanging Flowers",
    sub_category: "Kids",
    color: "Pink",
    collection: "Pink Themed",
    room: "Bed Room",
    size: "50cm x 45cm",
    type: "artificial grass",
  },
  {
    id: 49,
    title: "Artificial Grass 1",
    image: [
      "https://www.loomkart.com/wp-content/uploads/2022/07/grass-carpet.jpg",
    ],
    price: 2800,
    category: "Artificial Grass",
    sub_category: "Kids",
    color: "Pink",
    collection: "Pink Themed",
    room: "Bed Room",
    size: "50cm x 45cm",
    type: "artificial grass",
  },
  {
    id: 50,
    title: "Artificial Grass 2",
    image: [
      "https://cdn.shopify.com/s/files/1/0293/9941/6892/products/1_c1289d53-2076-428b-9387-e65ad397737b_600x.jpg?v=1657948432",
    ],
    price: 2800,
    category: "Artificial Grass",
    sub_category: "Kids",
    color: "Pink",
    collection: "Pink Themed",
    room: "Bed Room",
    size: "50cm x 45cm",
    type: "artificial grass",
  },
];

export const ProductdetailImages = [
  "https://sc04.alicdn.com/kf/H22cbdb6f6f78491d96b7474ac12e059ac.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnGOyc9snqxURRspxuTP2nLbKMPIsDgUr0_viMx_pbIKz8BcgKe7PdasIfUXQ9Zsw9H7w&usqp=CAU",
  "https://images.olx.com.pk/thumbnails/259234973-400x300.jpeg",
  "https://sc04.alicdn.com/kf/H22cbdb6f6f78491d96b7474ac12e059ac.jpg",
  "https://images.olx.com.pk/thumbnails/259234973-400x300.jpeg",
];

export const ProductInstructions1 = [
  {
    id: 1,
    image: step1,
    info: "Clean Walls",
    steps: "Step 1",
  },
  {
    id: 2,
    image: step2,
    info: "Pencil a vertical line to serve as your starting point visual guide.",
    steps: "Step 2",
  },
  {
    id: 3,
    image: step3,
    info: "Map out where each panel will be going on your wall.",
    steps: "Step 3",
  },
];

export const ProductInstructions2 = [
  {
    id: 1,
    image: step4,
    info: "Identify the top & bottom of the panel.",
    steps: "Step 4",
  },
  {
    id: 2,
    image: step5,
    info: "Starting at the top corner, gently pull the panel away from the liner",
    steps: "Step 5",
  },
  {
    id: 3,
    image: step6,
    info: "Pull a 2”- 4” strip of the panel away  from the liner. This strip will be the first piece to adhere to the wall.",
    steps: "Step 6",
  },
];

export const ProductInstructions3 = [
  {
    id: 1,
    image: step7,
    info: "Line up the panel edge with your vertical pencil line. Beginning from the top. Press the 2”- 4” strip firmly onto the wall.",
    steps: "Step 7",
  },
  {
    id: 2,
    image: step8,
    info: "Once the panel is secure, reach under & grab the liner. Slowly pull the liner away from the panel while pressing the paper onto the wall & smoothing as you go.",
    steps: "Step 8",
  },
  {
    id: 3,
    image: step9,
    info: "Panels are designed to match up from top to bottom.",
    steps: "Step 9",
  },
];

export const ProductInstructions4 = [
  {
    id: 1,
    image: step10,
    info: "If you are installing the design with a Half-Drop Repeat, these panels match seamlessly when they are connected at the halfway point of the adjoining design. ",
    steps: "Step 10",
  },
];
