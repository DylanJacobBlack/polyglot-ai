import { configureStore } from "@reduxjs/toolkit";
import lessonsReducer from "../slices/lessonsSlice";

export const store = configureStore({
  reducer: {
    lessons: lessonsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
