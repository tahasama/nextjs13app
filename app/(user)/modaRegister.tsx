import * as Yup from "yup";
import {
  getAuthData,
  loginUser,
  loginUserGithub,
  loginUserGoogle,
  registerUser,
  updateError,
} from "@/app/redux/features/authSlice";

import {
  cleanForm,
  cleanState,
  createProject,
  fetchProjectById,
  fetchProjectByUser,
  getProjectData,
  projectInitialState,
  updateProjectInfos,
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
import {
  barState,
  getSideBarData,
  iseditState,
} from "../redux/features/sideBarSlice";
import { githubProvider, googleProvider } from "../firebase";
import { getBarData, showHideDropdown } from "../redux/features/barSlice";

export default function ModalRegister() {
  const [showModal, setShowModal] = React.useState(false);
  const { dropDown } = useAppSelector(getBarData);

  const displayNameRef = useRef<any>(null);
  const emailRef = useRef<any>(null);
  const passwordRef = useRef<any>(null);
  const passwordConfirmRef = useRef<any>(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { uid, error, message } = useAppSelector(getAuthData);

  if (error.code === "auth/weak-password") {
    dispatch(updateError("Password should be at least 6 characters"));
  } else if (error.code === "auth/email-already-in-use") {
    dispatch(updateError("Email already taken, please add a different one"));
  } else if (error.code === "auth/invalid-email") {
    dispatch(updateError("Please provide a valid email"));
  } else if (error.code === "auth/internal-error") {
    dispatch(updateError("Please provide a valid passwords"));
  } else if (
    error.code === "storage/object-not-found" ||
    error.code === "auth/popup-closed-by-user"
  ) {
    dispatch(updateError(""));
  }
  useEffect(() => {
    uid && (router.push("/profile/" + uid), dispatch(updateError("")));
  }, [uid]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const serializableUser = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      displayName: displayNameRef.current.value,
      // creationTime: new Date(),
      // lastSignInTime: new Date(),

      // other serializable properties
    };
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      dispatch(updateError("Passwords do not match, please try again"));
    } else {
      try {
        dispatch(updateError(""));
        setLoading(true);
        dispatch(registerUser(serializableUser)).then(() =>
          dispatch(showHideDropdown(!dropDown))
        );
        setLoading(false);
      } catch (err) {
        dispatch(updateError("failed to create account, please try again"));
      }
    }
  };
  const LoginGoogle = () => {
    dispatch(
      loginUserGoogle({
        googleProvider: googleProvider,
      })
    ).then(() => dispatch(showHideDropdown(!dropDown)));
  };

  const LoginGithub = () => {
    dispatch(
      loginUserGithub({
        githubProvider: githubProvider,
      })
    ).then(() => dispatch(showHideDropdown(!dropDown)));
  };

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setShowModal(true);
          console.log("ooooooo");
        }}
      >
        Register
      </button>

      {showModal && (
        <div className="closeModal mt-16 backdrop-brightness-50 backdrop-blur-sm -backdrop-hue-rotate-15 text-stone-200 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
          <div className="relative w-[24rem] max-h-screen my-6 mx-2 md:mx-auto max-w-4xl">
            <div className=" border-0 font-semibold px-6 pb-6 bg-gray-900 outline-2  outline-slate-700 rounded-lg relative flex flex-col w-full outline-none focus:outline-none">
              <button
                className="absolute top-0 right-0 p-2 text-gray-400 hover:text-gray-500 focus:outline-none"
                onClick={() => {
                  setShowModal(false);
                  dispatch(showHideDropdown(!dropDown));
                }}
              >
                <AiOutlineCloseCircle size={28} />
              </button>
              {/* <div className="flex flex-col items-center justify-center h-screen bg-gray-950"> */}
              {/* <div className="bg-slate-800 shadow-md rounded-xl px-8 pt-6 pb-8 mb-4 flex flex-col w-full md:w-3/4 lg:w-1/3"> */}
              {/* <h1 className="text-3xl font-semibold mb-6 text-white">Login</h1> */}
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-3 pt-8"
              >
                <div className="flex flex-col">
                  <label
                    className="text-md mb-2 text-white"
                    htmlFor="username_field"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="username_field"
                    className="text-md border border-gray-700 p-2 rounded bg-gray-700 text-white"
                    ref={displayNameRef}
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    className="text-md mb-2 text-white"
                    htmlFor="email_field"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email_field"
                    className="text-md border border-gray-700 p-2 rounded bg-gray-700 text-white"
                    ref={emailRef}
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    className="text-md mb-2 text-white"
                    htmlFor="password_field"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password_field"
                    className="text-md border border-gray-700 p-2 rounded bg-gray-700 text-white"
                    ref={passwordRef}
                  />
                </div>{" "}
                <div className="flex flex-col">
                  <label
                    className="text-md mb-2 text-white"
                    htmlFor="confirm_password_field"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirm_password_field"
                    className="text-md border border-gray-700 p-2 rounded bg-gray-700 text-white"
                    ref={passwordConfirmRef}
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700  text-white font-semibold mt-4 py-2 px-4 rounded w-full"
                >
                  Register
                </button>
                <button
                  type="submit"
                  className="flex items-center bg-orange-800 hover:bg-red-700  text-white font-semibold py-2 px-4 rounded w-full mt-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="ml-1 "
                  >
                    <path
                      d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"
                      fill="white"
                    ></path>
                  </svg>
                  <p className="text-center w-full" onClick={LoginGoogle}>
                    Login With Google
                  </p>
                </button>
                <button
                  type="submit"
                  className="flex items-center bg-cyan-700 hover:bg-cyan-600  text-white font-semibold py-2 px-4 rounded w-full mt-2"
                >
                  <svg
                    style={{ color: "white" }}
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-brand-github"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill=""></path>
                    <path
                      d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
                      fill="white"
                    ></path>{" "}
                  </svg>
                  <p className="text-center w-full" onClick={LoginGithub}>
                    Login With Github
                  </p>
                </button>
                {error && <div className="text-white">{message}</div>}
              </form>
            </div>
          </div>
        </div>
        // </div>
        // </div>
      )}
    </>
  );
}
