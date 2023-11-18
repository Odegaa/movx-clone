import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "src/config/baseUrl";

export const api = createApi({
  reducerPath: "movies",
  baseQuery: fetchBaseQuery({
    baseUrl,
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZDI1NTFjZjMzZjdiMGU4YmQ3NjBiMDczOTRiODAwYiIsInN1YiI6IjY1MzhhYTQ4MGZiMTdmMDExYjEzZGQ2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3GetCvf3C2IppxdIBQNtiQH2oFbGeEt7Fz3-1sJiGVc",
    },
  }),
  refetchOnFocus: true,
  tagTypes: ["movies"],
  endpoints: (build) => ({
    getMovies: build.query({
      query: () => "default",
    }),
  }),
});
