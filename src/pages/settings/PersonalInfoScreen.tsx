import { useState } from "react";
import Input from "../../components/reUse/Input";
import Button from "../../components/reUse/Button";
import { MdSave } from "react-icons/md";
import BeatLoader from "react-spinners/ClipLoader";

const PersonalInfoScreen = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const [toggle, setToggle] = useState<boolean>(false);
  const [toggle1, setToggle1] = useState<boolean>(false);
  const [toggle2, setToggle2] = useState<boolean>(false);

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  const [phone, setPhone] = useState<string>("");

  const onToggle = () => {
    if (!document.startViewTransition) {
      setToggle(!toggle);
    } else {
      document.startViewTransition(() => {
        setToggle(!toggle);
      });
    }
  };

  const onToggle1 = () => {
    if (!document.startViewTransition) {
      setToggle1(!toggle1);
    } else {
      document.startViewTransition(() => {
        setToggle1(!toggle1);
      });
    }
  };

  const onToggle2 = () => {
    if (!document.startViewTransition) {
      setToggle2(!toggle2);
    } else {
      document.startViewTransition(() => {
        setToggle2(!toggle2);
      });
    }
  };
  return (
    <div className=" grid col-span-3 pr-0 h-[100px] text-blue-950 ">
      {/* forms */}
      <div>
        <div className="flex w-[100%] justify-between h-[100px] relative ">
          {" "}
          <div>
            <div>Legal Name</div>
            <div></div>
          </div>
          <div
            className="text-[12px] underline font-[500] hover:cursor-pointer  ml-10"
            onClick={onToggle}
          >
            Change
          </div>
        </div>
        {toggle && (
          <div
            className="absolute left:0 sm:left-[0px] md:left-[260px] top-56 h-[200px] w-[95%] sm:w-[46%] bg-blue-500 py-4 z-10"
            style={{
              background: "rgba(252, 254, 255, 0.25)",
              backdropFilter: " blur( 4px )",
            }}
          >
            <div className="z-20">
              <div className="flex w-full">
                <Input
                  className="flex-1 mr-1 placeholder:text-gray-400 "
                  placeholder="Enter First Name"
                  value={firstName}
                  onChange={(e: any) => {
                    setFirstName(e.target.value);
                  }}
                />
                <Input
                  className="flex-1 ml-1"
                  placeholder="Enter Last Name "
                  value={lastName}
                  onChange={(e: any) => {
                    setLastName(e.target.value);
                  }}
                />
              </div>
              <div>
                <Button
                  name={`${loading ? " Loading" : "save"}`}
                  icon={
                    loading ? (
                      <BeatLoader
                        color={"color"}
                        size={18}
                        className="mb-[0.12rem]"
                      />
                    ) : (
                      <MdSave />
                    )
                  }
                  className={` bg-blue-950 transition-all duration-300 ${
                    loading && "h-12"
                  }`}
                  onClick={() => {
                    setLoading(true);
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* forms */}
      <div>
        <div className="flex w-full justify-between h-[100px] relative ">
          {" "}
          <div>
            <div>Email address</div>
            <div className="text-[12px] leading-4 text-[gray] mb-4 ">
              Use an address you’ll always have access to.
            </div>
            <div className="font-[400] mt-3">
              {toggle1 ? <div></div> : <div></div>}
            </div>
          </div>
          <div
            className="text-[12px] underline font-[500] hover:cursor-pointer "
            onClick={onToggle1}
          >
            View
          </div>
        </div>
      </div>

      {/* forms */}
      <div>
        <div className="flex w-full justify-between h-[100px] relative mt-10 ">
          {" "}
          <div>
            <div>Phone numbers</div>
            <div className="text-[12px] leading-4 text-[gray] mb-4 mr-8 ">
              Add a your contact phone Number:
            </div>
            <div>
              <div className="font-[400] mt-3">
                {toggle2 ? (
                  <div></div>
                ) : (
                  <div>
                    <div>No phone contact yet</div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div
            className="text-[12px] underline font-[500] hover:cursor-pointer "
            onClick={onToggle2}
          >
            Change
          </div>
        </div>
        {toggle2 && (
          <div
            className="absolute left:0 sm:left-[0px] md:left-[260px] top-[460px] h-[200px] w-[95%] sm:w-[45%]   bg-blue-500 py-4 z-10"
            style={{
              background: "rgba(255, 255, 255, 0.25)",
              backdropFilter: " blur( 4px )",
            }}
          >
            <div className="z-20">
              <div className="flex w-full">
                <Input
                  className="flex-1 mr-1 placeholder:text-gray-400 "
                  placeholder="Enter your contact mobile number "
                  value={phone}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setPhone(e.target.value);
                  }}
                />
              </div>

              <div className="w-[200px] mt-3">
                <Button
                  name={`${loading ? " Loading" : "save"}`}
                  icon={
                    loading ? (
                      <BeatLoader
                        color={"color"}
                        size={18}
                        className="mb-[0.12rem]"
                      />
                    ) : (
                      <MdSave />
                    )
                  }
                  className={` bg-blue-950 transition-all duration-300 ${
                    loading && "h-12"
                  }`}
                  onClick={() => {
                    setLoading(true);
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonalInfoScreen;
