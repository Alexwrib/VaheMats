import { createSlice } from "@reduxjs/toolkit";
import { getInitialState } from "./initialState";
import actions from "./action";
const slice = createSlice({
  name: "review",
  initialState: getInitialState(),
  reducers: actions,
});

export default slice;
