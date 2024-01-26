import { FaArrowDown, FaBarsProgress } from "react-icons/fa6";
import pic from "../../assets/Kola-2b.jpg";
import { useDispatch, useSelector } from "react-redux";
import { changeToggle, changeToggleMenu } from "../../global/reduxState";
import SmallPiece from "./SmallPiece";
import {
  MdClose,
  MdLibraryBooks,
  MdMenu,
  MdPeople,
  MdQueryStats,
  MdReport,
} from "react-icons/md";

const Header = () => {
  const dispatch = useDispatch();
  const toggle = useSelector((state: any) => state.toggle);
  const toggleMenu = useSelector((state: any) => state.toggleMenu);

  const handleToggleMenu = () => {
    if (!document.startViewTransition) {
      dispatch(changeToggleMenu());
    } else {
      document.startViewTransition(() => {
        dispatch(changeToggleMenu());
      });
    }
  };

  return (
    <div
      className="h-[50px] bg-pink-50 border-b w-full flex justify-center items-center  z-10 fixed top-0 left-0"
      onClick={() => {}}
    >
      <div className="flex items-center  justify-end w-[90%]">
        <div
          className="flex items-center px-2 py-1 border rounded-full gap-3 duration-300 transition-all cursor-pointer z-10 bg-white shadow-sm"
          onClick={() => {
            dispatch(changeToggle());
          }}
        >
          <img className="w-8 h-8 rounded-full border object-cover" src={pic} />

          {toggle ? (
            <FaArrowDown className="rotate-180 duration-300 transition-all" />
          ) : (
            <FaArrowDown className="rotate-0 duration-300 transition-all" />
          )}
        </div>

        <div className=" md:hidden text-[30px] cursor-pointer ml-3  duration-300 transition-all">
          {toggleMenu ? (
            <MdClose
              className="duration-500 transition-all"
              onClick={handleToggleMenu}
            />
          ) : (
            <MdMenu
              className="duration-500 transition-all"
              onClick={handleToggleMenu}
            />
          )}
        </div>
      </div>

      <div
        className={`absolute duration-300 transition-all ${
          toggle ? "right-6 top-14  " : "right-6 -top-36  "
        }`}
      >
        {/* <SmallPiece
          name={[
            { title: "Account", icon: <MdAccountCircle />, to: "settings" },
          ]}
          log
        /> */}
      </div>

      {toggleMenu && (
        <div
          className={` md:hidden absolute duration-300 transition-all ${
            toggleMenu ? "right-6 top-14  " : "right-6 -top-24  "
          }`}
        >
          <SmallPiece
            name={[
              {
                title: "Stats",
                icon: <MdQueryStats />,
                to: "/",
              },
              {
                title: "View Clients",
                icon: <MdPeople />,
                to: "view-clients",
              },
              {
                title: "View Booked Studios",
                icon: <FaBarsProgress />,
                to: "booked-studios",
              },
              {
                title: "View Booked Cases",
                icon: <MdReport />,
                to: "report-complains",
              },
              {
                title: "View Articles",
                icon: <MdLibraryBooks />,
                to: "articles",
              },
            ]}
            but
          />
        </div>
      )}
    </div>
  );
};

export default Header;
