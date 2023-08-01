import React from "react";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function RASN() {
  const [ASNNumber, setASNNumber] = useState("");
  const [EAD, setEAD] = useState("");
  const [PackingSlip, setPackingSlip] = useState("");
  const [InvoiceNumber, setInvoiceNumber] = useState("");
  const [Enteredby, setEnteredby] = useState("");
  const [showTable, setShowTable] = useState(false); // State to toggle table visibility
  const reload = () => window.location.reload();

  console.log(ASNNumber);
  console.log(EAD);
  console.log(PackingSlip);
  console.log(InvoiceNumber);
  console.log(Enteredby);

  function createData(

    calories,
    fat,
    carbs,
    protein,
    PONum,
    POLine,
    POShipment
  ) {
    return {  calories, fat, carbs, protein, PONum, POLine, POShipment };
  }

  const handlereload = () => {
    reload();
  };

  const rows = [
    createData("A", "Description A", 2, "KG", 1, 1 , 1),
    createData( "B", "Description A", 37, "EA", 2, 1 , 1),
    createData( "C", "Description A", 24, "BOX", 3, 2, 1),
    createData( "D", "Description A", 67, "PCS", 4, 1, 1),
    createData( "E", "Description A", 49, "EA", 5, 1, 1),
    createData( "E", "Description A", 49, "EA", 6, 2, 1),
  ];

  const getData = () => {
    setShowTable(true); // Set showTable state to true to display the table
  };

  return (
    <div className="App container">
      <h1 className="RASNFunctionName">Advance Shipment Notice</h1>
      {/* ... (Rest of the component code) ... */}
      <div className="mb-3">
        <label htmlFor="ASN Number" className="form-label">
          ASN Number
        </label>
        <input
          type="text"
          // className="form-control"
          style={{ marginLeft: "38px" }}
          placeholder="Enter ASN Number"
          required
          onChange={(event) => {
            setASNNumber(event.target.value);
          }}
        />
        <label
          htmlFor="Expected Arriving Date"
          className="form-label"
          style={{ marginLeft: "80px" }}
        >
          Expected Arriving Date
        </label>
        <input
          type="text"
          // className="form-control"
          style={{ marginLeft: "38px" }}
          placeholder="Enter Expected Arriving Date"
          required
          onChange={(event) => {
            setEAD(event.target.value);
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="Invoice Number" className="form-label">
          Invoice Number
        </label>
        <input
          type="text"
          // className="form-control"
          style={{ marginLeft: "20px" }}
          placeholder="Enter Invoice Number"
          required
          onChange={(event) => {
            setInvoiceNumber(event.target.value);
          }}
        />
        <label
          htmlFor="Entered by"
          className="form-label"
          style={{ marginLeft: "80px" }}
        >
          Entered by
        </label>
        <input
          type="text"
          // className="form-control"
          style={{ marginLeft: "124px" }}
          placeholder="Enter Entered by"
          required
          onChange={(event) => {
            setEnteredby(event.target.value);
          }}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="Packing Slip" className="form-label">
          Packing Slip
        </label>
        <input
          type="text"
          // className="form-control"
          style={{ marginLeft: "48px" }}
          placeholder="Enter IPacking Slip"
          required
          onChange={(event) => {
            setPackingSlip(event.target.value);
          }}
        />
      </div>

      <button className="btn btn-primary" onClick={getData}>
        Search
      </button>

      <button className="btn btn-secondary" onClick={handlereload}>
        Cancel
      </button>

      <br />
      <br />
      {/* Call Model after enter OK button */}
      {showTable && ( // Use conditional rendering to show the table when showTable is true
        <TableContainer component={Paper}>
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
        </TableContainer>
      )}
    </div>
  );
}

export default RASN;
