"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  getAuthData,
  registerUser,
  updateError,
} from "@/app/redux/features/authSlice";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { useRouter } from "next/navigation";

const Register = () => {
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
    uid && (router.push("/profile"), dispatch(updateError("")));
  }, [uid]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const serializableUser = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      displayName: displayNameRef.current.value,

      // other serializable properties
    };
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      dispatch(updateError("Passwords do not match, please try again"));
    } else {
      try {
        dispatch(updateError(""));
        setLoading(true);
        dispatch(registerUser(serializableUser));
        setLoading(false);
      } catch (err) {
        dispatch(updateError("failed to create account, please try again"));
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-950">
      <div className="bg-slate-800 shadow-md rounded-xl px-8 pt-6 pb-8 mb-4 flex flex-col w-full md:w-3/4 lg:w-1/3">
        <h1 className="text-3xl font-bold mb-6 text-white">Register</h1>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div className="flex flex-col">
            <label className="text-lg mb-2 text-white" htmlFor="username_field">
              Username
            </label>
            <input
              type="text"
              id="username_field"
              className="text-lg border border-gray-700 p-2 rounded bg-gray-700 text-white"
              ref={displayNameRef}
            />
          </div>
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
          <div className="flex flex-col">
            <label
              className="text-lg mb-2 text-white"
              htmlFor="confirm_password_field"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm_password_field"
              className="text-lg border border-gray-700 p-2 rounded bg-gray-700 text-white"
              ref={passwordConfirmRef}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded w-full"
          >
            Register
          </button>
          {error && <div className="text-white">{message}</div>}
        </form>
      </div>
    </div>
  );
};

export default Register;
