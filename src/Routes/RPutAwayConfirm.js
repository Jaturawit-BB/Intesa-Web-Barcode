import React from "react";
import Axios from "axios";
import { useState } from "react";
// /import { BrowserRouter } from 'react-router-dom';
//import { AppBar } from "@mui/material";
import ContainerTrackingSvc from "../Component/ContainerTrackingSvc";
import Modal from "@mui/material/Modal";
// import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import logo from "../Icon/checked.png";


function RPutAwayConfirm() {
  // const [company, setCompany] = useState("");
  // const [name, setName] = useState("");
  // const [PersonID, setPersonId] = useState("");
  // const [Status, setStatus] = useState("");
  // const [AlertGroupList, setGroup] = useState("");
  // const [EMailAddress, setEmail] = useState("");
  // const [newStatus, setNewStatus] = useState("");

  // <Route path="/" element={<Users />}>
  //   <Route path="messages" element={<DashboardMessages />} />
  //   <Route path="tasks" element={<DashboardTasks />} />

  // </Route>;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
  const reload = () => window.location.reload();

  const handlereload = () => {
    reload();
  };

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

  // const handleSubmit = (event) => {
  //   var myHeaders = new Headers();
  //   myHeaders.append(
  //     "X-API-Key",
  //     "DZZ2yARGoKvIAOZIowIX5a1drg9dT7PnoAHpcgnDaeDpM"
  //   );
  //   myHeaders.append("Content-Type", "application/json");
  //   myHeaders.append("Authorization", "Basic ZXBpY29yOmVwaWNvcg==");

  //   var raw = JSON.stringify({
  //     ds: {
  //       ContainerHeader: [
  //         {
  //           Company: "EPIC03",
  //           ContainerID: 29,
  //           ShipDate: null,
  //           Shipped: true,
  //           ShipStatus: "SHIPPED",
  //         },
  //       ],
  //     },
  //     continueProcessingOnError: true,
  //     rollbackParentOnChildError: true,
  //   });

  //   var requestOptions = {
  //     method: "POST",
  //     headers: myHeaders,
  //     body: raw,
  //     redirect: "follow",
  //   };

  //   fetch(
  //     "https://win-97ttn20bl4t/kinetic2022/api/v2/odata/EPIC03/Erp.BO.ContainerTrackingSvc/UpdateExt",
  //     requestOptions
  //   )
  //     .then((response) => response.text())
  //     .then((result) => console.log(result))
  //     .catch((error) => console.log("error", error));
  // };

  // const sendPoReceipt = () => {
  //   Axios.post("http://localhost:3001/create").then((response) => {
  //     console.log(response);
  //   });
  // };

  //  const addEmployee = () => {
  //     Axios.post('http://localhost:3001/create', {
  //       company: company,
  //       name: name,
  //       PersonID: PersonID,
  //       Status: Status,
  //       Group: Group,
  //       EMailAddress: EMailAddress
  //     }).then((response) => {
  //       console.log(response);
  //     });
  //   };

  // const addEmployee = () => {
  //   Axios.post('http://localhost:3001/create', {
  //     company: company,
  //     name: name,
  //     PersonID: PersonID,
  //     Status: Status,
  //     Group: AlertGroupList,
  //     EMailAddress: EMailAddress
  //   }).then(() => {
  //     setEmployeeList([
  //       ...employeeList,
  //       {
  //         company: company,
  //         name: name,
  //         PersonID: PersonID,
  //         Status: Status,
  //         Group: AlertGroupList,
  //         EMailAddress: EMailAddress
  //       }
  //     ]);
  //   });
  // }

  // const updateEmployeeStatus = (PersonID) => {
  //   Axios.put('http://localhost:3001/update', { status: newStatus, PersonID: PersonID }).then((response) => {
  //     setEmployeeList(
  //       employeeList.map((val) => {
  //         return val.PersonID === PersonID ? {
  //           company: val.company,
  //           name: val.name,
  //           PersonID: val.PersonID,
  //           Status: newStatus,
  //           Group: val.AlertGroupList,
  //           EMailAddress: val.EMailAddress
  //         } : val;
  //       })
  //     )
  //   })

  // }

  // const deleteEmployee = (PersonID) => {
  //   Axios.delete(`http://localhost:3001/delete/${PersonID}`).then((response) => {
  //     setEmployeeList(
  //       employeeList.filter((val) => {
  //         return val.PersonID !== PersonID;
  //       })
  //     )
  //   })
  // }

  return (
    <div className="App container">
      {/* <AppBar style={{ marginLeft: "20px" }}> INTESA </AppBar> */}
      <br />
      <h1 className="RPORFunctionName">Put Away: Confirm Location</h1>
      {/* <h4 className="RPORDTL">Receipt Number : <b className="RPOVAL">RT34023</b></h4> */}
      <div className="information">
        <form action="">
          {/* <div className="mb-3">
                <label htmlFor="Company" className="form-label">Internal QR Code</label>
                <input type="text" className="form-control" placeholder="Scan Internal QR Code" onChange={(event) => {
                  setCompany(event.target.value)
                }} />
              </div> */}

          <div className="mb-3">
            {/* <label htmlFor="Warehouse" className="form-label">
              Warehouse
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Scan Warehouse"
              required
              onChange={(event) => {
                setSupplierQRCode(event.target.value);
              }}
            />
            <br /> */}
            <label htmlFor="Bin Number" className="form-label">
              Bin Number
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Scan Bin Number"
              required
              onChange={(event) => {
                setSupplierQRCode(event.target.value);
              }}
            />
          </div>

          {/* <button className="btn btn-success" onClick={getLoadPlan}>OK</button> */}
        </form>
      </div>
      <hr />
      <div className="LoadPlan"></div>
      <button className="btn btn-success btn-lg" onClick={handleOpen}>
        OK
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
        </Box>
      </Modal>

      <button className="btn btn-secondary btn-lg" onClick={handlereload}>
        Cancel
      </button>

      <br />
      <br />
      {LoadPlan.map((val, key) => {
        return (
          <div className="LoadPlan Detail">
            <div className="card-body text-left">
              <p className="card-text">
                {" "}
                Specification:
                <t className="rcv-val">{val.Specification}</t>{" "}
              </p>
              <p className="card-text">
                Thickness:
                <t className="rcv-val">{val.Thickness}</t>{" "}
              </p>
              <p className="card-text">
                Width:
                <t className="rcv-val">{val.PartWidth}</t>{" "}
              </p>

              <p className="card-text">
                Length:
                <t className="rcv-val">{val.PartLength}</t>{" "}
              </p>

              <p className="card-text">
                PO Number:
                <t className="rcv-val">{val.PoNum}</t>{" "}
              </p>
              <div className="d-flex">
                <button
                  className="btn btn-primary"
                  onClick={ContainerTrackingSvc}
                >
                  Confirm
                </button>
                <button className="btn btn-primary" onClick={getLoadPlan}>
                  Confirm
                </button>

                {/* <input type="number"
                      style={{ width: "300px" }}
                      placeholder="0"
                      className='form-control'
                      onChange={(event) => {
                        setNewStatus(event.target.value)
                      }}
                    /> */}
                {/* <button className='btn btn-warning' style={{ marginLeft: "4px" }} onClick={() => { updateEmployeeStatus(val.PersonID) }}>Update</button>
                    <button className='btn btn-danger' style={{ marginLeft: "4px" }} onClick={() => { deleteEmployee(val.PersonID) }}>Delete</button> */}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RPutAwayConfirm;
