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
  { id: 1, label: "home", route_to: "/home" },
  { id: 2, label: "about-us", route_to: "/home/about-us" },
];
