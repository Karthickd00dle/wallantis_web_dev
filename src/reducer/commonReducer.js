import { productItems } from "config";
import { commonStateList } from "service/actionType";

const initialState = {
  productListingState: productItems,
  productDetailState: {},
  cartItemState: [],
  wishlistItemState: [],
  currentUserState: {},
};
const commonReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case commonStateList.productListing:
      return {
        ...state,
        productListingState: payload,
      };
    case commonStateList.productDetail:
      return {
        ...state,
        productDetailState: payload,
      };

    case commonStateList.cartItem:
      return {
        ...state,
        cartItemState: payload,
      };

    case commonStateList.wishlistItem:
      return {
        ...state,
        wishlistItemState: payload,
      };

    case commonStateList.currentUser:
      return {
        ...state,
        currentUserState: payload,
      };

    default:
      return state;
  }
};

export default commonReducer;
