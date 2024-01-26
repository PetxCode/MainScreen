import { FC } from "react";
import { Link } from "react-router-dom";
import LittleHeader from "../../components/layout/LittleHeader";
import { useReadArticle } from "../../hooks/useStudio";

const SettingScreen: FC = () => {
  document.title = "Viewing Articles";
  const { article } = useReadArticle();

  return (
    <div className=" min-h-[82vh] text-blue-950">
      <LittleHeader name={document.title} />

      <div className="w-full m-auto py-8 my-4 flex gap-24 max-lg:block max-md:pt-1">
        {/* profile Account Detail */}
        <div>
          <div className="font-bold text-[30px] text-blue-950 ">
            Stories we've written
          </div>

          <div className="text-[13px]">
            Constantly write Article to encourage and image user engaement{" "}
          </div>
        </div>
      </div>

      {/* profile Account Detail Card */}

      <div
        className=" grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 w-full gap-2
      "
      >
        {article?.map((props: any) => (
          <Link
            to={`/article/${props?._id}`}
            className="border rounded-md"
            key={props._id}
          >
            <img
              src={props?.articleImage}
              className="w-full object-cover border h-[250px] overflow-hidden rounded-t-md"
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
