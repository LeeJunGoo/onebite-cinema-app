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
