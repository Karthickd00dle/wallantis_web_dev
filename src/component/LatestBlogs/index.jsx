import React from "react";
import { history } from "service/helpers";
import "./style.scss";
import { NormalNavigate } from "component/common";

import JohnDoe from "assets/images/JohnDoe";

export default function Latestblogs() {
  return (
    <div>
      <div>
        <NormalNavigate navigationStyle="latestblogs-head">
          <div className="mainmenu">
            <label>Latest Blogs</label>
          </div>
        </NormalNavigate>
      </div>
      <div>
        <div className="division1">
          <div
            className="blog-main"
            onClick={() => history.push("/profile/blogdetails")}
          >
            <div className="latestblog1"></div>
            <div className="blog1contents">
              <div className="blog1img">
                <JohnDoe className="johndoe" />
                <div className="john">
                  <h6>John Doe </h6>
                  <span>14 Oct'2022</span>
                </div>
              </div>
              <label>How to choose wallpapers for renovating homes....</label>
              <br />
              <h5>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id in
                turpis libero odio varius proin lectus. Nulla cras pharetra
                viverra amet turpis netus. Ipsum sem quis in cursus. Massa
                vitae, ut eget fermentum ut nunc.{" "}
              </h5>
            </div>
          </div>

          <div
            className="blog-main"
            onClick={() => history.push("/profile/blogdetails")}
          >
            <div className="latestblog2"></div>
            <div className="blog2contents">
              <div className="blog2img">
                <JohnDoe className="johndoe" />
                <div className="john">
                  <h6>John Doe </h6>
                  <span>14 Oct’2022</span>
                </div>
              </div>
              <label>How to choose wallpapers for renovating homes....</label>
              <h5>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id in
                turpis libero odio varius proin lectus. Nulla cras pharetra
                viverra amet turpis netus. Ipsum sem quis in cursus. Massa
                vitae, ut eget fermentum ut nunc.{" "}
              </h5>
            </div>
          </div>

          <div
            className="blog-main"
            onClick={() => history.push("/profile/blogdetails")}
          >
            <div className="latestblog3"></div>
            <div className="blog3contents">
              <div className="blog3img">
                <JohnDoe className="johndoe" />
                <div className="john">
                  <h6>John Doe </h6>
                  <span>14 Oct’2022</span>
                </div>
              </div>
              <label>How to choose wallpapers for renovating homes....</label>
              <h5>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id in
                turpis libero odio varius proin lectus. Nulla cras pharetra
                viverra amet turpis netus. Ipsum sem quis in cursus. Massa
                vitae, ut eget fermentum ut nunc.{" "}
              </h5>
            </div>
          </div>
        </div>

        <div className="division2">
          <div
            className="blog-main"
            onClick={() => history.push("/profile/blogdetails")}
          >
            <div className="latestblog4"></div>
            <div className="blog4contents">
              <div className="blog4img">
                <JohnDoe className="johndoe" />
                <div className="john">
                  <h6>John Doe </h6>
                  <span>14 Oct’2022</span>
                </div>
              </div>
              <label>How to choose wallpapers for renovating homes....</label>
              <h5>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id in
                turpis libero odio varius proin lectus. Nulla cras pharetra
                viverra amet turpis netus. Ipsum sem quis in cursus. Massa
                vitae, ut eget fermentum ut nunc.{" "}
              </h5>
            </div>
          </div>

          <div
            className="blog-main"
            onClick={() => history.push("/profile/blogdetails")}
          >
            <div className="latestblog5"></div>
            <div className="blog5contents">
              <div className="blog5img">
                <JohnDoe className="johndoe" />
                <div className="john">
                  <h6>John Doe </h6>
                  <span>14 Oct’2022</span>
                </div>
              </div>
              <label>How to choose wallpapers for renovating homes....</label>
              <h5>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id in
                turpis libero odio varius proin lectus. Nulla cras pharetra
                viverra amet turpis netus. Ipsum sem quis in cursus. Massa
                vitae, ut eget fermentum ut nunc.{" "}
              </h5>
            </div>
          </div>

          <div
            className="blog-main"
            onClick={() => history.push("/profile/blogdetails")}
          >
            <div className="latestblog6"></div>
            <div className="blog6contents">
              <div className="blog6img">
                <JohnDoe className="johndoe" />
                <div className="john">
                  <h6>John Doe </h6>
                  <span>14 Oct’2022</span>
                </div>
              </div>
              <label>How to choose wallpapers for renovating homes....</label>
              <h5>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id in
                turpis libero odio varius proin lectus. Nulla cras pharetra
                viverra amet turpis netus. Ipsum sem quis in cursus. Massa
                vitae, ut eget fermentum ut nunc.{" "}
              </h5>
            </div>
          </div>
        </div>

        <div className="division3">
          <div
            className="blog-main"
            onClick={() => history.push("/profile/blogdetails")}
          >
            <div className="latestblog7"></div>
            <div className="blog7contents">
              <div className="blog7img">
                <JohnDoe className="johndoe" />
                <div className="john">
                  <h6>John Doe </h6>
                  <span>14 Oct’2022</span>
                </div>
              </div>
              <label>How to choose wallpapers for renovating homes....</label>
              <h5>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id in
                turpis libero odio varius proin lectus. Nulla cras pharetra
                viverra amet turpis netus. Ipsum sem quis in cursus. Massa
                vitae, ut eget fermentum ut nunc.{" "}
              </h5>
            </div>
          </div>

          <div
            className="blog-main"
            onClick={() => history.push("/profile/blogdetails")}
          >
            <div className="latestblog8"></div>
            <div className="blog8contents">
              <div className="blog8img">
                <JohnDoe className="johndoe" />
                <div className="john">
                  <h6>John Doe </h6>
                  <span>14 Oct’2022</span>
                </div>
              </div>
              <label>How to choose wallpapers for renovating homes....</label>
              <h5>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id in
                turpis libero odio varius proin lectus. Nulla cras pharetra
                viverra amet turpis netus. Ipsum sem quis in cursus. Massa
                vitae, ut eget fermentum ut nunc.{" "}
              </h5>
            </div>
          </div>

          <div
            className="blog-main"
            onClick={() => history.push("/profile/blogdetails")}
          >
            <div className="latestblog9"></div>
            <div className="blog9contents">
              <div className="blog9img">
                <JohnDoe className="johndoe" />
                <div className="john">
                  <h6>John Doe </h6>
                  <span>14 Oct’2022</span>
                </div>
              </div>
              <label>How to choose wallpapers for renovating homes....</label>
              <h5>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id in
                turpis libero odio varius proin lectus. Nulla cras pharetra
                viverra amet turpis netus. Ipsum sem quis in cursus. Massa
                vitae, ut eget fermentum ut nunc.{" "}
              </h5>
            </div>
          </div>
        </div>

        <button className="loadmore">Load More</button>
      </div>
    </div>
  );
}
