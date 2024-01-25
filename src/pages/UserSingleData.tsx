import React, { FC } from "react";
import { useUser } from "../hooks/useUserID";

interface iProps {
  props?: any;
  name?: boolean;
  image?: boolean;
}

const UserSingleData: FC<iProps> = ({ name, props }) => {
  const { user } = useUser(props?.accountID);

  return (
    <div>
      {name && (
        <div>
          {user?.firstName} {user?.lastName}{" "}
        </div>
      )}
    </div>
  );
};

export default UserSingleData;
