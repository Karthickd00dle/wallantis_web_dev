import React from "react";
import { useHistory } from "react-router-dom";
import "./index.scss";

export default function SavedAddresses({ showAddressForm }) {
  let history = useHistory();
  return (
    <div className="saved-address">
      <div className="card">
        <div className="display-flex">
          <p>John Doe</p>

          <div className="display-flex">
            <p className="edit">EDIT</p>
            <p className="delete">DELETE</p>
          </div>
        </div>
        <p>+91 56843 54862</p>

        <p>
          No:110, MG Road, Nungambakkam, Opp to ICICI Bank, Chennai - 600 034,
          Tamil Nadu.
        </p>
      </div>
      <div className="card">
        <div className="display-flex">
          <p>John Doe</p>

          <div className="display-flex">
            <p className="edit">EDIT</p>
            <p className="delete">DELETE</p>
          </div>
        </div>
        <p>+91 56843 54862</p>

        <p>
          No:110, MG Road, Nungambakkam, Opp to ICICI Bank, Chennai - 600 034,
          Tamil Nadu.
        </p>
      </div>

      <button onClick={showAddressForm}>Add New Address</button>
    </div>
  );
}
