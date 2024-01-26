import {
  changeMemberState,
  changeToggle,
  changeToggleMenuToFalse,
  logoutState,
} from "../../global/reduxState";
import { useDispatch } from "react-redux";
import { MdLogout } from "react-icons/md";
import { FC, ReactNode, useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../reUse/Button";
import { IoMdImages } from "react-icons/io";

interface iData {
  title?: string;
  icon?: ReactNode;
  to?: string;
  onClick?: () => void;
}
interface iProps {
  name?: iData[];

  log?: boolean;
  but?: boolean;
}

const SmallPiece: FC<iProps> = ({ log, name, but }) => {
  const dispatch = useDispatch();

  const handleToggleMenuFalse = () => {
    if (!document.startViewTransition) {
      dispatch(changeToggleMenuToFalse());
      dispatch(changeToggleMenuToFalse());
    } else {
      document.startViewTransition(() => {
        dispatch(changeToggleMenuToFalse());
        dispatch(changeMemberState());
      });
    }
  };

  const onHandleClick = () => {
    if (!document.startViewTransition) {
      dispatch(changeMemberState());
      dispatch(changeToggleMenuToFalse());
    } else {
      document.startViewTransition(() => {
        dispatch(changeMemberState());
        dispatch(changeToggleMenuToFalse());
      });
    }
  };

  const [state, setState] = useState<string>("");

  const changeImage = (e: any) => {
    const file = e.target.files[0];

    const formData: any = new FormData();
    formData.append("avatar", file);
    setState(file);
    console.log(state);

    if (state) {
      const timer = setTimeout(() => {
        clearTimeout(timer);
      }, 1000);
    }

    dispatch(changeToggle());
  };

  return (
    <div className="border w-[250px] bg-pink-50 shadow-md min-h-10 rounded-md p-1 ">
      <div className="flex flex-col items-between w-full">
        {name?.map(({ title, icon, to }, i: number) => (
          <NavLink
            key={i}
            to={`${to}`}
            className="w-full
          "
            onClick={handleToggleMenuFalse}
          >
            <div className="text-[12px] w-full font-medium  duration-300 transition-all hover:bg-[#870631] p-2 py-4 rounded-md my-1 hover:text-white cursor-pointer flex items-center justify-between">
              <div>{title}</div>
              <div className="text-[17px]">{icon}</div>
            </div>
          </NavLink>
        ))}
      </div>

      {but && (
        <div className="w-full flex justify-center mt-3">
          <Button
            onClick={onHandleClick}
            name="Publish an Article"
            className="text-[12px] py-4 uppercase font-bold bg-blue-950 text-white rounded-md"
            style={{ background: "var(--gradient)" }}
          />
        </div>
      )}

      {log && (
        <div
          className="text-[12px] font-medium  duration-300 transition-all hover:bg-blue-950 p-2 rounded-md my-1 hover:text-white cursor-pointer flex items-center justify-between"
          onClick={() => {
            // dispatch(logoutState());
            dispatch(changeToggle());
          }}
        >
          <label htmlFor="id">Upload Avatar</label>
          <input
            id="id"
            className="hidden"
            onChange={changeImage}
            type="file"
          />
          <div>
            <IoMdImages size={17} />
          </div>
        </div>
      )}

      {log && (
        <div
          className="text-[12px] font-medium  duration-300 transition-all hover:bg-blue-950 p-2 rounded-md my-1 hover:text-white cursor-pointer flex items-center justify-between"
          onClick={() => {
            dispatch(logoutState());

            dispatch(changeToggle());
          }}
        >
          <div>Log-out</div>
          <div>
            <MdLogout size={17} />
          </div>
        </div>
      )}
    </div>
  );
};

export default SmallPiece;
