import { getRoutes } from "src/components/layouts/routes";

export const useLabel = (path: string) =>
  getRoutes().find((route) => route.key === path)?.label;
