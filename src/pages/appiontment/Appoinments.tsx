import LittleHeader from "../../components/layout/LittleHeader";
import moment from "moment";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-datepicker/dist/react-datepicker.css";
import { useAllStudioBookings } from "../../hooks/useStudio";

import UserSingleData from "../UserSingleData";
import SingleStudioData from "../SingleStudioData";

const Appoinments = () => {
  document.title = "Studio Booked Screen";

  const { data } = useAllStudioBookings();

  return (
    <div>
      <div>
        <LittleHeader name={document.title} />
      </div>
      {/* ?start */}

      <div
        className="py-6 px-2 border rounded-md min-w-[300px] overflow-y-hidden"
        style={{ color: "var(--secondary)" }}
      >
        {/* header */}
        <div className="text-[gray] w-[1600px] flex items-center gap-2 text-[12px] font-medium uppercase mb-10 px-4">
          <div className="w-[130px] border-r">Date</div>
          <div className="w-[150px] border-r">Studio Name</div>
          <div className="w-[150px] border-r">Studio Image</div>
          <div className="w-[200px] border-r">Studio Owner</div>

          <div className="w-[180px] border-r">Booked By</div>
          <div className="w-[180px] border-r">Booked Date</div>
          <div className="w-[180px] border-r">Booked Ended</div>
          <div className="w-[180px] border-r">Booked Duration</div>
          <div className="w-[180px] border-r">Cost Paid</div>
        </div>

        <div className=" w-[1600px] overflow-hidden">
          {data?.map((props: any, i: number) => (
            <div>
              <div>
                <div
                  key={props}
                  className={`w-full flex items-center gap-2 text-[12px] font-medium  h-16 px-4 my-2  overflow-hidden ${
                    i % 2 === 0 ? "bg-slate-50" : "bg-white"
                  }`}
                >
                  <div className="w-[130px] border-r">
                    {moment(props.createdAt).format("ll")}
                  </div>
                  <div className="w-[150px] border-r">
                    <SingleStudioData props={props} name />
                  </div>
                  {/* name */}
                  <div className="w-[150px] flex justify-center border-r">
                    <SingleStudioData props={props} image />
                  </div>

                  <div className="w-[200px] border-r">
                    <SingleStudioData props={props} studioName />
                  </div>

                  <div className="w-[180px] border-r ">
                    <UserSingleData props={props} name />
                  </div>

                  <div className="w-[180px] border-r">
                    {props?.calendarDate?.split("-")[0]}
                  </div>

                  <div className="w-[180px] border-r">
                    {props?.calendarDate?.split("-")[1]}
                  </div>

                  <div className="w-[180px] border-r">
                    {props?.bookedDate}
                    {props?.bookedDate <= 1 ? " hour" : " hours"}
                  </div>

                  <div className="w-[180px] border-r">
                    ₦{props?.cost?.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Appoinments;
