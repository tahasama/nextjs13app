import * as Yup from "yup";
import {
  cancelState,
  getAuthData,
  newImage,
  updateUser,
  updateUserInfos,
  uploadImage,
} from "@/app/redux/features/authSlice";
import {
  cleanForm,
  cleanState,
  createProject,
  fetchProjectById,
  fetchProjectByUser,
  getProjectData,
  projectInitialState,
} from "@/app/redux/features/projectSlice";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import React, {
  FormEventHandler,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useRouter, usePathname } from "next/navigation";
import { MdAddCircleOutline } from "react-icons/md";
import { AiFillEdit, AiOutlineCloseCircle } from "react-icons/ai";
import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { barState } from "@/app/redux/features/sideBarSlice";

export default function UploadImage() {
  const [showModal, setShowModal] = React.useState(false);

  const dispatch = useAppDispatch();
  const imageRef = useRef<any>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);

  // const [errorProjectType, setErrorProjectType] = useState("");
  // const [errorTitle, setErrorTitle] = useState("");

  const { displayName, email, uid, bio, github, twitter, insta, image } =
    useAppSelector(getAuthData);
  console.log("🚀 ~ file: modal.tsx:45 ~ ModalUser ~ social:", github);

  const pathname = usePathname();

  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      // Check if click event target is outside of the modal content
      if (event.target.classList.contains("closeModal")) {
        setShowModal(false);
      }
    };

    // Add event listener to window on mount
    window.addEventListener("click", handleOutsideClick);

    // Remove event listener from window on unmount
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const upload = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    if (imageRef.current.files[0] !== undefined) {
      dispatch(uploadImage({ uid: uid, image: imageRef.current.files[0] }));
      const imgUrl = URL.createObjectURL(imageRef.current.files[0]);

      // dispatch(
      //   newUserImage({
      //     userimage: imgUrl,
      //   })
      // );
      dispatch(
        newImage({
          image: imgUrl,
        })
      );

      dispatch(updateUser(image)).then(() => {
        setTimeout(() => {
          setLoading(false), setShowModal(false);
        }, 500);
      });

      dispatch(cancelState({ cancelImage: false }));
    } else {
      setError(true);
      setLoading(false);
      dispatch(cancelState({ cancelImage: true }));
    }
  };

  return (
    <>
      <button
        className={
          pathname.includes("profile")
            ? "absolute top-0 -right-2 text-white bg-blue-950 hover:bg-blue-900 rounded-full font-bold uppercase text-xs md:text-sm p-2 ease-linear transition-all duration-150"
            : ""
        }
        type="button"
        onClick={() => {
          setShowModal(true), setError(false);
        }}
      >
        <AiFillEdit size={28} />
      </button>

      {showModal && (
        <div className="closeModal backdrop-brightness-50 backdrop-blur-sm -backdrop-hue-rotate-15 text-xs md:text-sm text-stone-200 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
          <div className="relative w-[24rem] max-h-screen mx-2 md:mx-auto max-w-4xl">
            <div className=" border-0 font-semibold p-5 bg-gray-900 outline-2 justify-center items-center outline-slate-700 rounded-lg relative flex w-full outline-none focus:outline-none">
              <div className="flex items-center justify-between w-full space-x-4">
                <label
                  htmlFor="file-upload"
                  className="border border-blue-500 text-blue-500 px-4 py-2 rounded cursor-pointer flex-grow text-center"
                >
                  Browse Image
                </label>
                <input
                  id="file-upload"
                  ref={imageRef}
                  type="file"
                  className="hidden"
                />

                <button
                  onClick={upload}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  {!loading ? (
                    <span className="">Upload</span>
                  ) : (
                    <div className="flex w-full items-center justify-center ">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                    </div>
                  )}
                </button>
                <button
                  className=" p-2 text-gray-400 hover:text-gray-500 focus:outline-none"
                  onClick={() => {
                    setShowModal(false), setError(false), setLoading(false);
                  }}
                >
                  <AiOutlineCloseCircle size={28} />
                </button>
              </div>
              {error && (
                <p className="absolute bottom-0 text-red-500">
                  Please add an image before uploading!
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
