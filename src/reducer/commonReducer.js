import { wallpaperProducts } from "config";
import { commonStateList } from "service/actionType";

const initialState = {
  productListingState: wallpaperProducts,
  productDetailState: {},
  cartItemState:[],
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

    default:
      return state;
  }
};

export default commonReducer;
