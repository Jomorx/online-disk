import { configureStore } from "@reduxjs/toolkit";
import countStore from "./countStore/countStore";

export const store = configureStore({
  reducer: {
    countStore,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
