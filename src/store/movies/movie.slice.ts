import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMovieData, IMovie } from "src/types";

const initialState: IMovie = {
  movie: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovie(state, { payload }: PayloadAction<IMovieData | null>) {
      state.movie = payload;
    },
  },
});

export const { reducer, actions } = movieSlice;
