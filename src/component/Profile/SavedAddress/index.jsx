import React from "react";
import { useHistory } from "react-router-dom";
import "./index.scss";

export default function SavedAddresses({ showAddressForm }) {
  let history = useHistory();
  return (
    <div className="saved-address">
      <div className="card">
        <div className="display-flex">
          <div>John Doe</div>

          <div className="display-flex">
            <div className="edit">EDIT</div>
            <div className="delete">DELETE</div>
          </div>
        </div>
        <div>+91 56843 54862</div>

        <div>
          No:110, MG Road, Nungambakkam, Opp to ICICI Bank, Chennai - 600 034,
          Tamil Nadu.
        </div>
      </div>
      <div className="card">
        <div className="display-flex">
          <div>John Doe</div>

          <div className="display-flex">
            <div className="edit">EDIT</div>
            <div className="delete">DELETE</div>
          </div>
        </div>
        <div>+91 56843 54862</div>

        <div>
          No:110, MG Road, Nungambakkam, Opp to ICICI Bank, Chennai - 600 034,
          Tamil Nadu.
        </div>
      </div>
      <div className="card">
        <div className="display-flex">
          <div>John Doe</div>

          <div className="display-flex">
            <div className="edit">EDIT</div>
            <div className="delete">DELETE</div>
          </div>
        </div>
        <div>+91 56843 54862</div>

        <div>
          No:110, MG Road, Nungambakkam, Opp to ICICI Bank, Chennai - 600 034,
          Tamil Nadu.
        </div>
      </div>
      <div className="card">
        <div className="display-flex">
          <div>John Doe</div>

          <div className="display-flex">
            <div className="edit">EDIT</div>
            <div className="delete">DELETE</div>
          </div>
        </div>
        <div>+91 56843 54862</div>

        <div>
          No:110, MG Road, Nungambakkam, Opp to ICICI Bank, Chennai - 600 034,
          Tamil Nadu.
        </div>
      </div>
      <div className="card">
        <div className="display-flex">
          <div>John Doe</div>

          <div className="display-flex">
            <div className="edit">EDIT</div>
            <div className="delete">DELETE</div>
          </div>
        </div>
        <div>+91 56843 54862</div>

        <div>
          No:110, MG Road, Nungambakkam, Opp to ICICI Bank, Chennai - 600 034,
          Tamil Nadu.
        </div>
      </div>
      <div className="card">
        <div className="display-flex">
          <div>John Doe</div>

          <div className="display-flex">
            <div className="edit">EDIT</div>
            <div className="delete">DELETE</div>
          </div>
        </div>
        <div>+91 56843 54862</div>

        <div>
          No:110, MG Road, Nungambakkam, Opp to ICICI Bank, Chennai - 600 034,
          Tamil Nadu.
        </div>
      </div>
      <button onClick={showAddressForm}>Add New Address</button>
    </div>
  );
}
