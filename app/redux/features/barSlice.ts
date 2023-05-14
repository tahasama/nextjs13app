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
    // showHideSection: (state, action) => {
    //   state.showSection.includes(action.payload)
    //     ? state.showSection.pop()
    //     : state.showSection.push(action.pqyloqd);
    // },
  },
});

export const getBarData = (state: userProps) => state.bar;
export const { showHideDropdown } = barSlice.actions;
export default barSlice.reducer;
