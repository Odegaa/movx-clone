export const baseUrl = "https://api.themoviedb.org/3/";

const id = 2;

export const apiS = [
  "https://api.themoviedb.org/3/movie/upcoming", // Upcoming Movies == Home
  "https://api.themoviedb.org/3/movie/top_rated", // Top Rated Movies == Home

  "https://api.themoviedb.org/3/trending/movie/day", // Trending Movies == Trending

  "https://api.themoviedb.org/3/discover/movie", // Discover Movies == Discover
  "https://api.themoviedb.org/3/movie/popular", // Popular Movies == Discover
  "https://api.themoviedb.org/3/movie/upcoming", // Upcoming Movies == Discover
  "https://api.themoviedb.org/3/movie/top_rated", // Top Rated Movies == Discover

  "https://api.themoviedb.org/3/person/popular", // Popular People == Actors

  "https://api.themoviedb.org/3/genre/movie/list", // Category List == Category
  "https://api.themoviedb.org/3/account/20618736/favorite", // Favorites == Favorites

  `https://api.themoviedb.org/3/movie/${id}`, // DETAILS == DETAIL FILM
];
