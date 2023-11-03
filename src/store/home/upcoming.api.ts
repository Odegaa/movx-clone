import { api } from "../index.api";
import { Result } from "./upcoming.types";

export const upComingApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUpComingMovies: builder.query<Result[], void>({
      query: () => ({
        url: "/movie/upcoming",
      }),
      providesTags: ["films"],
    }),
  }),
});
