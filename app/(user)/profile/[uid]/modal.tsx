import * as Yup from "yup";
import {
  getAuthData,
  updateUser,
  updateUserInfos,
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
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { barState } from "@/app/redux/features/sideBarSlice";

export default function ModalUser() {
  const router = useRouter();
  const projectTypeRef = useRef<any>(null);
  const [showModal, setShowModal] = React.useState(false);
  const nameRef = useRef<any>(null);
  const twitterRef = useRef<any>(null);
  const instaRef = useRef<any>(null);
  const githubRef = useRef<any>(null);
  const bioRef = useRef<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  // const [errorProjectType, setErrorProjectType] = useState("");
  // const [errorTitle, setErrorTitle] = useState("");

  const { displayName, email, uid, social, bio } = useAppSelector(getAuthData);

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

  const handleUpdateUser: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setLoading(true);
    const serializableProject = {
      user: { uid: uid, displayName: nameRef.current.value },
      bio: bio,
    };
    dispatch(updateUser(serializableProject)).then(() => {
      setLoading(false), setShowModal(false), barState(false);
    });
  };

  // const schema = Yup.object().shape({
  //   title: Yup.string().required("Please add a project name!!!!!"),
  //   projectType: Yup.string().required("Please choose a project projectType!"),
  // });

  return (
    <>
      <button
        className={
          pathname.includes("profile")
            ? "bg-blue-900 text-white hover:bg-blue-950 font-bold uppercase text-sm px-8 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            : ""
        }
        type="button"
        onClick={() => setShowModal(true)}
      >
        Edit Profile
      </button>

      {showModal && (
        <div className="closeModal backdrop-brightness-50 backdrop-blur-sm -backdrop-hue-rotate-15  text-stone-200 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
          <div className="relative w-[24rem] max-h-screen my-6 mx-auto max-w-4xl">
            <div className="mt-16 border-0 font-semibold px-6 pb-6 bg-gray-900 outline-2  outline-slate-700 rounded-lg relative flex flex-col w-full outline-none focus:outline-none">
              <button
                className="absolute top-0 right-0 p-2 text-gray-400 hover:text-gray-500 focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <AiOutlineCloseCircle size={28} />
              </button>
              <form
                onSubmit={handleUpdateUser}
                className="flex flex-col gap-3 mt-10 "
              >
                <header>
                  <h4>User name:</h4>
                </header>
                <footer className="">
                  <input
                    className="createInput border bg-slate-200 rounded w-full h-9 px-1 text-gray-900 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    ref={nameRef}
                    value={displayName ? displayName : email}
                    onChange={() =>
                      dispatch(
                        updateUserInfos({ displayName: nameRef.current?.value })
                      )
                    }
                  />
                </footer>
                <header className="modalHeader">
                  <h4 className="modalHeaderTitle">bio:</h4>
                </header>
                <textarea
                  className="createInput border bg-slate-200  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  rows={6}
                  ref={bioRef}
                  value={bio}
                  onChange={() =>
                    dispatch(
                      updateUserInfos({
                        bio: bioRef.current?.value,
                      })
                    )
                  }
                />

                <div className="flex w-full gap-2">
                  <FaGithub size={28} />
                  <div className="border   rounded w-full h-9  text-gray-900 leading-tight focus:outline-none focus:shadow-outline">
                    <input
                      className="createInput border  bg-slate-200 w-full h-full p-2 "
                      type="text"
                      ref={githubRef}
                      value={social?.github}
                      onChange={() =>
                        dispatch(
                          updateUserInfos({
                            github: githubRef.current?.value,
                          })
                        )
                      }
                    />
                  </div>{" "}
                </div>
                <div className="flex w-full gap-2 items-center">
                  <FaTwitter size={28} />
                  <div className="border   rounded w-full h-9  text-gray-900 leading-tight focus:outline-none focus:shadow-outline">
                    <input
                      className="createInput border  bg-slate-200 w-full h-full p-2 "
                      type="text"
                      ref={twitterRef}
                      value={social?.twitter}
                      onChange={() =>
                        dispatch(
                          updateUserInfos({
                            twitter: twitterRef.current?.value,
                          })
                        )
                      }
                    />
                  </div>{" "}
                </div>
                <div className="flex w-full gap-2">
                  <FaInstagram size={28} />
                  <div className="border   rounded w-full h-9  text-gray-900 leading-tight focus:outline-none focus:shadow-outline">
                    <input
                      className="createInput border text-black bg-slate-200 w-full h-full p-2 "
                      type="text"
                      ref={instaRef}
                      value={social?.insta}
                      onChange={() =>
                        dispatch(
                          updateUserInfos({ insta: instaRef.current?.value })
                        )
                      }
                    />
                  </div>{" "}
                </div>
                <button
                  className="createButton bg-blue-500 mb-4 mt-1 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  type="submit"
                >
                  {!loading ? (
                    "Update Profile"
                  ) : (
                    <div className="flex w-full items-center justify-center">
                      <svg
                        aria-hidden="true"
                        className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
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
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
