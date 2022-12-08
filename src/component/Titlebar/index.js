import React, { useState } from "react";
import { ReactComponent as Slidersicon } from "assets/svg/sliders.svg";
import { ReactComponent as AddiconMobile } from "assets/svg/Add_KIM.svg";
import { ReactComponent as Addicon } from "assets/svg/fluent_add-20-filled.svg";
import { ReactComponent as RefreshIcon } from "assets/svg/refresh-cw.svg";
import { ReactComponent as RefreshiconMobile } from "assets/svg/Refreshicon.svg";
import { CustomButton } from "component/common/CustomButton";
import "./style.scss";
import CustomMenuButton from "component/common/CustomMenuButton";
import { FilterKim } from "component/Dashboard/LandingPageComponent/FilterKim/FilterKim";
import { NormalInput } from "component/common";
import {
  conditionalLoad,
  enabledPermissions,
  getUserDetailsBasedToken,
} from "service/helperFunctions";
import { statusColorMasterList, locationSwitchList } from "config";
import { KimServerButtons } from "./KimServerButtons";

const FilterButton = {
  border: "1px solid #003975",
  borderRadius: "6px",
  fontSize: "18px",
  textTransform: "none",
  color: "#003975",
  padding: "10px 20px 10px 20px",
  height: "50px",
  width: "143px",
};
const AddKimButton = {
  color: "#FFFFFF",
  backgroundColor: "#003975",
  textTransform: "none",
  fontSize: "18px",
  lineHeight: "22px",
  fontFamily: "lato",
  "&:hover": {
    backgroundColor: "#003975",
  },
  padding: "10px",
  width: "140px",
  borderRadius: "6px",
};

export const Titlebar = ({
  onClickAddKim,
  onClickFilter,
  searchValue,
  setSearchValue,
  getKimDetailsListApi,
  showSearchOnly = false,
  isSwitch,
  handleStatusIcon,
  handleSwitchValue,
  applyBtnClick
}) => {
  const [toggleMenu, setToggleMenu] = useState();
  const [activeStatus, setActiveStatus] = useState("");
  const statusBarFunc = () => {
    return (
      <div className="d-none d-lg-block">
        <label className="ms-1 mb-1 text-sub-title">Status</label>
        <div className="d-flex align-items-center me-5">
          {statusColorMasterList.map((value, index) => (
            <div
              onClick={() => {
                handleStatusIcon(value.value);
                setActiveStatus(value.color);
              }}
              key={index}
              className={`status-color-${value.color} active-${
                value.color === activeStatus && activeStatus
              } status-indicator mx-1`}
            />
          ))}
        </div>
      </div>
    );
  };

  const addKimButtonFunc = () => {
    return (
      <>
        <div className="d-none d-lg-block">
          <CustomButton
            className="me-3"
            style={AddKimButton}
            variant="outlined"
            startIcon={<Addicon />}
            onClick={onClickAddKim}
          >
            Add KIM
          </CustomButton>
        </div>
        <div className="d-lg-none">
          <AddiconMobile className="me-3" onClick={onClickAddKim} />
        </div>
      </>
    );
  };

  const  applyButtonHandle=()=>{
    applyBtnClick()
  }

  const filterKimButtonToDisplay = () => {
    return (
      <div className="d-none d-lg-block">
        <CustomMenuButton
          isNormalButton
          className="ms-3"
          label="Filter"
          variant="outlined"
          toggleMenu={toggleMenu}
          setToggleMenu={setToggleMenu}
          startIcon={<Slidersicon />}
          style={FilterButton}
        >
          <FilterKim applyBtnHandle={applyButtonHandle} setToggleMenu={setToggleMenu}  />
        </CustomMenuButton>
      </div>
    );
  };

  const serverButtonToDisplay = () => {
    return <KimServerButtons getKimDetailsListApi={getKimDetailsListApi} />;
  };
  const location =
    localStorage.getItem("location") === locationSwitchList[1].value
      ? true
      : false;
  const [switchControllar, setSwitchControllar] = useState(location);

  const CustomSwitch = () => {
    const switchHandal = (value) => {
      setSwitchControllar(value);
      handleSwitchValue(
        value ? locationSwitchList[1].value : locationSwitchList[0].value
      );
    };
    return (
      <>
        <div className="mx-1 mx-md-3">
          <label className="ms-1 mb-1 text-sub-title">Location</label>
          <div className="switch_area">
            <div
              className={`switchButton ${
                switchControllar && "active-switch-button"
              }`}
            ></div>
            <div
              onClick={() => switchHandal(false)}
              className={`switchLeft ${!switchControllar && "active-switch"}`}
            >
              {window.innerWidth < 475
                ? locationSwitchList[0].name1
                : locationSwitchList[0].name2}
            </div>
            <div
              onClick={() => switchHandal(true)}
              className={`switchRight ${switchControllar && "active-switch"}`}
            >
              {window.innerWidth < 475
                ? locationSwitchList[1].name1
                : locationSwitchList[1].name2}
            </div>
          </div>
        </div>
      </>
    );
  };

  const refreshButtonToDisplay = () => {
    return (
      <>
        <div className="d-none d-lg-block">
          <CustomButton
            className="refresh-btn "
            style={AddKimButton}
            variant="outlined"
            startIcon={<RefreshIcon />}
            onClick={getKimDetailsListApi}
          >
            Refresh
          </CustomButton>
        </div>
        <RefreshiconMobile
          className="d-lg-none mx-2 refresh-icon"
          onClick={getKimDetailsListApi}
        />
      </>
    );
  };
  const userDetails = getUserDetailsBasedToken();
  const { isAdmin, userPermissions } = userDetails;
  return (
    <div className="titlebar-container">
      {conditionalLoad(isSwitch, <CustomSwitch />)}

      <div className="d-flex align-items-center">
        {!showSearchOnly &&
          conditionalLoad(
            isAdmin || enabledPermissions(userPermissions) === "View & Edit",
            statusBarFunc()
          )}
        {conditionalLoad(
          !isAdmin && enabledPermissions(userPermissions) === "View & Edit",
          serverButtonToDisplay()
        )}
      </div>
      <div className="d-flex align-items-center">
        {conditionalLoad(isAdmin && !showSearchOnly, addKimButtonFunc())}

        {showSearchOnly && (
          <div className="d-none d-lg-block">
            <NormalInput
              placeholder="Search"
              type="text"
              className="normal-input inputview searchInput"
              isSearchBox={true}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
        )}
        {!showSearchOnly && filterKimButtonToDisplay()}
        {conditionalLoad(
          !isAdmin || enabledPermissions(userPermissions) === "View & Edit",
          refreshButtonToDisplay()
        )}
        <div className="d-lg-none">
          <Slidersicon className="filter-icon" onClick={onClickFilter} />
        </div>
      </div>
    </div>
  );
};
