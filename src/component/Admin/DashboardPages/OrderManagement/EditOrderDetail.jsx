import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const EditOrderDetailFC = () => {
  return <div>EditOrderDetail</div>;
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

const EditOrderDetail = connect(null, mapDispatchToProps)(EditOrderDetailFC);

export default EditOrderDetail;
