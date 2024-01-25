import { MdPeople, MdQueryStats, MdReport, MdSettings } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Button from "../reUse/Button";
import { FaBarsProgress } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { changeMemberState, changeToggleText } from "../../global/reduxState";
import { useEffect } from "react";
import { useUserPayment } from "../../hooks/usePayment";
import { useUser, useUserID } from "../../hooks/useUserID";
import logo from "../../assets/logo.png";
const Sider = () => {
  const dispatch = useDispatch();
  const toggleText = useSelector((state: any) => state.toggleText);

  const { user: userID }: any = useUserID();
  const { user: data }: any = useUser(userID);
  const { data: payment } = useUserPayment(userID);

  const onHandleClick = () => {
    if (!document.startViewTransition) {
      dispatch(changeMemberState());
    } else {
      document.startViewTransition(() => {
        dispatch(changeMemberState());
      });
    }
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      if (!document.startViewTransition) {
        dispatch(changeToggleText(false));
      } else {
        document.startViewTransition(() => {
          dispatch(changeToggleText(false));
        });
      }
      clearTimeout(timer);
    }, 5000);
  }, [toggleText]);

  return (
    <div
      className="w-full border-r bg-white text-blue-900 flex flex-col "
      style={{ color: "var(--secondary" }}
    >
      <div className="w-full flex justify-center">
        <div className="mt-5 w-20 h-20 object-cover flex border rounded-full items-center justify-center ">
          <img className="w-full h-full object-contain" src={logo} />
        </div>
      </div>

      {/* top box */}

      {/* top box */}
      <div className="mt-32 px-2 text-center flex flex-col border mx-2 rounded-md py-4">
        <div className="mb-2 text-[18px] font-medium">
          Want to publish an Artticle?
          <span className="capitalize">{data?.plan}</span>{" "}
          {payment?.payments?.[0]?.subscriptionPlan}
        </div>
        <div className="flex w-full justify-center">
          {/* <NavLink to="upgrade"> */}

          <Button
            name="Do it from here"
            className="bg-black py-4 font-medium text-white border-none leading-tight"
            onClick={() => {
              onHandleClick();
            }}
            style={{
              background: "var(--gradient)",
            }}
          />

          {/* </NavLink> */}
        </div>
      </div>

      {/* Nav Links */}
      <div className="w-full flex justify-center">
        <div className="transition-all duration-300 text-center text-[12px] font-medium mt-3 w-[90%] ">
          {toggleText ? <div>This Article has been Publish </div> : <div></div>}
        </div>
      </div>

      {/* Settings */}
      <div className="mt-16 px-2 flex flex-col h-[90%]">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "duration-500 transition-all p-2 rounded-sm bg-pink-100 text-black cursor-pointer font-medium my-2 flex items-center justify-between "
              : "duration-500 transition-all p-2 rounded-sm hover:bg-pink-100 hover:text-black cursor-pointer font-medium my-2 flex items-center justify-between "
          }
        >
          Stats
          <MdQueryStats />
        </NavLink>
        <NavLink
          to="/view-clients"
          className={({ isActive }) =>
            isActive
              ? "duration-500 transition-all p-2 rounded-sm bg-pink-100 text-black cursor-pointer font-medium my-2 flex items-center justify-between "
              : "duration-500 transition-all p-2 rounded-sm hover:bg-pink-100 hover:text-black cursor-pointer font-medium my-2 flex items-center justify-between "
          }
        >
          View Users
          <MdPeople />
        </NavLink>
        <NavLink
          to="/booked-studios"
          className={({ isActive }) =>
            isActive
              ? "duration-500 transition-all p-2 rounded-sm bg-pink-100 text-black cursor-pointer font-medium my-2 flex items-center justify-between "
              : "duration-500 transition-all p-2 rounded-sm hover:bg-pink-100 hover:text-black cursor-pointer font-medium my-2 flex items-center justify-between "
          }
        >
          View Booked Appointment
          <FaBarsProgress />
        </NavLink>
        <NavLink
          to="/report-complains"
          className={({ isActive }) =>
            isActive
              ? "duration-500 transition-all p-2 rounded-sm bg-pink-100 text-black cursor-pointer font-medium my-2 flex items-center justify-between "
              : "duration-500 transition-all p-2 rounded-sm hover:bg-pink-100 hover:text-black cursor-pointer font-medium my-2 flex items-center justify-between "
          }
        >
          View Report Cases
          <MdReport />
        </NavLink>

        <div className="flex-1" />

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive
              ? "duration-500 transition-all p-2 rounded-sm bg-pink-100 text-black cursor-pointer font-medium my-2 flex items-center justify-between "
              : "duration-500 transition-all p-2 rounded-sm  flex items-center justify-between hover:bg-pink-100 hover:text-black cursor-pointer font-medium my-2"
          }
        >
          Settings
          <MdSettings />
        </NavLink>
      </div>
    </div>
  );
};

export default Sider;
