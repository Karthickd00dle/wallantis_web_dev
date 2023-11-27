import React from "react";
import { customMomentFormat } from "service/helperFunctions";

const OrderStatusTracker = ({ orderStatusData }) => {
  return (
    <div className="single-col">
      {orderStatusData?.map((data, index) => (
        <div className="order-status" key={index}>
          <div>
            <p className="order-state-name">{data?.status}</p>
          </div>
          {data?.date ? (
            <div className="success-circle green">
              <div className="green-progress" />
            </div>
          ) : (
            <div
              className={`pending-circle grey ${
                index === orderStatusData?.length - 1 ? "last-item" : ""
              }`}
            >
              <div className="grey-progress" />
            </div>
          )}
          {data?.date ? (
            <p className="mt-3 order-state-date">
              {customMomentFormat(data?.date, "MMM Do, YYYY")}
            </p>
          ) : (
            <p className="my-4 py-1 order-state-date" />
          )}
        </div>
      ))}
    </div>
  );
};

export default OrderStatusTracker;
