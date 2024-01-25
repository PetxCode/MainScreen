import React, { FC } from "react";
import { useUser } from "../../hooks/useUserID";
import { useSingleStudioBookingName } from "../../hooks/useStudio";
import SingleStudioName from "../SingleStudioName";
import pix from "../../assets/pix.jpg";

interface iProps {
  props?: any;
  name?: boolean;
  contact?: boolean;
  image?: boolean;
  owner?: boolean;
  cost?: boolean;
  costData?: number;
}

const UserSingleDataActive: FC<iProps> = ({
  image,
  owner,
  contact,
  cost,
  name,
  props,
  costData,
}) => {
  const { user } = useUser(props?.accountHolderID);

  const { studioNameData } = useSingleStudioBookingName(props?.studioName);

  console.log(studioNameData);

  return (
    <div>
      <div>
        {" "}
        {name && (
          <div>
            {user?.firstName} {user?.lastName}{" "}
          </div>
        )}
      </div>
      <div>
        {image && (
          <img
            className="w-14 h-14 rounded-md border object-cover"
            src={
              studioNameData?.studioImages?.length > 0
                ? studioNameData.studioImages[0]
                : pix
            }
          />
        )}
      </div>
      <div> {contact && <div>{studioNameData?.studioAddress}</div>}</div>
      <div>
        {" "}
        {owner && <div>{<SingleStudioName props={studioNameData} name />}</div>}
        {cost && (
          <div>{<div>{studioNameData?.studioPrice * costData!}</div>}</div>
        )}
      </div>
    </div>
  );
};

export default UserSingleDataActive;
