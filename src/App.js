//import { Routes, Route, Link } from "react-router-dom";
import Axios from "axios";
import { useState } from "react";
// /import { BrowserRouter } from 'react-router-dom';
import { AppBar } from "@mui/material";
import ContainerTrackingSvc from "./Component/ContainerTrackingSvc";


function App() {
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
      <AppBar style={{ marginLeft: "20px" }}> INTESA </AppBar>
      <br />
      <h1>PO Receipt</h1>
      <div className="information">
        <form action="">
          {/* <div className="mb-3">
              <label htmlFor="Company" className="form-label">Internal QR Code</label>
              <input type="text" className="form-control" placeholder="Scan Internal QR Code" onChange={(event) => {
                setCompany(event.target.value)
              }} />
            </div> */}

          <div className="mb-3">
            <label htmlFor="Supplier QR Code" className="form-label">
              Supplier QR Code
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Scan Supplier QR Code"
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
      <button className="btn btn-success" onClick={getLoadPlan}>
        OK
      </button>

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

export default App;
