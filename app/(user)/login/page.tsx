"use client";
import React, { useEffect, useRef } from "react";

import {
  getAuthData,
  loginUser,
  loginUserGithub,
  loginUserGoogle,
  updateError,
} from "../../redux/features/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { auth, githubProvider, googleProvider } from "../../firebase";
import { useRouter } from "next/navigation";

const Login = () => {
  const emailRef = useRef<any>(null);
  const passwordRef = useRef<any>(null);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { error, uid, message } = useAppSelector(getAuthData);

  if (
    typeof window !== "undefined" &&
    error &&
    error.code === "auth/account-exists-with-different-credential"
  ) {
    dispatch(
      updateError(
        "Email is used by another Provider (ex: Google) try connecting with a different one"
      )
    );
  }

  useEffect(() => {
    uid && router.back();
  }, [uid]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const serializableUser = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      // other serializable properties
    };
    try {
      dispatch(updateError(""));
      dispatch(loginUser(serializableUser));
    } catch (err) {
      dispatch(updateError("failed to login, please try again"));
    }
  };

  const LoginGoogle = () => {
    dispatch(
      loginUserGoogle({
        googleProvider: googleProvider,
      })
    );
  };
  const LoginGithub = () => {
    dispatch(
      loginUserGithub({
        githubProvider: githubProvider,
      })
    );
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-950">
      <div className="bg-slate-800 shadow-md rounded-xl px-8 pt-6 pb-8 mb-4 flex flex-col w-full md:w-3/4 lg:w-1/3">
        <h1 className="text-3xl font-bold mb-6 text-white">Login</h1>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div className="flex flex-col">
            <label className="text-lg mb-2 text-white" htmlFor="email_field">
              Email address
            </label>
            <input
              type="email"
              id="email_field"
              className="text-lg border border-gray-700 p-2 rounded bg-gray-700 text-white"
              ref={emailRef}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg mb-2 text-white" htmlFor="password_field">
              Password
            </label>
            <input
              type="password"
              id="password_field"
              className="text-lg border border-gray-700 p-2 rounded bg-gray-700 text-white"
              ref={passwordRef}
            />
          </div>{" "}
          <button
            type="submit"
            className="flex bg-blue-700 hover:bg-blue-600  text-white font-bold py-2 px-4 rounded w-full "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            <p className="text-center w-full">Login</p>
          </button>
        </form>
        <button
          type="submit"
          className="flex items-center bg-orange-800 hover:bg-red-700  text-white font-bold py-2 px-4 rounded w-full mt-5"
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
          className="flex items-center bg-cyan-700 hover:bg-cyan-600  text-white font-bold py-2 px-4 rounded w-full mt-5"
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
        {error && <p className="text-rose-500 p-2">{message}</p>}
      </div>
    </div>
  );
};

export default Login;