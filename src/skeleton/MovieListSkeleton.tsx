import MovieItemSkeleton from './MovieItemSkeleton';
import { skeletonInfo } from '@/util/constants';

const MovieListSkeleton = ({ type, count }: { type: string; count: number }) => {
  return (
    <>
      <ul className="flex flex-wrap gap-[30px]">
        {Array.from({ length: count }).map((_, index) => (
          <MovieItemSkeleton key={index} skeletonInfo={type === 'all' ? skeletonInfo.all : skeletonInfo.random} />
        ))}
      </ul>
    </>
  );
};

export default MovieListSkeleton;
