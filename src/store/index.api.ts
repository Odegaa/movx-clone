import { baseUrl } from "src/config/baseUrl";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "films",
  baseQuery: fetchBaseQuery({
    baseUrl,
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZDI1NTFjZjMzZjdiMGU4YmQ3NjBiMDczOTRiODAwYiIsInN1YiI6IjY1MzhhYTQ4MGZiMTdmMDExYjEzZGQ2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3GetCvf3C2IppxdIBQNtiQH2oFbGeEt7Fz3-1sJiGVc",
    },
  }),
  refetchOnFocus: true,
  tagTypes: ["films"],
  endpoints: (builder) => ({
    default: builder.query({
      query: () => ({ url: "default", method: "get" }),
    }),
  }),
});
