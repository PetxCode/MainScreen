import React, { FC } from "react";
import pix from "../../../assets/logo.png";
import { useSingleStudioBookings } from "../../../hooks/useStudio";
import SingleStudioName from "../../SingleStudioName";

interface iProp {
  props?: any;
  name?: boolean;
  image?: boolean;
  studioName?: boolean;
  cost?: boolean;
  date?: boolean;
}
const GetSingleStudioData: FC<iProp> = ({
  props,
  studioName,
  name,
  image,
  cost,
  date,
}) => {
  const { studio } = useSingleStudioBookings(props);
  console.log(props);
  console.log(studio);
  return (
    <div>
      <div>
        {
          <img
            className="w-full h-[200px] rounded-md border object-cover"
            src={
              studio?.studioImages?.length > 0 ? studio.studioImages[0] : pix
            }
          />
        }
      </div>
      <div className="text-[12px] p-2">
        <div>
          Studio Name: <span className="font-medium">{studio?.studioName}</span>
        </div>
        <div>
          {" "}
          Studio Price:
          <span className="font-medium">
            {" "}
            ₦{studio?.studioPrice.toLocaleString()}
          </span>
        </div>
        <div>
          {" "}
          Has been Booked:
          <span className="font-medium"> {studio?.history.length}</span>
        </div>
        <div>
          {" "}
          Total Reviewed:
          <span className="font-medium"> {studio?.studioReview.length}</span>
        </div>
        <div className="flex w-full justify-end">
          {" "}
          rate:
          <span className="font-medium"> {studio?.studioRate}</span>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default GetSingleStudioData;