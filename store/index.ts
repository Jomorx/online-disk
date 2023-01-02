import { configureStore } from "@reduxjs/toolkit";
import countStore from "./countStore/countStore";
import headerStore from "./headerStore/headerStore";

export const store = configureStore({
  reducer: {
    countStore,
    headerStore,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
