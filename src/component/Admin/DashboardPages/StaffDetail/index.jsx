import React from 'react'
import "./style.scss"

export default function StaffDetail() {
  return (
    <div>
    <div className="addstaff">
    <div className="d-flex">
    <div className="add-staffname">
        <label>Name</label><br/>
        <input type="text" placeholder="John"/>
     </div>
     <div className="add-stafflname">
        <label>Last Name</label><br/>
        <input type="text" placeholder="Doe"/>
     </div>
     </div>



     <div className="d-flex">
    <div className="add-staffemail">
        <label>Email Address</label><br/>
        <input type="text" placeholder="johndoe@gmail.com"/>
     </div>
     <div className="add-staffphno">
        <label>Phone Number</label><br/>
        <input type="text" placeholder="0987654321"/>
     </div>

     
     </div>
     <div className="Privileges">Privileges</div>
  <div className="privilagentry">
    <label className="checkbox-inline" htmlFor="checkboxes-0">
      <input type="checkbox" name="Accesss" id="checkboxes-0" value="0" />
      Customer
    </label>{' '}
    <label className="checkbox-inline" htmlFor="checkboxes-0">
      <input type="checkbox" name="Accesss" id="checkboxes-0" value="1" />
      Order Management
    </label>{' '}
    <label className="checkbox-inline" htmlFor="checkboxes-0">
      <input type="checkbox" name="Accesss" id="checkboxes-0" value="2" />
      Product Management
    </label>{' '}
    <label className="checkbox-inline" htmlFor="checkboxes-0">
      <input type="checkbox" name="Accesss" id="checkboxes-0" value="2" />
      Coupon Management
    </label>{' '}
  </div>


  <div className="privilagentry1">
    <label className="checkbox-inline" htmlFor="checkboxes-0">
      <input type="checkbox" name="Accesss" id="checkboxes-0" value="0" />
      Inventory Management
    </label>{' '}
    <label className="checkbox-inline" htmlFor="checkboxes-0">
      <input type="checkbox" name="Accesss" id="checkboxes-0" value="1" />
      Lead Management
    </label>{' '}
    <label className="checkbox-inline" htmlFor="checkboxes-0">
      <input type="checkbox" name="Accesss" id="checkboxes-0" value="2" />
      Blog Management
    </label>{' '}
    <label className="checkbox-inline" htmlFor="checkboxes-0">
      <input type="checkbox" name="Accesss" id="checkboxes-0" value="2" />
      Report Modules
    </label>{' '}
  </div>

  <div className="privilagentry2">
    <label className="checkbox-inline" htmlFor="checkboxes-0">
      <input type="checkbox" name="Accesss" id="checkboxes-0" value="0" />
      Staff Management
    </label>{' '}
    </div>
    <button className="add-staffcancelbtn">Cancel</button>
  <button className="add-staffpublishbtn">Save & Publish</button>
    </div>
</div>
  )
}
