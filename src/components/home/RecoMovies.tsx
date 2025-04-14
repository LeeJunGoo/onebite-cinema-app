import fetchMovies from '@/lib/fetchMovies';
import { MovieData } from '@/types';
import { delay } from '@/util/delay';
import MovieList from './MovieList';

const RecoMovies = async () => {
  await delay(2000);
  const randomMovies = await fetchMovies<MovieData[]>({ type: 'random' });

  if (!randomMovies) return <div>영화 정보를 불러오지 못했습니다.</div>;
  return (
    <>
      <MovieList movieList={randomMovies!} className="w-[calc(33.3%-20px)]" />
    </>
  );
};

export default RecoMovies;
