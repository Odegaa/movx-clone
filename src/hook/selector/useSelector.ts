import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "src/store";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useSelectors = () => {
  const { movies, shared } = useAppSelector((state) => state);
  return { ...movies, ...shared };
};
