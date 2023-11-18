import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";

import { reducer as shared } from "src/store/shared/shared.slice";
import { reducer as movies } from "src/store/movies/movie.slice";

const rootActions = { ...shared, ...movies };
export const useAction = () => {
  const dispatch = useDispatch();
  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
