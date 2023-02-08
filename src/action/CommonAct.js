import { Toast } from "service/toast";

export const sortingFunction = (value, data) => {
  switch (value) {
    case 1:
      return;
    case 2:
      return;
    case 3:
      return data.slice(0).sort((a, b) => b.price - a.price);
    case 4:
      return data.slice(0).sort((a, b) => a.price - b.price);
    default:
      return null;
  }
};

export const addToCart = (data, newData) => {
  if (newData.includes(data)) {
    Toast({ type: "warning", message: "Item already added to Cart" });
  } else {
    return newData.push(data);
  }
};
