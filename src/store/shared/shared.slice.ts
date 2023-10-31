import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

import { ISharedTypes } from "./shared.types";

const mode = Cookies.get("mode");
const initialState: ISharedTypes = {
  mode: mode === "dark" ? "dark" : "light",
};

const sharedSlice = createSlice({
  name: "shared",
  initialState,
  reducers: {
    toggleMode(state, { payload }: PayloadAction<"dark" | "light">) {
      payload === "light"
        ? Cookies.set("mode", (state.mode = "light"))
        : Cookies.set("mode", (state.mode = "dark"));
    },
  },
});

export const { reducer, actions } = sharedSlice;
