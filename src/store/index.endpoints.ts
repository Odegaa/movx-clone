import { movieApi } from "./movies/movie.api";

export const {
  useGetUpcomingMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetTrendingMoviesQuery,
  useGetDiscoverMoviesQuery,
  useGetPopularMoviesQuery,
  useGetActorsQuery,
  useGetCategoriesQuery,
  useGetFavoritesQuery,
  useGetDetailsQuery,
} = movieApi;
