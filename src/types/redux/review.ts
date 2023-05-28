export interface IReviewProps {
  error: Error | null;
  reviews: any;
}

export interface IClient {
  name: string;
  review: string;
  date: string;
}
