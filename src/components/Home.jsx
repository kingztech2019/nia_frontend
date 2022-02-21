import React from "react";
import NavBar from "./NavBar";

const Home = () => {
  return (
    <NavBar>
      <div className="px-24 rounded w-9/12">
        <div className="bg-white rounded">
          <form>
            <div class="mb-3 w-full px-12 py-3">
              <label>Class of Insurance</label>
              <select
                class="form-select  
      block
      w-full
      px-3
      py-2.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label="Default select example"
              >
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="mb-3 w-full px-12 py-3">
              <label>Insurance Type</label>
              <select
                class="form-select  
      block
      w-full
      px-3
      py-2.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label="Default select example"
              >
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="mb-3 w-full px-12 py-3">
              <label>Vehicle Use</label>
              <select
                class="form-select  
      block
      w-full
      px-3
      py-2.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label="Default select example"
              >
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className=" px-12 py-3">
              <button className="bg-gray-500 text-white font-bold px-12 py-3 rounded">
                Proceed
              </button>
            </div>
          </form>
        </div>
      </div>
    </NavBar>
  );
};

export default Home;
