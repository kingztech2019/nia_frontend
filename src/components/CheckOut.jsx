import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import NumberFormat from "react-number-format";
import { useForm } from "react-hook-form";
import Payment from "./Payment";
export default function CheckOut() {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
  } = useForm();
  const [amount, setAmount] = useState();
  const [storeAmount, setStoreAmount] = useState();
  const [chargeValue, setChargeValue] = useState({
    floodCover: "",
  });
  const [excessBuy, setExcessBuy] = useState();
  const [otherRisk, setOtherRisk] = useState();
  const [showPayment, setShowPayment] = useState(true);
  const watchExcessBuy = watch("excessBuy", false);
  const watchfloodCover = watch("floodCover", false);
  const watchOtherRisk = watch("otherRisk", false);

  //console.log(watchExcessBuy, watchfloodCover, watchOtherRisk);
  const onSubmit = (data) => {
    console.log(data);
  };
  useEffect(() => {
    const storeValue = localStorage.getItem("value");
    const parsedStoreValue = JSON.parse(storeValue);
    setStoreAmount(parsedStoreValue.value);

    setAmount(parseInt((2.5 / 100) * parsedStoreValue.value));
    //THIS IS CALCLUATED
    if (watchExcessBuy) {
      const calculatedExcessBuy = (1 / 100) * storeAmount;
      setExcessBuy(parseInt(calculatedExcessBuy));

      //setAmount(amount + calculatedExcessBuy);
    } else {
      setExcessBuy("");
    }
    if (watchfloodCover) {
      const calculatedFloodCover = (0.2 / 100) * storeAmount;
      setChargeValue({ ...chargeValue, floodCover: calculatedFloodCover });

      //setAmount(amount + calculatedExcessBuy);
    } else {
      setChargeValue({ ...chargeValue, floodCover: "" });
    }
    if (watchOtherRisk) {
      const calculatedOtherRisk = (0.1 / 100) * storeAmount;
      setOtherRisk(calculatedOtherRisk);

      //setAmount(amount + calculatedExcessBuy);
    } else {
      setOtherRisk("");
    }
  }, [watchExcessBuy, watchfloodCover, watchOtherRisk]);

  return (
    <NavBar>
      {showPayment ? (
        <div className="flex flex-col justify-center antialiased  text-gray-600 -min-h-screen p-4">
          <div className="h-full">
            <div className="max-w-max mx-auto">
              <div className="bg-white shadow-lg rounded-lg mt-9 p-4">
                <div className="flex text-center items-center justify-center">
                  <div>Vechicle Value:</div>
                  <div className="">
                    <NumberFormat
                      value={storeAmount}
                      className="text-3xl p-2 font-bold"
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"₦"}
                    />
                  </div>
                </div>
                <fieldset className="p-4 border">
                  <legend>Additional covers:</legend>

                  <div class="flex flex-col">
                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                          <form onSubmit={handleSubmit(onSubmit)}>
                            <table class="min-w-full">
                              <thead class="bg-white border-b">
                                <tr>
                                  <th
                                    scope="col"
                                    class="text-lg font-bold text-gray-900 px-6 py-4 text-left"
                                  ></th>
                                  <th
                                    scope="col"
                                    class="text-lg font-bold text-gray-900 px-6 py-4 text-left"
                                  >
                                    Charge Type
                                  </th>
                                  <th
                                    scope="col"
                                    class="text-lg font-bold text-gray-900 px-6 py-4 text-left"
                                  >
                                    Charge Value
                                  </th>
                                  <th
                                    scope="col"
                                    class="text-lg font-bold text-gray-900 px-6 py-4 text-left"
                                  >
                                    Plans
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    <div class="form-check">
                                      <input
                                        class="form-check-input h-4 w-4 border border-gray-300 rounded-sm focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                        type="checkbox"
                                        checked
                                        id="flexCheckChecked"
                                      />
                                    </div>
                                  </td>
                                  <td class="text-md text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                    2.5% of Vehicle value
                                  </td>
                                  <td class="text-md text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                    <NumberFormat
                                      value={amount}
                                      className="text-xl p-2 font-bold"
                                      displayType={"text"}
                                      thousandSeparator={true}
                                      prefix={"₦"}
                                    />
                                  </td>
                                  <td class="text-md text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                    Basic Cover
                                  </td>
                                </tr>
                                <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    <div class="form-check">
                                      <input
                                        class="form-check-input h-4 w-4 border border-gray-300 rounded-sm focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                        type="checkbox"
                                        id="flexCheckChecked"
                                        {...register("excessBuy", {
                                          required: false,
                                        })}
                                      />
                                    </div>
                                  </td>
                                  <td class="text-md text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                    1% of Vehicle value
                                  </td>
                                  <td class="text-md text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                    <NumberFormat
                                      value={excessBuy}
                                      className="text-xl p-2 font-bold"
                                      displayType={"text"}
                                      thousandSeparator={true}
                                      prefix={"₦"}
                                    />
                                  </td>
                                  <td class="text-md text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                    Excess buy
                                  </td>
                                </tr>
                                <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    <div class="form-check">
                                      <input
                                        class="form-check-input h-4 w-4 border border-gray-300 rounded-sm focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                        type="checkbox"
                                        id="flexCheckChecked"
                                        {...register("floodCover", {
                                          required: false,
                                        })}
                                      />
                                    </div>
                                  </td>
                                  <td class="text-md text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                    0.2% of Vehicle value
                                  </td>
                                  <td class="text-md text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                    <NumberFormat
                                      value={chargeValue?.floodCover}
                                      className="text-xl p-2 font-bold"
                                      displayType={"text"}
                                      thousandSeparator={true}
                                      prefix={"₦"}
                                    />
                                  </td>
                                  <td class="text-md text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                    Flood cover flood and special risk
                                  </td>
                                </tr>
                                <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    <div class="form-check">
                                      <input
                                        class="form-check-input h-4 w-4 border border-gray-300 rounded-sm focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                        type="checkbox"
                                        id="flexCheckChecked"
                                        {...register("otherRisk", {
                                          required: false,
                                        })}
                                      />
                                    </div>
                                  </td>
                                  <td class="text-md text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                    0.1% of Vehicle value
                                  </td>
                                  <td class="text-md text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                    <NumberFormat
                                      value={otherRisk}
                                      className="text-xl p-2 font-bold"
                                      displayType={"text"}
                                      thousandSeparator={true}
                                      prefix={"₦"}
                                    />
                                  </td>
                                  <td class="text-md text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                    Other risk
                                  </td>
                                </tr>
                                <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                  <td></td>
                                  <td class="px-6 py-4 whitespace-nowrap text-base font-medium text-gray-900">
                                    <div>Total Plans</div>
                                  </td>
                                  <td class="text-md text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                    <NumberFormat
                                      value={
                                        +amount +
                                        +otherRisk +
                                        +chargeValue.floodCover +
                                        +excessBuy
                                      }
                                      className="text-3xl p-2 font-bold"
                                      displayType={"text"}
                                      thousandSeparator={true}
                                      prefix={"₦"}
                                    />
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <div className="flex items-center justify-center pt-3">
                              <button
                                onClick={() => setShowPayment(false)}
                                className="w-1/2 font-semibold text-lg inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow transition duration-150 ease-in-out  bg-indigo-500 hover:bg-indigo-600 text-white focus:outline-none focus-visible:ring-2"
                              >
                                Checkout
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Payment
          totalPrice={
            +amount + +otherRisk + +chargeValue.floodCover + +excessBuy
          }
        />
      )}
    </NavBar>
  );
}
