import React, { FC, useEffect, useState } from "react";
import { dispatch } from "../../redux/hooks";
import { reviewMiddleware, reviewSelector } from "../../redux/slices/review";
import { useSelector } from "react-redux";
import { en } from "../../locales/en/translation";
import SingleReview from "./SingleReview";

const Reviews: FC = () => {
  const [showingReviews, setShowingReviews] = useState<any>([]);
  const [count, setCount] = useState<number>();
  const reviews = useSelector(reviewSelector.reviews);

  useEffect(() => {
    dispatch(reviewMiddleware.handleChangeLanguage("en"));
    setCount(34);
  }, []);

  useEffect(() => {
    if (reviews) {
      setShowingReviews(Object.values(reviews).splice(0, count));
    }
  }, [count, reviews]);

  if (reviews) {
    return (
      <div>
        <select>
          <option
            onClick={() => {
              setCount(34);
            }}
          >
            34
          </option>
          <option
            onClick={() => {
              setCount(17);
            }}
          >
            17
          </option>
          <option
            onClick={() => {
              setCount(5);
            }}
          >
            5
          </option>
        </select>
        {showingReviews.map(
          (el: { name: string; review: string; date: string }) => (
            <SingleReview name={el.name} review={el.review} date={el.date} />
          )
        )}
      </div>
    );
  }

  return <div>Loading...</div>;
};

export default Reviews;
