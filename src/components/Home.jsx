import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    const token = localStorage.getItem("jwt");
    const headers = {
      "content-type": "application/json",
      Authorization: ` Bearer ${token}`,
    };

    try {
      const body = {
        classofinsurance: "motor_vechicle",
        type: data.type,
        vechicleuse: data.vechicleuse,
      };
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/private/buy-details`,
        { ...body },
        {
          headers: headers,
        }
      );
      navigate("/insurance");
      console.log(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
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
      <div className="px-24 rounded w-full lg:w-9/12">
        <div className="bg-white rounded ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="mb-3 w-full px-12 py-3">
              <label>Class of Insurance</label>
              <select
                {...register("classofinsurance", {
                  required: false,
                })}
                disabled
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
                <option>Open this select menu</option>
                <option selected value="motor_vechicle">
                  Motor Vechicle
                </option>
              </select>
            </div>
            <div class="mb-3 w-full px-12 py-3">
              <label>Insurance Type</label>
              <select
                {...register("type", {
                  required: false,
                })}
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
                <option selected>select</option>
                <option value="third_party">Third Party</option>
                <option value="comprehensive">Comprehensive</option>
              </select>
            </div>
            <div class="mb-3 w-full px-12 py-3">
              <label>Vehicle Use</label>
              <select
                {...register("vechicleuse", {
                  required: false,
                })}
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
                <option selected>select</option>
                <option value="private_motor">Private Motor</option>
                <option value="motor_cycle">
                  Motor Cycle (Power Bike/Official Ride)
                </option>
                <option value="special_types">
                  Special Types (Ambulance/Hearses)
                </option>
                <option value="motor_trade">
                  Motor Trade (Road/Premises Risks)
                </option>
                <option value="tricycle">Tricycle (Keke Napep)</option>
                <option value="commercial_bus">
                  Commercial (Own Good/Staff Bus)
                </option>
                <option value="commercial">
                  Commercial (Trucks/General Cartage)
                </option>
              </select>
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
      </div>
    </NavBar>
  );
};

export default Home;
