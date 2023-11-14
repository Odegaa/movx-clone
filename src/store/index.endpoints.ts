import { movieApi } from "./movies/movie.api";

export const {
  useGetMovieByIdQuery,
  useGetUpcomingMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetTrendingMoviesQuery,
  useGetDiscoverMoviesQuery,
  useGetPopularMoviesQuery,
  useGetTvShowsQuery,
  useGetActorsQuery,
  useGetActorByIdQuery,
  useGetCategoriesQuery,
  useGetFavoritesQuery,
} = movieApi;
