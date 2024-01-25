import { FC } from "react";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { useNavigate, useParams } from "react-router-dom";

interface iProps {
  name?: string;
}

const LittleHeader: FC<iProps> = ({ name }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <div>
      {" "}
      <div className="flex items-center " style={{ color: "var(--secondary)" }}>
        Account <LiaGreaterThanSolid size={13} className="mx-4 " />{" "}
        <div className="capitalize">{name}</div>{" "}
        {id && (
          <span className="flex items-center">
            {" "}
            <LiaGreaterThanSolid size={13} className="mx-4 " />
            <span
              className="underline cursor-pointer"
              onClick={() => {
                navigate(-1);
              }}
            >
              Go Back
            </span>
          </span>
        )}
      </div>
      <div className=" mt-5 font-[500] text-[30px] mb-10 capitalize">
        {name}
      </div>
    </div>
  );
};

export default LittleHeader;
