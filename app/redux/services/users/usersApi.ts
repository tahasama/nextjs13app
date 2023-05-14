import { User, UserNext } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersNextApi = createApi({
  reducerPath: "usersNextApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_USER_URL,
  }),
  endpoints: (builder) => ({
    register: builder.mutation<User, { email: string; password: string }>({
      query: (body) => ({
        url: "/register",
        method: "POST",
        body,
      }),
    }),
    // Define the login endpoint
    login: builder.mutation<void, { email: string; password: string }>({
      query: (body) => ({
        url: "/login",
        method: "POST",
        body,
      }),
    }),
    // get list of all users
    getUsersNext: builder.query<UserNext[], null>({
      query: () => "/",
    }),
    // get user by id
    getUsersNextById: builder.query<User, { userId: string }>({
      query: ({ userId }) => `/${userId}`,
    }),
    // add a user
    addUsersNext: builder.mutation({
      query: (initialPost) => ({
        url: "/",
        method: "POST",
        // Include the entire post object as the body of the request
        body: JSON.parse(initialPost),
      }),
    }),
    UpdateUsersNext: builder.mutation({
      query: (initialPost) => ({
        url: "/",
        method: "PUT",
        // Include the entire post object as the body of the request
        body: JSON.parse(initialPost),
      }),
    }),
    RemoveUsersNext: builder.mutation({
      query: (initialPost) => ({
        url: "/",
        method: "DELETE",
        // Include the entire post object as the body of the request
        body: JSON.parse(initialPost),
      }),
    }),
  }),
});

export const {
  useGetUsersNextQuery,
  useGetUsersNextByIdQuery,
  useAddUsersNextMutation,
  useUpdateUsersNextMutation,
  useRemoveUsersNextMutation,
  useLoginMutation,
  useRegisterMutation,
} = usersNextApi;
