import { configureStore } from "@reduxjs/toolkit";

import currentSectionReducer from "./slices/currentSectionSlice";
import shoeSectionsReducer from "./slices/shoeSectionsSlice";

export const store = configureStore({
  reducer: {
    currentSection: currentSectionReducer,
    shoeSections: shoeSectionsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
