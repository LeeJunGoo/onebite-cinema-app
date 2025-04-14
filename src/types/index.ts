export type MovieData = {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  releaseDate: string;
  company: string;
  genres: string[];
  runtime: number;
  posterImgUrl: string;
};

export type SkeletonProps = { container: string; img: { width: number; height: number } };

export type ReviewData = {
  id: number;
  content: string;
  author: string;
  createdAt: string;
  movieId: number;
};

export type FetchReviewProps = Pick<ReviewData, 'movieId' | 'author' | 'content'>;

export type FetchProps = {
  type: string;
  q?: string;
  id?: string;
};
