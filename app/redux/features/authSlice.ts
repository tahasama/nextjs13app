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

import { auth, db, storage } from "../../firebase";
import { doc, setDoc } from "@firebase/firestore";
import { collection, getDoc, updateDoc } from "firebase/firestore";
import { stat } from "fs";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

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
  async ({ email, password, displayName }: valueProps) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", res.user.uid), {
        displayName: displayName,
        email: email,
        uid: res.user.uid,
        creationTime: res.user.metadata.creationTime,
        lastSignInTime: res.user.metadata.lastSignInTime,
        image: "",
      });

      return { uid: res.user.uid };
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

export const updateUser = createAsyncThunk(
  "saveProject",
  async (value: any) => {
    console.log("🚀 ~ file: authSlice.ts:127 ~ value:", value);
    const object = {
      displayName: value.displayName, // Include the pythonCode field in the object
      bio: value.bio, // Include the pythonCode field in the object
      twitter: value.twitter,
      insta: value.insta,
      github: value.github,
      webSite: value.webSite,
      image: value.image,
    };
    console.log("🚀 ~ file: authSlice.ts:132 ~ object:", object);

    try {
      const res = await updateDoc(
        doc(db, "users", value.uid),
        object // Pass the object containing the pythonCode field as the second argument
      );
      return res;
    } catch (error) {
      console.log("eeeeeeeeeeeeeeeeeeerr", error);
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

export const getOtherUserByUid = createAsyncThunk(
  "getOtherUserByUid",
  async ({ uid }: any) => {
    try {
      const userRef = doc(db, "users", uid);
      const userDoc = await getDoc(userRef);
      if (!userDoc.exists) {
        return { error: "this user do not exist" };
      }
      console.log(
        "🚀 ~ file: authSlice.ts:176 ~ userDoc.data():",
        userDoc.data()
      );
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

///////new
export const uploadImage = createAsyncThunk(
  "uploadImage",
  async ({ image, uid }: any) => {
    console.log("🚀 ~ file: authSlice.ts:204 ~ image, uid :", image, uid);
    const storageRef = ref(storage, uid + ".jpg");
    try {
      await uploadBytesResumable(storageRef, image);
      try {
        const res = await getDownloadURL(storageRef);
        console.log("🚀 ~ file: authSlice.ts:209 ~ res:", res);

        await updateDoc(doc(db, "users", uid), { image: res });
      } catch (error) {}
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
    creationTime: any;
    lastSignInTime: any;
    displayName: string;
    bio: string;
    ouid?: string;
    oemail?: string;
    oimage?: string;
    ocreationTime?: any;
    olastSignInTime?: any;
    odisplayName?: string;
    obio?: string;
    twitter?: string;
    insta?: string;
    github?: string;
    webSite?: string;
    cancelImage?: boolean;
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

  ouid: "",
  oemail: "",
  oimage: "",
  ocreationTime: "",
  olastSignInTime: "",
  odisplayName: "",
  obio: "",
  twitter: "",
  insta: "  ",
  github: "",
  webSite: "",
  cancelImage: false,
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
    updateUserInfos: (state, action) => {
      Object.assign(state, action.payload);
    },
    /////new
    newImage: (state, action) => {
      // state.image = action.payload.image;
      Object.assign(state, action.payload);
    },
    cancelState: (state, action) => {
      state.cancelImage = action.payload.cancelImage;
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
      state.github = action.payload.github;
      state.twitter = action.payload.twitter;
      state.insta = action.payload.insta;
      state.webSite = action.payload.webSite;
    });
    builder.addCase(getOtherUserByUid.fulfilled, (state, action: any) => {
      state.ouid = action.payload.uid;
      state.odisplayName = action.payload.displayName;
      state.oemail = action.payload.email;
      state.ocreationTime = action.payload.creationTime;
      state.olastSignInTime = action.payload.lastSignInTime;
      state.oimage = action.payload.image;
      state.obio = action.payload.bio;
      state.error = action.payload;
      state.github = action.payload.github;
      state.twitter = action.payload.twitter;
      state.insta = action.payload.insta;
      state.webSite = action.payload.webSite;
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
export const {
  updateError,
  saveUser,
  resetUser,
  updateUserInfos,
  newImage,
  cancelState,
} = authSlice.actions;
export default authSlice.reducer;
