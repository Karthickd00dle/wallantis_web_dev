import React, { useState, useEffect } from "react";
import ArrowUp from "assets/icons/Admin/arrowUp.png";
import { LineChart } from "./LineChart";
import TrendUp from "assets/svg/Admin/TrendUp";
import { DonutChart } from "./DonutChart";
import { VerticalBarChart } from "./VerticalBarChart";
import { PieChart } from "./PieChart";
import { HorizontalBarChart } from "./HorizontalBarChart";
import CommonSelect from "component/Admin/common/CommonSelect";
import {
  MapContainer,
  TileLayer,
  Popup,
  useMapEvents,
  CircleMarker,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
export default function Dashboard() {
  const redOptions = {
    backgroundColor: "#7CB5EC",
    border: "1px solid rgba(124, 181, 236)",
  };

  const [random] = useState([]);
  const [markers] = useState([]);
  const [viewport, setViewport] = useState({
    latitude: 20.7679,
    longitude: 87.8718,
    zoom: 4.4,
  });

  const getCurrentPosition = () => {
    const nav = navigator.geolocation;
    nav.getCurrentPosition((pos) => {
      setViewport({
        ...viewport,
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
        zoom: 4.4,
      });
    });
  };

  useEffect(() => {
    getCurrentPosition();
  }, []);
  return (
    <div className="dashboard-main">
      <div className="header-background">
        <p>Dashboard</p>
      </div>

      <div className="dashboard-card">
        <div className="overview">
          <div className="overview-top-bar">
            <p>Overview</p>
            <div className="overview-end-btns">
              <div className="date-buttons">
                <buttton className="range-buttons">Daily</buttton>
                <buttton className="range-buttons">Weekly</buttton>
                <buttton className="range-buttons">Monthly</buttton>
              </div>

              <button className="download-button">Download</button>
            </div>
          </div>

          <div className="overview-cards">
            <div className={`overview-card purple`}>
              <img src={ArrowUp} className="arrow-container purple" />
              <div>
                <div className="d-flex">
                  <p className="amount">260</p>
                  <p className="order-percent percent-value">+2.5%</p>
                </div>
                <p className="order-number">Total No.of Orders</p>
              </div>
            </div>
            <div className={`overview-card pink`}>
              <img src={ArrowUp} className="arrow-container pink" />
              <div>
                <div className="d-flex">
                  <p className="amount">260</p>
                  <p className="revenue-percent percent-value">+2.5%</p>
                </div>
                <p className="order-number">Revenue in this Period</p>
              </div>
            </div>
            <div className={`overview-card green`}>
              <img src={ArrowUp} className="arrow-container green" />
              <div>
                <div className="d-flex">
                  <p className="amount">260</p>
                  <p className="visitor-percnent percent-value">-1.5%</p>
                </div>
                <p className="order-number">Total Visitor in this Period</p>
              </div>
            </div>
            <div className={`overview-card yellow`}>
              <img src={ArrowUp} className="arrow-container yellow" />
              <div>
                <div className="d-flex">
                  <p className="amount">260</p>
                  <p className="purchased-percent percent-value">-2.5%</p>
                </div>
                <p className="order-number">Purchased Customer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="charts-card">
        <div className="chart-card">
          <div className="chart-header">
            <div>
              <p className="title">Overall sales</p>
              <div className="d-flex">
                <p className="amount mr-4">₹80,490</p>
                <div className="trend-up-container">
                  <TrendUp fill="#1EE832" />
                  <p className="mb-0" style={{ color: "#1EE832" }}>
                    20%
                  </p>
                </div>
              </div>
            </div>
            <div className="select-option">
              <CommonSelect />
            </div>
          </div>
          <LineChart />
        </div>
        <div className="chart-card">
          <div className="chart-header">
            <div>
              <p className="title">Installation Details</p>
            </div>
            <div className="select-option">
              <CommonSelect />
            </div>
          </div>
          <DonutChart />
        </div>
        <div className="chart-card">
          <div className="chart-header">
            <div>
              <p className="title">Visitors</p>
              <p className="amount">99,000</p>
            </div>
            <div className="select-option">
              <CommonSelect />
            </div>
          </div>
          <VerticalBarChart />
        </div>
        <div className="chart-card">
          <div className="chart-header">
            <div>
              <p className="title">Best Selling Products</p>
            </div>
            <div className="select-option">
              <CommonSelect />
            </div>
          </div>
          <PieChart />
        </div>
        <div className="chart-card">
          <div className="chart-header">
            <div>
              <p className="title">User Location</p>
            </div>
            <div className="select-option"></div>
          </div>
          <div className="map-container">
            <MapContainer
              center={{ lat: viewport.latitude, lng: viewport.longitude }}
              zoom={viewport.zoom}
              style={{ height: "40vh", width: "50%" }}
              scrollWheelZoom={true}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {markers.map((coordinates, index) => {
                return (
                  <CircleMarker
                    center={[coordinates.lat, coordinates.lng]}
                    pathOptions={redOptions}
                    radius={random[index]}
                  >
                    <Popup>Popup in CircleMarker</Popup>
                  </CircleMarker>
                );
              })}
            </MapContainer>

            <div className="map-legend">
              <div className="single-col align-items">
                <div className="legend-color"></div>
                <p>South India 1370 users</p>
              </div>
              <div className="single-col align-items">
                <div className="legend-color"></div>
                <p>North India 670 users</p>
              </div>
              <div className="single-col align-items">
                <div className="legend-color"></div>
                <p>East India 568 users</p>
              </div>
              <div className="single-col align-items">
                <div className="legend-color"></div>
                <p>Middle East India 3456 users</p>
              </div>
            </div>
          </div>
        </div>
        <div className="chart-card">
          <div className="chart-header">
            <div>
              <p className="title">Active Users on Platform</p>
              <p className="amount">21</p>
            </div>
            <div className="select-option"></div>
          </div>
          <VerticalBarChart />
        </div>
        <div className="chart-card">
          <div className="chart-header">
            <div>
              <p className="title">Profile/Role</p>
            </div>
            <div className="select-option">
              <CommonSelect />
            </div>
          </div>
          <HorizontalBarChart />
        </div>
      </div>
    </div>
  );
}
