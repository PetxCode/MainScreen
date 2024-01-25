import moment from "moment";
import LittleHeader from "../../components/layout/LittleHeader";
import { useUserHospitalAppointment } from "../../hooks/useHospital";
import lodash from "lodash";
const HistoryScreen = () => {
  document.title = "report and complains Screen";

  const { data } = useUserHospitalAppointment("user");

  const dataArray = [
    "apple",
    "banana",
    "orange",
    "apple",
    "banana",
    "apple",
    "orange",
    "kiwi",
    "banana",
  ];

  console.log(lodash.chain(dataArray).countBy().toPairs().value());

  return (
    <div>
      <div>
        <LittleHeader name={document.title} />
      </div>

      <div className="py-6 px-2 border rounded-md w-[100%] overflow-y-hidden ">
        {/* header */}
        <div className="text-[gray] w-[1280px] flex items-center gap-2 text-[12px] font-medium uppercase mb-10 px-4">
          <div className="w-[130px] border-r">Date</div>
          <div className="w-[200px] border-r">Complainant Name</div>
          <div className="w-[300px] border-r">Complain Logs</div>
          <div className="w-[100px] border-r">Approved</div>
          <div className="w-[180px] border-r">Scheduled Date</div>
          <div className="w-[100px] border-r">Time</div>
          <div className="w-[100px] border-r">Received</div>
          <div className="w-[300px] border-r">reason</div>
        </div>
        <div className=" w-full">
          {data?.appointments?.map((props: any, i: number) => (
            <div
              key={props}
              className={`w-[1280px] flex items-center gap-2 text-[12px] font-medium  h-16 px-4 my-2  ${
                i % 2 === 0 ? "bg-slate-50" : "bg-white"
              }`}
            >
              <div className="w-[130px] border-r">
                {moment(props.createdAt).format("ll")}
              </div>
              <div className="w-[200px] border-r">{props.hospitalName}</div>
              <div className="w-[300px] border-r">
                {props.location ? props.location : "undisclosed"}
              </div>
              <div className="w-[100px] border-r">
                {props.approved ? "Approved" : "No yet Approve"}
              </div>
              <div className="w-[180px] border-r gap-1 ">
                <p>{props.appointmentDate.split(",")[0]},</p>

                <p>{props.appointmentDate.split(",")[1]}</p>
                {/* <span>
                  {props.appointmentDate.split(",")[2]?.split(" ")[1]}
                </span> */}
              </div>
              <div className="w-[100px] border-r">
                <span>
                  {props.appointmentDate.split(",")[2]?.split(" ")[2]}
                  {props.appointmentDate.split(",")[2]?.split(" ")[3]}
                </span>
              </div>
              <div className="w-[100px] border-r">Not yet Received</div>
              <div className="w-[300px] border-r ">
                {props?.reason.substring(0, 80)}...
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HistoryScreen;
