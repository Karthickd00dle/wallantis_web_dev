import React from 'react'
import "./style.scss";
import Sendconvo from "../../../assets/images/Sendconvo.svg"
import Closeblind from "../../../assets/images/Closeblind.svg"

export function ChatBot() {
  return (
    <div>
    <div className="Bot">
    <div className="Askexperts">
        <img src={Closeblind}/>
     <label>Ask Our Experts</label><br/>
     <span>Welcome to Wallantics</span><br/>
     <small>We are here to help you with our service related queries.</small>
    </div>
    <div className="Botchoose">
        <label>Choose an option to know more about our Products</label>
    </div>
    <div className="choosecontents1">
       <div className="choosewallpaper">
       Wallpapers
       </div>
       <div className="choosestikerwallpaper">
       <label>Sticker Wallpaper</label>
       </div>
       <div className="choosewallmurals">
       <label>Wall Murals</label>
       </div>
    </div>


    <div className="choosecontents2">
       <div className="chooseorderqueries">
       <label>Order Related Queries</label>
       </div>
       <div className="chooserelatedqueries">
       <label>Payment Related Queries</label>
       </div>
    </div>

    <div className="choosecontents3">
       <div className="choosebookings">
       <label>Bookings</label>
       </div>
       <div className="chooseinstaller">
       <label>Installer Related Queries </label>
       </div>
      
    </div>
    <hr></hr>
    <div className="botconversation">
        <input type="text" placeholder="Start a converstation"/>
        <img src={Sendconvo}/>
    </div>
    </div>
    </div>
  );
}
