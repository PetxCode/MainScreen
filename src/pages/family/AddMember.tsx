import { useState } from "react";
import Button from "../../components/reUse/Button";
import Input from "../../components/reUse/Input";
import { useDispatch } from "react-redux";
import { changeMemberState, changeToggleText } from "../../global/reduxState";
import ClipLoader from "react-spinners/ClipLoader";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { FaRegImages } from "react-icons/fa6";
import { createArticleAPI } from "../../api/studioAPI/studioAPI";

const AddMember = () => {
  document.title = "Create Article";

  const dispatch = useDispatch();
  const [articleTitle, setArticleTitle] = useState<string>("");
  const [articleDescription, setArticleDescription] = useState<string>("");

  const [articleContent, setArticleContent] = useState("");
  const [image, setImage] = useState("");
  const [imageFile, setImageFile] = useState("");

  const [loading, setLoading] = useState<boolean>(false);

  const onHandleClick = () => {
    if (!document.startViewTransition) {
      dispatch(changeMemberState());
    } else {
      document.startViewTransition(() => {
        dispatch(changeMemberState());
      });
    }
  };

  var toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ["clean"], // remove formatting button
  ];

  const module = {
    toolbar: toolbarOptions,
  };

  const handleImage = (e: any) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
    setImageFile(file);
  };

  const onHandleSubmission = () => {
    if (articleTitle !== "" && articleDescription !== "" && imageFile !== "") {
      if (!document.startViewTransition) {
        console.log("cliked: ");

        const formData = new FormData();
        formData.append("articleTitle", articleTitle);
        formData.append("articleDescription", articleDescription);
        formData.append("articleContent", articleContent);
        formData.append("articleImage", imageFile);

        createArticleAPI(formData).then((res) => {
          console.log(res);
          onHandleClick();
          setLoading(true);
        });

        dispatch(changeToggleText(true));
      } else {
        console.log("cliked: ");
        document.startViewTransition(() => {
          const formData = new FormData();
          formData.append("articleTitle", articleTitle);
          formData.append("articleDescription", articleDescription);
          formData.append("articleContent", articleContent);
          formData.append("articleImage", imageFile);

          createArticleAPI(formData).then((res) => {
            console.log(res);
            onHandleClick();
            setLoading(true);
          });
          dispatch(changeToggleText(true));
        });
      }
    }
  };

  return (
    <div className="flex flex-col w-full items-center mt-20 ">
      <div className="rounded-md bg-white min-h-[300px]  md:w-[80%] lg:w-[60%] border p-4">
        <div className="grid grid-cols-7 gap-8 mb-2">
          <div className="col-span-2 border h-[200px] rounded-md flex justify-center items-center">
            {image ? (
              <div className="w-full h-full ">
                <img
                  src={image}
                  className="w-full h-full object-cover border overflow-hidden"
                />
              </div>
            ) : (
              <label
                htmlFor="pix"
                className="animate-pulse  flex flex-col justify-center items-center w-full h-full group"
              >
                <FaRegImages />
                <label className="mt-2 group-hover: p-2">Upload Image</label>
                <input
                  className="hidden"
                  id="pix"
                  // value={image}
                  onChange={handleImage}
                  type="file"
                />
              </label>
            )}
          </div>
          <div className="w-full flex flex-col col-span-5">
            <Input
              placeholder="Article Title"
              className="w-[97%]"
              type="text"
              required
              value={articleTitle}
              onChange={(e: any) => {
                setArticleTitle(e.target.value);
              }}
            />
            <Input
              placeholder="Brift Description"
              className="w-[97%] my-0"
              //   show
              //   errorText="Password has to be passed"
              errorText={
                articleDescription &&
                "Adding a description that brifely describe this Article..."
              }
              required
              value={articleDescription}
              onChange={(e: any) => {
                setArticleDescription(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="mb-28 w-[99%] flex justify-center pl-0">
          <ReactQuill
            modules={module}
            theme="snow"
            value={articleContent}
            onChange={setArticleContent}
            style={{ height: "300px" }}
          />
        </div>

        <div>
          <Button
            name="Add Article"
            className="w-[97%] mt-12 bg-blue-950 text-white h-14 hover:bg-blue-900 transition-all duration-300"
            type="submit"
            onClick={onHandleSubmission}
            icon={loading && <ClipLoader color="white" size={18} />}
            style={{ background: "var(--gradient)" }}
          />
        </div>
        <div className="mt-10 mb-0 ml-2 text-[13px] font-medium ">
          You are about to add an Article to help Clients use the Platform
          Better
        </div>
      </div>
    </div>
  );
};

export default AddMember;
