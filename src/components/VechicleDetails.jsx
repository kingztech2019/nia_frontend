import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import axios from "axios";
import { useForm } from "react-hook-form";
export default function VechicleDetails() {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState();
  const [formData, setFormData] = useState({
    vin: "",
    reg: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, vin: e.target.value });
  };
  console.log(formData);

  const handleClick = async () => {
    if (formData.vin.trim() == "") {
      setMessage("please fill the required field");
      return;
    }
    try {
      const body = {
        vin: formData.vin,
      };
      const response = await axios.post(
        "https://autorescue.ng/dealer/vinprev",
        { ...body }
      );
      console.log(response);
      // setFormData(response.data);
      // setLoading(false);
      // setShow(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="inline-flex items-center pl-9">
        <span>
          <img src="/left.svg" />
        </span>
        <div className="pl-2">Vechicle Details</div>
      </div>

      <div className="bg-white pb-10">
        <form>
          <div className="flex gap-2 px-5 ">
            <div className="w-1/2">
              <label
                className="font-medium block mb-1 mt-6 text-gray-700"
                for="username"
              >
                Registration Number <span className="text-[#ff0000]">*</span>
              </label>
              <input
                className={`appearance-none border-2 rounded w-full py-3 px-3 leading-tight ${
                  message
                    ? "border-red-700 focus:outline-none focus:border-red-700"
                    : "border-gray-300 focus:outline-none focus:border-indigo-700"
                }focus:bg-white   pr-16 font-mono`}
                type="text"
                autocomplete="off"
                autofocus
                required
                placeholder="Enter plate number"
                //onChange={handleChange}
              />
              <div className="italic text-xs text-red-600 pt-1">
                {/* {message} */}
              </div>
            </div>
            <div className="w-1/2">
              <label
                className="font-medium block mb-1 mt-6 text-gray-700"
                for="username"
              >
                VIN Number <span className="text-[#ff0000]">*</span>
              </label>
              <input
                className={`appearance-none border-2 rounded w-full py-3 px-3 leading-tight ${
                  message
                    ? "border-red-700 focus:outline-none focus:border-red-700"
                    : "border-gray-300 focus:outline-none focus:border-indigo-700"
                }focus:bg-white   pr-16 font-mono`}
                type="text"
                autocomplete="off"
                autofocus
                required
                placeholder="Enter plate number"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="px-5">
            <button
              onClick={handleClick}
              className="bg-indigo-700 hover:bg-indigo-900 text-white font-medium py-3 px-8 mt-10 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Proceed
            </button>
          </div>

          {show && (
            <>
              <div className="flex gap-2 px-5 ">
                <div className="w-1/2">
                  <label
                    className="font-medium block mb-1 mt-6 text-gray-700"
                    for="username"
                  >
                    Engine Number
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
                    Vehicle Color
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
                    Vehicle Make
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
                    Vehicle Model
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
                    Vehicle Value
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
                    Engine Capacity
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
                  </select>
                </div>
              </div>
            </>
          )}
        </form>
        {show && (
          <div className="flex justify-evenly pt-10">
            <div>
              <img src="/car.png" />
            </div>
            <div>
              <img src="/car.png" />
            </div>
            <div>
              <img src="/car.png" />
            </div>
            <div>
              <img src="/car.png" />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
