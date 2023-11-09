import { IActor, ICategory, IMovieData, IResponse } from "src/types";
import { api } from "../index.api";

export const movieApi = api.injectEndpoints({
  endpoints: (build) => ({
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
    getActors: build.query<IResponse<IActor>, number>({
      query: (page: number) => ({
        url: `person/popular?language=en-US&page=${page}`,
      }),
      providesTags: ["movies"],
    }),
    getCategories: build.query<IResponse<ICategory>, void>({
      query: () => ({ url: "genre/movie/list" }),
      providesTags: ["movies"],
    }),
    getFavorites: build.query<IResponse<IMovieData[]>, number>({
      query: (id: number) => ({ url: `account/${id}/favorite` }),
      providesTags: ["movies"],
    }),
    getDetails: build.query<IResponse<IMovieData[]>, number>({
      query: (id: number) => ({ url: `movie/${id}` }),
      providesTags: ["movies"],
    }),
  }),
});