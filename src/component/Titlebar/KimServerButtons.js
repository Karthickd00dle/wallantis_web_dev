import {
  filterKimServerListApi,
  startAllKimServerApi,
  stopAllKimServerApi,
} from "action/KimServerAct";
import { CustomButton } from "component/common/CustomButton";
import { ReactComponent as StartAlliconMobile } from "assets/svg/Start_All.svg";
import { ReactComponent as StopAlliconMobile } from "assets/svg/Stop_All.svg";
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Toast } from "service/toast";

const serverButtonStyle = {
  color: "#444444",
  background: "#D9D9D9",
  textTransform: "none",
  fontSize: "18px",
  lineHeight: "22px",
  fontFamily: "lato",
  padding: "12px",
  width: "140px",
  borderRadius: "6px",
  border: "none",
};

const KimServerButtonMain = ({
  startAllKimServerApiCall,
  stopAllKimServerApiCall,
  getKimDetailsListApi,
  filterKimServerListApiCall,
  isFilterActive,
  filteredKimResult,
  selectedKimFilterStoreItems
}) => {
  const startStopServer = (statusItem) => {
    let location = localStorage.getItem("location");
    if (isFilterActive) {
      let body = {
        inputArray: filteredKimResult.map((val) => val._id),
      };
      filterKimServerListApiCall(body, { status: statusItem }).then(() => {
        getKimServerList();
      });
    } else {
      if (statusItem === 1) {
     
        startAllKimServerApiCall({ location, status: localStorage.getItem('status') }).then(() => {
          getKimServerList();
        });
      } else {
        stopAllKimServerApiCall({ location , status: localStorage.getItem('status')}).then(() => {
          getKimServerList();
        });
      }
    }
  };

  const getKimServerList = () => {
    getKimDetailsListApi();
    Toast({ type: "success", message: "Successfully Updated" });
  };

  return (
    <div className="d-flex ">
      <CustomButton
        className="d-none d-lg-block me-3"
        style={serverButtonStyle}
        variant="outlined"
        onClick={() => startStopServer(1)}
      >
        Start all
      </CustomButton>
      <StartAlliconMobile
        className="d-lg-none me-1 start-all-icon"
        onClick={() => startStopServer(1)}
      />

      <CustomButton
        className="d-none d-lg-block me-3"
        style={serverButtonStyle}
        variant="outlined"
        onClick={() => startStopServer(2)}
      >
        Stop all
      </CustomButton>
      <StopAlliconMobile
        className="d-lg-none ms-1 stop-all-icon"
        onClick={() => startStopServer(2)}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filteredKimResult: state.commonStore.filteredKimResult,
    isFilterActive: state.commonStore.isFilterActive,
    selectedKimFilterStoreItems: state.commonStore.selectedKimFilterList,

  };
};

let mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      startAllKimServerApiCall: startAllKimServerApi,
      stopAllKimServerApiCall: stopAllKimServerApi,
      filterKimServerListApiCall: filterKimServerListApi,
    },
    dispatch
  );
};

export const KimServerButtons = connect(
  mapStateToProps,
  mapDispatchToProps
)(KimServerButtonMain);
