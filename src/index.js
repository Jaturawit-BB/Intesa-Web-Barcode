import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import RPoReceipt from "./Routes/RPOReceipt";
import RIssueMaterial from "./Routes/RIssueMaterial";
import RPutAwayProcess from "./Routes/RPutAwayProcess";
import RIssueMaterialDTL from "./Routes/RIssueMaterialDTL";
import RASN from "./Routes/RASN";
import RFGReceive from "./Routes/RFGReceive";
import RPutAwayConfirm from "./Routes/RPutAwayConfirm";
import Home from "./Routes/Home";
import Navbar from "./Component/Page/Navbar";
import "./App.css";

<title>xxxx</title>
const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/RPoReceipt" element={<RPoReceipt />} />
      <Route path="/RIssueMaterial" element={<RIssueMaterial />} />
      <Route path="/RPutAwayProcess" element={<RPutAwayProcess />} />
      <Route path="/RASN" element={<RASN />} />
      <Route path="/RFGReceive" element={<RFGReceive />} />
      <Route path="/RPutAwayConfirm" element={<RPutAwayConfirm />} />
      <Route path="/RIssueMaterialDTL" element={<RIssueMaterialDTL />} />
    </Route>
  )
);

// const router = createBrowserRouter([
//   {
//     element: <AppLayout />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//     path: "RPoReceipt",
//     element: <RPoReceipt/>,
//       },
//       {
//     path: "RIssueMaterial",
//     element: <RIssueMaterial/>,
//       },
//     ],
//   },
//   // {
//   //   path: "/",
//   //   element: <Home />
//   //   // (
//   //   //   <div>
//   //   //     <h1>Hello World</h1>
//   //   //     <Link to="RPoReceipt">PO Receipt</Link>
//   //   //   </div>
//   //   // ),
//   // },
  
//   // {
//   //   path: "RPoReceipt",
//   //   element: <RPoReceipt/>,
//   // },

//   // {
//   //   path: "RIssueMaterial",
//   //   element: <RIssueMaterial/>,
//   // },

// ]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);