import moment from "moment";
import LittleHeader from "../../components/layout/LittleHeader";

import Button from "../../components/reUse/Button";
import { useAllClients } from "../../hooks/useStudio";
import { deleteUserAPI } from "../../api/studioAPI/studioAPI";

import pix from "../../assets/pix.jpg";

const ViewUserScreen = () => {
  document.title = "View User Screen";

  // const data = Array.from({ length: 5 });

  const { data } = useAllClients();

  return (
    <div>
      <div>
        <LittleHeader name={document.title} />
      </div>

      <div
        className="py-6 px-2 border rounded-md w-[100%] overflow-y-hidden "
        style={{ color: "var(--secondary)" }}
      >
        {/* header */}
        <div className="text-[gray] w-[1400px] flex items-center gap-2 text-[12px] font-medium uppercase mb-10 px-4">
          <div className="w-[130px] border-r">Date</div>
          <div className="w-[120px] border-r">Client Phone</div>
          <div className="w-[200px] border-r">Client Name</div>
          <div className="w-[300px] border-r">Contact Address</div>
          <div className="w-[180px] border-r">Email Approved</div>
          <div className="w-[120px] border-r">Total Studios</div>
          <div className="w-[150px] border-r">View</div>
          <div className="w-[180px] border-r">Action</div>
        </div>
        <div className=" w-full">
          {data?.map((props: any, i: number) => (
            <div
              key={props}
              className={`w-[1400px] flex items-center gap-2 text-[12px] font-medium  h-16 px-4 my-2  ${
                i % 2 === 0 ? "bg-slate-50" : "bg-white"
              }`}
            >
              <div className="w-[130px] border-r">
                {moment(props.createdAt).format("ll")}
              </div>
              {/* name */}
              <div className="w-[120px] flex justify-center border-r">
                <img
                  className="w-8 h-8 rounded-full border object-cover"
                  src={props.avatar ? props.avatar : pix}
                />
              </div>
              <div className="w-[200px] border-r">
                {props.firstName} {props.lastName}
              </div>
              <div className="w-[300px] border-r">
                {props.location ? props.location : "undisclosed"}
              </div>
              <div className="w-[180px] border-r">
                {props.verify ? "Approved" : "No yet Approve"}
              </div>

              <div className="w-[120px] border-r gap-1 ">
                <p>{props.studio.length}</p>
              </div>

              <div className="w-[150px] border-r">
                <Button
                  name="view"
                  className="p-4 w-[85%] bg-blue-950 text-white hover:bg-blue-900 transition-all duration-300"
                  style={{ background: "var(--gradient)" }}
                />
              </div>

              <div className="w-[180px] border-r">
                <Button
                  name="Delete Account"
                  className="p-4 w-[85%] bg-black text-white  hover:bg-neutral-800 transition-all duration-300"
                  onClick={() => {
                    deleteUserAPI(props._id);
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewUserScreen;
