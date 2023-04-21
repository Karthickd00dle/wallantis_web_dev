import React, { useState } from "react";
import "./style.scss";
import { BsArrowLeftShort } from "react-icons/bs";
import { MailOutline } from "@mui/icons-material";
import Diamondwallpaper from "assets/images/Admin/Customer/diamond-wallpaper-ico.png";
import Customerpm from "assets/images/Admin/Customer/Customer-pm.png";
import CustomNavBar from "component/Admin/common/CustomNavBar";
import { CommonHistoryNavigation } from "component/Admin/common/CommonHistoryNavigation";
import ReactApexChart from "react-apexcharts";
import { PhoneIcon } from "assets/svg/Admin/Common";
import { conditionalLoad } from "service/helperFunctions";

const mostOrderedProduct = {
  monthly: [
    {
      id: 1,
      name: "Diamon Wallpaper",
      type: "TEXTURED WALLPAPER",
      orderId: "12345",
      price: 3500,
    },
    {
      id: 2,
      name: "Diamon Wallpaper",
      type: "TEXTURED WALLPAPER",
      orderId: "12345",
      price: 3500,
    },
    {
      id: 3,
      name: "Diamon Wallpaper",
      type: "TEXTURED WALLPAPER",
      orderId: "12345",
      price: 3500,
    },
  ],
  weekly: [
    {
      id: 1,
      name: "Diamon Wallpaper",
      type: "TEXTURED WALLPAPER",
      orderId: "12345",
      price: 3500,
    },
    {
      id: 2,
      name: "Diamon Wallpaper",
      type: "TEXTURED WALLPAPER",
      orderId: "12345",
      price: 3500,
    },
    {
      id: 3,
      name: "Diamon Wallpaper",
      type: "TEXTURED WALLPAPER",
      orderId: "12345",
      price: 3500,
    },
    {
      id: 4,
      name: "Diamon Wallpaper",
      type: "TEXTURED WALLPAPER",
      orderId: "12345",
      price: 3500,
    },
  ],
  daily: [
    {
      id: 1,
      name: "Diamon Wallpaper",
      type: "TEXTURED WALLPAPER",
      orderId: "12345",
      price: 3500,
    },
    {
      id: 2,
      name: "Diamon Wallpaper",
      type: "TEXTURED WALLPAPER",
      orderId: "12345",
      price: 3500,
    },
    {
      id: 3,
      name: "Diamon Wallpaper",
      type: "TEXTURED WALLPAPER",
      orderId: "12345",
      price: 3500,
    },
    {
      id: 4,
      name: "Diamon Wallpaper",
      type: "TEXTURED WALLPAPER",
      orderId: "12345",
      price: 3500,
    },
    {
      id: 5,
      name: "Diamon Wallpaper",
      type: "TEXTURED WALLPAPER",
      orderId: "12345",
      price: 3500,
    },
  ],
};

const ProductItems = ({ productData: { name, type, orderId, price } }) => {
  return (
    <div className="product-item-container pt-3 pb-2 mb-2 mx-4">
      <div className="product-item-sub-container">
        <div className="product-image-container">
          <img src={Diamondwallpaper} alt="wallpaper" />
        </div>
        <div className="product-item-details-container pt-1 ps-3">
          <label className="item-title-label">{name}</label>
          <label className="item-type-label py-2">{type}</label>
          <label className="item-order-id-label pt-3">
            Order ID #{orderId}
          </label>
        </div>
      </div>
      <label className="item-price-label pe-5">₹{price}</label>
    </div>
  );
};

const CalendarTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="calendar-tabs-container p-2">
      <div
        className={`calendar-tab ${conditionalLoad(
          activeTab === 1,
          "active"
        )} `}
        onClick={() => setActiveTab(1)}
      >
        <label>Monthly</label>
      </div>
      <div
        className={`calendar-tab mx-3 ${conditionalLoad(
          activeTab === 2,
          "active"
        )} `}
        onClick={() => setActiveTab(2)}
      >
        <label>Weekly</label>
      </div>
      <div
        className={`calendar-tab ${conditionalLoad(
          activeTab === 3,
          "active"
        )} `}
        onClick={() => setActiveTab(3)}
      >
        <label>Daily</label>
      </div>
    </div>
  );
};

export default function CustomerDetail() {
  const [mostOrderedTab, setMostOrderedTab] = useState(1);
  const [mostLikedTab, setMostLikedTab] = useState(1);

  const mostLikedData = {
    monthly: [
      {
        name: "Floral Wallpaper",
        data: [40, 0, 14, 20, 0, 10, 0],
      },
      {
        name: "Abstract Wallpaper",
        data: [0, 24, 0, 20, 0, 10, 0],
      },
      {
        name: "Flooring Wallpaper",
        data: [0, 28, 0, 20, 0, 16, 0],
      },
      {
        name: "Texture Wallpaper",
        data: [0, 14, 44, 0, 20, 0, 0],
      },
      {
        name: "Wood Wallpaper",
        data: [0, 8, 14, 0, 23, 0, 44],
      },
    ],
    weekly: [
      {
        name: "Floral Wallpaper",
        data: [4, 50, 0, 15, 0, 10, 0],
      },
      {
        name: "Abstract Wallpaper",
        data: [10, 16, 0, 30, 0, 5, 12],
      },
      {
        name: "Flooring Wallpaper",
        data: [20, 23, 10, 4, 0, 0, 23],
      },
      {
        name: "Texture Wallpaper",
        data: [6, 2, 12, 30, 0, 8, 0],
      },
      {
        name: "Wood Wallpaper",
        data: [15, 6, 23, 0, 18, 0, 35],
      },
    ],
    daily: [
      {
        name: "Floral Wallpaper",
        data: [30, 0, 0, 15, 0, 6, 0],
      },
      {
        name: "Abstract Wallpaper",
        data: [0, 38, 0, 18, 10, 6, 0],
      },
      {
        name: "Flooring Wallpaper",
        data: [12, 16, 0, 20, 0, 14, 0],
      },
      {
        name: "Texture Wallpaper",
        data: [16, 15, 25, 0, 14, 0, 0],
      },
      {
        name: "Wood Wallpaper",
        data: [18, 26, 0, 26, 0, 0, 44],
      },
    ],
    mostLikedLegend: [
      { id: 1, color: "#E67C30", name: "Floral Wallpaper", value: 22 },
      { id: 2, color: "#EB281B", name: "Abstract Wallpaper", value: 27 },
      { id: 3, color: "#47BD1D", name: "Flooring Wallpaper", value: 18 },
      { id: 4, color: "#81D0FC", name: "Texture Wallpaper", value: 11 },
      { id: 5, color: "#E1C844", name: "Wood Wallpaper", value: 15 },
    ],
  };

  const chartOptions = {
    options: {
      chart: {
        type: "bar",
        height: 350,
      },

      plotOptions: {
        bar: {
          borderRadius: 4,

          horizontal: false,
          columnWidth: "75%",
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#E67C30", "#EB281B", "#47BD1D", "#81D0FC", "#E1C844"],
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val + "%";
          },
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + "% ";
          },
        },
      },
      legend: {
        show: false,
      },
    },
  };

  return (
    <div>
      <CustomNavBar label="Customer Detail" />
      <CommonHistoryNavigation label="Customer List" />
      <div className="cd-customercollab">
        <div className="cd-projectmanager">
          <div className="cd-pm">
            <img src={Customerpm} />
          </div>
          <div className="cd-pmcontents">
            <h2>Eren Yeager</h2>
            <label>Project Manager</label>
            <br />
            <br />
            <span>
              1-C Lakshmi Bhavan 432, Anna Salai, Chennai, Tamil Nadu 600006
            </span>
            <div className="pt-3 cd-contact">
              <div className="d-flex align-items-center">
                <div className="contact-icon-container">
                  <MailOutline />
                </div>
                <label className="ps-2">Eren.yeager@gmail.com</label>
              </div>
              <div className="d-flex align-items-center">
                <div className="contact-icon-container">
                  <PhoneIcon />
                </div>
                <label className="ps-2">0987654321</label>
              </div>
            </div>
          </div>
        </div>
        <div className="cd-processcollab">
          <div className="cd-totalorders">
            <span>8</span>
            <br />
            <label>Total No.of Orders</label>
          </div>
          <div className="cd-onprocessing">
            <span>2</span>
            <br />
            <label>On Processing</label>
          </div>
        </div>
      </div>
      <div className="cd-chartscollab">
        <div className="cd-mostordered">
          <div className="cd-tabscollab">
            <div className="cd-mostcontent pe-4">
              <label>Most Ordered Product</label>
              <h6>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id in
                turpis libero odio varius proin lectus.
              </h6>
            </div>
            <div className="pt-4 pe-4">
              <CalendarTabs
                activeTab={mostOrderedTab}
                setActiveTab={setMostOrderedTab}
              />
            </div>
          </div>
          <div className="content-tabs">
            {conditionalLoad(
              mostOrderedTab === 1,
              <div className="mb-4">
                {mostOrderedProduct.monthly.map((productData) => (
                  <ProductItems
                    key={productData.id}
                    productData={productData}
                  />
                ))}
              </div>
            )}
            {conditionalLoad(
              mostOrderedTab === 2,
              <div className="mb-4">
                {mostOrderedProduct.weekly.map((productData) => (
                  <ProductItems
                    key={productData.id}
                    productData={productData}
                  />
                ))}
              </div>
            )}
            {conditionalLoad(
              mostOrderedTab === 3,
              <div className="mb-4">
                {mostOrderedProduct.daily.map((productData) => (
                  <ProductItems
                    key={productData.id}
                    productData={productData}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="cd-mostorderedbar">
          <div className="cd-tabscollab">
            <div className="cd-mostcontent">
              <label>Most Ordered Product</label>
              <h6>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id in
                turpis libero odio varius proin lectus.
              </h6>
            </div>
            <div className="pt-4 pe-4">
              <CalendarTabs
                activeTab={mostLikedTab}
                setActiveTab={setMostLikedTab}
              />
            </div>
          </div>
          <div className="content-tabs">
            <div>
              {conditionalLoad(
                mostLikedTab === 1,
                <ReactApexChart
                  options={chartOptions.options}
                  series={mostLikedData.monthly}
                  type="bar"
                  height={350}
                />
              )}
              {conditionalLoad(
                mostLikedTab === 2,
                <ReactApexChart
                  options={chartOptions.options}
                  series={mostLikedData.weekly}
                  type="bar"
                  height={350}
                />
              )}
              {conditionalLoad(
                mostLikedTab === 3,
                <ReactApexChart
                  options={chartOptions.options}
                  series={mostLikedData.daily}
                  type="bar"
                  height={350}
                />
              )}
              <div className="d-flex justify-content-center">
                <div className="chart-legend-container px-3 py-4">
                  {mostLikedData.mostLikedLegend.map((data) => (
                    <div className="chart-legends p-2" key={data.id}>
                      <div
                        className="chart-color"
                        style={{ backgroundColor: data.color }}
                      />
                      <label className="ps-2">
                        {data.name} {data.value}%
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
