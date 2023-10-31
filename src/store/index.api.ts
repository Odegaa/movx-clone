import { baseUrl } from "src/config/baseUrl";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "films",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  refetchOnFocus: true,
  tagTypes: ["films"],
  endpoints: (builder) => ({
    default: builder.query({
      query: () => "default",
    }),
  }),
});
