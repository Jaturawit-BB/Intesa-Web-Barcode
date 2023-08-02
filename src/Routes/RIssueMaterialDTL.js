import React from "react";
// import Axios from "axios";
import { useRef, useState } from "react";
// /import { BrowserRouter } from 'react-router-dom';
//import { AppBar } from "@mui/material";
// import IssueMaterial from "../Component/IssueMaterial";
// import ReactModal from "react-modal";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Modal from "@mui/material/Modal";
// import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import logo from "../Icon/checked.png";
import ReactModal from "react-modal";

function RIssueMaterialDTL() {
  const [cuttingOrder, setCuttingOrder] = useState("");
  const [coilNumber, setCoilNumber] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const reload = () => window.location.reload();
  const [showTable, setShowTable] = useState(false); // State to toggle table visibility
  const [updated, setUpdated] = useState("");

  // const [show, setShow] = useState(false);
  // const pickSlipdata = (
  //   pickSlip
  // )

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  const handleClose = () => setIsOpen(false);

  // const handleShow = () => setIsOpen(true);

  const handlereload = () => {
    reload();
  };

  function createData(
    calories,
    fat,
    carbs,
    protein,
    PONum,
    POLine,
    POShipment
  ) {
    return { calories, fat, carbs, protein, PONum, POLine, POShipment };
  }
  const inputRef = useRef(null);

  const handleKeyTab = (event) => {
    if (event.key === "Tab") {
      getData();
    }
    if (event.key === "Enter") {
      getData();
    }
  };

  const rows = [
    createData("A", "Description A", 2, "KG", 1, 1, 1),
    createData("B", "Description A", 37, "EA", 2, 1, 1),
    createData("C", "Description A", 24, "BOX", 3, 2, 1),
    createData("D", "Description A", 67, "PCS", 4, 1, 1),
    createData("E", "Description A", 49, "EA", 5, 1, 1),
    createData("E", "Description A", 49, "EA", 6, 2, 1),
  ];

  const getData = () => {
    setShowTable(true); // Set showTable state to true to display the table
  };

  return (
    <div className="App container">
      <br />
      <h1 className="RIMFunctionName">Material Issue</h1>
      <div className="information">
        <h2>
          Pick Slip Number : <b className="RPOVAL">PS7343</b>{" "}
          <button
            className="btn btn-warning"
            onClick={setIsOpen}
            style={{ marginLeft: "15px" }}
          >
            Summary
          </button>
          <div className="Modal">
            <ReactModal isOpen={isOpen} contentLabel="Example Modal">
              Material Issue Detail.
              <br />
              Pick Slip Number : <b className="RPOVAL">PS7343</b>
              <br />
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell align="center">Item Number</TableCell>
                      <TableCell align="center">Description</TableCell>
                      <TableCell align="center">QTY</TableCell>
                      <TableCell align="center">UOM</TableCell>
                      <TableCell align="center">Lot Number</TableCell>
                      {/* <TableCell align="center">PO Line</TableCell>
                      <TableCell align="center">PO Shipment</TableCell> */}
                      <TableCell align="center"></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="center">{row.calories}</TableCell>
                        <TableCell align="center">{row.fat}</TableCell>
                        <TableCell align="center">{row.carbs}</TableCell>
                        <TableCell align="center">{row.protein}</TableCell>
                        <TableCell align="center">{row.PONum}</TableCell>
                        {/* <TableCell align="center">{row.POLine}</TableCell>
                        <TableCell align="center">{row.POShipment}</TableCell> */}
                        <TableCell>
                          {/* <button className="btn btn-warning">Lot</button> */}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <br />
              <div className="JobDtl-Confirm-Modal text-center">
                {/* <button
                  className="JobDtl-Confirm-btn btn-success btn-lg"
                  onClick={() => {
                    handlereload();
                  }}
                >
                  Confirm
                </button> */}
                <button
                  className="JobDtl-Cancel-btn btn-secondary btn-lg"
                  onClick={handleClose}
                >
                  Close
                </button>
              </div>
            </ReactModal>
          </div>
        </h2>

        <form action="">
          {/* <div className="mb-3">
                <label htmlFor="Company" className="form-label">Internal QR Code</label>
                <input type="text" className="form-control" placeholder="Scan Internal QR Code" onChange={(event) => {
                  setCompany(event.target.value)
                }} />
              </div> */}

          <div className="mb-3">
            <label htmlFor="Lot Number" className="form-label">
              Lot Number
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Scan Lot Number"
              required
              onKeyDown={handleKeyTab}
              onChange={(event) => {
                setCuttingOrder(event.target.value);
              }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="MO Lot Number" className="form-label">
              MO Lot Number
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Scan MO Lot Number"
              required
              onKeyDown={handleKeyTab}
              onChange={(event) => {
                setCoilNumber(event.target.value);
              }}
            />
          </div>

          {/* <button className="btn btn-success" onClick={getLoadPlan}>OK</button> */}
        </form>
      </div>
      <hr />
      <div className="JobDtl"></div>

      {/* <button className="btn btn-primary" onClick={getData}>
        Get Data
      </button> */}

      {showTable && ( // Use conditional rendering to show the table when showTable is true
        <div className="mb-3">
          <label htmlFor="Item Number" className="form-label">
            Item Number
          </label>
          <input
            type="text"
            className="form-control"
            disabled="true"
            placeholder="ITEM 1234"
            required
            onKeyDown={handleKeyTab}
            onChange={(event) => {
              setCoilNumber(event.target.value);
            }}
          />
          <br />
          <div className="mb-3">
            <label htmlFor="Item Description" className="form-label">
              Item Description
            </label>
            <input
              type="text"
              disabled="true"
              className="form-control"
              placeholder="ITEM DESCRIPTION 1234"
              required
              onKeyDown={handleKeyTab}
              onChange={(event) => {
                setCoilNumber(event.target.value);
              }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="QTY" className="form-label">
              QTY
            </label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter Quantity"
              required
              onKeyDown={handleKeyTab}
              onChange={(event) => {
                setCoilNumber(event.target.value);
              }}
            />
          </div>

          <button className="btn btn-primary" onClick={handleOpen}>
            Confirm
          </button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Transaction Status
              </Typography>
              <Typography
                className="modal-modal-description"
                id="modal-modal-description"
                sx={{ mt: 2 }}
              >
                <img
                  style={{ width: 25, height: 25, margin: 8 }}
                  src={logo}
                  className="Icon"
                  alt=""
                />
                Transaction Successful
              </Typography>
              <button
                className="closedbtn btn btn-secondary"
                onClick={handlereload}
                style={{ marginLeft: "130px", border: "100" }}
              >
                Close
              </button>
            </Box>
          </Modal>

          <button className="btn btn-secondary" onClick={handlereload}>
            Cancel
          </button>

          {/* <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell align="center">Item Number</TableCell>
                <TableCell align="center">Description</TableCell>
                <TableCell align="center">QTY</TableCell>
                <TableCell align="center">UOM</TableCell>
                <TableCell align="center">PO Number</TableCell>
                <TableCell align="center">PO Line</TableCell>
                <TableCell align="center">PO Shipment</TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">{row.calories}</TableCell>
                  <TableCell align="center">{row.fat}</TableCell>
                  <TableCell align="center">{row.carbs}</TableCell>
                  <TableCell align="center">{row.protein}</TableCell>
                  <TableCell align="center">{row.PONum}</TableCell>
                  <TableCell align="center">{row.POLine}</TableCell>
                  <TableCell align="center">{row.POShipment}</TableCell>
                  <TableCell>
                    <button className="btn btn-warning">Lot</button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer> */}
        </div>
      )}

      {/* <button className="btn btn-success" onClick={() => IssueMaterial(cuttingOrder,coilNumber)}> */}
      {/* <button className="btn btn-primary" onClick={navigateIssueMatDTL}>
        OK
      </button> */}

      {/* Call Model after enter OK button */}
      {/* <div className="Modal">
        <ReactModal isOpen={isOpen} contentLabel="Example Modal">
          Material Issue Detail.
          
          <br />
          <div className="JobDtl-Confirm-Modal text-center">
            <button
              className="JobDtl-Confirm-btn btn-success btn-lg"
              onClick={() => {
                IssueMaterial(cuttingOrder, coilNumber);
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

export default RIssueMaterialDTL;
