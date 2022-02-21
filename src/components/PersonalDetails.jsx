import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import axios from "axios";
import VechicleDetails from "./VechicleDetails";
const Personaldetails = ({ formData }) => {
  const [disabled, setDisabled] = useState(true);
  const handleEdit = (e) => {
    e.preventDefault();
    setDisabled(false);
  };
  return (
    <>
      <div className="inline-flex items-center pl-9">
        <span>
          <img src="/left.svg" />
        </span>
        <div className="pl-2">Personal Details</div>
      </div>

      <div className="grid grid-cols-4 items-start">
        <div className="col-span-1 bg-white">
          <div className="px-5 p-5">
            <img
              src={`data:image/jpeg;base64,${formData?.image}`}
              className="w-40 h-40"
            />
          </div>
        </div>
        <div className="col-span-3">
          <div className="bg-white">
            <form>
              <div className="flex gap-1 flex-wrap">
                <div className="w-60">
                  <label
                    className="font-medium block mb-1 mt-6 text-gray-700"
                    for="username"
                  >
                    Means of ID
                  </label>
                  <input
                    className="appearance-none border-2 rounded w-full py-2 px-3 leading-tight border-gray-300 focus:outline-none focus:border-indigo-700 focus:bg-white   pr-16 font-mono"
                    id="username"
                    type="text"
                    defaultValue="Driver's License"
                    autocomplete="off"
                    autofocus
                    disabled={disabled}
                  />
                </div>
                <div className="w-60">
                  <label
                    className="font-medium block mb-1 mt-6 text-gray-700"
                    for="username"
                  >
                    Driver’s License Number
                  </label>
                  <input
                    className="appearance-none border-2 rounded w-full py-2 px-3 leading-tight border-gray-300 focus:outline-none focus:border-indigo-700 focus:bg-white   pr-16 font-mono"
                    defaultValue={formData?.id}
                    type="text"
                    autocomplete="off"
                    autofocus
                    disabled={disabled}
                  />
                </div>
                <div className="w-60">
                  <label
                    className="font-medium block mb-1 mt-6 text-gray-700"
                    for="username"
                  >
                    Title
                  </label>
                  <input
                    className="appearance-none border-2 rounded w-full py-2 px-3 leading-tight border-gray-300 focus:outline-none focus:border-indigo-700 focus:bg-white   pr-16 font-mono"
                    type="text"
                    autocomplete="off"
                    autofocus
                    defaultValue="Mr"
                    disabled={disabled}
                  />
                </div>
                <div className="w-60">
                  <label
                    className="font-medium block mb-1 mt-6 text-gray-700"
                    for="username"
                  >
                    First Name
                  </label>
                  <input
                    className="appearance-none border-2 rounded w-full py-2 px-3 leading-tight border-gray-300 focus:outline-none focus:border-indigo-700 focus:bg-white   pr-16 font-mono"
                    type="text"
                    autocomplete="off"
                    autofocus
                    defaultValue={formData?.first_name}
                    disabled={disabled}
                  />
                </div>
                <div className="w-60">
                  <label
                    className="font-medium block mb-1 mt-6 text-gray-700"
                    for="username"
                  >
                    Last Name
                  </label>
                  <input
                    className="appearance-none border-2 rounded w-full py-2 px-3 leading-tight border-gray-300 focus:outline-none focus:border-indigo-700 focus:bg-white   pr-16 font-mono"
                    type="text"
                    autocomplete="off"
                    autofocus
                    defaultValue={formData?.last_name}
                    disabled={disabled}
                  />
                </div>
                <div className="w-60">
                  <label
                    className="font-medium block mb-1 mt-6 text-gray-700"
                    for="username"
                  >
                    Middle Name
                  </label>
                  <input
                    className="appearance-none border-2 rounded w-full py-2 px-3 leading-tight border-gray-300 focus:outline-none focus:border-indigo-700 focus:bg-white   pr-16 font-mono"
                    type="text"
                    autocomplete="off"
                    autofocus
                    defaultValue={formData?.middle_name}
                    disabled={disabled}
                  />
                </div>

                <div className="w-60">
                  <label
                    className="font-medium block mb-1 mt-6 text-gray-700"
                    for="username"
                  >
                    Mobile Number
                  </label>
                  <input
                    className="appearance-none border-2 rounded w-full py-2 px-3 leading-tight border-gray-300 focus:outline-none focus:border-indigo-700 focus:bg-white   pr-16 font-mono"
                    type="text"
                    autocomplete="off"
                    autofocus
                    defaultValue={formData?.phone_number}
                    disabled={disabled}
                  />
                </div>
                <div className="w-60">
                  <label
                    className="font-medium block mb-1 mt-6 text-gray-700"
                    for="username"
                  >
                    Email Address
                  </label>
                  <input
                    className="appearance-none border-2 rounded w-full py-2 px-3 leading-tight border-gray-300 focus:outline-none focus:border-indigo-700 focus:bg-white   pr-16 font-mono"
                    type="text"
                    autocomplete="off"
                    autofocus
                    //defaultValue={}
                    disabled={disabled}
                  />
                </div>
                <div className="w-60">
                  <label
                    className="font-medium block mb-1 mt-6 text-gray-700"
                    for="username"
                  >
                    State
                  </label>
                  <select
                    disabled={disabled}
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
                <div className="w-60">
                  <label
                    className="font-medium block mb-1 mt-6 text-gray-700"
                    for="username"
                  >
                    LGA
                  </label>
                  <select
                    disabled={disabled}
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
                <div className="w-[490px]">
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
                    disabled={disabled}
                    defaultValue={formData?.address}
                  />
                  <div className="text-right py-2">
                    <div className="inline-flex items-center">
                      <div>
                        <button
                          onClick={handleEdit}
                          className="bg-[#FFD0371A] text-[#FFD037] font-bold px-3 py-2 rounded"
                        >
                          Edit
                        </button>
                      </div>
                      <div>
                        <img src="/editicon.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className="pt-10">
            <VechicleDetails />
          </div>
        </div>
      </div>
    </>
  );
};

export default Personaldetails;
