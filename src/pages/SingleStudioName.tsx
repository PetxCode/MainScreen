import { FC } from "react";
import { useUser } from "../hooks/useUserID";

interface iProps {
  props?: any;
  name?: boolean;
  image?: boolean;
}

const SingleStudioName: FC<iProps> = ({ name, props }) => {
  const { user } = useUser(props?.accountHolderID);

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

export default SingleStudioName;
