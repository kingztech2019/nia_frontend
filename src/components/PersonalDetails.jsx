import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import axios from "axios";
import VechicleDetails from "./VechicleDetails";
import { useForm } from "react-hook-form";
import NaijaStates from "naija-state-local-government";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
const Personaldetails = ({ formData }) => {
  const [disabled, setDisabled] = useState(true);
  const [showForm, setShowForm] = useState(true);
  const [showVechicle, setShowVechicle] = useState(false);
  const [emailData, setEmailData] = useState();
  const [addressValue, setAddressValue] = useState(null);
  const [showAddress, setShowAddress] = useState(false);
  const [regNo, setRegNo] = useState({
    vin: "",
    plateno: "",
  });
  const [vinData, setVinData] = useState();
  const [statesList, setStatesList] = useState();
  const [lgaList, setLgaList] = useState("lagos");
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { ...formData, id_code: formData.id, title: "mr" },
  });

  const handleEdit = (e) => {
    e.preventDefault();
    setDisabled(false);
  };

  // const getAllStates = () => {
  //   axios
  //     .get("http://locationsng-api.herokuapp.com/api/v1/states")
  //     .then(function (response) {
  //       setStatesList(response?.data);
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     })
  //     .then(function () {
  //       // always executed
  //     });
  // };

  useEffect(() => {
    const userEmail = localStorage.getItem("user");
    setEmailData(userEmail);
  }, []);

  const onSubmit = (data) => {
    setRegNo({ ...regNo, vin: data.vin, plateno: data.plate_no });
    const {
      first_name,
      last_name,
      means_of_id,
      id_code,
      middle_name,
      phone_number,
      email,
      state,
      lga,
      address,
      title,
    } = data;

    const body = {
      first_name,
      last_name,
      means_of_id,
      id_code,
      middle_name,
      phone_number,
      email,
      state,
      lga,
      address: addressValue?.label || formData.address,
      title,
    };
    const token = localStorage.getItem("jwt");
    setLoading(true);
    const headers = {
      "content-type": "application/json",
      Authorization: ` Bearer ${token}`,
    };

    const reqOne = axios({
      method: "post",
      url: `${process.env.REACT_APP_BACKEND_URL}/private/personal-details`,
      data: { ...body },
      headers: headers,
    });

    const reqTwo = axios({
      method: "post",
      url: `${process.env.REACT_APP_BACKEND_URL}/private/get-vin-details`,
      data: {
        vin: data.vin,
      },
      headers: headers,
    });

    axios
      .all([reqOne, reqTwo])
      .then(
        axios.spread((...responses) => {
          const [resOne, resTwo] = responses;
          console.log("THIS", resOne);

          setVinData(JSON.parse(resTwo?.data?.data?.firstcheck));
          setValue(JSON.parse(resTwo?.data?.data?.finalcheck));
          localStorage.setItem("value", resTwo?.data?.data?.finalcheck);
          //showVinDetails(resTwo?.data);
          setShowForm(false);
          setShowVechicle(true);
          setLoading(false);
          // console.log("THIS TWO", resTwo);
        })
      )
      .catch((errors) => {
        // react on errors.
        toast.error("Opps! Something went wrong, Please try again", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setLoading(false);
        console.log(errors);
      });
  };

  // const showVinDetails = (data) => {
  //   const body = {
  //     make: data?.make,
  //     model: data?.model,
  //     year: data?.year,
  //   };
  //   axios
  //     .post("https://truevalue.octamile.com/analysis2", { ...body })
  //     .then(function (response) {
  //       // setStatesList(response?.data);
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     })
  //     .then(function () {
  //       // always executed
  //     });
  // };

  // try {
  //   const body = {
  //     vin: data.vin,
  //     email: "tester",
  //     password: "tester",
  //   };
  //   const response = await axios.post(
  //     "https://autorescue.ng/dealer/v2/vinprev",
  //     { ...body }
  //   );
  //   setVinData(response?.data);
  //   setShowForm(false);
  //   setShowVechicle(true);
  //   console.log(response);
  // } catch (error) {
  //   console.log(error);
  // }
  // console.log("defaultData", formData);
  // console.log("NEW DATA", data);

  const handleChange = (e) => {
    setLgaList(e.target.value);
    // axios
    //   .get(
    //     `https://locationsng-api.herokuapp.com/api/v1/states/${e.target.value}/lgas`
    //   )
    //   .then(function (response) {
    //     setLgaList(response?.data);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   })
    //   .then(function () {
    //     // always executed
    //   });
  };
  const handleAddress = (e) => {
    setShowAddress(true);
  };
  return (
    <>
      <div className="inline-flex items-center pl-9">
        <ToastContainer
          position="bottom-right"
          autoClose={7000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="bg-white">
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
                    readOnly="true"
                    //ref={register}

                    {...register("means_of_id", {
                      required: false,
                    })}
                  />
                </div>
                <div className="w-60">
                  <label
                    className="font-medium block mb-1 mt-6 text-gray-700"
                    for="username"
                  >
                    Driver???s License Number
                  </label>
                  <input
                    className="appearance-none border-2 rounded w-full py-2 px-3 leading-tight border-gray-300 focus:outline-none focus:border-indigo-700 focus:bg-white   pr-16 font-mono"
                    defaultValue={formData?.id}
                    type="text"
                    autocomplete="off"
                    autofocus
                    readOnly
                    {...register("id_code", {
                      required: false,
                    })}
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
                    readOnly
                    {...register("title", {
                      required: false,
                    })}
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
                    readOnly
                    {...register("first_name", {
                      required: false,
                    })}
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
                    readOnly
                    {...register("last_name", {
                      required: false,
                    })}
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
                    readOnly
                    {...register("middle_name", {
                      required: false,
                    })}
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
                    readOnly
                    {...register("phone_number", {
                      required: false,
                    })}
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
                    defaultValue={emailData}
                    readOnly
                    {...register("email", {
                      required: false,
                    })}
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
                    {...register("state", {
                      required: false,
                    })}
                    disabled={disabled}
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
                    {NaijaStates.states()?.map((state, idx) => (
                      <option key={idx} value={state}>
                        {state}
                      </option>
                    ))}
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
                    {...register("lga", {
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
                    <option value="" selected>
                      Selected
                    </option>
                    {NaijaStates.lgas(lgaList)?.lgas?.map((lga, i) => (
                      <option value={lga}>{lga}</option>
                    ))}
                  </select>
                </div>
                <div className="w-[490px]">
                  <label
                    className="font-medium block mb-1 mt-6 text-gray-700"
                    for="username"
                  >
                    Address
                  </label>
                  {showAddress ? (
                    <GooglePlacesAutocomplete
                      selectProps={{
                        addressValue,
                        onChange: setAddressValue,
                      }}
                      apiKey={`${process.env.REACT_APP_GOOGLE_MAP_API}`}
                      autocompletionRequest={{
                        componentRestrictions: {
                          country: ["ng"],
                        },
                      }}
                    />
                  ) : (
                    <input
                      className="appearance-none border-2 rounded w-full py-2 px-3 leading-tight border-gray-300 focus:outline-none focus:border-indigo-700 focus:bg-white   pr-16 font-mono"
                      id="username"
                      type="text"
                      autocomplete="off"
                      autofocus
                      disabled={disabled}
                      onChange={handleAddress}
                      defaultValue={formData?.address}
                      // {...register("address", {
                      //   required: false,
                      // })}
                    />
                  )}

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
            </div>

            {/* ----------------NEW SECTION------------ */}
            {showForm && (
              <>
                <div className="pt-8">
                  <div className="bg-white">
                    <div className="flex gap-2 px-5">
                      <div className="w-1/2">
                        <label
                          className="font-medium block mb-1 mt-6 text-gray-700"
                          for="username"
                        >
                          Registration Number{" "}
                          <span className="text-[#ff0000]">*</span>
                        </label>
                        <input
                          className={`appearance-none border-2 rounded w-full py-3 px-3 leading-tight ${
                            false
                              ? "border-red-700 focus:outline-none focus:border-red-700"
                              : "border-gray-300 focus:outline-none focus:border-indigo-700"
                          }focus:bg-white   pr-16 font-mono`}
                          type="text"
                          autocomplete="off"
                          autofocus
                          required
                          placeholder="Enter plate number"
                          {...register("plate_no", {
                            required: false,
                          })}
                          //onChange={handleChange}
                        />
                        <div className="italic text-xs text-red-600 pt-1">
                          {/* {false} */}
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
                            false
                              ? "border-red-700 focus:outline-none focus:border-red-700"
                              : "border-gray-300 focus:outline-none focus:border-indigo-700"
                          }focus:bg-white   pr-16 font-mono`}
                          type="text"
                          autocomplete="off"
                          autofocus
                          required
                          placeholder="Enter VIN number"
                          {...register("vin", {
                            required: false,
                          })}
                        />
                        <div className="italic text-xs text-red-600 pt-1">
                          {errors.vin?.type === "required" &&
                            "Driver's License is required"}
                          {/* {message} */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-5 pt-3">
                  <button className="bg-indigo-700 hover:bg-indigo-900 text-white font-medium py-3 px-8 rounded focus:outline-none focus:shadow-outline">
                    {loading ? "Loading" : "Proceed"}
                  </button>
                </div>
              </>
            )}
          </form>
          {showVechicle && (
            <div className="pt-10">
              <VechicleDetails vinData={vinData} value={value} regNo={regNo} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Personaldetails;
