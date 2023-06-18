import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import projectsReducer from "./features/projectSlice";
import barReducer from "./features/barSlice";
import sideBarReducer from "./features/sideBarSlice";

import { usersNextApi } from "./services/users/usersApi";

export const store = configureStore({
  reducer: {
    // reducer of local state
    authUser: authReducer,
    proj: projectsReducer,
    bar: sideBarReducer,
    // reducer of API Created in App in Api directory
    [usersNextApi.reducerPath]: usersNextApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      // add all api here
      usersNextApi.middleware,
    ]),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
