import { FC, PropsWithChildren, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const PrivateRouter: FC<PropsWithChildren> = ({ children }) => {
  const user = useSelector((state: any) => state.user);
  const [state] = useState();
  const [userData, setUserData] = useState();
  const [read, setRead] = useState<boolean>();

  useEffect(() => {
    const token: any = jwtDecode(user!);
    setUserData(token.id);

    setRead(userData === state);
  }, [userData, state]);

  return (
    <div>
      {user! ? (
        <div>{read! && <div>{children} </div>}</div>
      ) : (
        <Navigate to="/login" />
      )}
    </div>
  );
};

export default PrivateRouter;
