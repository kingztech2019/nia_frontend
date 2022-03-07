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
        <div className="flex gap-1 gap-y-3 justify-evenly flex-wrap">
          <div className="bg-white  px-2 py-5 w-1/5 ">
            <img src="/aiico.svg" />
          </div>
          <div className="bg-white  px-2 py-5 w-1/5 ">
            <img src="/Royal-Exchange.jpg" />
          </div>
          <div className="bg-white  px-2 py-5 w-1/5 ">
            <img src="/chi.png" />
          </div>
          <div className="bg-white  px-2 py-5 w-1/5 ">
            <img src="/ng-mansar-logo.png" />
          </div>
        </div>
        <div className="flex items-center">
          <div className="bg-white  px-2 py-5 w-1/5 ">
            <img src="/test1.png" />
          </div>
          <div className="bg-white  px-2 py-5 w-1/5 ">
            <img src="/test2.png" />
          </div>
        </div>
        {/* <div className="flex gap-1 pt-2 justify-evenly flex-wrap">
          {[...new Array(8)].map((d) => (
            <div className="bg-white  px-2 py-5 w-1/5 ">
              <img src="/chi.png" />
            </div>
          ))}
        </div> */}
      </Link>
    </NavBar>
  );
}

export default InsuranceCompany;
