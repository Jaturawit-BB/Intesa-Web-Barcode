import React from "react";
// import Icon from "../Icon/Icon";
// import logo from "../Icon/checked.png";
import ASN from "../Icon/ASN.jpg";
import POReceipt from "../Icon/POReceipt.jpg";
import PutAway from "../Icon/PutAway.jpg";
import IssueMaterial from "../Icon/IssueMaterial.jpg";
import FGReceived from "../Icon/FGReceived.jpg";
import { useNavigate } from "react-router-dom";
// import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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


  return (
    <div className="home">
      <Card style={{ width: '18rem'   minWidth: "20%",
  flexGrow: 0 }}>
      <Card.Img variant="top" src={ASN} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

      <div
        className="IconMenu"
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          sm: "6",
          // marginLeft: 150,
        }}
      >
        <Card sx={{ maxWidth: 345, margin: 5, height: "auto", width: "20rem" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={ASN}
              alt="green iguana"
              onClick={navigateRASN}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                onClick={navigateRASN}
              >
                Advance Shipment Notice
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                onClick={navigateRASN}
              >
                Perform Advance Shipment Notice (ASN)
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        {/* </div>
      <div
        className="IconMenu"
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          // marginLeft: 150,
        }}
      > */}
        <Card sx={{ maxWidth: 345, margin: 5, height: "100", width: "20rem" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={IssueMaterial}
              alt="green iguana"
              onClick={navigateRIssueMaterial}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                onClick={navigateRIssueMaterial}
              >
                Material Issue
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                onClick={navigateRIssueMaterial}
              >
                Perform Material Issue
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>

      <div
        className="IconMenu"
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Card sx={{ maxWidth: 345, margin: 5, height: "100", width: "20rem" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={POReceipt}
              alt="green iguana"
              onClick={navigateRPOReceipt}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                onClick={navigateRPOReceipt}
              >
                PO Receipt
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                onClick={navigateRPOReceipt}
              >
                Perform PO Receipt
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        {/* </div>
      <div
        className="IconMenu"
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      > */}
        <Card sx={{ maxWidth: 345, margin: 5, height: "100", width: "20rem" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={FGReceived}
              alt="green iguana"
              onClick={navigateRIssueMaterial}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                onClick={navigateRIssueMaterial}
              >
                Finished Goods Receive
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                onClick={navigateRIssueMaterial}
              >
                Perform Finished Goods Receive
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>

      <div
        className="IconMenu"
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Card sx={{ maxWidth: 345, margin: 5, height: "100", width: "20rem" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={PutAway}
              alt="green iguana"
              onClick={navigateRPutAwayProcess}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                onClick={navigateRPutAwayProcess}
              >
                Put Away Process
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                onClick={navigateRPutAwayProcess}
              >
                Perform Put Away Process
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>

      {/* <h1>Welcome to Web QR Code System</h1> */}
      {/* <img
        style={{ width: 250, height: 250 }}
        src={logo}
        className="Icon"
        alt=""
      /> */}

      {/* <div className="home2">
        <h1>
          <br /> Welcome to Web QR Code System
        </h1>
      </div> */}
    </div>
  );
}

export default Home;
