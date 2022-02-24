import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import axios from "axios";
import TawkTo from "tawkto-react";

const NavBar = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    const propertyId = process.env.REACT_APP_PROPERTY_ID;
    const tawkId = process.env.REACT_APP_TAWK_ID;
    var tawk = new TawkTo(propertyId, tawkId);

    tawk.onStatusChange((status) => {
      console.log("STATUS", status);
    });
  }, []);
  // const logOut = () => {
  //   axios
  //     .post(
  //       `${process.env.REACT_APP_BACKEND_URL}/api/logout`,
  //       {},
  //       {
  //         withCredentials: true,
  //       }
  //     )
  //     .then(function (response) {
  //       localStorage.removeItem("user");
  //       navigate("/login");
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     })
  //     .then(function () {
  //       // always executed
  //     });
  // };
  return (
    <>
      <div className="bg-white h-16 hidden lg:block">
        <div className="flex justify-between items-center">
          <div>
            <img src="/image.svg" className="w-64" />
          </div>
          <div className="hidden pr-11 lg:block">
            <img src="/logout.png" />
          </div>
        </div>
      </div>
      <div
        className="relative bg-[#FAFAF8] min-h-screen md:flex"
        data-dev-hint="container"
      >
        <input type="checkbox" id="menu-open" className="hidden" />

        {/* <label
          for="menu-open"
          className="absolute right-2 bottom-2 shadow-lg rounded-full p-2 bg-gray-100 text-gray-600 md:hidden"
          data-dev-hint="floating action button"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label> */}

        <header
          className="bg-white text-gray-100 flex justify-between md:hidden"
          data-dev-hint="mobile menu bar"
        >
          <div className="flex justify-between items-center">
            <div>
              <img src="/image.svg" className="w-64" />
            </div>
            <div className="hidden lg:block">
              <img src="/logout.png" />
            </div>
          </div>

          <a
            href="#"
            className="block p-4 text-white font-bold whitespace-nowrap truncate"
          ></a>

          <label
            for="menu-open"
            id="mobile-menu-button"
            className="m-2 p-2 focus:outline-none bg-gray-700 hover:text-white hover:bg-gray-700 rounded-md"
          >
            <svg
              id="menu-open-icon"
              className="h-6 w-6 transition duration-200 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              id="menu-close-icon"
              className="h-6 w-6 transition duration-200 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </label>
        </header>

        <aside
          id="sidebar"
          className="bg-white border-r shadow  z-50 h-screen text-gray-100 md:w-64 w-3/4 space-y-6 pt-6 px-0 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out  md:flex md:flex-col md:justify-between overflow-y-auto"
          data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation"
        >
          <div
            className="flex flex-col space-y-6"
            data-dev-hint="optional div for having an extra footer navigation"
          >
            <nav data-dev-hint="main navigation">
              <a
                href="#"
                className="flex items-center space-x-2 py-2 px-4 transition duration-200 text-blue-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
                <span className="text-lg">Buy Motor Vehicle Insurance</span>
              </a>

              <a
                href="#"
                className="flex items-center space-x-2 py-2 px-4 transition duration-200 text-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
                <span className="text-xl ">Contact N/A</span>
              </a>
            </nav>
          </div>
          <div
            //onClick={logOut}
            className="items-center pt-60 lg:pb-16 lg:pt-0"
          >
            <div>
              <div className="text-black pl-4">Powered By:</div>
              <img src="/octamile.png" />
            </div>
          </div>
        </aside>

        <main id="content" className="flex-1 p-6 lg:px-8">
          <div className="max-w-7xl mx-auto">{props.children}</div>
        </main>
      </div>
    </>
  );
};
export default NavBar;
