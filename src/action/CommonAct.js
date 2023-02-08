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
