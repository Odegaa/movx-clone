type TRoute = {
  key: string;
  label: string;
}[];

export const getRoutes = () => {
  const routes: TRoute = [
    {
      key: "/",
      label: "Home",
    },
    {
      key: "/trending",
      label: "Trending",
    },
    {
      key: "/discover",
      label: "Discover",
    },
    {
      key: "/tvshows",
      label: "TV Shows",
    },
    {
      key: "/actors",
      label: "Actors",
    },
    {
      key: "/category",
      label: "Category",
    },
    {
      key: "/favorites",
      label: "Favorites",
    },
  ];
  return routes;
};
