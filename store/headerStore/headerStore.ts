import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IHeaderStore {
  title: string;
}

const initialState: IHeaderStore = {
  title: "",
};

export const headerSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    changeHeaderAction: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeHeaderAction } = headerSlice.actions;

export default headerSlice.reducer;
