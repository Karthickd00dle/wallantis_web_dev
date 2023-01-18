import React,{useState} from 'react'
import "./style.scss"
import cdpm from "../../../../assets/images/cdpm.svg"
import Diamondwallpaper from "../../../../assets/images/Diamondwallpaper.svg"
// import { Bar } from 'react-chartjs-2';
// import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Customerdetail() {

    const [toggleState,setToggleState] = useState(1);
    const [barState,setBarState] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index)        
      };

      const barTab = (index) => {
        setBarState(index)        
      };

      const data = [
        {
          name: 'Sunday',
          FloralWallpaper:1500,
          AbstractWallpaper:800,
        },
        {
          name: 'Monday',
          AbstractWallpaper:1500,
        },
        {
          name: 'Tuesday',
          TextureWallpaper:1800,
        },
        {
          name: 'Wednesday',
          WoodWallpaper:500,
        },
        {
          name: 'Thursday',
          WoodWallpaper:500,
          TextureWallpaper:900,
        },
        {
          name: 'Friday',
          AbstractWallpaper:800,
        },
        {
          name: 'Saturday',
          AbstractWallpaper:800,
        },
      ];
  return (
    <div>
        <div className="cd-customercollab">
        <div className="cd-projectmanager">
            <div className="cd-pm">
                <img src={cdpm}/>
            </div>
            <div className="cd-pmcontents">
                <h2>Eren Yeager</h2>
                <label>Project Manager</label><br/><br/>
                <span>1-C Lakshmi Bhavan 432, Anna Salai, Chennai, Tamil Nadu 600006</span>
                <div className="cd-contact">
                   <h3>Eren.yeager@gmail.com</h3>
                   <p>0987654321</p>
                </div>
            </div>
        </div>
        <div className="cd-processcollab">
        <div className="cd-totalorders">
         <span>8</span><br/>
         <label>Total No.of Orders</label>
        </div>
        <div className="cd-onprocessing">
         <span>2</span><br/>
         <label>On Processing</label>
        </div>
        </div>
        </div>
         <div className="cd-chartscollab">
        <div className="cd-mostordered">
          <div className="cd-tabscollab">
          <div className="cd-mostcontent">
            <label>Most Ordered Product</label>
            <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id in turpis libero odio varius proin lectus.</h6>
          </div>
        

        <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Monthly
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
         Weekly
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
         Daily
        </button>
      </div>


      </div>
      
    </div>
    <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <div className="d-flex">
          <div className="d-flex">
          <div className="cd-diamondwall1">
            <img src={Diamondwallpaper} width="150" height="120"/></div>
            <div className="cd-diamondwallcontents1">
            <h4>Diamond Wallpaper</h4>
            <span>TEXTURED WALLPAPER</span><br/>
            <small>Order ID #12345</small>
          </div>
        </div>
        <div className="cd-diamondwall1price">
          <h2>₹3500</h2>
        </div>
        </div>
        <hr/>
        <div className="d-flex">
          <div className="d-flex">
          <div className="cd-diamondwall1">
            <img src={Diamondwallpaper} width="150" height="120"/></div>
            <div className="cd-diamondwallcontents1">
            <h4>Diamond Wallpaper</h4>
            <span>TEXTURED WALLPAPER</span><br/>
            <small>Order ID #12345</small>
          </div>
        </div>
        <div className="cd-diamondwall1price">
          <h2>₹3500</h2>
        </div>
        </div>
        <hr/>

        <div className="d-flex">
          <div className="d-flex">
          <div className="cd-diamondwall1">
            <img src={Diamondwallpaper} width="150" height="120"/></div>
            <div className="cd-diamondwallcontents1">
            <h4>Diamond Wallpaper</h4>
            <span>TEXTURED WALLPAPER</span><br/>
            <small>Order ID #12345</small>
          </div>
        </div>
        <div className="cd-diamondwall1price">
          <h2>₹3500</h2>
        </div>
        </div>
        <hr/>

        <div className="d-flex">
          <div className="d-flex">
          <div className="cd-diamondwall1">
            <img src={Diamondwallpaper} width="150" height="120"/></div>
            <div className="cd-diamondwallcontents1">
            <h4>Diamond Wallpaper</h4>
            <span>TEXTURED WALLPAPER</span><br/>
            <small>Order ID #12345</small>
          </div>
        </div>
        <div className="cd-diamondwall1price">
          <h2>₹3500</h2>
        </div>
        </div>
        <hr/>
        <div className="d-flex">
          <div className="d-flex">
          <div className="cd-diamondwall1">
            <img src={Diamondwallpaper} width="150" height="120"/></div>
            <div className="cd-diamondwallcontents1">
            <h4>Diamond Wallpaper</h4>
            <span>TEXTURED WALLPAPER</span><br/>
            <small>Order ID #12345</small>
          </div>
        </div>
        <div className="cd-diamondwall1price">
          <h2>₹3500</h2>
        </div>
        </div>
        <hr/>
        <div className="d-flex">
          <div className="d-flex">
          <div className="cd-diamondwall1">
            <img src={Diamondwallpaper} width="150" height="120"/></div>
            <div className="cd-diamondwallcontents1">
            <h4>Diamond Wallpaper</h4>
            <span>TEXTURED WALLPAPER</span><br/>
            <small>Order ID #12345</small>
          </div>
        </div>
        <div className="cd-diamondwall1price">
          <h2>₹3500</h2>
        </div>
        </div>
        <hr/>
   
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
           <div className="d-flex">
          <div className="d-flex">
          <div className="cd-diamondwall1">
            <img src={Diamondwallpaper} width="150" height="120"/></div>
            <div className="cd-diamondwallcontents1">
            <h4>Diamond Wallpaper</h4>
            <span>TEXTURED WALLPAPER</span><br/>
            <small>Order ID #12345</small>
          </div>
        </div>
        <div className="cd-diamondwall1price">
          <h2>₹3500</h2>
        </div>
        </div>
        <hr/>
        <div className="d-flex">
          <div className="d-flex">
          <div className="cd-diamondwall1">
            <img src={Diamondwallpaper} width="150" height="120"/></div>
            <div className="cd-diamondwallcontents1">
            <h4>Diamond Wallpaper</h4>
            <span>TEXTURED WALLPAPER</span><br/>
            <small>Order ID #12345</small>
          </div>
        </div>
        <div className="cd-diamondwall1price">
          <h2>₹3500</h2>
        </div>
        </div>
        <hr/>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <div className="d-flex">
          <div className="d-flex">
          <div className="cd-diamondwall1">
            <img src={Diamondwallpaper} width="150" height="120"/></div>
            <div className="cd-diamondwallcontents1">
            <h4>Diamond Wallpaper</h4>
            <span>TEXTURED WALLPAPER</span><br/>
            <small>Order ID #12345</small>
          </div>
        </div>
        <div className="cd-diamondwall1price">
          <h2>₹3500</h2>
        </div>
        </div>
        <hr/>
      
        </div>
        </div>
    </div>



    <div className="cd-mostordered">
          <div className="cd-tabscollab">
          <div className="cd-mostcontent">
            <label>Most Ordered Product</label>
            <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id in turpis libero odio varius proin lectus.</h6>
          </div>
        

        <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs activebar-tabs" : "bartabs"}
          onClick={() => barTab(1)}
        >
          Monthly
        </button>
        <button
          className={toggleState === 2 ? "tabs activebar-tabs" : "bartabs"}
          onClick={() => barTab(2)}
        >
         Weekly
        </button>
        <button
          className={toggleState === 3 ? "tabs activebar-tabs" : "bartabs"}
          onClick={() => barTab(3)}
        >
         Daily
        </button>
      </div>


      </div>
      
    </div>
    <div className="content-tabs">
        <div
          className={barState === 1 ? "content  active-content" : "content"}
        >
    <BarChart
          width={700}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
            categoryPercentage:100,
          }}
          barSize={7}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
        
          <Tooltip />
          <Legend />
          <Bar dataKey="FloralWallpaper" fill="#E57C30" />
          <Bar dataKey="AbstractWallpaper" fill="#EB281B" />
          <Bar dataKey="TextureWallpaper" fill="#81D0FC" />
          <Bar dataKey="WoodWallpaper" fill="#E1C844" />
        </BarChart>
     </div>
     </div>
     </div>
     </div>
    </div>
  )
}
