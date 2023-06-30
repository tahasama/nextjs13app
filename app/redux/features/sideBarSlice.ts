import { createSlice } from "@reduxjs/toolkit";

export interface sideBarProps {
  sideBar: {
    home: boolean;
    newP: boolean;
    save: boolean;
    open: boolean;
    delete: boolean;
    edit: boolean;
    code: boolean;
    star: boolean;
    react: boolean;
    data: boolean;
    python: boolean;
    isedit: boolean;
  };
}
export const sideBArInitialState = {
  home: false,
  newP: false,
  save: false,
  open: false,
  delete: false,
  edit: false,
  code: false,
  star: false,
  react: false,
  data: false,
  python: false,
  isedit: false,
};
export const sideBarSlice = createSlice({
  name: "bar-redux",
  initialState: sideBArInitialState,
  reducers: {
    barState: (state, action) => {
      state.newP = action.payload;
    },
    iseditState: (state, action) => {
      state.isedit = action.payload;
    },
  },
});

export const getSideBarData = (state: sideBarProps) => state.sideBar;
export const { barState, iseditState } = sideBarSlice.actions;

export default sideBarSlice.reducer;
