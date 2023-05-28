import { combineReducers } from "redux";
import { reviewSlice } from "./slices/review";

const reducer = combineReducers({
  reviews: reviewSlice.reducer,
});

export default reducer;
