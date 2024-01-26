import { FC } from "react";
import { useSingleStudioBookings } from "../hooks/useStudio";
import pix from "../assets/logo.png";
import SingleStudioName from "./SingleStudioName";

interface iProp {
  props?: any;
  name?: boolean;
  image?: boolean;
  studioName?: boolean;
  cost?: boolean;
  date?: boolean;
}
const SingleStudioData: FC<iProp> = ({
  props,
  studioName,
  name,
  image,
  cost,
  date,
}) => {
  const { studio } = useSingleStudioBookings(props?.studioID);

  return (
    <div>
      <div>{name && <div>{studio?.studioName}</div>}</div>
      <div>
        {studioName && <div>{<SingleStudioName props={studio} name />}</div>}
      </div>
      <div>{cost && <div>{studio.costudioPricest}</div>}</div>
      <div>{date && <div>{studio.date}</div>}</div>
      <div>
        {image && (
          <img
            className="w-14 h-14 rounded-md border object-cover"
            src={
              studio?.studioImages?.length > 0 ? studio.studioImages[0] : pix
            }
          />
        )}
      </div>
    </div>
  );
};

export default SingleStudioData;
