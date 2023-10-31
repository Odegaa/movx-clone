import { api } from "../index.api";
import { TRoot } from "./upcoming.types";

export const upComingApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUpComingMovies: builder.query<TRoot[], void>({
      query: () => ({
        url: "/movie/upcoming",
      }),
      providesTags: ["films"],
    }),
  }),
});
