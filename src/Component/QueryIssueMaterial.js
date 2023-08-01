//import { Routes, Route, Link } from "react-router-dom";
import Axios from "axios";
import { useState } from "react";
// /import { BrowserRouter } from 'react-router-dom';
import { AppBar } from "@mui/material";
import ContainerTrackingSvc from "./Component/ContainerTrackingSvc";


function App() {



  const [SupplierQRCode, setSupplierQRCode] = useState("");

  const [LoadPlan, setLoadPlan] = useState([]);

  const getLoadPlan = () => {
    Axios.get("http://localhost:3001/getLoadPlan", {
      params: {
        SupplierQRCode: SupplierQRCode,
      },
    }).then((response) => {
      console.log(SupplierQRCode);
      setLoadPlan(response.data);
    });
  };

  return (
    <div className="App container">

      <div className="LoadPlan"></div>


      <br />
      <br />
      {LoadPlan.map((val, key) => {
        return (
          <div className="LoadPlan Detail">
            <div className="card-body text-left">
              <p className="card-text">Specification: {val.Specification} </p>
              <p className="card-text">Thickness: {val.Thickness} </p>
              <p className="card-text">Width: {val.PartWidth} </p>
              <p className="card-text">Length: {val.PartLength} </p>
              <p className="card-text">PO Number: {val.PoNum} </p>
              <div className="d-flex">
                <button className="btn btn-primary" onClick={ContainerTrackingSvc}>
                  Confirm
                </button>

              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
