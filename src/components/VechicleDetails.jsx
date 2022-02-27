import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
export default function VechicleDetails({ vinData, regNo }) {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState();
  const [formData, setFormData] = useState();
  const [showForm, setShowForm] = useState(true);
  const [disabled, setDisabled] = useState(true);
  const [statesList, setStatesList] = useState();
  const [lgaList, setLgaList] = useState();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { ...vinData, vin: regNo } });

  // const handleChange = (e) => {
  //   setFormData({ ...formData, vin: e.target.value });
  // };
  // console.log(formData);

  const onSubmit = async (data) => {
    setLoading(true);
    const {
      reg_no,
      vin,
      engine,
      vechicle_color,
      model,
      value,
      capacity,
      make,
      policy_holder,
      phone_number,
      email,
      company,
      state,
      nin,
      lga,
      address,
    } = data;
    const body = {
      reg_no,
      vin,
      engine,
      vechicle_color,
      model,
      value,
      capacity,
      make,
      policy_holder,
      phone_number,
      email,
      company,
      state,
      nin,
      lga,
      address,
    };

    const token = localStorage.getItem("jwt");
    const headers = {
      "content-type": "application/json",
      Authorization: ` Bearer ${token}`,
    };

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/private/all-details`,
        { ...body },
        {
          headers: headers,
        }
      );
      localStorage.setItem("identity", response.data?.identity);

      navigate("/mobile");
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const handleEdit = (e) => {
    e.preventDefault();
    setDisabled(false);
  };
  // const handleClick = async () => {
  //   if (formData.vin.trim() == "") {
  //     setMessage("please fill the required field");
  //     return;
  //   }
  //   try {
  //     const body = {
  //       vin: formData.vin,
  //       email: "tester",identity?policy_holder=&phone=&email=&company=&stidentity?policy_holder=&phone=&email=&company=&state=State&lga=Selected&address=ate=State&lga=Selected&address=
  //       password: "tester",
  //     };
  //     const response = await axios.post(
  //       "https://autorescue.ng/dealer/v2/vinprev",
  //       { ...body }
  //     );
  //     console.log(response);
  //     // setFormData(response.data);
  //     // setLoading(false);
  //     // setShow(true);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const getAllStates = () => {
    axios
      .get("http://locationsng-api.herokuapp.com/api/v1/states")
      .then(function (response) {
        setStatesList(response?.data);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  useEffect(() => {
    getAllStates();
  }, []);

  const handleChange = (e) => {
    axios
      .get(
        `https://locationsng-api.herokuapp.com/api/v1/states/${e.target.value}/lgas`
      )
      .then(function (response) {
        setLgaList(response?.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  return (
    <>
      <div className="pb-2">
        <div className="">Vechicle Details</div>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="bg-white pb-10">
            <div className="flex gap-2 px-5 ">
              <div className="w-1/2">
                <label
                  className="font-medium block mb-1 mt-6 text-gray-700"
                  for="reg_no"
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
                  name="reg_no"
                  placeholder="Enter plate number"
                  disabled={disabled}
                  {...register("reg_no", {
                    required: false,
                  })}
                  //defaultValue={}
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
                  defaultValue={regNo}
                  disabled={disabled}
                  {...register("vin", {
                    required: false,
                  })}
                />
              </div>
            </div>

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
                  type="text"
                  autocomplete="off"
                  autofocus
                  defaultValue={vinData?.engine}
                  disabled={disabled}
                  {...register("engine", {
                    required: false,
                  })}
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
                  {...register("color", {
                    required: false,
                  })}
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
                  <option value="red">Red</option>
                  <option value="green">Green</option>
                  <option value="blue">Blue</option>
                  <option value="yellow">Yellow</option>
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
                  disabled={disabled}
                  select
                  {...register("make", {
                    required: false,
                  })}
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
                  <option disabled>Selected</option>
                  <option selected value={vinData?.make}>
                    {vinData?.make}
                  </option>
                  {/* <option value="license">Driver's License</option>
                <option value="voter's card">Voter's Card</option>
                <option value="passport_id">Passport ID</option> */}
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
                  select
                  {...register("model", {
                    required: false,
                  })}
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
                  <option disabled>Selected</option>
                  <option selected value={vinData?.model}>
                    {vinData?.model}
                  </option>
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
                  type="text"
                  autocomplete="off"
                  autofocus
                  disabled={disabled}
                  select
                  {...register("value", {
                    required: false,
                  })}
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
                  disabled={disabled}
                  select
                  {...register("capacity", {
                    required: false,
                  })}
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
                  <option value="bvn">500</option>
                </select>
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
                    <div className="bg-[#FFD0371A]">
                      <img src="/editicon.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-evenly gap-1 pt-5">
              {[...new Array(4)].map((e) => (
                <div>
                  <img src={vinData?.image} className="rounded h-24" />
                </div>
              ))}
            </div>
          </div>

          {/* -------------------------NEW SECTION---------------- */}
          <div className="pt-8">
            <div className="pb-2">
              <div className="">Policy</div>
            </div>
            <div className="bg-white">
              <div className="flex gap-2 px-5 ">
                <div className="w-1/2">
                  <label
                    className="font-medium block mb-1 mt-6 text-gray-700"
                    for="policy_holder"
                  >
                    Policy Holder
                  </label>
                  <input
                    className="appearance-none border-2 rounded w-full py-2 px-3 leading-tight border-gray-300 focus:outline-none focus:border-indigo-700 focus:bg-white   pr-16 font-mono"
                    type="text"
                    autocomplete="off"
                    autofocus
                    name="policy_holder"
                    {...register("policy_holder", {
                      required: false,
                    })}
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
                    type="text"
                    autocomplete="off"
                    autofocus
                    {...register("phone_number", {
                      required: false,
                    })}
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
                    type="text"
                    autocomplete="off"
                    autofocus
                    {...register("email", {
                      required: false,
                    })}
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
                    type="text"
                    autocomplete="off"
                    autofocus
                    {...register("company", {
                      required: false,
                    })}
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
                    type="text"
                    autocomplete="off"
                    autofocus
                    {...register("nin", {
                      required: false,
                    })}
                  />
                </div>
                <div className="w-1/2">
                  <label
                    className="font-medium block mb-1 mt-6 text-gray-700"
                    for="username"
                  >
                    State
                  </label>
                  <select
                    {...register("state", {
                      required: false,
                    })}
                    onChange={handleChange}
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
                    <option value="" selected>
                      State
                    </option>
                    {statesList?.map((state, idx) => (
                      <option key={idx} value={state?.name}>
                        {state?.name}
                      </option>
                    ))}
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
                    {...register("lga", {
                      required: false,
                    })}
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
                    {lgaList?.map((lga, i) => (
                      <option value={lga}>{lga}</option>
                    ))}
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
                    type="text"
                    autocomplete="off"
                    autofocus
                    {...register("address", {
                      required: false,
                    })}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="px-5 pt-3">
            <button
              //onClick={handleClicked}
              className="bg-indigo-700 hover:bg-indigo-900 text-white font-medium py-3 px-8 rounded focus:outline-none focus:shadow-outline"
            >
              {loading ? "Loading" : "Proceed"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
