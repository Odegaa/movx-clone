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
  MovieDetails,
} from "src/components/screens";
import { ActorDetail } from "src/components/screens/actorDetail/ActorDetail";

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/trending", element: <Trending /> },
  { path: "/discover", element: <Discover /> },
  { path: "/tvshows", element: <TvShows /> },
  { path: "/actors", element: <Actors /> },
  { path: "/category", element: <Category /> },
  { path: "/category/*", element: <Category /> },
  { path: "/favorites", element: <Favorites /> },
  { path: "/upcoming", element: <Upcoming /> },
  { path: "/movie/*", element: <MovieDetails /> },
  { path: "/actor/*", element: <ActorDetail /> },
  { path: "/*", element: <NotFoundPage /> },
];
