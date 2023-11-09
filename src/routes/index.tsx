import {
  Actors,
  Home,
  NotFoundPage,
  Trending,
  Discover,
  TvShows,
  Category,
  Upcoming,
  Favorites,
} from "src/components/screens";

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/trending", element: <Trending /> },
  { path: "/discover", element: <Discover /> },
  { path: "/tvshows", element: <TvShows /> },
  { path: "/actors", element: <Actors /> },
  { path: "/category", element: <Category /> },
  { path: "/favorites", element: <Favorites /> },
  { path: "/upcoming", element: <Upcoming /> },
  { path: "/*", element: <NotFoundPage /> },
];
