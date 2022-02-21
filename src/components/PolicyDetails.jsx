import React from "react";
import NavBar from "./NavBar";

export default function PolicyDetails() {
  return (
    <NavBar>
      <div className="bg-white pb-10">
        <form>
          <div className="flex gap-2 px-5 ">
            <div className="w-1/2">
              <label
                className="font-medium block mb-1 mt-6 text-gray-700"
                for="username"
              >
                Policy Holder
              </label>
              <input
                className="appearance-none border-2 rounded w-full py-2 px-3 leading-tight border-gray-300 focus:outline-none focus:border-indigo-700 focus:bg-white   pr-16 font-mono"
                id="username"
                type="text"
                autocomplete="off"
                autofocus
              />
            </div>
            <div className="w-1/2">
              <label
                className="font-medium block mb-1 mt-6 text-gray-700"
                for="username"
              >
                Mobile Number
              </label>
              <input
                className="appearance-none border-2 rounded w-full py-2 px-3 leading-tight border-gray-300 focus:outline-none focus:border-indigo-700 focus:bg-white   pr-16 font-mono"
                id="username"
                type="text"
                autocomplete="off"
                autofocus
              />
            </div>
          </div>
          <div className="flex gap-2 px-5 ">
            <div className="w-1/2">
              <label
                className="font-medium block mb-1 mt-6 text-gray-700"
                for="username"
              >
                Email Address
              </label>
              <input
                className="appearance-none border-2 rounded w-full py-2 px-3 leading-tight border-gray-300 focus:outline-none focus:border-indigo-700 focus:bg-white   pr-16 font-mono"
                id="username"
                type="text"
                autocomplete="off"
                autofocus
              />
            </div>
            <div className="w-1/2">
              <label
                className="font-medium block mb-1 mt-6 text-gray-700"
                for="username"
              >
                Company Name
              </label>
              <input
                className="appearance-none border-2 rounded w-full py-2 px-3 leading-tight border-gray-300 focus:outline-none focus:border-indigo-700 focus:bg-white   pr-16 font-mono"
                id="username"
                type="text"
                autocomplete="off"
                autofocus
              />
            </div>
          </div>
          <div className="flex gap-2 px-5 ">
            <div className="w-1/2">
              <label
                className="font-medium block mb-1 mt-6 text-gray-700"
                for="username"
              >
                NIN (Optional)
              </label>
              <input
                className="appearance-none border-2 rounded w-full py-2 px-3 leading-tight border-gray-300 focus:outline-none focus:border-indigo-700 focus:bg-white   pr-16 font-mono"
                id="username"
                type="text"
                autocomplete="off"
                autofocus
              />
            </div>
            <div className="w-1/2">
              <label
                className="font-medium block mb-1 mt-6 text-gray-700"
                for="username"
              >
                Company Name
              </label>
              <select
                className="form-select  
      block
      w-full
      px-3
      py-2
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border-2 border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label="Default select example"
              >
                <option selected>Selected</option>
                <option value="bvn">BVN</option>
                <option value="license">Driver's License</option>
                <option value="voter's card">Voter's Card</option>
                <option value="passport_id">Passport ID</option>
              </select>
            </div>
          </div>
          <div className="flex gap-2 px-5 ">
            <div className="w-1/2">
              <label
                className="font-medium block mb-1 mt-6 text-gray-700"
                for="username"
              >
                LGA
              </label>
              <select
                className="form-select  
      block
      w-full
      px-3
      py-2
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border-2 border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label="Default select example"
              >
                <option selected>Selected</option>
                <option value="bvn">BVN</option>
                <option value="license">Driver's License</option>
                <option value="voter's card">Voter's Card</option>
                <option value="passport_id">Passport ID</option>
              </select>
            </div>
            <div className="w-1/2">
              <label
                className="font-medium block mb-1 mt-6 text-gray-700"
                for="username"
              >
                Address
              </label>
              <input
                className="appearance-none border-2 rounded w-full py-2 px-3 leading-tight border-gray-300 focus:outline-none focus:border-indigo-700 focus:bg-white   pr-16 font-mono"
                id="username"
                type="text"
                autocomplete="off"
                autofocus
              />
            </div>
          </div>
        </form>
      </div>
    </NavBar>
  );
}
