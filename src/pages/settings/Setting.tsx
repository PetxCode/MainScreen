import { FC } from "react";
import { Link } from "react-router-dom";
import { RiPagesLine } from "react-icons/ri";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";
import LittleHeader from "../../components/layout/LittleHeader";

const SettingScreen: FC = () => {
  document.title = "Viewing Articles";
  const {} = use;

  return (
    <div className=" min-h-[82vh] text-blue-950">
      <LittleHeader name={document.title} />

      <div className="w-full m-auto py-8 my-4 flex gap-24 max-lg:block max-md:pt-1">
        {/* profile Account Detail */}
        <div>
          <div className="font-bold text-[30px] text-blue-950 ">
            Main Settings Page
          </div>

          <div className="text-[13px]">
            `` &middot;
            <strong className="font-[600] mr-1">
              {"data?.firstName"} {"data?.lastName"} &middot;
            </strong>
            {"data?.email"} &middot;{" "}
            <Link
              to="/"
              className="underline text-black font-[400] hover:text-black "
            >
              <span>go back home</span>
            </Link>
          </div>
        </div>
      </div>

      {/* profile Account Detail Card */}

      <div
        className="my-6 text-blue-950 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 transition-all duration-300 lg:[&>*:nth-child(3)]:col-span-2 xl:[&>*:nth-child(3)]:col-span-1
      "
      >
        {articles?.map((props: any, i: number) => (
          <Link
            to={`/article/${props?._id}`}
            className="border rounded-md"
            key={props._id}
          >
            <img
              src={props?.articleImage}
              className="min-w-[300px] object-cover border h-[250px] overflow-hidden rounded-t-md"
            />
            <div className="p-3 font-medium">{props?.articleTitle}</div>
          </Link>
        ))}
      </div>

      <div className="flex-1 " />
    </div>
  );
};

export default SettingScreen;
