import { ReactComponent as WallpaperIcon } from "assets/svg/HeaderBottom/Wallpaper-Icon.svg";
import { ReactComponent as FlooringIcon } from "assets/svg/HeaderBottom/Flooring-Icon.svg";
import { ReactComponent as ThreeDIcon } from "assets/svg/HeaderBottom/3D-Panel-Icon.svg";
import { ReactComponent as BlindsIcon } from "assets/svg/HeaderBottom/Blinds-Icon.svg";
import { ReactComponent as ArtificialGrassIcon } from "assets/svg/HeaderBottom/Artificial-Grass-Icon.svg";
import { ReactComponent as PVCFoamSheetIcon } from "assets/svg/HeaderBottom/PVC-Foam-Sheet-Icon.svg";
import { ReactComponent as GYMFlooringIcon } from "assets/svg/HeaderBottom/GYM-Flooring-Icon.svg";
import { ReactComponent as RoomVisualizerIcon } from "assets/svg/HeaderBottom/Room-Visualizer-Icon.svg";
import { ReactComponent as ECatalogueIcon } from "assets/svg/HeaderBottom/E-Catalouge-Icon.svg";

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

export const wallpapersProductListing = [
  {
    itemheader: "Categories",
    itemlist: [
      { itemlabel: "Sticker Wallpaper", itemcount: 3 },
      { itemlabel: "Wallpaper", itemcount: 20 },
      { itemlabel: "Wall Murals", itemcount: 6 },
    ],
  },
  {
    itemheader: "Sub Categories",
    itemlist: [
      { itemlabel: "Abstract", itemcount: 3 },
      { itemlabel: "Animal", itemcount: 20 },
      { itemlabel: "Botanicals", itemcount: 6 },
      { itemlabel: "Brick", itemcount: 10 },
      { itemlabel: "Classic", itemcount: 5 },
      { itemlabel: "Floral", itemcount: 6 },
      { itemlabel: "Kids", itemcount: 3 },
      { itemlabel: "Marble", itemcount: 3 },
      { itemlabel: "Modern", itemcount: 20 },
      { itemlabel: "Nature", itemcount: 6 },
      { itemlabel: "Royal", itemcount: 10 },
      { itemlabel: "Stripes", itemcount: 5 },
      { itemlabel: "Texture", itemcount: 6 },
      { itemlabel: "Wood", itemcount: 3 },
    ],
  },
];

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
  {
    id: 3,
    image:
      "https://buildingandinteriors.com/wp-content/uploads/2021/02/64d134b23490042718cca43a430e95d2.jpg",
    title: "Banaras, Indian Carpet Design Wallpaper",
    price: 4000,
  },
  {
    id: 4,
    image:
      "https://unikneeds.com/wp-content/uploads/2018/02/3d-wallpaper-1-500x500.jpg",
    title: "A Story by the Garden Wallpaper",
    price: 4000,
  },
];

export const artificialgrassProducts = [
  {
    id: 1,
    image: "https://miro.medium.com/max/620/1*3pykkuNFvOzyme5EGBPYbQ.jpeg",
    title: "Vertical Gardens",
    price: 4000,
  },
  {
    id: 2,
    image: "https://thumbs.dreamstime.com/b/white-wood-textures-174109872.jpg",
    title: "Indoor Mats - Non UV",
    price: 4000,
  },
  {
    id: 3,
    image:
      "https://rukminim1.flixcart.com/image/850/850/kn6cxow0/wallpaper/j/9/1/228-40-decorative-wallpaper-wall-sticker-for-home-decor-living-original-imagfwtvzthnqyvc.jpeg?q=90",
    title: "Outdoor Mats - UV Protect",
    price: 4000,
  },
];

export const bestsellerProducts = [
  {
    id: 1,
    image:
      "https://img.staticmb.com/mbcontent/images/uploads/2021/8/botanical-prints.jpg",
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
    image:
      "https://i.etsystatic.com/23287991/r/il/ec1109/3890392737/il_1080xN.3890392737_khaz.jpg",
    title: "Banaras, Indian Carpet Design Wallpaper",
    price: 4000,
  },
  {
    id: 4,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0fhcrQX7bjOwI-4O-4VsGt9vJe068qAcf5g&usqp=CAU",
    title: "A Story by the Garden Wallpaper",
    price: 4000,
  },
];

export const newarrivalsProducts = [
  {
    id: 1,
    image: "https://sc04.alicdn.com/kf/H22cbdb6f6f78491d96b7474ac12e059ac.jpg",
    title: "Bharat, Rich Indian Wallpaper Design",
    price: 4000,
  },
  {
    id: 2,
    image:
      "https://walldesign.in/wp-content/uploads/2020/05/Falling-Flower-Nature-wallpaper-For-Living-Room.jpg",
    title: "Vincent Van Gough Almond Blossom Wallpaper",
    price: 4000,
  },
  {
    id: 3,
    image:
      "https://degournay.com/uploads/favourite/original/10032022122932_0.jpg",
    title: "Banaras, Indian Carpet Design Wallpaper",
    price: 4000,
  },
  {
    id: 4,
    image:
      "https://buildingandinteriors.com/wp-content/uploads/2021/02/f98e1563-c334-4a7a-97c5-40601e51a297.jpg",
    title: "A Story by the Garden Wallpaper",
    price: 4000,
  },
];

export const ecatalougeProducts = [
  {
    id: 1,
    image: "https://images.olx.com.pk/thumbnails/259234973-400x300.jpeg",
    title: "My Home. My Space",
  },
  {
    id: 2,
    image:
      "https://degournay.com/uploads/favourite/original/10032022122932_0.jpg",
    title: "Trendy Walls",
  },
  {
    id: 3,
    image:
      "https://degournay.com/uploads/favourite/original/10032022122932_0.jpg",
    title: "The Art of Inspiration",
  },
  {
    id: 4,
    image:
      "https://buildingandinteriors.com/wp-content/uploads/2021/02/f98e1563-c334-4a7a-97c5-40601e51a297.jpg",
    title: "Best of Living Walls",
  },
];

export const blogProducts = [
  {
    id: 1,
    image: "https://images.olx.com.pk/thumbnails/259234973-400x300.jpeg",
    title: "My Home. My Space",
  },
  {
    id: 2,
    image:
      "https://degournay.com/uploads/favourite/original/10032022122932_0.jpg",
    title: "Trendy Walls",
  },
  {
    id: 3,
    image:
      "https://degournay.com/uploads/favourite/original/10032022122932_0.jpg",
    title: "The Art of Inspiration",
  },
];

export const wallpaperProducts = [
  {
    id: 1,
    title: "Vincent Van Gough Almond Blossom Wallpaper",
    image:
      "https://cdn11.bigcommerce.com/s-8smrzb0w7f/images/stencil/original/products/63640/63400/81NYsSmzIjL._SL1500___89962.1602915878.jpg",
    price: 4500,
    category: "Sticker Wallpaper",
    sub_category: "Floral",
    color: "Pink",
    collection: "Pink Themed",
    room: "Bed Room",
    size: "50cm x 45cm",
  },
  {
    id: 2,
    title: "Banaras, Indian Carpet Design Wallpaper",
    image:
      "https://www.giffywalls.com/blog/wp-content/uploads/2021/03/Rosy-Pink-wallpaper-mural-scaled.jpg",
    price: 4500,
    category: "Wallpaper",
    sub_category: "Floral",
    color: "Pink",
    collection: "Pink Themed",
    room: "Living Room",
    size: "70cm x 60cm",
  },
  {
    id: 3,
    title: "A Story by the Garden Wallpaper",
    image:
      "https://static.wixstatic.com/media/81d868_7502f3e3c4424fec924a82a9dd21455e~mv2.jpg/v1/fill/w_1200,h_1200,al_c,q_85/81d868_7502f3e3c4424fec924a82a9dd21455e~mv2.jpg",
    price: 4500,
    category: "Floral",
    color: "Pink",
    collection: "Pink Themed",
    room: "Study Room",
    size: "50cm x 45cm",
  },
  {
    id: 4,
    title: "Vincent Van Gough Almond Blossom Wallpaper",
    image:
      "https://static.wixstatic.com/media/d4050a_80b9c72c79ed46b8b0764e8ec43dc3f5~mv2.jpg/v1/fill/w_550,h_625,al_c,q_85,usm_0.66_1.00_0.01/d4050a_80b9c72c79ed46b8b0764e8ec43dc3f5~mv2.webp",
    price: 4500,
    category: "Floral",
    color: "Pink",
    collection: "Pink Themed",
    room: "Bed Room",
    size: "50cm x 45cm",
  },
  {
    id: 5,
    title: "Banaras, Indian Carpet Design Wallpaper",
    image: "https://m.media-amazon.com/images/I/91lO3dM+XPL._SL1500_.jpg",
    price: 4500,
    category: "Floral",
    color: "Pink",
    collection: "Pink Themed",
    room: "Bed Room",
    size: "50cm x 45cm",
  },
  {
    id: 6,
    title: "A Story by the Garden Wallpaper",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/living-room-wallpaper-ideas-19-eld0008-opal-mural-by-ella-doran-from-the-ella-doran-collection-at-surface-view-murals-from-40-per-sq-meter-www-surfaceview-co-uk-1615811197.jpg",
    price: 4500,
    category: "Floral",
    color: "Pink",
    collection: "Pink Themed",
    room: "Bed Room",
    size: "50cm x 45cm",
  },
  {
    id: 7,
    title: "Vincent Van Gough Almond Blossom Wallpaper",
    price: 4500,
    category: "Floral",
    color: "Pink",
    collection: "Pink Themed",
    room: "Bed Room",
    size: "50cm x 45cm",
  },
  {
    id: 8,
    title: "Banaras, Indian Carpet Design Wallpaper",
    image:
      "https://i.pinimg.com/736x/f1/e4/6b/f1e46b994968a67d88bb562bb2e0a6b4.jpg",
    price: 4500,
    category: "Floral",
    color: "Pink",
    collection: "Pink Themed",
    room: "Bed Room",
    size: "50cm x 45cm",
  },
  {
    id: 9,
    title: "A Story by the Garden Wallpaper",
    image:
      "https://i.etsystatic.com/31418760/r/il/9f2307/3762635972/il_fullxfull.3762635972_45e1.jpg",
    price: 4500,
    category: "Floral",
    color: "Pink",
    collection: "Pink Themed",
    room: "Bed Room",
    size: "50cm x 45cm",
  },
  {
    id: 10,
    title: "Vincent Van Gough Almond Blossom Wallpaper",
    image: "https://m.media-amazon.com/images/I/51+3rSj93UL._AC_.jpg",
    price: 4500,
    category: "Kids",
    color: "Pink",
    collection: "Pink Themed",
    room: "Bed Room",
    size: "50cm x 45cm",
  },
  {
    id: 11,
    title: "Banaras, Indian Carpet Design Wallpaper",
    image:
      "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,w_730/cb%2F9-wallpaper-in-kids-rooms",
    price: 4500,
    category: "Kids",
    color: "Pink",
    collection: "Pink Themed",
    room: "Bed Room",
    size: "50cm x 45cm",
  },
  {
    id: 12,
    title: "A Story by the Garden Wallpaper",
    image: "https://m.media-amazon.com/images/I/61bqVFhvHYL.jpg",
    price: 4500,
    category: "Kids",
    color: "Pink",
    collection: "Pink Themed",
    room: "Bed Room",
    size: "50cm x 45cm",
  },
];
