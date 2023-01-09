import React from 'react';
import "./style.scss";
import { NormalNavigate } from 'component/common';
import Aboutus from "../../assets/images/AboutUs-Main.svg";
import ourgoals from "../../assets/images/ourgoals.svg";
import team1 from "../../assets/images/team1.svg";
import team2 from "../../assets/images/team2.svg";
import team3 from "../../assets/images/team3.svg";
import team4 from "../../assets/images/team4.svg";
import Livingroomwallpaper from "../../assets/images/Livingroomwallpaper.svg";
import Bedroomwallpaper from "../../assets/images/Bedroomwallpaper.svg";
import Kidswallpaper from "../../assets/images/Kidswallpaper.svg";
import Customizeswallpaper from "../../assets/images/Customizeswallpaper.svg";
import Stickerwallpaper from "../../assets/images/Stickerwallpaper.svg";
import Newlaunchwallpaper from "../../assets/images/Newlaunchwallpaper.svg";

export const AboutWallantics = () => {
    return (
    <div>
        <div>
            <NormalNavigate navigationStyle="abtwallantics-head"><div className='maincont'><label>About Us</label></div></NormalNavigate>
        </div>
        <div className='d-flex wallat-abt'>
          <div className='col-md-4 Aboutus-Main'>
            <img src={Aboutus}/>
          </div>
          <div className='Aboutus-contents'>
            <h5>About Us</h5>
            
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id in turpis libero odio varius proin lectus. Nulla cras pharetra viverra amet turpis netus. Ipsum sem quis in cursus. Massa vitae, ut eget fermentum ut nunc. Aliquam elit enim, cras est tortor in et nunc varius. Odio eget gravida sem at.</p>
           <p>Eget faucibus laoreet et, laoreet vestibulum ut. Est scelerisque mauris faucibus enim id sed feugiat amet, pharetra. Cras odio vivamus gravida felis bibendum in tellus. Diam velit sed arcu in nisl ullamcorper urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id in turpis libero odio varius proin lectus. Nulla cras pharetra viverra amet turpis netus. Ipsum sem quis in cursus. Massa vitae, ut eget fermentum ut nunc. Aliquam elit enim, cras est tortor in et nunc varius. Odio eget gravida sem at.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id in turpis libero odio varius proin lectus. Nulla cras pharetra viverra amet turpis netus. Ipsum sem quis in cursus. Massa vitae, ut eget fermentum ut nunc. Aliquam elit enim, cras est tortor in et nunc varius. Odio eget gravida sem at.Eget faucibus laoreet et, laoreet vestibulum ut. </p>
          </div>
      </div>
       <div className='Aboutus-process'>
              <div className='d-flex development'>
        <label>01</label>
        <span>Development</span>
      </div>

      <div className='d-flex design-process'>
        <label>02</label>
        <span>Design Process</span>
      </div>

      <div className='d-flex new-materials'>
        <label>03</label>
        <span>New Materials</span>
      </div>
      </div>
      <div className='materials-content'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id in turpis libero odio varius proin lectus. Nulla cras pharetra viverra amet turpis netus. Ipsum sem quis in cursus. Massa vitae, ut eget fermentum ut nunc. </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id in turpis libero odio varius proin lectus. Nulla cras pharetra viverra amet turpis netus. Ipsum sem quis in cursus. Massa vitae, ut eget fermentum ut nunc. </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id in turpis libero odio varius proin lectus. Nulla cras pharetra viverra amet turpis netus. Ipsum sem quis in cursus. Massa vitae, ut eget fermentum ut nunc. </p>
      </div>

       {/* <div className='wallpapercontents'> */}
       <div className="buildfirst">
      <div className='wallpapertypes'>
        <label>Build All Types Of Wallpapers</label>
      </div>
     
    <div className="wallpapercollab1">
    <div className="wallpaper1">
   <img src={Livingroomwallpaper}/><br/>
   <label>Living room wallpapers</label>
    </div>

    <div className="wallpaper1">
   <img src={Bedroomwallpaper}/><br/>
   <label>Bedroom wallpapers</label>
    </div>

    <div className="wallpaper1">
   <img src={Kidswallpaper}/><br/>
   <label>Kids Wallpaper</label>
    </div>
    </div>

    <div className="wallpapercollab2">
    <div className="wallpaper2">
   <img src={Customizeswallpaper}/><br/>
   <label>Customized wallpapers</label>
    </div>

    <div className="wallpaper2">
   <img src={Stickerwallpaper}/><br/>
   <label>Sticker wallpapers</label>
    </div>

    <div className="wallpaper2">
   <img src={Newlaunchwallpaper}/><br/>
   <label>New Launch </label>
    </div>
    </div>
    <button className="shopnow">Shop Now</button>
    </div>
      
      
      {/* </div> */}


      <div className='d-flex our-goals'>
        <div className="col-md-4">
         <img src={ourgoals}/>
        </div>

        <div className="col-md-8">
          <div className="goals-content">
            <span>OUR GOALS</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id in turpis libero odio varius proin lectus. Nulla cras pharetra viverra amet turpis netus. Ipsum sem quis in cursus. Massa vitae, ut eget fermentum ut nunc. Aliquam elit enim, cras est tortor in et nunc varius. Odio eget gravida sem at.</p>
            <hr/>
          </div>

          <div className='goals-quality'>
            <span>QUALITY</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id in turpis libero odio varius proin lectus. Nulla cras pharetra viverra amet turpis netus. Ipsum sem quis in cursus. </p>
          <hr/>
          </div>


          <div className='goals-results'>
            <span>RESULTS</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id in turpis libero odio varius proin lectus. Nulla cras pharetra viverra amet turpis netus. Ipsum sem quis in cursus. </p>
          </div>

        </div>
      </div>

      <div className='meetteam'>
      Meet the Team
      </div>
      <div className='teamimg'>
      <img src={team1}/> 
      <img src={team2}/> 
      <img src={team3}/> 
      <img src={team4}/> 
      </div>
      <div>
      <div className='teamname'>
        <span>Ms. Donna  </span>
        <span>Mr. Jake  </span>
        <span>Ms. Greta  </span>
        <span>Mr. Derik  </span>
      </div>
      <div className='teamcontent'>
      <p>General Manager</p>
      <p>General Manager</p>
      <p>General Manager</p>
      <p>General Manager</p>
      </div>
      </div>
    </div>
    );
  };
