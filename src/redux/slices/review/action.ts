import { SliceReducers } from "../../store";
import { IReviewProps } from "../../../types/redux/review";

const actions: SliceReducers<IReviewProps> = {
  setError(state, action) {
    console.log("in action");
    state.error = action.payload;
  },
  setReviews(state, action) {
    state.reviews = action.payload;
  },
};

export default actions;
