import React from "react";
// import Icon from "../Icon/Icon";
// import logo from "../Icon/checked.png";
import ASN from "../Icon/ASN_2.jpg";
import POReceipt from "../Icon/POReceipt.jpg";
import PutAway from "../Icon/PutAway.jpg";
import IssueMaterial from "../Icon/IssueMaterial.jpg";
import FGReceived from "../Icon/FGReceived.jpg";
import { useNavigate } from "react-router-dom";
// import Card from "@mui/material/Card";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

function Home() {
  const navigate = useNavigate();

  const navigateRASN = () => {
    // 👇️ navigate to /contacts
    navigate("./RASN");
  };

  const navigateRPOReceipt = () => {
    // 👇️ navigate to /contacts
    navigate("./RPOReceipt");
  };

  const navigateRPutAwayProcess = () => {
    // 👇️ navigate to /contacts
    navigate("./RPutAwayProcess");
  };

  const navigateRIssueMaterial = () => {
    // 👇️ navigate to /contacts
    navigate("./RIssueMaterial");
  };

  const navigateRFGReceive = () => {
    // 👇️ navigate to /contacts
    navigate("./RFGReceive");
  };

  return (
    <div className="home">
    <div className="menuCard" sm="3rem" style={{ marginTop: "1rem" }}>
      <MDBRow className="row-cols-1 row-cols-md-3 g-4">
        <MDBCol onClick={navigateRASN} style={{ borderRadius: "20rem" }} >
          <MDBCard>
            <MDBCardImage src={ASN} alt="..." position="top" />
            <MDBCardBody className="MDBCardBody">
              <MDBCardTitle className="custom-card-title">
                Advance Shipment Notice
              </MDBCardTitle>
              <MDBCardText>Enter Advance Shipment Notice</MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol onClick={navigateRPOReceipt}>
          <MDBCard>
            <MDBCardImage src={POReceipt} alt="..." position="top" />
            <MDBCardBody className="MDBCardBody">
              <MDBCardTitle className="custom-card-title">PO Receipt</MDBCardTitle>
              <MDBCardText>Perform PO Receipt</MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol onClick={navigateRPutAwayProcess}>
          <MDBCard>
            <MDBCardImage src={PutAway} alt="..." position="top" />
            <MDBCardBody className="MDBCardBody">
              <MDBCardTitle className="custom-card-title">
                Put Away Process
              </MDBCardTitle>
              <MDBCardText>Perform Put Away Process</MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol onClick={navigateRIssueMaterial}>
          <MDBCard>
            <MDBCardImage src={IssueMaterial} alt="..." position="top" />
            <MDBCardBody className="MDBCardBody">
              <MDBCardTitle className="custom-card-title">
                Material Issue
              </MDBCardTitle>
              <MDBCardText>Perform Material Issue</MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol onClick={navigateRFGReceive}>
          <MDBCard>
            <MDBCardImage src={FGReceived} alt="..." position="top" />
            <MDBCardBody className="MDBCardBody">
              <MDBCardTitle className="custom-card-title">
                Finished Goods Receive
              </MDBCardTitle>
              <MDBCardText>Perform Finished Goods Receive</MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>
    </div>
  );
}

export default Home;
