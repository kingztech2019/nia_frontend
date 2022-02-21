import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import InsuranceCompany from "./components/InsuranceCompany";
import Identity from "./components/Identity";
import Personaldetails from "./components/PersonalDetails";
import VechicleDetails from "./components/VechicleDetails";
import PolicyDetails from "./components/PolicyDetails";
import CameraDetails from "./components/Camera";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/insurance" element={<InsuranceCompany />} />
      <Route exact path="/identity" element={<Identity />} />
      {/* <Route exact path="/details" element={<Personaldetails />} /> */}
      <Route exact path="/vechicle" element={<VechicleDetails />} />
      <Route exact path="/policy" element={<PolicyDetails />} />
      <Route exact path="/camera" element={<CameraDetails />} />
    </Routes>
  );
}

export default App;
