import React from "react";

export interface ISingleReviewProps {
  name: string;
  review: string;
  date: string;
}
const SingleReview = ({ name, review, date }: ISingleReviewProps) => {
  return (
    <div key={name}>
      <h5>{name}</h5>
      <p>{review}</p>
      <p>{date}</p>
    </div>
  );
};

export default SingleReview;
