import React, { useState } from "react";
import NewOrder from "./NewOrder";
import ProcessingOrder from "./ProcessingOrder";
import DeliveredOrders from "./DeliveredOrders";
import "./index.scss";

export default function NewOrderComponent() {
  const [activeTab, setActiveTab] = useState(1);

  const changeTab = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="settings-main">
      <div className="header-background">
        <p>Reports</p>
      </div>
      <div className="settings-comp">
        <p>Order Reports</p>

        <div className="settings-tabs">
          <p
            className={activeTab === 1 ? "tab-name active-tab" : "tab-name"}
            onClick={() => changeTab(1)}
          >
            New Order
          </p>
          <p
            className={activeTab === 2 ? "tab-name active-tab" : "tab-name"}
            onClick={() => changeTab(2)}
          >
            Processing Order
          </p>
          <p
            className={activeTab === 3 ? "tab-name active-tab" : "tab-name"}
            onClick={() => changeTab(3)}
          >
            Delivered Orders
          </p>
        </div>
        <div className="border-bottom"></div>

        {activeTab === 1 ? (
          <NewOrder />
        ) : activeTab === 2 ? (
          <ProcessingOrder />
        ) : (
          <DeliveredOrders />
        )}
      </div>
    </div>
  );
}
