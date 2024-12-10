import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserState } from "../stores/user.store";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (builder) => ({
    getUserDetail: builder.query<UserState, string>({
      query: (id) => `user/${id}`,
    }),
  }),
});

export const { useGetUserDetailQuery } = userApi;
