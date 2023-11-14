import { IActor, IGenre, IMovieData, IResponse } from "src/types";
import { api } from "../index.api";

export const movieApi = api.injectEndpoints({
  endpoints: (build) => ({
    getMovieById: build.query<IMovieData, number>({
      query: (id: number) => ({
        url: `movie/${id}`,
      }),
      providesTags: ["movies"],
    }),
    getUpcomingMovies: build.query<IResponse<IMovieData[]>, number>({
      query: (page: number) => ({
        url: `movie/upcoming?language=en-US&page=${page}`,
      }),
      providesTags: ["movies"],
    }),
    getTopRatedMovies: build.query<IResponse<IMovieData[]>, number>({
      query: (page: number) => ({
        url: `movie/top_rated?language=en-US&page=${page}`,
      }),
      providesTags: ["movies"],
    }),
    getTrendingMovies: build.query<IResponse<IMovieData[]>, number>({
      query: (page: number) => ({
        url: `trending/movie/day?language=en-US&page=${page}`,
      }),
      providesTags: ["movies"],
    }),
    getDiscoverMovies: build.query<IResponse<IMovieData[]>, number>({
      query: (page: number) => ({
        url: `discover/movie?language=en-US&page=${page}`,
      }),
      providesTags: ["movies"],
    }),
    getPopularMovies: build.query<IResponse<IMovieData[]>, number>({
      query: (page: number) => ({
        url: `movie/popular?language=en-US&page=${page}`,
      }),
      providesTags: ["movies"],
    }),
    getTvShows: build.query<IResponse<IMovieData[]>, number>({
      query: (page = 1) => ({
        url: `discover/tv`,
        params: {
          page,
        },
      }),
      providesTags: ["movies"],
    }),
    getActors: build.query<IResponse<IActor[]>, number>({
      query: (page: number) => ({
        url: `person/popular?language=en-US&page=${page}`,
      }),
      providesTags: ["movies"],
    }),
    getActorById: build.query<IActor, number>({
      query: (id: number) => ({
        url: `person/${id}?language=en-US`,
      }),
      providesTags: ["movies"],
    }),
    getCategories: build.query<IGenre, void>({
      query: () => ({ url: "genre/movie/list" }),
      providesTags: ["movies"],
    }),
    getFavorites: build.query<IResponse<IMovieData[]>, number>({
      query: (id: number) => ({ url: `account/${id}/favorite` }),
      providesTags: ["movies"],
    }),
  }),
});
