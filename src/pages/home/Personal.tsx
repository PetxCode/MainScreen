import { FC } from "react";
import { useUser } from "../../hooks/useUserID";
import { useAllClients, useAllStudios } from "../../hooks/useStudio";

export interface iProps {
  props: any;
}

const Personal: FC<iProps> = ({ props }) => {
  const { user: otherUser }: any = useUser(props);
  const { data } = useAllClients();
  const { data: studio } = useAllStudios();

  const myObject: any = {
    key1: otherUser?.email,
    key2: otherUser?.lastName,
    key3: otherUser?.firstName,
    key4: otherUser?.avatar,
    key5: otherUser?.phoneNumber,
  };

  let counter = 0;

  for (const key in myObject) {
    if (myObject[key]) {
      counter++;
    }
  }

  return (
    <div>
      {/* data bar */}
      <p className="mb-2 " style={{ color: "var(--secondary)" }}>
        <span className="font-bold text-[12px] ">
          Business Profile and Counts
        </span>
        <div className="grid grid-cols-2 gap-3 mt-2">
          <div className="border rounded-md min-h-[100px] p-4">
            <p className="font-bold">Total Clients Registered:</p>

            <h1 className="text-[40px] font-medium">{data?.length}</h1>
          </div>

          <div className="border rounded-md min-h-[100px] p-4">
            <p className="font-bold">Total Studio Registered:</p>

            <h1 className="text-[40px] font-medium">{studio?.length}</h1>
          </div>
          <div className="border rounded-md min-h-[100px] p-4">
            <p className="font-bold">Studios Booked for January:</p>

            <h1 className="text-[40px] font-medium">{studio?.length}</h1>
          </div>
          <div className="border rounded-md min-h-[100px] p-4">
            <p className="font-bold">Total Revenue for March:</p>

            <h1 className="text-[40px] font-medium">₦300,000</h1>
          </div>

          <div className="border rounded-md min-h-[100px] p-4 col-span-2">
            <p className="font-bold ">Total Studio Complains:</p>

            <h1 className="text-[40px] font-medium">{studio?.length}</h1>
          </div>
        </div>
      </p>
    </div>
  );
};

export default Personal;
