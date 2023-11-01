import { CustomFilterAccordion } from "component/common";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandIcon from "assets/icons/ExpandIcon";
import { CustomPriceRangeSlider } from "component/common/CustomPriceRangeSlider";
import { getProductFilterApi } from "action/ProductsAct";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { useEffect, useState } from "react";

const ProductListingGridFC = ({
  setCheckedValues,
  maximumPrice,
  pricevalue,
  setPriceValue,
  getProductFilterApi,
  isViewAll,
}) => {
  const handlePriceFilter = (event, newValue) => {
    setPriceValue(newValue);
  };

  const handleCheck = ({ target: { name, value, checked } }, title) => {
    setCheckedValues((prevState) => {
      const newState = { ...prevState };
      if (checked) {
        newState[title] = newState[title]
          ? [...newState[title], value]
          : [value];
      } else {
        newState[title] = newState[title].filter((item) => item !== value);
      }
      return newState;
    });
  };

  const [filterData, setFilterData] = useState([]);

  const getProductFilterAPI = () => {
    getProductFilterApi()
      .then(({ response }) => {
        let newResponse = [];
        isViewAll
          ? (newResponse = response.slice(1))
          : (newResponse = response.slice(2));

        setFilterData(newResponse);
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
