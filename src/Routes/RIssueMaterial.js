import React from "react";
// import Axios from "axios";
import { useState } from "react";
// /import { BrowserRouter } from 'react-router-dom';
//import { AppBar } from "@mui/material";
import IssueMaterial from "../Component/IssueMaterial";
import RIssueMaterialDTL from "./RIssueMaterialDTL";
import ReactModal from "react-modal";
import { Routes, Route, useNavigate } from "react-router-dom";

function RIssueMaterial() {
  const [pickSlip, setPickSlip] = useState("");
  // const [coilNumber, setCoilNumber] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const reload = () => window.location.reload();
  // const [show, setShow] = useState(false);
  const handleClose = () => setIsOpen(false);
  const [updated, setUpdated] = useState("");

  // const handleShow = () => setIsOpen(true);

  const handlereload = () => {
    reload();
  };

  const navigate = useNavigate();

  const navigateIssueMatDTL = () => {
    // 👇️ navigate to /contacts
    navigate("/RIssueMaterialDTL");
  };

  const handleKeyTab = (event) => {
    if (event.key === "Tab") {
      navigateIssueMatDTL();
    }
    if (event.key === "Enter") {
      navigateIssueMatDTL();
    }
  };

  return (
    <div className="App container">
      <br />
      <h1 className="RIMFunctionName">Material Issue</h1>
      <div className="information">
        <form action="">
          {/* <div className="mb-3">
                <label htmlFor="Company" className="form-label">Internal QR Code</label>
                <input type="text" className="form-control" placeholder="Scan Internal QR Code" onChange={(event) => {
                  setCompany(event.target.value)
                }} />
              </div> */}

          <div className="mb-3">
            <label htmlFor="Cutting Order" className="form-label">
              Pick Slip Number
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Scan Pick Slip Number"
              onKeyDown={handleKeyTab}
              required
              onChange={(event) => {
                setPickSlip(event.target.value);
              }}
            />
          </div>

          {/* <div className="mb-3">
            <label htmlFor="Supplier QR Code" className="form-label">
              Coil Number QR Code
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Scan QR Coil Number"
              required
              onChange={(event) => {
                setCoilNumber(event.target.value);
              }}
            />
          </div> */}
          {/* 
          <button className="btn btn-success" onClick={getLoadPlan}>OK</button> */}
        </form>
      </div>
      <hr />
      <div className="JobDtl"></div>
      {/* <button className="btn btn-success" onClick={() => IssueMaterial(cuttingOrder,coilNumber)}> */}
      <button className="btn btn-primary btn-lg" onClick={() => navigateIssueMatDTL(pickSlip)}>
      {/* <button className="btn btn-primary btn-lg" onClick={navigateIssueMatDTL}> */}
        OK
      </button>
      {/* <button className="btn btn-primary btn-lg" onClick={() => {
                RIssueMaterialDTL();

              }}>
        OK
      </button> */}


      <button className="btn btn-secondary btn-lg" onClick={handlereload}>
        Cancel
      </button>
      <Routes>
                  <Route
                    path="/RIssueMaterialDTL"
                    element={<RIssueMaterialDTL />}
                  />
                </Routes>

      {/* Call Model after enter OK button */}
      {/* <div className="Modal">
        <ReactModal isOpen={isOpen} contentLabel="Example Modal">
          Material Issue Detail.
          <br />
          <div className="JobDtl-Confirm-Modal text-center">
            <button
              className="JobDtl-Confirm-btn btn-success btn-lg"
              onClick={() => {
                // IssueMaterial(cuttingOrder);
                handlereload();
              }}
            >
              Confirm
            </button>
            <button
              className="JobDtl-Cancel-btn btn-secondary btn-lg"
              onClick={handleClose}
            >
              Cancel
            </button>
          </div>
        </ReactModal>
      </div> */}
    </div>
  );
}

export default RIssueMaterial;
