import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
function InsuranceCompany() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      navigate("/");
    }
  }, []);
  return (
    <NavBar>
      <div className="inline-flex items-center pl-9">
        <span>
          <img src="/left.svg" />
        </span>
        <div className="pl-2">Select your preferred Insurance Company</div>
      </div>
      <Link to="/identity">
        <div className="flex gap-1 justify-evenly flex-wrap">
          {[...new Array(16)].map((d) => (
            <div className="bg-white  px-2 py-5 w-1/5 ">
              <img src="/ng-mansar-logo.png" />
            </div>
          ))}
        </div>
      </Link>
    </NavBar>
  );
}

export default InsuranceCompany;
