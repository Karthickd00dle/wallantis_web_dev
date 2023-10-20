import { CustomFilterAccordion } from "component/common";
import { productItems } from "config";
import { productfilter } from "service/helperFunctions";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandIcon from "assets/icons/ExpandIcon";
import { CustomPriceRangeSlider } from "component/common/CustomPriceRangeSlider";
import { getProductFilter, getProductFilterApi } from "action/ProductsAct";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { useEffect, useState } from "react";

const ProductListingGridFC = ({
  checkedValues,
  setCheckedValues,
  maximumPrice,
  pricevalue,
  setPriceValue,
  locationLabel,
  getProductFilterApi,
}) => {
  const handlePriceFilter = (event, newValue) => {
    setPriceValue(newValue);
  };

  const handleCheck = ({ target: { name, checked } }) => {
    if (checked) {
      setCheckedValues([...checkedValues, name]);
    } else {
      setCheckedValues(checkedValues.filter((v) => v !== name));
    }
  };

  const [filterData, setFilterData] = useState([]);

  const getProductFilterAPI = () => {
    getProductFilterApi()
      .then(({ response }) => {
        setFilterData(response);
      })
      .catch((error) => {
        console.error("Error fetching filter data:", error);
      });
  };

  useEffect(() => getProductFilterAPI(), []);

  return (
    <>
      <div className="filter-container">
        {filterData.map(({ title, value }, index) => (
          <CustomFilterAccordion
            key={index}
            title={title}
            index={index}
            value={value}
            onChange={handleCheck}
          />
        ))}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandIcon height={10} width={10} />}>
            <label className="filter-title cursor-pointer">Price</label>
          </AccordionSummary>
          <AccordionDetails>
            <CustomPriceRangeSlider
              maxValue={maximumPrice}
              pricevalue={pricevalue}
              onChange={handlePriceFilter}
            />
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
};

const mapStateToProps = (_, ownProps) => {
  return {
    ownProps: ownProps,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getProductFilterApi: getProductFilterApi,
    },
    dispatch
  );
};

export const ProductListingGrid = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListingGridFC);
