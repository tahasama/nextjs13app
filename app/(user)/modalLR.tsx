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

import { githubProvider, googleProvider } from "../firebase";
import { getBarData, showHideDropdown } from "../redux/features/barSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getSideBarData } from "../redux/features/sideBarSlice";
import {
  getAuthData,
  loginUser,
  loginUserGithub,
  loginUserGoogle,
  registerUser,
  resetPassword,
  updateError,
} from "../redux/features/authSlice";

export default function Modal({
  initialMode,
}: {
  initialMode: "login" | "register" | "forgotPassword";
}) {
  const { dropDown } = useAppSelector(getBarData);
  const [showModal, setShowModal] = React.useState(false);
  const [mode, setMode] = React.useState(initialMode); // Default mode is "login"
  const dispatch = useAppDispatch();
  const { displayName, email, error, uid, message } =
    useAppSelector(getAuthData);
  const { newP, isedit } = useAppSelector(getSideBarData);

  const emailRef = useRef<any>(null);
  const passwordRef = useRef<any>(null);
  const displayNameRef = useRef<any>(null);
  const passwordConfirmRef = useRef<any>(null);
  const resetEmailRef = useRef<any>(null);

  // Reset error message when mode changes
  useEffect(() => {
    dispatch(updateError(""));
  }, [mode]);

  const handleLogin = async (e: any) => {
    e.preventDefault();
    const serializableUser = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      // other serializable properties
    };
    try {
      dispatch(updateError(""));
      dispatch(loginUser(serializableUser)).then(() =>
        dispatch(showHideDropdown(!dropDown))
      );
    } catch (err) {
      dispatch(updateError("Failed to login, please try again"));
    }
  };

  const handleRegister = async (e: any) => {
    e.preventDefault();
    const serializableUser = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      displayName: displayNameRef.current.value,
    };
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      dispatch(updateError("Passwords do not match, please try again"));
    } else {
      try {
        dispatch(updateError(""));
        dispatch(registerUser(serializableUser)).then(() =>
          dispatch(showHideDropdown(!dropDown))
        );
      } catch (err) {
        dispatch(updateError("Failed to create account, please try again"));
      }
    }
  };

  const handleResetPassword = async (e: any) => {
    e.preventDefault();
    try {
      dispatch(updateError(""));
      dispatch(resetPassword(resetEmailRef.current.value));
      // Reset form
      resetEmailRef.current.value = "";
      // Close modal
      setShowModal(false);
      dispatch(showHideDropdown(false));
    } catch (err) {
      dispatch(updateError("Failed to reset password, please try again"));
    }
  };

  const handleSwitchMode = () => {
    setMode((prevMode) => (prevMode === "login" ? "register" : "login"));
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

  const closeModal = () => {
    setShowModal(false);
    dispatch(showHideDropdown(false));
  };

  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      // Check if click event target is outside of the modal content
      if (event.target.classList.contains("closeModal")) {
        closeModal();
      }
    };

    // Add event listener to window on mount
    window.addEventListener("click", handleOutsideClick);

    // Remove event listener from window on unmount
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [showModal]);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setShowModal(true);
        }}
      >
        {mode === "login" ? "Login" : "Register"}
      </button>

      {showModal && (
        <div className="closeModal mt-16 backdrop-brightness-50 backdrop-blur-sm -backdrop-hue-rotate-15 text-stone-200 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
          <div className="relative w-[24rem] max-h-screen my-6 mx-2 md:mx-auto max-w-4xl">
            <div className="border-0 font-semibold px-6 pb-6 bg-gray-900 outline-2 outline-slate-700 rounded-lg relative flex flex-col w-full outline-none focus:outline-none">
              <button
                className="absolute top-0 right-0 p-2 text-gray-400 hover:text-gray-500 focus:outline-none"
                onClick={closeModal}
              >
                <AiOutlineCloseCircle size={28} />
              </button>
              {mode === "login" && (
                <form
                  onSubmit={handleLogin}
                  className="flex flex-col space-y-4 pt-8"
                >
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
                      className="text-lg border border-gray-700 p-1 rounded bg-gray-700 text-white"
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
                      className="text-lg border border-gray-700 p-1 rounded bg-gray-700 text-white"
                      ref={passwordRef}
                    />
                  </div>
                  <span className="my-0 py-0"></span>
                  <button
                    type="submit"
                    className="flex bg-blue-700 top-2 hover:bg-blue-600 text-white font-bold  py-2 px-4 rounded w-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75m-0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                    <p className="text-center w-full">
                      {mode === "login" ? "Login" : "Register"}
                    </p>
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
                        d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 199-2.431H8v-3.08h7.545z"
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
                  <p className="text-center mt-3 bg-gray-700 rounded-md hover:bg-gray-600 mx-12 py-2">
                    Forgot Password?
                  </p>
                </form>
              )}

              {mode === "register" && (
                <form
                  onSubmit={handleRegister}
                  className="flex flex-col gap-2 pt-8"
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
                      className="text-md border border-gray-700 p-1 rounded bg-gray-700 text-white"
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
                      className="text-lg border border-gray-700 p-1 rounded bg-gray-700 text-white"
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
                      className="text-lg border border-gray-700 p-1 rounded bg-gray-700 text-white"
                      ref={passwordRef}
                    />
                  </div>
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
                      className="text-lg border border-gray-700 p-1 rounded bg-gray-700 text-white"
                      ref={passwordConfirmRef}
                    />
                  </div>
                  <span className="my-0 py-0"></span>

                  <button
                    type="submit"
                    className="flex bg-blue-700 hover:bg-blue-600 text-white font-bold py-1.5 px-4 rounded w-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                    <p className="text-center w-full">Register</p>
                  </button>

                  <button
                    type="submit"
                    className="flex items-center bg-orange-800 hover:bg-red-700  text-white font-semibold py-1.5 px-4 rounded w-full mt-2"
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
                        d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 199-2.431H8v-3.08h7.545z"
                        fill="white"
                      ></path>
                    </svg>
                    <p className="text-center w-full" onClick={LoginGoogle}>
                      Login With Google
                    </p>
                  </button>
                  <button
                    type="submit"
                    className="flex items-center bg-cyan-700 hover:bg-cyan-600  text-white font-semibold py-1.5 px-4 rounded w-full mt-2"
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
                </form>
              )}

              {mode === "forgotPassword" && (
                <form
                  onSubmit={handleResetPassword}
                  className="flex flex-col space-y-4 pt-8"
                >
                  <div className="flex flex-col">
                    <label
                      className="text-md mb-2 text-white"
                      htmlFor="reset_email_field"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      id="reset_email_field"
                      className="text-lg border border-gray-700 p-1 rounded bg-gray-700 text-white"
                      ref={resetEmailRef}
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full"
                  >
                    Reset Password
                  </button>
                  <p className="text-center mt-3">
                    <button
                      type="button"
                      className="underline cursor-pointer"
                      onClick={() => setMode("login")}
                    >
                      Back to Login
                    </button>
                  </p>
                </form>
              )}

              {error && <p className="text-rose-500 p-2">{message}</p>}
              <p className="text-center ">
                {mode === "login"
                  ? "Don't have an account? "
                  : "Already have an account? "}
                <span
                  className="underline cursor-pointer"
                  onClick={handleSwitchMode}
                >
                  {mode === "login" ? "Register" : "Login"}
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
