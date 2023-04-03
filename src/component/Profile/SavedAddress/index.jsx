import { Skeleton } from "@mui/material";
import { deleteAddress, getAddressList } from "action/ProfileAct";
import { CustomButton } from "component/common";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ternaryCondition } from "service/helperFunctions";
import { history } from "service/helpers";

import "./index.scss";

const AddressCard = ({
  addressList: {
    _id,
    fullName,
    mobileNumber,
    flatNo,
    area,
    city,
    state,
    pincode,
    country,
  },
  deleteAddressApi,
}) => {
  return (
    <div className="address-card mb-3">
      <div className="d-flex justify-content-between">
        <label className="label-name">{fullName}</label>
        <div>
          <label
            className="edit-text"
            onClick={() => history.push(`/profile/change-address/${_id}`)}
          >
            EDIT
          </label>
          <label
            className="ms-4 delete-text"
            onClick={() => deleteAddressApi(_id)}
          >
            DELETE
          </label>
        </div>
      </div>
      <label className="py-2 label-mobno">{mobileNumber}</label>

      <p className="label-address">
        {`${flatNo},${area},${city},${state},${pincode},${country}`}
      </p>
    </div>
  );
};

const SavedAddressesFC = ({ getAddressListAPICall, deleteAddressAPI }) => {
  const [addressList, setAddressList] = useState([]);
  const [loader, setLoader] = useState(true);
  const getAddressList = () => {
    getAddressListAPICall()
      .then((res) => {
        setAddressList(res.response);
        setLoader(false);
      })
      .catch((err) => {
        setLoader(false);
        console.log(err);
      });
  };

  const deleteAddressApi = (id) => {
    let query = {
      url_id: id,
    };
    deleteAddressAPI(query)
      .then(() => {
        getAddressList();
      })
      .then((res) => {
        setAddressList(res.response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAddressList();
  }, []);

  return (
    <div className="saved-address">
      {ternaryCondition(
        loader,
        <Skeleton
          sx={{ bgcolor: "#ffffff96" }}
          animation="wave"
          variant="rounded"
          width={"100%"}
          height={120}
        />,
        addressList?.map((addressList) => (
          <AddressCard
            key={addressList?._id}
            deleteAddressApi={deleteAddressApi}
            addressList={addressList}
          />
        ))
      )}

      <CustomButton
        className="mt-4 py-3 px-5 saved-address-button"
        variant="outlined"
        onClick={() => history.push("/profile/add-new-address")}
      >
        + Add New Address
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      deleteAddressAPI: deleteAddress,
      getAddressListAPICall: getAddressList,
    },
    dispatch
  );
};

const SavedAddresses = connect(null, mapDispatchToProps)(SavedAddressesFC);
export default SavedAddresses;
