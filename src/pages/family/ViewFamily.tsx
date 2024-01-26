import LittleHeader from "../../components/layout/LittleHeader";

const ViewFamily = () => {
  document.title = "View Family";

  return (
    <div>
      <LittleHeader name={document.title} />
      <div className="flex flex-wrap justify-center"></div>
    </div>
  );
};

export default ViewFamily;
