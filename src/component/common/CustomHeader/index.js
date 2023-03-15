import React, { useState, useEffect, useRef } from "react";
import "./header.scss";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { ReactComponent as SupportPersonLogo } from "assets/svg/HeaderTop/Support-Person.svg";
import { ReactComponent as BrandLogo } from "assets/svg/HeaderTop/Wallantics-Logo.svg";
import { ReactComponent as CartIcon } from "assets/svg/HeaderTop/Cart.svg";
import { NormalSearch } from "../NormalSearch";
import { CustomSelect } from "../CustomSelect";
import { LanguageMenuList } from "config";
import { CustomButton } from "..";
import { styled } from "@mui/material/styles";
import { history } from "service/helpers";
import JohnDoe1 from "assets/images/user.png";
import { getAllProducts } from "action/ProductsAct";
import { getCurrentProfile } from "action/ProfileAct";
import { RiArrowDropDownLine } from "react-icons/ri";
import { routerAuthTokenGuard } from "service/helperFunctions";
import { bindActionCreators } from "redux";
import { connect, useDispatch } from "react-redux";
import Header from "../Header";
import { Badge } from "@mui/material";
import { commonStateList } from "service/actionType";

export const CustomHeaderComponent = ({
  getAllProductsAPI,
  cartItemData,
  getCurrentProfileAPI,
}) => {
  const outsideRef = useRef();
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");
  const authToken = localStorage.getItem("authToken");
  const [open, setOpen] = useState(false);
  const [itemCount, setItemCount] = useState(null);
  const [productList, setProductList] = useState([]);
  const [currentData, setCurrentData] = useState();
  const handleCartIcon = () => {
    history.push("/home/cart-summary");
  };

  const handleLogoClick = () => {
    history.push("/home/home");
    window.location.reload(false);
    window.scrollTo(0, 0);
  };

  const handleMyProfile = (route) => {
    history.push("/profile/profile-page", route);
  };

  function FaAngleDown(props) {
    return (
      <div className="dropdownItem" onClick={props.onClick}>
        {props.text}
      </div>
    );
  }

  const getCurrentProfile = () => {
    getCurrentProfileAPI()
      .then((res) => {
        dispatch({
          type: commonStateList.currentUser,
          payload: res?.response,
        });
        setCurrentData(res?.response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const StyledBadge = styled(Badge)(() => ({
    "& .MuiBadge-badge": {
      right: 0,
      top: 0,
      border: `1px solid #C5CAFF`,
      borderRadius: "100%",
      color: "#FFFFFF",
      background:
        "radial-gradient(35.36% 7465.91% at 50% 49.87%, #CE9C69 0%, #AF763B 100%);",
      display: "flex",
      alignItems: "center",
      height: "20px",
    },
  }));

  const getAllProducts = () => {
    getAllProductsAPI().then((res) => {
      setProductList(res?.response?.data);
    });
  };

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (
        open &&
        outsideRef.current &&
        !outsideRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [open]);

  useEffect(() => {
    setItemCount(cartItemData?.length);
  }, [cartItemData]);

  useEffect(() => {
    getAllProducts();
    getCurrentProfile();
  }, []);
  return (
    <AppBar className="navbar-appbar" position="fixed" ref={outsideRef}>
      <Container maxWidth="xxl">
        <Toolbar disableGutters>
          <div className="header-top-container">
            <BrandLogo onClick={handleLogoClick} className="custom-brandlogo" />
            <NormalSearch
              value={searchInput}
              onChange={(event) => setSearchInput(event.target.value)}
            />
            <a
              href="tel:+044 65483 46823"
              className="text-decoration-none text-reset"
            >
              <div className="d-flex align-items-center">
                <SupportPersonLogo width="60" height="30" />
                <div className="ps-0 d-flex flex-column w-100">
                  <label>Need Help?</label>
                  <label>+044 65483 46823</label>
                </div>
              </div>
            </a>
            <CustomSelect menuItemList={LanguageMenuList} />
            <div
              className="d-flex align-items-center cart-icon"
              onClick={handleCartIcon}
            >
              <StyledBadge badgeContent={itemCount}>
                <CartIcon />
              </StyledBadge>

              <label className="ps-1 cart-icon">Cart</label>
            </div>
            {!authToken ? (
              <CustomButton
                style={{
                  width: "110px",
                  height: "48px",
                  backgroundColor: "#A26220",
                }}
                variant="contained"
                className="ms-3"
                onClick={() => {
                  history.push("/auth/login");
                }}
              >
                Login
              </CustomButton>
            ) : (
              <div
                className="custom-john d-flex align-items-center"
                onClick={() => {
                  setOpen(!open);
                }}
              >
                <img src={JohnDoe1} />
                &nbsp;&nbsp;
                <span>{`${currentData?.firstName} ${currentData?.lastName}`}</span>
                <RiArrowDropDownLine size="20" />
                {open && (
                  <div className="FaAngleDown">
                    <ul className="cursor-pointer">
                      <FaAngleDown
                        text={"My Profile"}
                        onClick={() => handleMyProfile(0)}
                      />
                      <FaAngleDown
                        text={"My Orders"}
                        onClick={() => handleMyProfile(1)}
                      />
                      <FaAngleDown
                        text={"Refer a Friend"}
                        onClick={() => handleMyProfile(2)}
                      />
                      <FaAngleDown
                        text={"Saved Addesses"}
                        onClick={() => handleMyProfile(3)}
                      />
                      <FaAngleDown
                        text={"Change Password"}
                        onClick={() => handleMyProfile(4)}
                      />
                      <FaAngleDown
                        text={"Logout"}
                        onClick={routerAuthTokenGuard}
                      />
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </Toolbar>

        <Header productList={productList} />
      </Container>
    </AppBar>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    ownProps: ownProps,
    cartItemData: state.commonStore.cartItemState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getAllProductsAPI: getAllProducts,
      getCurrentProfileAPI: getCurrentProfile,
    },
    dispatch
  );
};

export const CustomHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomHeaderComponent);
