// import { wishlistApi } from "../service/apiVariables";

// export const addToWishlistApi = (productId) => async (dispatch, getState, { apiCall, Toast }) => {
//   try {
//     const data = await apiCall({
//       ...wishlistApi.addToWishlist,
//       body: { productId },
//     });
//     Toast({ type: "success", message: "Item added to wishlist" });
//     return data;
//   } catch (error) {
//     Toast({ type: "error", message: error.message });
//     throw error;
//   }
// };

// export const removeFromWishlistApi = (productId) => async (dispatch, getState, { apiCall, Toast }) => {
//   try {
//     const data = await apiCall({
//       ...wishlistApi.removeFromWishlist,
//       body: { productId },
//     });
//     Toast({ type: "info", message: "Item removed from wishlist" });
//     return data;
//   } catch (error) {
//     Toast({ type: "error", message: error.message });
//     throw error;
//   }
// };

// wishlistAction.js

// import { wishlistApi  } from "../service/apiVariables";
// import { commonStateList } from "service/actionType";


// export const addToWishlistApi = (productId) => async (dispatch, getState, { apiCall, Toast }) => {
//   try {
//     const data = await apiCall({
//       ...wishlistApi.addToWishlist,
//       body: { productId },
//     });
//     console.log('Wishlist API Data:', data); 
//     Toast({ type: "success", message: "Item added to wishlist" });
//     return data;
//   } catch (error) {
//     Toast({ type: "error", message: error.message });
//     throw error;
//   }
// };

// export const removeFromWishlistApi = (productId) => async (dispatch, getState, { apiCall, Toast }) => {
//   try {
//     const data = await apiCall({
//       ...wishlistApi.removeFromWishlist,
//       body: { productId },
//     });
//     console.log('Remove Wishlist API Data:', data);
//     // dispatch(updateWishlist(data)); 
//     Toast({ type: "info", message: "Item removed from wishlist" });
//     return data;
//   } catch (error) {
//     Toast({ type: "error", message: error.message });
//     throw error;
//   }
// };

// // Action to update the wishlist in the Redux store
// export const updateWishlist = (wishlistData) => ({
//   type: commonStateList.wishlistItem, // Replace with your actual action type
//   payload: wishlistData,
// });

import { wishlistApi } from "../service/apiVariables";
import { commonStateList } from "service/actionType";

export const addToWishlistApi = (productId) => async (dispatch, getState, { apiCall, Toast }) => {
    try {
      const data = await apiCall({
        ...wishlistApi.addToWishlist,
        body: { productId },
      });
      console.log('Wishlist API Data:', data);
      dispatch(updateWishlist(data));
      Toast({ type: "success", message: "Item added to wishlist" });
      return data;  
    } catch (error) {
      Toast({ type: "error", message: error.message });
      return { success: false, message: error.message };
    }
  };
  

export const removeFromWishlistApi = (productId) => async (dispatch, getState, { apiCall, Toast }) => {
  try {
    const data = await apiCall({
      ...wishlistApi.removeFromWishlist,
      body: { productId },
    });
    dispatch(updateWishlist(data));
    Toast({ type: "info", message: "Item removed from wishlist" });
    return data;
  } catch (error) {
    Toast({ type: "error", message: error.message });
    throw error;
  }
};

// Action to update the wishlist in the Redux store
export const updateWishlist = (wishlistData) => ({
  type: commonStateList.wishlistItem, // Replace with your actual action type
  payload: wishlistData,
});
