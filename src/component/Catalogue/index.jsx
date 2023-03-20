import React from "react";
import { history } from "service/helpers";
import "./style.scss";
import { NormalNavigate } from "component/common";
import { ECatalogue } from "./ECatalogue";
import { useState } from "react";
import { VisibilityOutlined } from "@mui/icons-material";
import { eCatalogueBanners } from "config";

const ECatalogueCard = ({ data: { title, data }, setOpenCatalogue }) => {
  return (
    <div className="catalogue-main">
      <div className="catalogue-wallpaper pb-4">
        <label>{title}</label>
        <span onClick={() => setOpenCatalogue(true)}>VIEW ALL</span>
      </div>
      <div className="d-flex justify-content-between">
        {data.map((image, index) => (
          <div key={index} className="catalogue-card-container">
            <div className="view-catalogue-label-container">
              <div
                className="view-catalogue-label-inner-container p-2 cursor-pointer"
                onClick={() => setOpenCatalogue(true)}
              >
                <VisibilityOutlined />
                <label className="ps-1 view-catalogue-label cursor-pointer">
                  View Catalogue
                </label>
              </div>
            </div>

            <img
              src={image}
              alt="wallpaper"
              className="view-catalogue-image"
              height="289px"
              width="267px"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Catalogue() {
  const [openCatalogue, setOpenCatalogue] = useState(false);

  return (
    <>
      <div>
        <NormalNavigate navigationStyle="catalogue-head">
          <div className="main-menu">
            <label>Browse from our E-Catalouge</label>
          </div>
        </NormalNavigate>
      </div>

      <div className="catalogue-container">
        {eCatalogueBanners.map((data) => (
          <ECatalogueCard data={data} setOpenCatalogue={setOpenCatalogue} />
        ))}
      </div>

      <ECatalogue isOpen={openCatalogue} setOpenCatalogue={setOpenCatalogue} />
    </>
  );
}
