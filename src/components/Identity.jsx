import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import PersonalDetails from "./PersonalDetails";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Identity = () => {
  const navigate = useNavigate();
  const [licenseData, setLicenseData] = useState();
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState();
  const [formData, setFormData] = useState();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (data.license.trim() === "") {
      setMessage("Driver's License is required");
      return;
    }
    setLoading(true);
    try {
      const body = {
        id: data.license,
      };
      const response = await axios.post(
        "https://api.appruve.co/v1/verifications/ng/driver_license",
        { ...body },
        {
          headers: {
            Authorization: ` Bearer ${process.env.REACT_APP_TOKEN_CODE}`,
          },
        }
      );
      setFormData(response.data);
      setLoading(false);
      setShow(true);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      navigate("/");
    }
  }, []);

  return (
    <NavBar>
      {show ? (
        <PersonalDetails formData={formData} />
      ) : (
        <>
          <div className="inline-flex items-center pl-9 pb-4">
            <span>
              <img src="/left.svg" />
            </span>
            <div className="pl-2">Means of Identification</div>
          </div>
          <div className="bg-white rounded w-3/6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="w-full px-12 pt-2">
                <label className="text-gray-700">Means of Identification</label>
                <select
                  disabled
                  className="form-select  
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
                  <option>Selected</option>
                  <option selected value="license">
                    Driver's License
                  </option>
                </select>
              </div>
              <div className="mb-3 w-full px-12 py-3">
                <label
                  className="font-medium block mb-1 mt-6 text-gray-700"
                  for="username"
                >
                  Driver’s License
                </label>
                <input
                  className={`appearance-none border-2 rounded w-full py-3 px-3 leading-tight ${
                    errors.license
                      ? "border-red-700 focus:outline-none focus:border-red-700"
                      : "border-gray-300 focus:outline-none focus:border-indigo-700"
                  }focus:bg-white   pr-16 font-mono`}
                  id="username"
                  name="license"
                  type="text"
                  required
                  autocomplete="off"
                  autofocus
                  {...register("license", {
                    required: true,
                  })}
                />
                <div className="italic text-xs text-red-600 pt-1">
                  {errors.license?.type === "required" &&
                    "Driver's License is required"}
                  {message}
                </div>
              </div>

              <div className=" px-12 py-3">
                <button
                  disabled={loading ? true : false}
                  className="bg-gray-500 text-white font-bold px-12 py-3 rounded"
                >
                  {loading ? "Loading" : "Proceed"}
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </NavBar>
  );
};

export default Identity;
