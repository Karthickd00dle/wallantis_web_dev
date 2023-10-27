import React from "react";
import { history } from "service/helpers";
import "./style.scss";
import { NormalNavigate } from "component/common";
import blog1 from "../../assets/images/Blogs/Blog1.png";
import blog2 from "../../assets/images/Blogs/Blog3.png";
import blog3 from "../../assets/images/Blogs/Blog4.png";
import blog4 from "../../assets/images/Blogs/Blog5.png";
import blog5 from "../../assets/images/Blogs/Blog6.png";
import blog6 from "../../assets/images/Blogs/Blog7.png";
import JohnDoe from "assets/images/JohnDoe";

export default function Latestblogs() {
  const latestBlogs = [
    {
      blogImage: blog1,
      name: "John Doe",
      blogDate: "14 Oct'2022",
      blogTitle: "How to choose wallpapers for renovating homes....",
      blogContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id in turpis libero odio varius proin lectus. Nulla cras pharetra viverra amet turpis netus. Ipsum sem quis in cursus. Massa vitae, ut eget fermentum ut nunc.",
    },
    {
      blogImage: blog2,
      name: "John Doe",
      blogDate: "14 Oct'2022",
      blogTitle: "Wallcoverings spotted in the world....",
      blogContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id in turpis libero odio varius proin lectus. Nulla cras pharetra viverra amet turpis netus. Ipsum sem quis in cursus. Massa vitae, ut eget fermentum ut nunc.",
    },
    {
      blogImage: blog3,
      name: "John Doe",
      blogDate: "14 Oct'2022",
      blogTitle: "Top 5 best traditional design wallpapers....",
      blogContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id in turpis libero odio varius proin lectus. Nulla cras pharetra viverra amet turpis netus. Ipsum sem quis in cursus. Massa vitae, ut eget fermentum ut nunc.",
    },
    {
      blogImage: blog4,
      name: "John Doe",
      blogDate: "14 Oct'2022",
      blogTitle: "5 ways to choose wallpapers for your Home....",
      blogContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id in turpis libero odio varius proin lectus. Nulla cras pharetra viverra amet turpis netus. Ipsum sem quis in cursus. Massa vitae, ut eget fermentum ut nunc.",
    },
    {
      blogImage: blog5,
      name: "John Doe",
      blogDate: "14 Oct'2022",
      blogTitle: "10 Great wallpaper designs for Kids Nursery Rooms....",
      blogContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id in turpis libero odio varius proin lectus. Nulla cras pharetra viverra amet turpis netus. Ipsum sem quis in cursus. Massa vitae, ut eget fermentum ut nunc.",
    },
    {
      blogImage: blog6,
      name: "John Doe",
      blogDate: "14 Oct'2022",
      blogTitle: "Ideas to transform your Kitchen with wallpapers....",
      blogContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id in turpis libero odio varius proin lectus. Nulla cras pharetra viverra amet turpis netus. Ipsum sem quis in cursus. Massa vitae, ut eget fermentum ut nunc.",
    },
  ];
  return (
    <div>
      <div>
        <NormalNavigate navigationStyle="latestblogs-head">
          <div className="mainmenu">
            <label>Latest Blogs</label>
          </div>
        </NormalNavigate>
      </div>
      <div className="division1">
        {latestBlogs.map((item) => {
          return (
            <div
              onClick={() => history.push("/profile/blogdetails")}
              className="cursor-pointer"
            >
              <img src={item?.blogImage} className="blogImage" />
              <div className="blogContents">
                <div className="blog1img">
                  <JohnDoe className="johndoe" />
                  <div className="john">
                    <h6>{item?.name}</h6>
                    <span>{item?.blogDate}</span>
                  </div>
                </div>
                <label>{item?.blogTitle}</label>
                <h5>{item?.blogContent}</h5>
              </div>
            </div>
          );
        })}
      </div>
      <div className="loadMoreWrap">
        <button className="loadmore">Load More</button>
      </div>
    </div>
  );
}
