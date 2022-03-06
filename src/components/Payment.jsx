import React, { useEffect, useState } from "react";
import { usePaystackPayment } from "react-paystack";
import NumberFormat from "react-number-format";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";

export default function Payment() {
  const [amount, setAmount] = useState();
  const navigate = useNavigate();
  const config = {
    reference: new Date().getTime().toString(),
    email: "user@example.com",
    amount: 100,
    publicKey: "pk_live_d79b2cd565fa1e56ef7fceb44617375e42ef46df",
  };

  // you can call this function anything
  const onSuccess = (reference) => {
    navigate("/mobile");
    localStorage.removeItem("value");
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };
  const initializePayment = usePaystackPayment(config);
  useEffect(() => {
    const storeValue = localStorage.getItem("value");
    const parsedStoreValue = JSON.parse(storeValue);
    setAmount((2.5 / 100) * parsedStoreValue.value);
  }, []);
  return (
    <NavBar>
      <div className="flex flex-col justify-center antialiased  text-gray-600 -min-h-screen p-4">
        <div className="h-full">
          <div className="max-w-[360px] mx-auto">
            <div className="bg-white shadow-lg rounded-lg mt-9">
              <header className="text-center px-5 pb-5">
                <svg
                  className="inline-flex -mt-9 w-[72px] h-[72px] fill-current rounded-full border-4 border-white box-content shadow mb-3"
                  viewBox="0 0 72 72"
                >
                  <path className="text-gray-700" d="M0 0h72v72H0z" />
                  <svg
                    className="w-2 h-2 text-pink-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
                    <path
                      fill-rule="evenodd"
                      d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </svg>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Payment Invoice
                </h3>
              </header>

              <div className="text-center px-5 py-6">
                <div>Total Amount</div>
                <div className="mb-6">
                  <NumberFormat
                    value={amount}
                    className="text-3xl p-2 font-bold"
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"₦"}
                  />
                </div>
                <form className="space-y-3">
                  <div className="flex shadow-sm rounded"></div>
                  <button
                    onClick={() => {
                      initializePayment(onSuccess, onClose);
                    }}
                    type="button"
                    className="font-semibold text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow transition duration-150 ease-in-out w-full bg-indigo-500 hover:bg-indigo-600 text-white focus:outline-none focus-visible:ring-2"
                  >
                    Pay Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NavBar>
  );
}
