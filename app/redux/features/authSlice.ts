import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

import { auth, db } from "../../firebase";
import { doc, setDoc } from "@firebase/firestore";
import { collection, getDoc } from "firebase/firestore";

const USER_URL: any = process.env.REACT_APP_USER_URL;

interface valueProps {
  email: string;
  password: string;

  displayName?: string;
  // useremail?: string;
  // username?: string;
  // userimage?: string;
}

interface providers {
  googleProvider?: GoogleAuthProvider;
  githubProvider?: GithubAuthProvider;
}

export const registerUser = createAsyncThunk(
  "registerUser",
  async ({ email, password }: valueProps) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", res.user.uid), {
        displayName: res.user?.displayName,
        email: res.user?.email,
        uid: res.user.uid,
        creationTime: new Date(),
        lastSignInTime: "",
        image: "",
      });

      return {
        displayName: res.user?.displayName,
        email: res.user?.email,
        uid: res.user.uid,
        creationTime: new Date(),
        lastSignInTime: "",
        image: "",
      };
    } catch (error: any) {
      return error;
    }
  }
);

export const loginUserGoogle = createAsyncThunk(
  "loginUserGoogle",
  async ({ googleProvider }: providers) => {
    if (googleProvider) {
      try {
        googleProvider.addScope("email");
        const res = await signInWithPopup(auth, googleProvider);
        try {
          await setDoc(doc(db, "users", res.user.uid), {
            displayName: res.user?.displayName,
            email: res.user?.email,
            uid: res.user.uid,
            creationTime: res.user.metadata.creationTime,
            lastSignInTime: res.user.metadata.lastSignInTime,
            image: res.user.photoURL,
          });
        } catch (error: any) {
          return error;
        }
        return {
          uid: res.user.uid,
        };
      } catch (error: any) {}
    }
  }
);
export const loginUserGithub = createAsyncThunk(
  "loginUserGithub",
  async ({ githubProvider }: providers) => {
    if (githubProvider) {
      try {
        githubProvider.addScope("email");
        const res = await signInWithPopup(auth, githubProvider);
        try {
          await setDoc(doc(db, "users", res.user.uid), {
            displayName: res.user?.displayName,
            email: res.user?.email,
            uid: res.user.uid,
            creationTime: res.user.metadata.creationTime,
            lastSignInTime: res.user.metadata.lastSignInTime,
            image: res.user.photoURL,
          });
        } catch (error: any) {
          return error;
        }
        return {
          uid: res.user.uid,
        };
      } catch (error: any) {
        return error;
      }
    }
  }
);

export const loginUser = createAsyncThunk(
  "loginUser",
  async ({ email, password }: valueProps) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);

      return {
        uid: res.user.uid,
      };
    } catch (error: any) {
      return error;
    }
  }
);

export const getUserByUid = createAsyncThunk(
  "getUserByUid",
  async ({ uid }: any) => {
    try {
      const userRef = doc(db, "users", uid);
      const userDoc = await getDoc(userRef);
      if (!userDoc.exists) {
        return { error: "this user do not exist" };
      }
      return userDoc.data();
    } catch (error) {
      return error;
    }
  }
);

export const resetPassword = createAsyncThunk(
  "resetPassword",
  async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error: any) {
      return error;
    }
  }
);

export interface userProps {
  authUser: {
    uid: string;
    email: string;
    password: string;
    confirmPassword: string;
    error: { code: string; message: string };
    message: string;
    image: string;
    creationTime: string;
    lastSignInTime: string;
    displayName: string;
    bio: string;
  };
}

export const userInitialState = {
  uid: "",
  email: "",
  password: "",
  confirmPassword: "",
  error: { code: "", message: "" },
  message: "",
  image: "",
  creationTime: "",
  lastSignInTime: "",
  displayName: "",
  bio: "",
};

export const authSlice = createSlice({
  name: "user-redux",
  initialState: userInitialState,
  reducers: {
    updateError: (state, action) => {
      state.message = action.payload;
      //   state.error.code = action.payload;
    },
    saveUser: (state, action) => {
      state.uid = action.payload.uid;
      // state.displayName = action.payload.displayName;
      // state.email = action.payload.email;
      state.creationTime = action.payload.metadata.creationTime;
      state.lastSignInTime = action.payload.metadata.lastSignInTime;
      state.error = action.payload;
      // state.image = action.payload.photoURL;
    },
    resetUser: (state, action) => {
      Object.assign(state, action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserByUid.fulfilled, (state, action: any) => {
      state.uid = action.payload.uid;
      state.displayName = action.payload.displayName;
      state.email = action.payload.email;
      state.creationTime = action.payload.creationTime;
      state.lastSignInTime = action.payload.lastSignInTime;
      state.image = action.payload.image;
      state.bio = action.payload.bio;
      state.error = action.payload;
    });
    builder.addCase(registerUser.fulfilled, (state, action: any) => {
      state.uid = action.payload.uid;
      state.error = action.payload;
    });

    builder.addCase(loginUser.fulfilled, (state, action: any) => {
      state.uid = action.payload.uid;
      state.error = action.payload;
      // state.err.message = action.payload.message;
    });
    builder.addCase(loginUserGoogle.fulfilled, (state, action: any) => {
      state.uid = action.payload.uid;
      state.error = action.payload;
      // state.err.message = action.payload.message;
    });
    builder.addCase(loginUserGithub.fulfilled, (state, action: any) => {
      state.uid = action.payload.uid;
      state.error = action.payload;
      // state.err.message = action.payload.message;
    });
  },
});

export const getAuthData = (state: userProps) => state.authUser;
export const { updateError, saveUser, resetUser } = authSlice.actions;
export default authSlice.reducer;
