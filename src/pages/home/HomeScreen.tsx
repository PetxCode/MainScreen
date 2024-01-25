import { MdPeople, MdPlaylistAddCheck } from "react-icons/md";
import { useUser, useViewMember } from "../../hooks/useUserID";
import Personal from "./Personal";
import LittleHeader from "../../components/layout/LittleHeader";
import { FaBuildingUser, FaCheckDouble } from "react-icons/fa6";
import HospitalDetails from "../settings/HospitalDetails";
import pix from "../../assets/pix.jpg";
import Button from "../../components/reUse/Button";
import { useUserPayment } from "../../hooks/usePayment";
import { useState } from "react";
import { usePaystackPayment } from "react-paystack";
import { makePaymentAPI } from "../../api/paymentAPI";
import Clipboard from "react-spinners/ClipLoader";
import HomeAppointment from "./HomeAppointment";
import ComplainScreen from "./ComplainScreen";
import MostComplainScreen from "./MostComplainStudio";
import MostActiveScreen from "./MostActiveStudio";

const HomeScreen = () => {
  document.title = "Studio Record and Stats";

  const [state, setState] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const config = {
    reference: new Date().getTime().toString(),
    email: " data?.email",
    amount: 2000 * 100,
    publicKey: "pk_test_5a0581a5d3a5e4eff176456546f8e4b3f32d2d01",
  };

  const initializePayment: any = usePaystackPayment(config);

  const onSuccess = () => {
    console.log("reference");
  };

  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const readData = Array.from({ length: 2 });

  return (
    <div
      className="text-blue-950 flex flex-col h-full"
      style={{ color: "var(--secondary)" }}
    >
      <LittleHeader name={"Home"} />

      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-3">
        <div className="min-w-[300px] h-full flex flex-col rounded-md border p-4">
          <div className="mb-4 text-medium capitalize">Clients Info</div>
          <Personal />

          <div className="flex-1 mt-10" />
          <div className="text-[13px] font-medium mt-4">
            <div className="flex items-center gap-4">
              <div className="border-r pr-4 ">
                {state ? (
                  <label className="relative w-20 h-20 flex flex-col items-center cursor-pointer">
                    <input
                      type="checkbox"
                      value={state}
                      onChange={() => {
                        setState("");
                      }}
                      className="sr-only peer"
                    />

                    <div className="absolute -bottom-0 w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-900 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-950" />
                    <span className="absolute text-[12px] leading-tight mt-2 font-medium text-gray-900 dark:text-gray-300">
                      View Subs Status
                    </span>
                  </label>
                ) : (
                  <label className="relative w-20 flex flex-col h-20 items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      value={state}
                      onChange={() => {
                        setState("dd");
                      }}
                    />

                    <div className=" absolute -bottom-0 w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-950" />

                    <span className="absolute text-[12px] leading-tight mt-2 font-medium text-gray-900 dark:text-gray-300">
                      View Subs Status
                    </span>
                  </label>
                )}
              </div>
              <div className="w-[60%] text-blue-950">
                {state ? (
                  <div>
                    Sign up for this Month: <span>{20}</span>
                  </div>
                ) : (
                  <div>
                    Sign up for this Week: <span>{3}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="min-w-[300px] h-full flex flex-col rounded-md border p-4">
          <div className="mb-10 text-[14px] font-normal capitalize">
            complains
          </div>

          <div>
            {readData?.length > 0 ? (
              <div className="flex justify-center gap-3 w-full items-center ">
                {/* from complain */}
                <ComplainScreen />
              </div>
            ) : (
              <div className="flex flex-col w-full items-center">
                <MdPlaylistAddCheck size={30} />
                <p className="font-medium text-[13px]">
                  No complains Record yet:{" "}
                </p>
              </div>
            )}
          </div>

          <div className="flex-1" />
          <div className="border-b my-5" />

          <div className="flex flex-col items-center w-full justify-center">
            <p className="mb-3 text-[14px] font-medium">
              Studio With the Most Complain
            </p>

            <div className=" flex justify-center gap-3 w-full items-center">
              <MostComplainScreen />
            </div>
          </div>
        </div>

        <div className="border rounded-md flex gap-2 w-full p-2 col-span-1 lg:col-span-3  ">
          {/* Appointment */}

          <div className=" rounded-md w-full  p-4">
            <div className="mb-4 text-medium capitalize">
              Top 5 Most Active studio
            </div>

            <div>
              {readData?.length > 0 ? (
                <div>
                  <MostActiveScreen />
                </div>
              ) : (
                <div className="flex flex-col w-full items-center">
                  <MdPlaylistAddCheck size={30} />
                  <p className="font-medium text-[13px]">No Enry Record yet</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1" />
      <div className=" border bg-slate-50 mt-10 p-2 ">
        {readData?.length! < 0 ? (
          <div className=" grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-3">
            <div className="border rounded-md flex gap-2 w-full p-2 overflow-hidden">
              <FaBuildingUser size={25} />
              {/* <HospitalDetails
                state={data?.familyHospital[0]}
                choice="First Choice"
              /> */}
            </div>

            <div className="border rounded-md flex gap-2 w-full p-2">
              <FaBuildingUser size={25} />
              {/* <HospitalDetails
                state={data?.familyHospital[1]}
                choice="Second Choice"
              /> */}
            </div>

            <div className="border rounded-md flex gap-2 w-full p-2 col-span-1 lg:col-span-3  xl:col-span-1  ">
              <FaBuildingUser size={25} />
              {/* <HospitalDetails
                state={data?.familyHospital[2]}
                choice="Third Choice"
              /> */}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center p-4">
            <FaCheckDouble />
            <p className="mt-3 text-[12px] font-medium">
              No Entery Recorded yet
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
