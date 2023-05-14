"use client";
import React from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useAppDispatch } from "./redux/hooks";
import { getUserByUid, saveUser } from "./redux/features/authSlice";

const AuthProvider = ({ children }: any) => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user !== null) {
        dispatch(getUserByUid({ uid: user.uid }));
      } else {
        dispatch(saveUser(null));
      }
    });

    return () => unsubscribe();
  }, []);

  //   return <>{loading ? <div>Loading...</div> : <>{children}</>}</>;
  return <>{children}</>;
};

export default AuthProvider;
