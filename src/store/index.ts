import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { api } from "./index.api";
import { reducer as shared } from "./shared/shared.slice";
import { reducer as upcoming } from "./home/upcoming.slice";

export const store = configureStore({
  reducer: {
    shared,
    upcoming,
    [api.reducerPath]: api.reducer,
  },
  devTools: import.meta.env.MODE !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
setupListeners(store.dispatch);
