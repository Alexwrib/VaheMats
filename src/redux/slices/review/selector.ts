import { RootState } from "../../store";
import { createSelector } from "@reduxjs/toolkit";

const selector = (state: RootState) => state.reviews;

const reviews = createSelector([selector], (state) => state.reviews);

export default { reviews };
