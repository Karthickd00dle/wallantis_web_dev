import { CustomFilterAccordion } from "component/common";
import { wallpapersProductListing } from "config";
import React from "react";

const ProductListingGrid = () => {
  return (
    <>
      <div className="filter-container">
        {wallpapersProductListing.map(({ itemheader, itemlist }, index) => (
          <CustomFilterAccordion
            itemheader={itemheader}
            itemlist={itemlist}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default ProductListingGrid;
