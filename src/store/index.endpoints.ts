import { movieApi } from "./movies/movie.api";

export const {
  useGetMovieByIdQuery,
  useGetMovieCreditsQuery,
  useGetMovieKeywordsQuery,
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
