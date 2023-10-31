import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IRoot, TRoot } from "./upcoming.types";

const initialState: IRoot = {
  data: null,
};

const upcomingSlice = createSlice({
  name: "upcoming",
  initialState,
  reducers: {
    setUpcoming(state, { payload }: PayloadAction<TRoot | null>) {
      state.data = payload;
    },
  },
});
export const { reducer, actions } = upcomingSlice;
