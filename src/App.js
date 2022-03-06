import React, { useEffect, useState } from "react";
import Login from "./components/Login";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import InsuranceCompany from "./components/InsuranceCompany";
import Identity from "./components/Identity";
import Personaldetails from "./components/PersonalDetails";
import VechicleDetails from "./components/VechicleDetails";
import PolicyDetails from "./components/PolicyDetails";
import CameraDetails from "./components/Camera";
import SuccessPage from "./components/SuccessPage";
import MobileScreen from "./components/MobileScreen";
import axios from "axios";
import Payment from "./components/Payment";
import CheckOut from "./components/CheckOut";

function App() {
  const [status, setStatus] = useState();
  const [idCode, setIdCode] = useState();
  const navigate = useNavigate();
  //const statusTimeout = setInterval(() => getStatus, 20000);

  async function getStatus() {
    const token = localStorage.getItem("jwt");
    const identityCode = localStorage.getItem("identity");
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/private/status-check?id=${identityCode}`,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setStatus(response?.data?.status?.UploadStatus);
      if (response?.data?.status?.UploadStatus == "active") {
        navigate("/success");
      }

      console.log();
      //setLoading(false);
    } catch (error) {
      console.log(error);
      // setLoading(false);
    }
  }
  // useEffect(() => {
  //   const identityCode = localStorage.getItem("identity");
  //   setIdCode(identityCode);
  //   if (identityCode) {
  //     getStatus();
  //   }
  // }, [statusTimeout]);

  // useEffect(() => {
  //   // const token = localStorage.getItem("jwt");
  //   // if (token) {
  //   //   navigate("/home");
  //   // }
  //   const interval = setInterval(() => {
  //     const identityCode = localStorage.getItem("identity");
  //     if (identityCode) {
  //       getStatus();
  //     }
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, [idCode]);

  return (
    <Routes>
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/" element={<Login />} />
      <Route exact path="/insurance" element={<InsuranceCompany />} />
      <Route exact path="/identity" element={<Identity />} />
      {/* <Route exact path="/details" element={<Personaldetails />} /> */}
      <Route exact path="/vechicle" element={<VechicleDetails />} />
      <Route exact path="/policy" element={<PolicyDetails />} />
      <Route exact path="/camera" element={<CameraDetails />} />
      <Route exact path="/success" element={<SuccessPage />} />
      <Route exact path="/mobile" element={<MobileScreen />} />
      <Route exact path="/payment" element={<Payment />} />
      <Route exact path="/checkout" element={<CheckOut />} />
    </Routes>
  );
}

export default App;
