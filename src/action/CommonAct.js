export const sortingFunction = (value, data) => {
  switch (value) {
    case 1:
      return;
    case 2:
      return;
    case 3:
      return data.sort((a, b) => b.price - a.price).slice(0);
    case 4:
      return data.sort((a, b) => a.price - b.price).slice(0);
    default:
      return null;
  }
};
