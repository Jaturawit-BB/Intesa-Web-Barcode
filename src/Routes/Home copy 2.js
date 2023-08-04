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
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

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
    <div className="menuCard" sm="3rem">
      <CardGroup>
        <Card style={{ padding: "10px" }}>
          <Card.Img
            variant="top"
            src={ASN}
            style={{ height: "auto" }}
            max-width="200px"
            max-height="240px"
            objectFit="cover"
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
          {/* <div className="menuCard2" style={{marginRight: 20}}> */}
        </Card>

        <Card style={{ padding: "10px" }}>
          <Card.Img
            variant="top"
            src={POReceipt}
            style={{ height: "auto" }}
            max-width="200px"
            max-height="240px"
            objectFit="cover"
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        {/* </div> */}

        <Card style={{ padding: "10px" }}>
          <Card.Img
            variant="top"
            src={PutAway}
            style={{ height: "auto" }}
            max-width="200px"
            max-height="240px"
            objectFit="cover"
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>

        <Card style={{ padding: "10px" }}>
          <Card.Img
            variant="top"
            src={PutAway}
            style={{ height: "auto" }}
            max-width="200px"
            max-height="240px"
            objectFit="cover"
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
}

export default Home;
