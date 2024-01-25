import { FC } from "react";
import {
  useAllClients,
  useAllStudioBookings,
  useAllStudios,
} from "../../hooks/useStudio";
import _ from "lodash";
import moment from "moment";
import { FaCheckDouble } from "react-icons/fa6";

const Personal: FC = () => {
  const { data } = useAllClients();
  const { data: studio } = useAllStudios();
  const { data: studioBookings } = useAllStudioBookings();

  let costMonth = _.groupBy(studioBookings, (item) =>
    new Date(item?.createdAt).getMonth()
  );

  const sumByMonth: any = {};

  _.forEach(costMonth, (data, month) => {
    sumByMonth[month!] = _.sumBy(data, "cost");
  });

  let values: any = Object.values(sumByMonth);

  return (
    <div>
      {/* data bar */}
      <p className="mb-2 " style={{ color: "var(--secondary)" }}>
        <span className="font-bold text-[12px] ">
          Business Profile and Counts
        </span>
        <div className="grid grid-cols-2 gap-3 mt-2">
          <div className="border rounded-md min-h-[100px] p-4">
            <p className="font-bold">Total Clients Registered:</p>

            <h1
              className="text-[40px] font-medium"
              style={{ color: "var(--primary)" }}
            >
              {data?.length}
            </h1>
          </div>

          <div className="border rounded-md min-h-[100px] p-4">
            <p className="font-bold">Total Studio Registered:</p>

            <h1
              className="text-[40px] font-medium"
              style={{ color: "var(--primary)" }}
            >
              {studio?.length}
            </h1>
          </div>
          <div className="border rounded-md min-h-[100px] p-4">
            <p className="font-bold">
              Studios Booked for Last Month (
              {moment(Date.now()).format("LLL").split(" ")[0]}) :
            </p>

            <h1
              className="text-[25px] mt-5 font-bold"
              style={{ color: "var(--primary)" }}
            >
              {costMonth[0]?.length}{" "}
              <span className="text-[12px]">Studios Booked</span>
            </h1>
          </div>
          <div className="border rounded-md min-h-[100px] p-4">
            <p className="font-bold">
              Total Revenue for Last Month (
              {moment(Date.now()).format("LLL").split(" ")[0]}) :
            </p>

            <h1
              className="text-[25px] mt-5  font-bold"
              style={{ color: "var(--primary)" }}
            >
              ₦{values[0].toLocaleString()}
            </h1>
          </div>

          <div className="border rounded-md min-h-[100px] p-4 col-span-2">
            <p className="font-bold ">Total Studio Complains:</p>

            <h1 className="text-[40px] font-medium">
              {null ? (
                <div>show data</div>
              ) : (
                <div className="flex flex-col items-center justify-center p-4">
                  <FaCheckDouble size={20} />
                  <p className="mt-3 text-[12px] font-medium">
                    No Complain Entery Recorded yet
                  </p>
                </div>
              )}
            </h1>
          </div>
        </div>
      </p>
    </div>
  );
};

export default Personal;
