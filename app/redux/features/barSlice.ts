import { createSlice } from "@reduxjs/toolkit";

export interface userProps {
  bar: {
    dropDown: boolean;
    // showSection: any[];
  };
}

export const userInitialState = {
  dropDown: false,
  // showSection: [],
};

export const barSlice = createSlice({
  name: "user-redux",
  initialState: userInitialState,
  reducers: {
    showHideDropdown: (state, action) => {
      state.dropDown = action.payload;
    },
  },
});

export const getBarData = (state: userProps) => state.bar;
export const { showHideDropdown } = barSlice.actions;
export default barSlice.reducer;
